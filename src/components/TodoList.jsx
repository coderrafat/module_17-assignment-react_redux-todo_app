import { useSelector } from "react-redux";
import { DeleteTodo } from "./DeleteTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateTodo } from "./UpdateTodo.js";

const TodoList = () => {
  const taskItems = useSelector((state) => state.todo.value);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {taskItems.map((item, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => UpdateTodo(item, i)}
                        className="btn btn-sm btn-dark"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={(i) => DeleteTodo(i)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

export default TodoList;
