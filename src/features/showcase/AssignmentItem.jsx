import { useState } from "react";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import styled, { css } from "styled-components";
import useDeleteAssignment from "./useDeleteAssignment";
import useUpdateStatus from "./useUpdateStatus";
import useUpdateUrgent from "./useUpdateUrgent";

import { HiXMark } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import relativeTime from "dayjs/plugin/relativeTime";
import Urgent from "../../ui/Urgent";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { formatDate } from "../../../utils/formatDates";

dayjs.extend(relativeTime);

const statusColor = {
  done: "green",
  notDone: "red",
  working: "yellow",
};

const Date = styled.p`
  color: var(--color-grey-600);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const DaysLeft = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);
  font-weight: 500;
`;

const Course = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-500);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StyledCheckbox = styled.input`
  accent-color: var(--color-brand-500);
  cursor: pointer;

  transform-origin: 0;
  height: 2rem;
  width: 2rem;
  outline-offset: 2px;

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledAssignmentItem = styled.div`
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-800);
  background-color: var(--color-${(props) => props.type}-200);
  position: relative;
  overflow: hidden;

  padding: 1rem;
  border: 0.5px solid var(--color-${(props) => props.type}-500);
  border-left: 6px solid var(--color-${(props) => props.type}-500);
`;

function AssignmentItem({ assignment }) {
  const {
    id: assignmentId,
    name,
    dueDate,
    status,
    isUrgent,
    course,
  } = assignment;

  const [isUrgentStatus, setIsUrgentStatus] = useState(isUrgent);
  const navigate = useNavigate();

  const { isDeleting, deleteAssignment } = useDeleteAssignment();
  const { updateStatus } = useUpdateStatus();
  const { updateUrgent } = useUpdateUrgent();

  function handleEditIsUrgent() {
    setIsUrgentStatus((isUrgentStatus) => !isUrgentStatus);
    updateUrgent({ isUrgent: !isUrgentStatus, id: assignmentId });
  }

  const daysLeft = dayjs(dueDate).fromNow();

  return (
    <StyledAssignmentItem type={statusColor[status]}>
      <Row direction="horizontal">
        <Row responsive="true">
          <Heading as="h3">{name}</Heading>
          <DaysLeft>{daysLeft}</DaysLeft>
        </Row>

        <button
          disabled={isDeleting}
          onClick={() => deleteAssignment(assignmentId)}
        >
          <HiXMark />
        </button>
      </Row>

      <Date>Due date: {formatDate(dueDate)}</Date>
      <Course>{course}</Course>
      {isUrgent && status !== "done" ? <Urgent /> : ""}

      <CheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          checked={isUrgentStatus}
          onChange={handleEditIsUrgent}
          disabled={status === "done"}
        />
        <span> Is this task urgent ?</span>
      </CheckboxContainer>

      <ButtonGroup>
        <Button
          bgcolor={statusColor[status]}
          value="done"
          onClick={(e) =>
            updateStatus({ status: e.target.value, id: assignmentId })
          }
        >
          Done
        </Button>
        <Button
          bgcolor={statusColor[status]}
          value="working"
          onClick={(e) =>
            updateStatus({ status: e.target.value, id: assignmentId })
          }
        >
          Working
        </Button>
        <Button
          bgcolor={statusColor[status]}
          value="notDone"
          onClick={(e) =>
            updateStatus({ status: e.target.value, id: assignmentId })
          }
        >
          Not-done
        </Button>
        <Button
          bgcolor={statusColor[status]}
          onClick={() => navigate(`/showcase/${assignmentId}`)}
        >
          Details
        </Button>
      </ButtonGroup>
    </StyledAssignmentItem>
  );
}

export default AssignmentItem;
