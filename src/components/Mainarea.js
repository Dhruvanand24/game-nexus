import React from 'react'
import "../cssfiles/Mainarea.css"
import Sidebar from './Sidebar'
import Contentarea from './Contentarea'

const Mainarea = () => {
  return (
    <div className='mainarea'>
      <Sidebar />
      <Contentarea />
    </div>
  )
}

export default Mainarea
