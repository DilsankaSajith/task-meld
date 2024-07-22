import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteAssignment,
  editAssignmentStatus,
  editIsUrgent,
} from "../../services/apiAssignments";
import { useState } from "react";

/*eslint-disable*/
function AssignmentItem({ assignment }) {
  const {
    id: assignmentId,
    name,
    dueData,
    description,
    status,
    file,
    isUrgent,
  } = assignment;

  const [isUrgentStatus, setIsUrgentStatus] = useState(isUrgent);

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assignments"],
      });
    },
  });

  const { isLoading: isUpdatingStatus, mutate: editStatus } = useMutation({
    mutationFn: ({ status, id }) => editAssignmentStatus(status, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assignments"],
      });
    },
  });

  const { isLoading: isEditingUrgent, mutate: editUrgent } = useMutation({
    mutationFn: ({ isUrgent, id }) => editIsUrgent(isUrgent, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assignments"],
      });
    },
  });

  function handleEditIsUrgent() {
    setIsUrgentStatus((isUrgentStatus) => !isUrgentStatus);
    editUrgent({ isUrgent: !isUrgentStatus, id: assignmentId });
  }

  return (
    <div
      className={`${
        status === "notDone"
          ? "notDone"
          : status === "done"
          ? "done"
          : status === "working"
          ? "working"
          : ""
      }`}
    >
      <h2>{name}</h2>
      <div>
        <button disabled={isDeleting} onClick={() => mutate(assignmentId)}>
          Delete
        </button>
        <button
          value="done"
          onClick={(e) =>
            editStatus({ status: e.target.value, id: assignmentId })
          }
        >
          Done
        </button>
        <button
          value="working"
          onClick={(e) =>
            editStatus({ status: e.target.value, id: assignmentId })
          }
        >
          Working
        </button>
        <button
          value="notDone"
          onClick={(e) =>
            editStatus({ status: e.target.value, id: assignmentId })
          }
        >
          Not done
        </button>
        <input
          type="checkbox"
          checked={isUrgentStatus}
          onChange={handleEditIsUrgent}
        />
      </div>
    </div>
  );
}

export default AssignmentItem;
