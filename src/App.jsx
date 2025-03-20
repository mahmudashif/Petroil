import "./App.css";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Topbar from "./Components/Layout/Topbar";
import CompanyLogo from "./Components/Section/CompanyLogo";
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
      <CompanyLogo />
      <Footer />
    </>
  );
}

export default App;
