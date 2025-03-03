import ImageCarousel from "@/components/sections/6-ImageCarousel";
import Header from "@/components/sections/0-Header";
import Hero from "@/components/sections/1-Hero";
import VideoPreview from "@/components/sections/4-VideoPreview";
import Services from "@/components/sections/5-Services";
import Tribeca from "@/components/sections/2-Tribeca";
import Professionals from "@/components/sections/3-Professionals";
import PlantasResidenciais from "@/components/sections/7-PlantasResidenciais";
/* import Localizacao from "@/components/sections/8-Localizacao"; */
import Contact from "@/components/sections/9-Contact";
import Footer from "@/components/sections/10-Footer";
import FloorPlan from "@/components/sections/6-b-Floor";
import { GoogleTagManager } from "@next/third-parties/google";

import ContactModal from "@/components/ui/ContactModal";
import MaiorCrescimento from "@/components/sections/8-MaiorCrescimento";
import LocationItemOutput from "@/components/sections/9-b-Gastronomia";

export default function Home() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-WH8G73M8" />
      <ContactModal />
      <Header />
      <Hero />
      <Tribeca />
      <Professionals />
      <VideoPreview />
      <ImageCarousel />
      <Services />
      <FloorPlan />
      <PlantasResidenciais />
      {/* Componente antigo. */}
      {/* <Localizacao /> */}
      <MaiorCrescimento />
      <LocationItemOutput />
      <Contact />
      <Footer />
    </>
  );
}
