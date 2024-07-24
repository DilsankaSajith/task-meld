import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { createAssignment as createAssignmentApi } from '../../services/apiAssignments';
import toast from 'react-hot-toast';

export function useCreateAssignment() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createAssignment, isLoading: isCreating } = useMutation({
    mutationFn: createAssignmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['assignments'],
      });
      navigate('/showcase');
      toast.success('New assignment successfully created');
    },
  });

  return { createAssignment, isCreating };
}
