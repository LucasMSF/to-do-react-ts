import React from 'react'
import Style from "./Header.module.css";

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={Style.header}>
      <h1 className='font-bold text-3xl'>React + TS (To Do)</h1>
    </header>
  )
}

export default Header