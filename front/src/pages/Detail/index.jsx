import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDesignsById } from "../../api/requests";
import { Card } from "antd";
import Button from "@mui/material/Button";
const index = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getDesignsById(id).then((res) => {
      setData(res);
      console.log("detail: ", res);
    });
  }, [id]);
  return (
    <>
      return (
        <div style={{marginTop:"100px",height:"500px"}}> 
        <Card
        key={data._id}
        hoverable
        cover={
          <img
            alt="example"
            src={data.imageurl}
            style={{ objectFit: "contain", height: "300px" }}
          />
        }
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {data.title}
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "gray",
            marginBottom: "20px",
          }}
        >
          {data.description}
        </p>
        <h5 style={{ textAlign: "center", fontSize: "27px" }}>
          {data.price}
        </h5>
      </Card>
        </div>
      );
    </>
  );
};

export default index;
