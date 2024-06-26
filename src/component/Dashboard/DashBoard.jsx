import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import Searchbar from './Searchbar';
import ChannelList from './ChannelList';
import MainContent from './MainContent';
import MessageList from './MessageList';

/* Dashboard starting page used to diplay after login 
    * messages variables to used to store the typed message
    
    * handleInputChange is used to accept dynamically typed letts 
    
    * sendMessage is a function called upon when hit enter and reaches the destination

    * MessageList is used to render incoming and outgoing messages in the dashboard

*/


const Dashboard = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const currentUser = 'Me'; 
    

    // Below function is used for testing the receiving messages

    // useEffect(() => {
    //     // Simulate receiving a message after 2 seconds
    //     const timer = setTimeout(() => {
    //       const receivedMessage = { text: "Hello, how are you?", sender: "Other User", timestamp: new Date().toLocaleTimeString() };
    //       setMessages([...messages, receivedMessage]);
    //     }, 2000);
    
    //     return () => clearTimeout(timer); // Cleanup timer on component unmount
    //   }, [messages]);



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