import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignup } from '../features/authentication/useSignup';

import AuthLayout from '../ui/AuthLayout';
import Form from '../ui/Form';
import FormRowVertical from '../ui/FormRowVertical';
import Heading from '../ui/Heading';
import Label from '../ui/Label';
import Input from '../ui/Input';
import AuthButton from '../ui/AuthButton';
import ButtonText from '../ui/ButtonText';
import Error from '../ui/Error';
import SpinnerMini from '../ui/SpinnerMini';
function Signup() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();

  function onSubmit({ fullname, email, password }) {
    signup(
      { fullname, email, password },
      {
        onSettled: reset(),
      }
    );
    navigate('/showcase');
  }

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h4">Signup</Heading>
        <FormRowVertical>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            type="text"
            id="fullname"
            {...register('fullname', { required: 'This field is required' })}
          />
          <Error>{errors?.fullname?.message}</Error>
        </FormRowVertical>

        <FormRowVertical>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please provide a valid email address',
              },
            })}
          />
          <Error>{errors?.email?.message}</Error>
        </FormRowVertical>

        <FormRowVertical>
          <Label htmlFor="password">Password (min 8 characters)</Label>
          <Input
            type="password"
            id="password"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters',
              },
            })}
          />
          <Error>{errors?.password?.message}</Error>
        </FormRowVertical>

        <FormRowVertical>
          <Label htmlFor="repeatPassword">Repeat password</Label>
          <Input
            type="password"
            id="passwordConfirm"
            {...register('passwordConfirm', {
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match',
            })}
          />
          <Error>{errors?.passwordConfirm?.message}</Error>
        </FormRowVertical>

        <AuthButton> {!isLoading ? 'Signup' : <SpinnerMini />}</AuthButton>
        <p>Already have an account? Login here </p>
        <ButtonText>
          <NavLink to="/login">Login &rarr;</NavLink>
        </ButtonText>
      </Form>
    </AuthLayout>
  );
}

export default Signup;
