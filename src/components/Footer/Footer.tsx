import React from 'react'
import Style from "./Footer.module.css";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={Style.footer}>
      <span className='font-bold text-xl'>Lucas MSF - 2022</span>
    </footer>
  )
}

export default Footer