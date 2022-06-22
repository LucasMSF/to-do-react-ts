import React from 'react'
import Style from "./Footer.module.css";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={Style.footer}>
      <span className='font-bold text-xl'>Lucas MSF - 2022</span>
      <img src="/img/react-logo.png" alt="react-logo" className='w-[32px] h-[28px] mx-2'/>
      <span className='font-bold text-xl'>Feito com React</span>
    </footer>
  )
}

export default Footer