import React from 'react';
import Services from "../../section/Services";
import Banner from "../../section/Banner";
import Team from "../../section/Team";
import Induvidals from "../../section/Induvidals";
import {Helmet} from "react-helmet";
const index = () => {
  return (
    <>
             <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    <Banner/>
    <Services/>
    <Induvidals/>
    <Team/>
    </>
  )
}

export default index