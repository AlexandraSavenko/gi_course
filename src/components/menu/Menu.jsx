import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <Link to={"/"}>Intro</Link>
      <Link to={"/games/task1"}>task 1</Link>
    </div>
  )
}

export default Menu
