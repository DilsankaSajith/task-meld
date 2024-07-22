import styled from "styled-components";
import AssignmentItem from "./AssignmentItem";
import useAssignments from "./useAssignments";
import { useSearchParams } from "react-router-dom";

const StyledAssignmentsGallery = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  margin-top: 2rem;

  @media (min-width: 930px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function AssignmentsGallery() {
  const [searchParams] = useSearchParams();
  const { assignments, isLoading } = useAssignments();
  let filteredAssignments;

  if (isLoading) return <p>Loading...</p>;
  if (!assignments.length) return <p>No assignments</p>;

  const filterValue = searchParams.get("status") || "all";

  // FILTERING
  if (filterValue === "all") filteredAssignments = assignments;
  if (filterValue === "done")
    filteredAssignments = assignments.filter(
      (assignment) => assignment.status === "done"
    );
  if (filterValue === "working")
    filteredAssignments = assignments.filter(
      (assignment) => assignment.status === "working"
    );
  if (filterValue === "not-done")
    filteredAssignments = assignments.filter(
      (assignment) => assignment.status === "notDone"
    );
  if (filterValue === "urgent")
    filteredAssignments = assignments.filter(
      (assignment) =>
        assignment.isUrgent === true && assignment.status !== "done"
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
