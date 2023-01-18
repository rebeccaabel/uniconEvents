import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Router} from "react-router-dom";
import Startpage from './pages/Startpage.jsx'
import Filterpage from './pages/Filterpage.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={
          createBrowserRouter(
              createRoutesFromElements(
                  <Route path={'/'}>
                      <Route index element={<App/>}/>
                      <Route path={'/startpage'} element={<Startpage/>}/>
                      <Route path={'/filterpage'} element={<Filterpage/>}/>
                  </Route>
              )
          )
      }/>

  </React.StrictMode>,
)
