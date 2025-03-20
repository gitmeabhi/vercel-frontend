
// import plant from "./assets/plant.gif"

import {Routes,Route,BrowserRouter} from "react-router-dom"
import RegistrationPage from "./Components/RegistrationPage/registration"
import Login from "./Components/Login/login"
import Home from "./Components/Home/home"

import "./App.css" 

const App = () =>{
  return(
    <div className="app-container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/home" element = {<Home />} />
        <Route path="/register" element = {<RegistrationPage />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App