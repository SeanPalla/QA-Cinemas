import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Classifications from "./pages/Classifications";
import Payment from "./pages/Pay";
import OpeningTimes from "./pages/OpeningTimes";
import Location from "./pages/Location";
import Nearby from "./pages/Nearby";
import DiscussionBoard from "./pages/DiscussionBoard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Deadpool from "./pages/movies/nowShowing/Deadpool";
import BlackAdam from "./pages/movies/nowShowing/BlackAdam";
import Jaws from "./pages/movies/nowShowing/Jaws";
import HowToTrainYourDragon from "./pages/movies/nowShowing/HowToTrainYourDragon";
import ShawshankRedemption from "./pages/movies/nowShowing/ShawshankRedemption";
import TicketToParadise from "./pages/movies/upcomingReleases/TicketToParadise";
import GreatestBeerRunEver from "./pages/movies/upcomingReleases/GreatestBeerRunEver";
import AvatarTheWayOfTheWater from "./pages/movies/upcomingReleases/AvatarTheWayOfTheWater";
import GuardiansOfTheGalaxyVol3 from "./pages/movies/upcomingReleases/GuardiansOfTheGalaxyVol3";

import { Route, Routes } from "react-router-dom";

import Screens from "./pages/Screens";

function App() {
  return (
    <>
      <Header />
      <Navbar />;
      <div className="homeContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Pay" element={<Payment />} />
          <Route path="/Classifications" element={<Classifications />} />
          <Route path="/OpeningTimes" element={<OpeningTimes />} />
          <Route path="/Screens" element={<Screens />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Nearby" element={<Nearby />} />
          <Route path="/DiscussionBoard" element={<DiscussionBoard />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Deadpool" element={<Deadpool />} />
          <Route path="/Black-Adam" element={<BlackAdam />} />
          <Route path="/Jaws" element={<Jaws />} />
          <Route
            path="/How-To-Train-Your-Dragon"
            element={<HowToTrainYourDragon />}
          />
          <Route
            path="/The-Shawshank-Redemption"
            element={<ShawshankRedemption />}
          />
          <Route path="/Ticket-To-Paradise" element={<TicketToParadise />} />
          <Route
            path="/The-Greatest-Beer-Run-Ever"
            element={<GreatestBeerRunEver />}
          />
          <Route
            path="/Avatar-The-Way-Of-Water"
            element={<AvatarTheWayOfTheWater />}
          />
          <Route
            path="/Guardians-Of-The-Galaxy"
            element={<GuardiansOfTheGalaxyVol3 />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
