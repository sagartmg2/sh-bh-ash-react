import Course from "./Course"
import User from "./User"

import Glass from "./assets/images/glasses.jpg"
import DeleteButton from "./components/DeleteButton"
import EditButton from "./components/EditButton"

let usersStyle = {
    display: "flex",
    gap: ".5rem"
}

let users = [
    {name:"ram",email:"ram@gmail.com"},
    {name:"ram1",email:"ram@gmail.com"},
    {name:"ram2",email:"ram@gmail.com"},
    {name:"ram3",email:"ram@gmail.com"},
    {name:"ram4",email:"ram@gmail.com"},
]

function App() {
    return (
        <div>
            <h1 className="text-red-500 text-5xl mb-8 ">Courses</h1>
            <Course title={"react"} />
            <Course title={"node"} />
            <Course title="js" />
            <h2>Users</h2>

            <div style={usersStyle} >
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>

        <table style={{marginTop:"1rem"}}>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>xyz</td>
                    <td>xyz@gmail.com</td>
                    <td> <EditButton/> <DeleteButton/> </td>
                </tr>
                <tr>
                    <td>xyz</td>
                    <td>xyz@gmail.com</td>
                    <td></td>
                </tr>
                <tr>
                    <td>xyz</td>
                    <td>xyz@gmail.com</td>
                    <td></td>
                </tr>
            </table>

            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzC7lYEmBdECVgCcD6baNolLAW0QR7FZQHg2mcEeNGeoxKNwa1qnG0PgEQJTH-EHhm2vk&usqp=CAU" alt="" /> */}

            <img src="./assets/images/glasses.jpg" alt="" />
            <img src={Glass} alt="" />
            <img src="/react.png" alt="" />
            <img src="/vite.svg" alt="" />

        </div>
    )
}

export default App