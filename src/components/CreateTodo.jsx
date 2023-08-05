import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/slice/todoSlice";
import { ToastContainer, toast } from "react-toastify";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();

  const handleButton = () => {
    if (!taskInput) {
      toast.error("Please enter your task.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch(AddTodo(taskInput.current.value));

      taskInput.current.value = "";

      toast.success("New task has been added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

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
          <button onClick={() => handleButton()} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CreateTodo;
