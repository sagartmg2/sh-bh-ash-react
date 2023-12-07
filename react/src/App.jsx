import Course from "./Course"
import User from "./User"

let usersStyle = {
    display: "flex",
    gap: ".5rem"
}

function App() {
    return (
        <div>
            <h1>Courses</h1>
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

        </div>
    )
}

export default App