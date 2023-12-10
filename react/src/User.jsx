import DeleteButton from "./components/DeleteButton"
import EditButton from "./components/EditButton"

function User() {
    return <>
        <div style={{
            border:"1px solid",
            padding:"1 rem"

        }} >
            <img src="https://picsum.photos/200/200" alt="" />
            <p className="" style={{ textAlign: "center" }}>Ram</p>
           <EditButton/>
           <DeleteButton/>
          
        </div>
    </>
}

export default User
