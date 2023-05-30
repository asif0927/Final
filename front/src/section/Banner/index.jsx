import React from 'react'
import style from "./index.module.css";
const index = () => {
  return (
    <>
    <section className={style.section}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",flexDirection:"column",top:"30%",margin:"0 auto",width:"80%"}}>
            <h2 className={style.h2}>Startup you can build a<br></br> website online using the<br></br> Bootstrap builder.</h2>
            <a href='#' className={style.a}>Visit Our Works</a>
        </div>
    </section>
    </>
  )
}

export default index