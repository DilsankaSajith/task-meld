import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editIsUrgent as updateUrgentApi } from "../../services/apiAssignments";

export default function useUpdateUrgent() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdatingUrgent, mutate: updateUrgent } = useMutation({
    mutationFn: ({ isUrgent, id }) => updateUrgentApi(isUrgent, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assignments"],
      });
    },
  });

  return { isUpdatingUrgent, updateUrgent };
}
