import React from 'react'
import ReactDOM from 'react-dom/client'

import "./main.css"

/* Card Component */
function Card() {
  return <div class='card'>
    <p class="title">react</p>
    <p>Rs:1200</p>
    <hr />
    react is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus.
  </div>
}

Card("react", 1000)
Card("node", 1200)


let cards = ["react", "node", "git"]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <h1>React</h1>
    <h2>Element</h2>
    <h2>component</h2>
    <h2>research on props in react   (parameter)</h2>
    <h1>Total Cards {cards.length} </h1>
    <Card title="react" price="1000" />  {/* not Card("react",1000) */}
    <Card />
    <Card />

  </React.StrictMode>,
)
