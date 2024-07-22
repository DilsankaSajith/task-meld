import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAssignmentStatus as updateAssignmentStatusApi } from "../../services/apiAssignments";

export default function useUpdateStatus() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdatingStatus, mutate: updateStatus } = useMutation({
    mutationFn: ({ status, id }) => updateAssignmentStatusApi(status, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assignments"],
      });
    },
  });

  return { isUpdatingStatus, updateStatus };
}
