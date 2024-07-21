import Skeleton from '@mui/material/Skeleton';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home'
import Navbar from './assets/Navbar'
import Sidenavbar from './assets/Sidenav'
import './App.css'
import Chatbot from './components/Chatbot';
const App = () =>{

  const [activeChat,setChatbot] = useState(false)

  const chatbotActive = () =>{
      setChatbot(!activeChat)
  }

  return(
    <div style={{backgroundColor:"black",paddingTop:"0px",}}>
      <div style={{position:"fixed",top: 0,width: "100%", zIndex: 1000}}>
        <Navbar/>
      </div>
      <div style={{display:"flex"}}>
        <div style={{width:"10%",height:"30%",}}>
          <div style={{top: 1,width: "5%", zIndex: 1000,marginTop:"30vh"}}>
          <Sidenavbar/> 
          </div>
        </div>
        <div style={{marginTop:"8.5vh",width:"85%"}}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path='/chatbot' element={<Chatbot/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <div className="chatbot" onClick={chatbotActive}>

        {activeChat && <div style={{height:"80vh",width:"30vw"}}><iframe
            src="https://3cfb6a560b49d4e9cb.gradio.live"
            style={{ width: '100%', height: '100%' }}
            title="Example Website"
            
        ></iframe></div>}
        <img src="https://cdn-icons-png.flaticon.com/512/2040/2040946.png" style={{height:"10vh"}} alt="chatbot"/>
      </div>
    </div>
   
  )
}

export default App