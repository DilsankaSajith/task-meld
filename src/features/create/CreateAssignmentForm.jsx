import { useForm } from "react-hook-form";
import { useCreateAssignment } from "./useCreateAssignment";

function CreateAssignmentForm() {
  const { register, handleSubmit } = useForm();
  const { createAssignment, isCreating } = useCreateAssignment();

  function onSubmit(data) {
    createAssignment({
      ...data,
      file: data.file.length <= 0 ? "" : data.file[0],
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Assignment name</label>
        <input type="text" id="name" {...register("name")} />
      </div>

      <div>
        <label htmlFor="course">Course</label>
        <input type="text" id="course" {...register("course")} />
      </div>

      <div>
        <label htmlFor="dueDate">Due date</label>
        <input type="date" id="dueDate" {...register("dueDate")} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea type="text" id="description" {...register("description")} />
      </div>

      <div>
        <label htmlFor="file">File</label>
        <input type="file" id="file" {...register("file")} />
      </div>

      <div>
        <label htmlFor="isUrgent">Is urgent</label>
        <input type="checkbox" id="isUrgent" {...register("isUrgent")} />
      </div>

      <div>
        <button type="reset">Cancel</button>
        <button disabled={isCreating}>Add assignment</button>
      </div>
    </form>
  );
}

export default CreateAssignmentForm;
