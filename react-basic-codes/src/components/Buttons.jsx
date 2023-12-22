
import { FaEdit, FaRegEye } from "react-icons/fa";

/* named export */
export const ChangeButton = () => {
    return <button style={{
        background: "skyblue",
        color: "white"
    }}> <FaEdit /> change</button>
}

export const ViewButton = () => {
    return <button style={{
        background: "transparent",
    }}> <FaRegEye /> view</button>
}

const Button = () => {
    return <button>button</button>
}
export default Button