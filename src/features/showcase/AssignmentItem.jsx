import { useState } from 'react';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled from 'styled-components';
import useDeleteAssignment from './useDeleteAssignment';
import useUpdateStatus from './useUpdateStatus';
import useUpdateUrgent from './useUpdateUrgent';

import { HiXMark } from 'react-icons/hi2';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Urgent from '../../ui/Urgent';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';

import { formatDate } from '../../../utils/formatDates';
import Spinner from '../../ui/Spinner';

dayjs.extend(relativeTime);

const statusColor = {
  done: 'green',
  notDone: 'red',
  working: 'yellow',
};

const Date = styled.p`
  font-weight: 500;
  margin-bottom: 1.8rem;
`;

const DaysLeft = styled.span`
  font-size: 1.8rem;
  color: var(--color-grey-700);
  font-weight: 500;
`;

const Course = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
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

  padding: 2rem;
  border: 0.5px solid var(--color-${(props) => props.type}-500);
  border-left: 10px solid var(--color-${(props) => props.type}-500);
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

  const navigate = useNavigate();

  const [isUrgentStatus, setIsUrgentStatus] = useState(isUrgent);
  const { isDeleting, deleteAssignment } = useDeleteAssignment();
  const { isUpdatingStatus, updateStatus } = useUpdateStatus();
  const { isUpdatingUrgent, updateUrgent } = useUpdateUrgent();

  function handleEditIsUrgent() {
    setIsUrgentStatus((isUrgentStatus) => !isUrgentStatus);
    updateUrgent({ isUrgent: !isUrgentStatus, id: assignmentId });
  }

  const daysLeft = dayjs(dueDate).fromNow();

  return (
    <StyledAssignmentItem type={statusColor[status]}>
      <Row direction="horizontal">
        <Row direction="horizontal">
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

      <Course>{course}</Course>
      <Date>Due date: {formatDate(dueDate)}</Date>
      {isUrgent && status !== 'done' ? <Urgent /> : ''}

      <CheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          checked={isUrgentStatus}
          onChange={handleEditIsUrgent}
          disabled={status === 'done' || isUpdatingUrgent}
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
          disabled={isUpdatingStatus}
        >
          Done
        </Button>
        <Button
          bgcolor={statusColor[status]}
          value="working"
          onClick={(e) =>
            updateStatus({ status: e.target.value, id: assignmentId })
          }
          disabled={isUpdatingStatus}
        >
          Working
        </Button>
        <Button
          bgcolor={statusColor[status]}
          value="notDone"
          onClick={(e) =>
            updateStatus({ status: e.target.value, id: assignmentId })
          }
          disabled={isUpdatingStatus}
        >
          Not-done
        </Button>
        <Button
          bgcolor={statusColor[status]}
          onClick={() => navigate(`/showcase/${assignmentId}`)}
          disabled={isUpdatingStatus}
        >
          Details
        </Button>
      </ButtonGroup>
    </StyledAssignmentItem>
  );
}

export default AssignmentItem;
