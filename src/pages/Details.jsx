import { useNavigate } from "react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { useDetails } from "../features/details/useDetails";
import { HiArrowUturnDown } from "react-icons/hi2";

import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";
import { formatDate } from "../../utils/formatDates";

dayjs.extend(relativeTime);

const statusColor = {
  done: "green",
  notDone: "red",
  working: "yellow",
};

const StyledDetails = styled.div`
  box-shadow: var(--shadow-md);

  margin-top: 2rem;
`;

const DetailsTitle = styled.div`
  color: var(--color-grey-0);
  background-color: var(--color-brand-500);

  padding: 1rem 4rem;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
`;

const DetailsDescription = styled.div`
  background-color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.6rem 4rem;
  border-bottom-left-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
`;

const DescriptionTitle = styled.span`
  font-weight: 700;
`;

const Description = styled.span`
  color: var(--color-grey-500);

  padding-left: 1.6rem;
  font-weight: 500;
`;

const DetailsStatus = styled.div`
  background-color: var(--color-${(props) => props.type}-200);
  box-shadow: var(--shadow-sm);

  border-radius: var(--border-radius-md);
  font-weight: 700;
  padding: 1rem 4rem;
`;

const CreatedDate = styled.p`
  color: var(--color-grey-400);

  font-size: 1.2rem;
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

  if (isLoading) return <p>Loading...</p>;
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
      <Row direction={"horizontal"}>
        <Heading as="h1">
          Assignment #{assignmentId} {isUrgent && <Urgent2>Urgent</Urgent2>}
        </Heading>
        <ButtonText onClick={() => navigate("/showcase")}>
          &larr; Back
        </ButtonText>
      </Row>

      <StyledDetails>
        <DetailsTitle>
          <Row responsive="true">
            <Heading as="h3">
              <HiArrowUturnDown />
              &nbsp;&nbsp;&nbsp;{daysLeft}
            </Heading>
            <p>Due date: {formatDate(dueDate)}</p>
          </Row>
        </DetailsTitle>

        <DetailsDescription>
          <div>
            <DescriptionTitle>👉 Name &rarr;</DescriptionTitle>
            <Description>&bull; {name}</Description>
          </div>
          <div>
            <DescriptionTitle>📚 Course &rarr;</DescriptionTitle>
            <Description>&bull; {course}</Description>
          </div>
          <div>
            <DescriptionTitle>💬 Observations &rarr;</DescriptionTitle>
            <Description>
              &bull; {description ? description : "~ No observations"}
            </Description>
          </div>
          <ButtonText>
            {file.includes("undefined") ? (
              <p>No files attached</p>
            ) : (
              <a href={file}>Download your file</a>
            )}
          </ButtonText>
          <DetailsStatus type={statusColor[status]}>
            {status === "done"
              ? "I already done this assignment"
              : status === "working"
              ? "I am working on this assignment"
              : "I have to work on this assignment"}
          </DetailsStatus>
          <CreatedDate>Created at: {formatDate(created_at)}</CreatedDate>
        </DetailsDescription>
      </StyledDetails>
    </>
  );
}

export default Details;
