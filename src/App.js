import {useState} from 'react';
import './App.css';
import AdminSignin from './components/AdminComponets/AdminSignin';
import {Link,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './components/Homepage';
import AdminHome from './components/AdminComponets/AdminHome';


function App() {
 


  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
        <Route path="/login" element={<AdminSignin/>} />
        <Route path="/adminpanel" element={<AdminHome/>} />
        <Route path="/" element={<Homepage />}>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
