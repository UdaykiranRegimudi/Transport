import Skeleton from '@mui/material/Skeleton';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home'
import Navbar from './assets/Navbar'
import Sidenavbar from './assets/Sidenav'
import './App.css'
const App = () =>{

  const [activeChat,setChatbot] = useState(false)

  const chatbotActive = () =>{
      setChatbot(!activeChat)
  }

  return(
    <div style={{backgroundColor:"white",paddingTop:"0px",}}>
      <div style={{position:"fixed",top: 0,width: "100%", zIndex: 1000}}>
        <Navbar/>
      </div>
      <div style={{display:"flex"}}>
        <div style={{width:"20%",height:"100%",}}>
          <div style={{top: 0,width: "100%", zIndex: 1000,marginTop:"8.5vh"}}>
          <Sidenavbar/> 
          </div>
        </div>
        <div style={{marginTop:"8.5vh",width:"80%"}}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <div className="chatbot" onClick={chatbotActive}>
        <img src="https://cdn-icons-png.flaticon.com/512/2040/2040946.png" style={{height:"15vh"}} alt="chatbot"/>
      </div>
    </div>
   
  )
}

export default App