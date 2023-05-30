import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card } from 'antd';
const index = () => {
  return (
    <>
    <section className={style.section}>
        <h2 className={style.h2}>Our Creative Team</h2>
        <h3 className={style.h3}>Tour function information without cross action media value quickly<br></br> maximize timely deliverables.</h3>
        <div className={style.container}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
        <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/startup2/img/team/1.png.webp" />}
  >
    <h2>Brandon Yeald</h2>
    <h5 className={style.h5}>Founder & CEO</h5>
  </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/startup2/img/team/2.png.webp" />}
  >
    <h2>Brandon Yeald</h2>
    <h5 className={style.h5}>Founder & CEO</h5>
  </Card>  
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/startup2/img/team/3.png.webp" />}
  >
    <h2>Brandon Yeald</h2>
    <h5 className={style.h5}>Founder & CEO</h5>
  </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/startup2/img/team/4.png.webp" />}
  >
    <h2>Brandon Yeald</h2>
    <h5 className={style.h5}>Founder & CEO</h5>
  </Card>
        </Grid>
      </Grid>
    </Box>
        </div>
    </section>
    </>
  )
}

export default index