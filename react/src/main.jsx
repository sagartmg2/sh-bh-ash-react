import React, { Fragment, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

// import App from "./App"
import "./main.css"
import Counter from './Counter'
import GoogleTabs from './GoogleTabs'
import ApiUsersList from './ApiUsersList'
import TodosList from './TodosList'
import ApiComments from './ApiComments'
import ApiProducts from './ApiProducts'
import ApiProductsAutoLoad from './ApiProductsAutoLoad'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ApiProductsAutoLoad />
    {/* <ApiProducts/> */}
    {/* <ApiComments/> */}
    {/* <TodosList/> */}
    {/* <GoogleTabs/> */}
    {/* <ApiUsersList/> */}
    {/* <Counter /> */}
  </>
)
