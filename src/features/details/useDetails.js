import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getAssignment } from "../../services/apiAssignments";

export function useDetails() {
  const { assignmentId } = useParams();

  const {
    isLoading,
    data: assignment,
    error,
  } = useQuery({
    queryKey: ["assignment", assignmentId],
    queryFn: () => getAssignment(assignmentId),
  });

  return { isLoading, assignment, error };
}
