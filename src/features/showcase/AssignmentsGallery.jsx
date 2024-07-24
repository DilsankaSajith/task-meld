import styled from 'styled-components';
import AssignmentItem from './AssignmentItem';
import useAssignments from './useAssignments';
import { useSearchParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner';

const StyledAssignmentsGallery = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  @media (max-width: 64.3em) {
    grid-template-columns: 1fr;
  }
`;

function AssignmentsGallery() {
  const [searchParams] = useSearchParams();
  const { assignments, isLoading } = useAssignments();
  let filteredAssignments;

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('status') || 'all';

  // FILTERING
  if (filterValue === 'all') filteredAssignments = assignments;
  if (filterValue === 'done')
    filteredAssignments = assignments.filter(
      (assignment) => assignment.status === 'done'
    );
  if (filterValue === 'working')
    filteredAssignments = assignments.filter(
      (assignment) => assignment.status === 'working'
    );
  if (filterValue === 'not-done')
    filteredAssignments = assignments.filter(
      (assignment) => assignment.status === 'notDone'
    );
  if (filterValue === 'urgent')
    filteredAssignments = assignments.filter(
      (assignment) =>
        assignment.isUrgent === true && assignment.status !== 'done'
    );

  // SORTING
  const sortedAssignments = filteredAssignments.sort(
    (a, b) => (a.id - b.id) * -1
  );

  if (!filteredAssignments.length) return <p>No assignments</p>;

  return (
    <StyledAssignmentsGallery>
      {sortedAssignments.map((assignment) => (
        <AssignmentItem assignment={assignment} key={assignment.id} />
      ))}
    </StyledAssignmentsGallery>
  );
}

export default AssignmentsGallery;
