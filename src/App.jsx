import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Topbar from "./Components/Layout/Topbar";
import Hero from "./Components/Section/Hero";
import Services from "./Components/Section/Services";
import Supplier from "./Components/Section/Supplier";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Supplier />
      <Services />
    </>
  );
}

export default App;
