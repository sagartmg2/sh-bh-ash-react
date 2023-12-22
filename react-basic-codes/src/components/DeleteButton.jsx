import { FaTrash } from "react-icons/fa";
const DeleteButton = () =>{
    return <button style={{
        background: "red",
        color:"white"
    }}> <FaTrash/> Delete</button>
}

export default DeleteButton