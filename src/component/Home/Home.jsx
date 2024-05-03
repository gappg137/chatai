import React, { useState } from 'react'
import ChatAINavBar from '../Navbar/Navbar';
import Heros from '../Heros/Heros';
import Contacts from '../Contacts/Contacts';
import Signin from '../signin/Signin';
import { Signup } from '../signup/Signup';




const Home = () => {


  return (
    <div>
    <ChatAINavBar/>
      <Heros/>
      {/* <Contacts/> */}
    </div>
  )
}

export default Home