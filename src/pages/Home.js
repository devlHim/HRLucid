import React, { useState } from 'react';
import Chatbot from '../component/Chatbot';// Import Chatbot component
import './Home.scss'
const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  
  return (
    <div className="container-frame">
      <div
        className="image-container">
        <div className="staples-home-image"></div>
      </div>
      
      {/* Chatbot Icon */}
      <div className="chat-bot-icon" onClick={toggleChatbot}>
        <img src="/path/to/chatbot-icon.png" alt="Chatbot Icon"
             style={{width: '50px', height: '50px'}}/>
      </div>
      
      {/* Chatbot Component (conditionally rendered) */}
      {showChatbot && <Chatbot endpoint="your-chatbot-api-endpoint"/>}
    </div>
  );
};

export default Home;
