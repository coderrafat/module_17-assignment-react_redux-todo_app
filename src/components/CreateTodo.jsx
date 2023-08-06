import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/slice/todoSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();
  const handleClick = () => {
    if (!taskInput.current.value) {
      toast.error("Enter the Task", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch(AddTodo(taskInput.current.value));

      taskInput.current.value = " ";

      toast.success("New task has been added!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      taskInput.current.value = "";
    }
  };
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              placeholder="Enter todo"
              className="form-control"
              ref={taskInput}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={handleClick}>
              Add Todo
            </button>
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
              theme="light"
            />
            {/* Same as */}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
