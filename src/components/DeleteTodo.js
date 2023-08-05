import Swal from "sweetalert2";
import store from "../redux/store/store";
import { RemoveTodo } from "../redux/slice/todoSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeleteTodo = (i) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(RemoveTodo(i));

      toast.success('Task has been deleted!', {
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
  });
}

