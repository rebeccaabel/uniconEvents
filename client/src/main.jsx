import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Router} from "react-router-dom";
import Startpage from './pages/Startpage.jsx'
import Artistpage from "./pages/Artistpage.jsx";
import Filterpage from "./pages/Filterpage.jsx";
import Profilepage from "./pages/Profilepage.jsx";
import Paymentpage from "./pages/Paymentpage.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import UserSettings from "./components/UserSettings.jsx";
import VerifiedPaymentPage from "./pages/VerifiedPaymentPage.jsx";
import ArtistHub from "./pages/ArtistHubPage.jsx";
import {GlobalProvider} from "./components/GlobalContext.jsx";
import Sectionpage from "./pages/Sectionpage.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={
            createBrowserRouter(
                createRoutesFromElements(
                    <Route path={'/'} element={<App/>}>
                        <Route index element={<Startpage/>}/>
                        <Route path={'artists'} element={<Artistpage/>}/>
                        <Route path={'filterpage'} element={<Filterpage/>}/>
                        <Route path={'profile'} element={<Profilepage/>}>
                            <Route path={'settings'} element={<UserSettings/>}/>
                        </Route>
                        <Route path={'paymentpage'} element={<Paymentpage/>}/>
                        <Route path={'VerifiedPaymentPage'} element={<VerifiedPaymentPage/>}/>
                        <Route path={'ArtistHub/:id'} element={<ArtistHub/>}/>
                        <Route path={'login'} element={<Loginpage/>}/>

                    </Route>
                )
            )
        }/>
    </React.StrictMode>,
)
