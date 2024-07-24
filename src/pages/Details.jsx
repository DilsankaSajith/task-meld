import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { useDetails } from '../features/details/useDetails';

import ButtonText from '../ui/ButtonText';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import styled from 'styled-components';
import { formatDate } from '../../utils/formatDates';
import Spinner from '../ui/Spinner';

dayjs.extend(relativeTime);

const statusColor = {
  done: 'green',
  notDone: 'red',
  working: 'yellow',
};

const StyledDetails = styled.div`
  box-shadow: var(--shadow-md);
  margin-top: 4rem;
`;

const DetailsTitle = styled.div`
  color: var(--color-grey-0);
  background-color: var(--color-brand-500);

  padding: 1.5rem 4rem;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
`;

const DueDate = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
`;

const DetailsDescription = styled.div`
  background-color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
  border-bottom-left-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
`;

const DescriptionTitle = styled.span`
  font-weight: 700;
`;

const Description = styled.span`
  color: var(--color-grey-500);

  padding-left: 2rem;
  font-weight: 500;
`;

const DetailsStatus = styled.div`
  background-color: var(--color-${(props) => props.type}-200);
  box-shadow: var(--shadow-sm);

  border-radius: var(--border-radius-md);
  font-weight: 700;
  padding: 2rem 4rem;
`;

const CreatedDate = styled.p`
  color: var(--color-grey-400);

  font-size: 1.4rem;
  margin-left: auto;
`;

const Urgent2 = styled.span`
  background-color: var(--color-red-200);
  box-shadow: var(--shadow-md);
  text-transform: uppercase;

  border-radius: var(--border-radius-xl);
  font-size: 1.4rem;
  padding: 0.25rem 1rem;
  margin-left: 1rem;
`;

function Details() {
  const { isLoading, assignment, error } = useDetails();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  const {
    id: assignmentId,
    created_at,
    name,
    dueDate,
    description,
    status,
    file,
    isUrgent,
    course,
  } = assignment;

  const daysLeft = dayjs(dueDate).fromNow();

  return (
    <>
      <Row direction={'horizontal'}>
        <Heading as="h1">
          Assignment #{assignmentId} {isUrgent && <Urgent2>Urgent</Urgent2>}
        </Heading>
        <ButtonText onClick={() => navigate('/showcase')}>
          &larr; Back
        </ButtonText>
      </Row>

      <StyledDetails>
        <DetailsTitle>
          <Row responsive="true">
            <Heading as="h3">&nbsp;&nbsp;&nbsp;{daysLeft}</Heading>
            <DueDate>Due date: {formatDate(dueDate)}</DueDate>
          </Row>
        </DetailsTitle>

        <DetailsDescription>
          <div>
            <DescriptionTitle>👉 Name &nbsp;&rarr;</DescriptionTitle>
            <Description>&bull; {name}</Description>
          </div>
          <div>
            <DescriptionTitle>📚 Course &nbsp;&rarr;</DescriptionTitle>
            <Description>&bull; {course}</Description>
          </div>
          <div>
            <DescriptionTitle>💬 Observations &nbsp;&rarr;</DescriptionTitle>
            <Description>
              &bull; {description ? description : '~ No observations'}
            </Description>
          </div>
          <ButtonText>
            {file.includes('undefined') ? (
              <p>No files attached</p>
            ) : (
              <a href={file}>Download your file</a>
            )}
          </ButtonText>
          <DetailsStatus type={statusColor[status]}>
            {status === 'done'
              ? 'I already done this assignment'
              : status === 'working'
              ? 'I am working on this assignment'
              : 'I have to work on this assignment'}
          </DetailsStatus>
          <CreatedDate>Created at: {formatDate(created_at)}</CreatedDate>
        </DetailsDescription>
      </StyledDetails>
    </>
  );
}

export default Details;
