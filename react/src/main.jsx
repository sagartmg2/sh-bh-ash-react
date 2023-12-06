import React from 'react'
import ReactDOM from 'react-dom/client'

import "./main.css"

/* 
function Course(props) {   // object destructuring
  console.log({props});
  return <div class="card">
    <p class="title">{props.courseTitle} </p>
    <p>price:Rs.{props.coursePrice}</p>
    <p>duration:{props.duration}</p>
    <hr />
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
} 
*/

/* default import export in react */
/* named import export in react */

const Course = (props) => {  // props :{data:{course:{title:"react"}} }
  console.log({ props })
  return <div class="card">
    <p class="title">{props.data?.course.title} </p>  {/* ?. optinal chaining */}
  </div>
}


let cards = ["react", "node", "git"]

let reactData = {
  course: {
    title: "react"
  }
}

let nodeData = {
  course: {
    title: "node"
  }
}



const User = (props) => {
  let { age, name, address } = props // object-destructuring.
  return <div className='card'>
    <p>{name} ({age})</p>
    <p>{address}</p>
  </div>

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 >Our courses ({cards.length})  </h1>
    <Course data={reactData} />
    <Course data={nodeData} />
    <Course />
    <User name="ram" age={10} address="boudha" />
    <User name="hari" age={10} address="tinkune" />
    <User name="shyyam" age={10} address="banewshowr" />

  </React.StrictMode>,
)
