import React from'react'
import Home from './Components/Home/Home'
import Signup from './Components/Signup.jsx'
import Contact from './Components/Contact.jsx'
import {Navigate,Route,Routes} from 'react-router-dom'
import Courses from './Course/Courses'
import  { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthProvider';
import { useAuth } from './context/AuthProvider.jsx';
 


function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser);
  return (
 <>


<div className="dark:bg-slate-900 dark:text-white">
<Routes>
  <Route path="/"element={<Home/>}/>
  <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/contact" element={<Contact />}/>
  
</Routes>
<Toaster />
</div>

 

 </>

  );
};
  
export default App
