import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Root: React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Root