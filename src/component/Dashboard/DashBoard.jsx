import React, { useState } from 'react'
import './Dashboard.css';
import Searchbar from './Searchbar';
import ChannelList from './ChannelList';
import MainContent from './MainContent';
import MessageList from './MessageList';

const Dashboard = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const currentUser = 'Me'; 
  
    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
      };


    const sendMessage = (message) => {
        if (inputMessage.trim() === '') return; 
        const newMessage = { text: inputMessage, sender: currentUser, timestamp: new Date().toLocaleTimeString() };
        setMessages([...messages, newMessage]);
        setInputMessage(''); 
    };
  
    return (
      <div className="dashboard-container">

        <div className="navbar">
          Navbar
          <Searchbar />
        </div>
  

        <div className="main-container">
 
          <div className="left-box">
            <ChannelList />
          </div>
  

          <div className="main-box">
            <MessageList messages={messages} currentUser={currentUser} />
            <div className="message-input-container">
              <input 
              type="text" 
              className="message-input" 
              placeholder="Type a message..."
              value={inputMessage}
              onChange={handleInputChange}
              onKeyDown={(e) => 
                {
                    if (e.key === 'Enter')
                    {
                        sendMessage();
                    }


                }
              } 
              
              />
              <button className="send-button" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;