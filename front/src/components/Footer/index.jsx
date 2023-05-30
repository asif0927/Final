import React from 'react'
import style from "./index.module.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const index = () => {
  return (
   <>
   <footer className={style.footer}>
       <p className={style.p}>Copyright ©2023 All rights reserved | This template is made with <FavoriteBorderIcon style={{color:"white",marginBottom:"-10px"}}></FavoriteBorderIcon>by <span className={style.span}>Colorlib</span></p>
   </footer>
   </>
  )
}

export default index