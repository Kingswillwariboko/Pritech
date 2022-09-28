import React from 'react'
import Image from 'next/image'
import logo from "../../public/Icons/pritech-logo.svg"
import menu from "../../public/Icons/Open.svg"
import style from "./header.module.scss"

const Header = () => {
  return (
      <div className={style.header}>
          <div className={style.header__logo}>
             <Image src={logo} alt=""/>
          </div>

          <div className={style.header__nav}>
            <Image src={menu} alt=""/>
          </div>
      </div>
        
  )
}

export default Header