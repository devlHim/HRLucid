import React, { useState } from 'react';
import Chatbot from '../component/Chatbot';// Import Chatbot component

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const divStyle = {
    height: '100vh', // Full viewport height
    backgroundImage: `url(src/utils/AfterLogin.jpg)`, // Path to your background image
    backgroundSize: 'cover', // Cover the entire element
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    textAlign: 'center',
  };

  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative', // Position for the chatbot icon
    },
    heading: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#333',
      textAlign: 'center',
    },
    hrFunctions: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    hrFunction: {
      width: '200px',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    chatbotIcon: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={divStyle}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to HR Services</h1>
        <div style={styles.hrFunctions}>
          <div style={styles.hrFunction}>
            <h3 style={{ color: "#BB0000" }}>Employee Management</h3>
            <p>Manage employee information, profiles, and records.</p>
          </div>
          <div style={styles.hrFunction}>
            <h3 style={{ color: "#BB0000" }}>Attendance Tracking</h3>
            <p>Track employee attendance and working hours.</p>
          </div>
          <div style={styles.hrFunction}>
            <h3 style={{ color: "#BB0000" }}>Leave Management</h3>
            <p>Manage employee leave requests and approvals.</p>
          </div>
          <div style={styles.hrFunction}>
            <h3 style={{ color: "#BB0000" }}>Payroll Management</h3>
            <p>Handle payroll processing and employee compensation.</p>
          </div>
        </div>

        {/* Chatbot Icon */}
        <div style={styles.chatbotIcon} onClick={toggleChatbot}>
          <img src="/path/to/chatbot-icon.png" alt="Chatbot Icon" style={{ width: '50px', height: '50px' }} />
        </div>

        {/* Chatbot Component (conditionally rendered) */}
        {showChatbot && <Chatbot endpoint="your-chatbot-api-endpoint" />}
      </div>
    </div>
  );
};

export default Home;
