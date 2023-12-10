import RemoveButton from "./components/DeleteButton"
import CommonButton,{ ChangeButton as EditButton, ViewButton } from "./components/Buttons"

function Course(props) {
    return <div className="card mb-4 rounded-lg">
        <p className='title'> {props.title} </p>
        <p>price:Rs1000</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis a asperiores ratione quisquam minima amet repudiandae pro</p>
        <CommonButton/>
        <ViewButton/>
        <EditButton/>
        <RemoveButton />
    </div>
}

export default Course

