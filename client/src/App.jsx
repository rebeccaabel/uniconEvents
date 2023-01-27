
import './App.css'
import './Filterpage.css'
import './Paymentpage.css'
import {Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import React from 'react';

export const GlobalVariable = React.createContext({
    value: 0,
    changeValue: (input) => {
        GlobalVariable._currentValue.value += input
    }
});

export default function () {
  return (
    <GlobalVariable.Provider value="Reed">
      <App />
    </GlobalVariable.Provider>
  )
}

function App() {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
    }
   





