import React from 'react'
import style from "./index.module.css";
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const index = () => {
  return (
    <>
    <header className={style.header}>
        <div className={style.container}>
            <div style={{display:"flex",alignItems:"center"}}>
               <img src="https://preview.colorlib.com/theme/startup2/img/logo.png.webp" alt="dsds" style={{marginTop:"20px"}} />
               <ul className={style.ul} style={{marginTop:"20px",marginLeft:"20%"}}>
                    <Link to="/" className={style.li}><li>Home</li></Link>
                    <Link to="/add"  className={style.li}><li>Add</li></Link>
                    <li  className={style.li}>Services</li>
                    <li  className={style.li}>PortFolio</li>
                    <li  className={style.li}>Blog <i class="fa-sharp fa-solid fa-chevron-down"></i></li>
                    <li  className={style.li}>Conatct<i class="fa-sharp fa-solid fa-chevron-down"></i></li>
                </ul>
                <div style={{marginLeft:"20%",display:"flex",alignItems:"center",marginTop:"20px"}}>
                    <div className={style.div}>Say Hello</div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default index