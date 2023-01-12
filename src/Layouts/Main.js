import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

function Main() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Main
