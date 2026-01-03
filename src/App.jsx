import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import Sectors from "./components/Sectors";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact ";
import Chooseus from "./components/Chooseus";
function App() {
 
  return (
    <div className="w-full overflow-x-hidden max-w-9xl">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroBanner />
      <Sectors/>
      <Services/>
  
      <About/>
       <Chooseus/>
       
      <Contact/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
