import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import './SlideShow.css'


const SlideShow =({ img, title, specie } )=> {
  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          background: "white",

          "@media (max-width: 900px)": {
            width: "400px",
            height: "250px",
            background: "white",
            marginBottom: " 30px",
            boxShadow: "3px 3px 3px 3px grey",
          },
          "@media (min-width: 900px)": {
            width: "1180px",
            height: "600px",
            marginBottom: " 30px",
            boxShadow: "3px 3px 3px 3px grey",
          },
        }}
      >
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
          <div className="slidesName">
            {/* <h3>{title}</h3>
            <p>{specie}</p> */}
          </div>
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
          <div className="slidesName">
            {/* <h3>{title}</h3>
            <p>{specie}</p> */}
          </div>
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
          <div className="slidesName">
            {/* <h3>{title}</h3>
            <p>{specie}</p> */}
          </div>
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
          <div className="slidesName">
            {/* <h3>{title}</h3>
            <p>{specie}</p> */}
          </div>
        </div>
        <div className="pets">
          <img src={img} alt="" width="300px"></img>
          <div className="slidesName">
            {/* <h3>{title}</h3>
            <p>{specie}</p> */}
          </div>
        </div>
      </Coverflow>
    </StyleRoot>
  );
};

export default SlideShow;
