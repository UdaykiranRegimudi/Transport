import Skeleton from '@mui/material/Skeleton';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App