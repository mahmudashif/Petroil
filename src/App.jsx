import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Topbar from "./Components/Layout/Topbar";
import Hero from "./Components/Section/Hero";
import Supplier from "./Components/Section/Supplier";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Supplier />
    </>
  );
}

export default App;
