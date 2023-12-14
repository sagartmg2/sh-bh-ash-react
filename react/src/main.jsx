import React, { Fragment, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

// import App from "./App"
import "./main.css"
import Counter from './Counter'
import GoogleTabs from './GoogleTabs'
import ApiUsersList from './ApiUsersList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <GoogleTabs/> */}
  <ApiUsersList/>
  {/* <Counter /> */}
  </>
)
