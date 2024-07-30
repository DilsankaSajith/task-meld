import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import Heading from './Heading';
import FlexX from './FlexX';
import useAssignments from '../features/showcase/useAssignments';
import Spinner from './Spinner';
import Emoji from './Emoji';
import { formatDate } from '../../utils/formatDates';
import Row from './Row';
import ProgressItem from './ProgressItem';

function getAssignmentCount(assignments, status) {
  const doneAssignments = assignments.filter(
    (assignment) => assignment.status === status
  );
  return doneAssignments.length;
}

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1rem 3.6rem;

  @media (max-width: 53.125em) {
    padding: 1rem 3rem;
  }
`;

const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3.2rem;

  @media (max-width: 53.125em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Header() {
  const { assignments, isLoading } = useAssignments();
  if (isLoading) return <Spinner />;

  const countAll = assignments.length;
  const countDone = getAssignmentCount(assignments, 'done');
  const countWorking = getAssignmentCount(assignments, 'working');
  const countNotDone = getAssignmentCount(assignments, 'notDone');

  const donePercentage = Math.round((countDone / countAll) * 100);
  const notDonePercentage = Math.round(100 - donePercentage);

  const now = new Date();
  const hours = now.getHours();
  const period = hours >= 12 ? 'PM' : 'AM';

  console.log(period);

  return (
    <StyledHeader>
      <Row direction="horizontal">
        <Heading as="h4">
          <FlexX>
            Good {period === 'AM' ? 'Morning! ' : 'Evening! '}{' '}
            <Emoji src="/emojis/emoji-star-struck.png" />
          </FlexX>
        </Heading>
        <Logout />
      </Row>
      <span>It's {formatDate(Date.now())}</span>

      <ProgressContainer>
        <ProgressItem label="Total tasks" taskCount={countAll} color="brand" />
        <ProgressItem
          label="Completed tasks"
          taskCount={countDone}
          color="green"
          percentage={donePercentage}
        />
        <ProgressItem
          label="Not-completed tasks"
          taskCount={countNotDone}
          color="red"
          percentage={notDonePercentage}
        />
        <ProgressItem
          label="Working tasks"
          taskCount={countWorking}
          color="yellow"
        />
      </ProgressContainer>
    </StyledHeader>
  );
}

export default Header;
