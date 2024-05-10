import './App.css';
import  Header  from './Component/Header';
import Home from './Component/Home';
import Checkout from './Component/Checkout';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Component/Login';
import { useEffect } from 'react';
import { useStateValue } from "../src/Component/StateProvider.js";
import {auth} from "../src/firebase.js"
import Payment from './Component/Payment';
import Order from './Component/Order';




function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("user is",authUser);
      if(authUser){

        dispatch({
          type:"SET_USER",
          user:authUser,
        })

      }
      else{
        dispatch({
          type:"SET_USER",
          user:null,
        })

      }
    })

  },[])
  
  return (
    <BrowserRouter>
    <div className="app">
  
      <Routes>
     <Route path="/" element={ <div>  <Header /> <Home /></div> }></Route>
     <Route path="/checkout" element={<div>  <Header /> <Checkout /></div> }></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/payment" element={ <div>  <Header /> <Payment /> </div>}></Route>
     <Route path="/orders" element={ <div>  <Header /> <Order /> </div>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
