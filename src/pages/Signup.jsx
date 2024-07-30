import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignup } from '../features/authentication/useSignup';

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
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            id="fullname"
            {...register('fullname', { required: 'This field is required' })}
          />
          <p>{errors?.fullname?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
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
          <p>{errors?.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Password (min 8 characters)</label>
          <input
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
          <p>{errors?.password?.message}</p>
        </div>

        <div>
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            id="passwordConfirm"
            {...register('passwordConfirm', {
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match',
            })}
          />
          <p>{errors?.passwordConfirm?.message}</p>
        </div>

        <button>Signup</button>
      </form>
      <p>Already have an account? Login here 😀</p>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default Signup;
