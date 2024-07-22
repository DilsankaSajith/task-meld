/* eslint-disable*/
import { useQuery } from "@tanstack/react-query";
import { getAssignments } from "../../services/apiAssignments";
import AssignmentItem from "./AssignmentItem";

function AssignmentsGallery() {
  const {
    data: assignments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["assignments"],
    queryFn: getAssignments,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {assignments.map((assignment) => (
        <AssignmentItem assignment={assignment} key={assignment.id} />
      ))}
    </div>
  );
}

export default AssignmentsGallery;
