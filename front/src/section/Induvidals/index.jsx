import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const index = () => {
  return (
    <>
    <section className={style.section}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <div className={style.div}></div>
        </Grid>
        <Grid item xs={12} md={6} className={style.grid}>
            <div className={style.div2}>
                <div className={style.container}>
                    <h3 className={style.h3}>About Us</h3>
                    <h2 className={style.h2}>Empowering individuals</h2>
                    <p className={style.p}>Efficiently unleash cross-media tour function information<br></br> without cross action media value. Quickly maximize timely<br></br> deliverables for real-time schemas.<br></br>
                       “Function information without cross action media value.</p>
                    <a href='#' className={style.a}>About Us</a>
                </div>
            </div>
        </Grid>
      </Grid>
    </Box>
    </section>
    </>
  )
}

export default index