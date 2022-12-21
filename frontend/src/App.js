import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navigation from './comonents/Navigation/Navbar';
import Authenticate from './pages/Authenticate/Authenticate';
import IsGuest from './PrivateRoutes/IsGuest';
import Activate from './pages/Activate/Activate';
import IsActivated from './PrivateRoutes/IsActivated';
import IsPrivate from './PrivateRoutes/IsPrivate';
import Room from './pages/Room/Room';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route element={<IsGuest />}>    
          <Route path='/' element={<Home/>}/>
          <Route path='/authenticate' element={<Authenticate/>} />
        </Route> 

        <Route element={<IsActivated />}>
          <Route path='/activate' element={<Activate/>}/> 
        </Route>

        <Route element={<IsPrivate />}>
          <Route path='/rooms' element={<Room/>}/>
        </Route>  
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
