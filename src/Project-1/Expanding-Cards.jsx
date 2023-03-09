import "./Expanding-cards.css";
import React, { useState } from "react";
const ExpandingCards = () => {
  const [activeImg, setActiveImg] = useState({
    div1: true,
    div2: false,
    div3: false,
    div4: false,
    div5: false
  });

  const HandleActiveImg = (param) => {
    let imgMap = {
      div1: false,
      div2: false,
      div3: false,
      div4: false,
      div5: false
    };
    imgMap[param] = true;
    setActiveImg({ ...imgMap });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Expanding Cards</h1>
      <div className="container">
        <div
          className={activeImg?.div1 ? "panel active" : "panel"}
          onClick={() => {
            HandleActiveImg("div1");
          }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
          }}
        >
          <h3>Explore the World</h3>
        </div>
        <div
          className={activeImg?.div2 ? "panel active" : "panel"}
          onClick={() => {
            HandleActiveImg("div2");
          }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
          }}
        >
          <h3>Wild Forest</h3>
        </div>
        <div
          className={activeImg?.div3 ? "panel active" : "panel"}
          onClick={() => {
            HandleActiveImg("div3");
          }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')"
          }}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div
          className={activeImg?.div4 ? "panel active" : "panel"}
          onClick={() => {
            HandleActiveImg("div4");
          }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')"
          }}
        >
          <h3>City on Winter</h3>
        </div>
        <div
          className={activeImg?.div5 ? "panel active" : "panel"}
          onClick={() => {
            HandleActiveImg("div5");
          }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
          }}
        >
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
      <div className="footer">
        <h3>@Tharun reddy</h3>
      </div>
    </div>
  );
};
export default ExpandingCards;
