import React, { useState, useEffect } from 'react';

const Chatbot = ({ endpoint }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageSubmit = async () => {
    if (inputMessage.trim() === '') return;

    // Add user message to the chat
    const newMessage = { text: inputMessage, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    try {
      // Send user message to the chatbot API endpoint
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (response.ok) {
        const data = await response.json();

        // Add chatbot's response to the chat
        const botMessage = { text: data.message, sender: 'bot' };
        setMessages([...messages, botMessage]);
      } else {
        console.error('Failed to fetch response from chatbot API');
      }
    } catch (error) {
      console.error('Error communicating with chatbot API:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.messageContainer}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleMessageSubmit();
            }
          }}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '300px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: '999',
  },
  messageContainer: {
    maxHeight: '200px',
    overflowY: 'auto',
    padding: '10px',
  },
  inputContainer: {
    borderTop: '1px solid #ccc',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  },
};

export default Chatbot;
