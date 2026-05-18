import "./Home.module.css";
import Header from "@/reusable_sections/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TaglineBanner from "./sections/TaglineBanner";
import WhyChooseUs from "./sections/WhyChooseUs";
import Statistics from "./sections/Statistics";
import OurServices from "./sections/OurServices";
import MeetOurDoctors from "./sections/MeetOurDoctors";
import StaffTeam from "./sections/StaffTeam";
import AffordableServicesBanner from "./sections/AffordableServicesBanner";
import ImageGallery from "./sections/ImageGallery";
import ContactUs from "./sections/ContactUs";
import LocateUs from "./sections/LocateUs";
import InstagramFollow from "./sections/InstagramFollow";
import Footer from "@/reusable_sections/Footer";
import FloatingContact from "@/reusable_sections/FloatingContact";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <TaglineBanner />
      <WhyChooseUs />
      <Statistics />
      <OurServices />
      <MeetOurDoctors />
      <StaffTeam />
      <AffordableServicesBanner />
      <ImageGallery />
      <ContactUs />
      <LocateUs />
      <InstagramFollow />
      <Footer />
      <FloatingContact />
    </div>
  );
}
