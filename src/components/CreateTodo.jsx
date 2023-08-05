import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/slice/todoSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <input
            ref={taskInput}
            placeholder="Enter Your Task...."
            className="form-control"
            type="text"
          />
        </div>
        <div className="col-md-2">
          <button
            onClick={() => dispatch(AddTodo(taskInput.current.value))}
            className="btn btn-primary"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
