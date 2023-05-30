import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { getAllDesigns } from "../../api/requests";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card } from "antd";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllDesigns().then((res) => {
      setData(res);
    });
  }, []);
  function handleClick(e) {
    const sorted = data.sort((a, b) => {
      return b.price - a.price;
    });
    setData([...sorted]);
  }
  function handleDelete(e) {}
  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <h2 className={style.h2}>Service</h2>
          <h5 className={style.h5}>
            With more than 20 years of<br></br> experience we can deliver the
            <br></br> best product design.
          </h5>
          <Button
            variant="contained"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              margin: "0 auto",
            }}
            onClick={(e) => handleClick(e)}
          >
            Sorted Price
          </Button>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {data &&
                data.map((service) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      md={6}
                      style={{ marginTop: "20px" }}
                    >
                      <Card
                        key={service._id}
                        hoverable
                        cover={
                          <img
                            alt="example"
                            src={service.imageurl}
                            style={{ objectFit: "cover", height: "300px" }}
                          />
                        }
                      >
                        <Link to={`detail/${service._id}`}>
                          <h2
                            style={{
                              textAlign: "center",
                              marginBottom: "20px",
                            }}
                          >
                            {service.title}
                          </h2>
                        </Link>
                        <p
                          style={{
                            textAlign: "center",
                            color: "gray",
                            marginBottom: "20px",
                          }}
                        >
                          {service.description}
                        </p>
                        <h5 style={{ textAlign: "center", fontSize: "27px" }}>
                          {service.price}
                        </h5>
                        <Button
                          variant="contained"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                            margin: "0 auto",
                            backgroundColor: "red",
                          }}
                          onClick={(e) => handleDelete(e)}
                        >
                          Delete
                        </Button>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </div>
      </section>
    </>
  );
};

export default index;
