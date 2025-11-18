import HeroSection from "./components/HeroSection";
import InformationSection from "./components/InformationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Add padding-top to account for fixed navbar */}
      <div id="home" className="pt-16">
        <HeroSection />
      </div>

      <div id="information">
        <InformationSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}