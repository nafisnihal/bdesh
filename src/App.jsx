import Header from "./Components/Header";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Summary from "./Components/Summary";
import MainCatergories from "./Components/MainCatergories";
import Jobs from "./Components/Jobs";
import VideoAndJoint from "./Components/VideoAndJoint";
import Footer from "./Components/Footer";
import MobileNavbar from "./Components/MobileNavbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MobileNavbar />
      <Hero />
      <div className="d-none d-md-block  bg-white">
        <Summary />
      </div>
      <MainCatergories />
      <Jobs />
      <VideoAndJoint />
      <Footer />
    </div>
  );
}

export default App;
