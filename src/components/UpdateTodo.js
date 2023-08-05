import Swal from "sweetalert2";
import store from "../redux/store/store";
import { EditTodo } from "../redux/slice/todoSlice";
import { toast } from 'react-toastify'

export const UpdateTodo = (item, i) => {
    Swal.fire({
        title: "Update Task",
        input: "text",
        inputValue: item,
        showCancelButton: true,
        inputValidator: (value) => {
            if (value) {
                store.dispatch(EditTodo({ task: value, index: i }))

                toast.success('Task has been Updated!', {
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
        }
    })
}

