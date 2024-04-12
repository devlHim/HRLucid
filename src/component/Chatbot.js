import React, { useState, useEffect } from 'react';
import chatIcon from "./chatbot.png"
import './Chatbot.scss'

const Chatbot = ({ endpoint }) => {

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  

 

  return (
    <>
     {/* Chatbot Icon */}
     <div className='chatbot-Icon' onClick={toggleChatbot}>
        <img
          src={chatIcon}
          alt="Chatbot Icon"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      {showChatbot && <div className='chat-overlay'>
        <button className='close-button' onClick={toggleChatbot}>X</button> 
        <iframe
          src="http://wbztdnasv101:8503/"
          title="CHatbot"
          className='chatbot'
        ></iframe>
      </div>}
    </>
   
  );
};

// const styles = {
//   container: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     width: '300px',
//     backgroundColor: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     zIndex: '999',
//   },
//   messageContainer: {
//     maxHeight: '200px',
//     overflowY: 'auto',
//     padding: '10px',
//   },
//   inputContainer: {
//     borderTop: '1px solid #ccc',
//     padding: '10px',
//     display: 'flex',
//     alignItems: 'center',
//   },
// };

export default Chatbot;
