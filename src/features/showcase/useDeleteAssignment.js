import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAssignment as deleteAssignmentApi } from '../../services/apiAssignments';
import toast from 'react-hot-toast';

export default function useDeleteAssignment() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteAssignment } = useMutation({
    mutationFn: deleteAssignmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['assignments'],
      });
      toast.error('Assignment has been successfully deleted');
    },
  });

  return { isDeleting, deleteAssignment };
}
