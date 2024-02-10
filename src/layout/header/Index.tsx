import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"




const Index = ():React.JSX.Element => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Index