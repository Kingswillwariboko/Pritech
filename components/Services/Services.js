import React from 'react'
import Image from 'next/image'
import ux from "../../public/images/uxdesign.svg"
import software from "../../public/images/software.svg"
import app from "../../public/images/app dev.svg"

import style from "./services.module.scss"
const Services = () => {
  return (
    <div className={style.services}>
        <h3>Our Services</h3>
        <div className={style.services__ux}>
            <Image src={ux} alt=""/>
            <p>UX/UI Design</p>
        </div>
        <div className={style.services__app}>
            <Image src={software} alt=""/>
            <p>App Development</p>
        </div>
        <div className={style.services__3d}>
            <Image src={app} alt=""/>
            <p>3D Design</p>
        </div>
        <div className={style.services__web}>
            <Image src={ux} alt=""/>
            <p>Web Development</p>
        </div>
    </div>
  )
}

export default Services