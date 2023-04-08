import Header from "./Components/Header";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Summary from "./Components/Summary";
import MainCatergories from "./Components/MainCatergories";
import Jobs from "./Components/Jobs";
import VideoAndJoint from "./Components/VideoAndJoint";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Summary />
      <MainCatergories />
      <Jobs />
      <VideoAndJoint />
      <Footer />
    </div>
  );
}

export default App;
