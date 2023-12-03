import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from './pages/Home'
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import { GithubProvider } from "./context/github/GithubContext";
import User from "./pages/User";

import { AlertProvider } from "./context/alert/AlertContext";
 

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between ">
            <Navbar />
            <div className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User/>} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
