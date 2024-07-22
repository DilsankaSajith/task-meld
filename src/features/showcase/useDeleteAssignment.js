import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAssignment as deleteAssignmentApi } from "../../services/apiAssignments";

export default function useDeleteAssignment() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteAssignment } = useMutation({
    mutationFn: deleteAssignmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assignments"],
      });
    },
  });

  return { isDeleting, deleteAssignment };
}
