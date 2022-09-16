
import Navbar from "./Navbar";
import Classifications from "./pages/Classifications";
import Bookings from "./pages/Bookings";
import OpeningTimes from "./pages/OpeningTimes";
import Location from "./pages/Location";
import Nearby from "./pages/Nearby";
import DiscussionBoard from "./pages/DiscussionBoard";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Nearby from "./pages/Nearby";

import EmailForm from "./components/EmailForm/EmailForm";
import GettingThere from "./components/GettingThere/GettingThere";

function App() {
    return (
        <>
            <Navbar />;
            <div className="homeContainer">
                <Routes>
                    <Route path="/" element={<Home />} />
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
                    />s
                </Routes>
            </div>
            <div className="App">
      <div className="container">
        <EmailForm/>
        <GettingThere/>
      </div>
      </>
    );
}
export default App;
