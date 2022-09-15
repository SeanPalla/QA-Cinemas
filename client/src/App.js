import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Classifications from "./pages/Classifications";
import Bookings from "./pages/Bookings";
import OpeningTimes from "./pages/OpeningTimes";
import Location from "./pages/Location";
import Nearby from "./pages/Nearby";
import DiscussionBoard from "./pages/DiscussionBoard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmailForm from "./pages/EmailForm";
import Deadpool from "./pages/movies/Deadpool";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Navbar />;
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Admin" element={<Admin />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Bookings" element={<Bookings />} />
                    <Route
                        path="/Classifications"
                        element={<Classifications />}
                    />
                    <Route path="/OpeningTimes" element={<OpeningTimes />} />
                    <Route path="/Location" element={<Location />} />
                    <Route path="/Nearby" element={<Nearby />} />
                    <Route
                        path="/DiscussionBoard"
                        element={<DiscussionBoard />}
                    />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/EmailForm" element={<EmailForm />} />
                    <Route path="/Deadpool" element={<Deadpool />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}
export default App;
