import Header from "./Components/Header";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Summary from "./Components/Summary";
import MainCatergories from "./Components/MainCatergories";
import Jobs from "./Components/Jobs";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Summary />
      <MainCatergories />
      <Jobs />
    </div>
  );
}

export default App;
