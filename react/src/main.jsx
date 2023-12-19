import React, { Fragment, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

// import App from "./App"
import "./main.css"
import Counter from './Counter'
import GoogleTabs from './GoogleTabs'
import ApiUsersList from './ApiUsersList'
import TodosList from './TodosList'
import ApiComments from './ApiComments'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ApiComments/>
  {/* <TodosList/> */}
  {/* <GoogleTabs/> */}
  {/* <ApiUsersList/> */}
  {/* <Counter /> */}
  </>
)
