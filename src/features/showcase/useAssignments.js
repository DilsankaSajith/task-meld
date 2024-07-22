/* eslint-disable */
import { useQuery } from "@tanstack/react-query";
import { getAssignments } from "../../services/apiAssignments";

export default function useAssignments() {
  const {
    data: assignments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["assignments"],
    queryFn: getAssignments,
  });

  return { assignments, isLoading };
}
