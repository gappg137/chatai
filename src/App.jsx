
import './App.css';
import Home from './component/Home/Home';
import ChatAINavBar from './component/Navbar/Navbar';
import Heros from './component/Heros/Heros';
import Contacts from './component/Contacts/Contacts';


//import { Login } from './component/login/login';
//import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import  {Signup}  from './component/signup/Signup';
import Signin from './component/signin/Signin';
import Register from './component/Register/newRegister'
import NewRegister from './component/Register/newRegister';

import Fpwd from './component/Fpwd/Fpwd';








const router = createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/register",element:<Register/>},
  {path:"/signup",element:<Signup/>},
  {path:"/signin",element:<Signin/>},
  {path:"/Nregister",element:<NewRegister/>},
  {path:"/forgetpwd", element:<Fpwd/>}
])


function App() {
  return (
    <div >

      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
