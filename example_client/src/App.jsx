import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext.jsx";
import Welcome from "./components/Welcome.jsx";
import Profile from "./components/Profile.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
