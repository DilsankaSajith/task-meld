import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { createAssignment as createAssignmentApi } from "../../services/apiAssignments";

export function useCreateAssignment() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createAssignment, isLoading: isCreating } = useMutation({
    mutationFn: createAssignmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assignments"],
      });
      navigate("/showcase");
    },
  });

  return { createAssignment, isCreating };
}
