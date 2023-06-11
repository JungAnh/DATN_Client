import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Member from "../pages/Member"
import Activities from "../pages/Activiti/Activities"
import Forum from "../pages/Forum"
import About from "../pages/About/About"
import Signin from "../pages/Signin/Signin"
import Signup from "../pages/Signup/Signup"
import ActivityDetail from "../pages/Activiti/ActivityDetails"

export default function Router() {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={
            <HomePage/>
        }/>
        <Route path="/introduce" element={
            <About/>
        }/>
         <Route path="/member" element={
            <Member/>
        }/>
        <Route path="/activities" element={
            <Activities/>
        }/>
        <Route path="/activities/:slug" element={
            <ActivityDetail/>
        }/>
        <Route path="/forum" element={
            <Forum/>
        }/>
        <Route path="/signin" element={
            <Signin/>
        }/>
        <Route path="/signup" element={
            <Signup/>
        }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
    
  
}

