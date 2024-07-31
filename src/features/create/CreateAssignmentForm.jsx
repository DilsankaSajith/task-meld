import { useForm } from 'react-hook-form';
import { useCreateAssignment } from './useCreateAssignment';

import Label from '../../ui/Label';
import Input from '../../ui/Input';
import styled from 'styled-components';
import FormRowVertical from '../../ui/FormRowVertical';
import FlexX from '../../ui/FlexX';
import SpinnerMini from '../../ui/SpinnerMini';

const CreateForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  gap: 2rem;
  padding-block: 2rem;
  max-width: 128rem;

  @media (max-width: 53.125em) {
    grid-template-columns: 1fr;
  }
`;

const CheckBox = styled.input`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const FormButton = styled.button`
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500);
  color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: none;
  outline: none;
  font-weight: 600;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

function CreateAssignmentForm() {
  const { register, handleSubmit } = useForm();
  const { createAssignment, isCreating } = useCreateAssignment();

  function onSubmit(data) {
    createAssignment({
      ...data,
      file: data.file.length <= 0 ? '' : data.file[0],
    });
  }

  return (
    <CreateForm onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical>
        <Label htmlFor="name">Assignment name</Label>
        <Input type="text" id="name" {...register('name')} required />
      </FormRowVertical>

      <FormRowVertical>
        <Label htmlFor="course">Course</Label>
        <Input type="text" id="course" {...register('course')} />
      </FormRowVertical>

      <FormRowVertical>
        <Label htmlFor="dueDate">Due date</Label>
        <Input type="date" id="dueDate" {...register('dueDate')} required />
      </FormRowVertical>

      <FormRowVertical>
        <Label htmlFor="description">Description</Label>
        <Input type="text" id="description" {...register('description')} />
      </FormRowVertical>

      <FormRowVertical>
        <Label htmlFor="file">File (Optional)</Label>
        <Input type="file" id="file" {...register('file')} />
      </FormRowVertical>

      <FlexX>
        <label htmlFor="isUrgent">
          <strong>Is this task urgent ?</strong>
        </label>
        <CheckBox type="checkbox" id="isUrgent" {...register('isUrgent')} />
      </FlexX>

      <FlexX>
        <FormButton disabled={isCreating}>
          {' '}
          {!isCreating ? 'Add task' : <SpinnerMini />}
        </FormButton>
        <FormButton type="reset">Cancel</FormButton>
      </FlexX>
    </CreateForm>
  );
}

export default CreateAssignmentForm;
