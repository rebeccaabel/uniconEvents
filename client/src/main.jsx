import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import StartPage from './pages/StartPage.jsx'
import ArtistPage from "./pages/ArtistPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import UserSettings from "./components/UserSettings.jsx";
import ReceiptPage from "./pages/ReceiptPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<App/>}>
            <Route index element={<StartPage/>}/>
            <Route path={'artists'} element={<ArtistPage/>}/>
            <Route path={'search'} element={<SearchPage/>}/>
            <Route path={'profile'} element={<ProfilePage/>}>
                <Route path={'settings'} element={<UserSettings/>}/>
            </Route>
            <Route path={'payment'} element={<PaymentPage/>}/>
            <Route path={'receipt'} element={<ReceiptPage/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
