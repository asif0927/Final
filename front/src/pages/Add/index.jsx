import React from "react";
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { postDesigns } from "../../api/requests";

const ServicesSchema = Yup.object().shape({
  price: Yup.number()
    .positive("Positive")
    .integer("ddgyg")
    .min(0, "Too Short!")
    .required("Required"),
  description: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  imageurl: Yup.string().required("Required"),
});
const index = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
      <div>
        <Formik
          initialValues={{
            price: "",
            description: "",
            title: "",
            imageurl: "",
          }}
          validationSchema={ServicesSchema}
          onSubmit={async (values) => {
            await postDesigns(values);
            navigate("/");
          }}
        >
          {({ errors, touched }) => (
            <Form
              style={{
                marginTop: "600px",
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginLeft: "30%",
              }}
            >
              <Field name="price" type="number" />
              {errors.price && touched.price ? (
                <div style={{color:"red"}}>{errors.firstName}</div>
              ) : null}
              <Field name="description" />
              {errors.description && touched.description ? (
                <div style={{color:"red"}}>{errors.descriprion}</div>
              ) : null}
              <Field name="title" />
              {errors.title && touched.title ? (
                <div style={{color:"red"}}>{errors.title}</div>
              ) : null}
              <Field name="imageurl" />
              {errors.imageurl && touched.imageurl ? (
                <div style={{color:"red"}}>{errors.imageurl}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default index;
