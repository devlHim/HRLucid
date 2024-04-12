import React, { useState } from "react";
import Chatbot from "../component/Chatbot"; // Import Chatbot component
import "./Home.scss";
const Home = () => {
  return (
    <div className="container-frame">
      <div className="image-container">
        <div className="staples-home-image"></div>
      </div>
      {/* Chatbot Component (conditionally rendered) */}
      <Chatbot endpoint="your-chatbot-api-endpoint" />
    </div>
  );
};

export default Home;
