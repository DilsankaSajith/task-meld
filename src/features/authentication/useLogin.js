import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate('/showcase', { replace: true });
    },
    onError: () => {
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
