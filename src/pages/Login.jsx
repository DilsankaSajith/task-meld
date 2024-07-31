import { useState } from 'react';
import { useLogin } from '../features/authentication/useLogin';
import { NavLink } from 'react-router-dom';

import SpinnerMini from '../ui/SpinnerMini';
import Heading from '../ui/Heading';
import ButtonText from '../ui/ButtonText';
import AuthLayout from '../ui/AuthLayout';
import Form from '../ui/Form';
import FormRowVertical from '../ui/FormRowVertical';
import Label from '../ui/Label';
import Input from '../ui/Input';
import AuthButton from '../ui/AuthButton';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <Heading as="h4">Log in to your account</Heading>
        <FormRowVertical>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            disabled={isLoading}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormRowVertical>

        <FormRowVertical>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRowVertical>

        <AuthButton disabled={isLoading}>
          {!isLoading ? 'Log in' : <SpinnerMini />}
        </AuthButton>
        <p>Doesn't have an account? Create one here</p>
        <ButtonText>
          <NavLink to="/home">Signup &rarr;</NavLink>
        </ButtonText>
      </Form>
    </AuthLayout>
  );
}

export default Login;
