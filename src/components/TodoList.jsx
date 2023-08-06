import { ToogleMark } from "../redux/slice/todoSlice";
import { removeTodo } from "./DeleteTodo";
import { EditTodo } from "./UpdateTodo";
import store from "../redux/store/store";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const TodoList = () => {
  const todoItems = useSelector((state) => state.todo);

  if (!todoItems.length) {
    return <div className="text-center">No Task</div>;
  }

  const checkboxHandler = (i) => {
    store.dispatch(ToogleMark(i));
  };
  const removeHandler = (i) => {
    removeTodo(i);
  };
  const editHandler = (i) => {
    EditTodo(i);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Mark</th>
                  <th>Task</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {todoItems &&
                  todoItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => checkboxHandler(item.id)}
                          />
                        </td>
                        <td>
                          <p
                            className={`${
                              item.completed
                                ? "text-decoration-line-through"
                                : ""
                            }`}
                          >
                            {item.text}
                          </p>
                        </td>
                        <td>
                          <button
                            className="btn btn-dark btn-sm"
                            onClick={() => editHandler(item.id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeHandler(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
