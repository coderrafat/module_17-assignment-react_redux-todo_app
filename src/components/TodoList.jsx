import { useSelector } from "react-redux";
import { DeleteTodo } from "./DeleteTodo";
// import { DeleteTodo } from "./DeleteTodo";

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
                      <button className="btn btn-sm btn-dark">Edit</button>
                    </td>
                    <td>
                      <button onClick={DeleteTodo()} className="btn btn-danger">
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
    </div>
  );
};

export default TodoList;
