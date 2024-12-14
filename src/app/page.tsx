import Image from "next/image";
import Navebar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Work from "./components/Work-management";
import Work2 from "@/app/components/Work-management2";
import Sponsors from "./components/ourSponsars";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <><Navebar /><HeroSection /> <Work />
    <Work2/> <Sponsors/>
    <Footer/></>
  );
}
