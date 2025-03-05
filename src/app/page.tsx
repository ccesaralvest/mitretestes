"use client";
import { useEffect, useState } from "react";
import ImageCarousel from "@/components/sections/6-ImageCarousel";
import Header from "@/components/sections/0-Header";
import Hero from "@/components/sections/1-Hero";
import VideoPreview from "@/components/sections/4-VideoPreview";
import Services from "@/components/sections/5-Services";
import Tribeca from "@/components/sections/2-Tribeca";
import Professionals from "@/components/sections/3-Professionals";
import PlantasResidenciais from "@/components/sections/7-PlantasResidenciais";
import Contact from "@/components/sections/9-Contact";
import Footer from "@/components/sections/10-Footer";
import FloorPlan from "@/components/sections/6-b-Floor";
import { GoogleTagManager } from "@next/third-parties/google";
import ContactModal from "@/components/ui/ContactModal";
import LocationItemOutput from "@/components/sections/9-b-Gastronomia";
import EventCardComponent from "@/components/sections/12-Event";
import LocalCity from "@/components/sections/8-LocalCity";

export default function Home() {
  const [showEventOnly, setShowEventOnly] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined") {
        setShowEventOnly(window.location.hash === "#eventCard" || window.location.hash === "#contact");
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  useEffect(() => {
    if (showEventOnly) {
      setTimeout(() => {
        if (window.location.hash === "#contact") {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
        if (window.location.hash === "#eventCard") {
          document.getElementById("eventCard")?.scrollIntoView({ behavior: "smooth" });
        }
     
        
      
      }, 500);
    }
  }, [showEventOnly]);

  
  useEffect(() => {
    if (!showEventOnly) {
      setTimeout(() => {
        const currentHash = window.location.hash;
        if (currentHash) {
          document.getElementById(currentHash.substring(1))?.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [showEventOnly]);

  return (
    <>
      <GoogleTagManager gtmId="GTM-WH8G73M8" />
      <ContactModal />
      <Header />

      {showEventOnly ? (
        <>
          <EventCardComponent />
          <Contact />
        </>
      ) : (
        <>
          <Hero />
          <Tribeca />
          <Professionals />
          <VideoPreview />
          <ImageCarousel />
          <Services />
          <FloorPlan />
          <PlantasResidenciais />
          <LocalCity />
          <LocationItemOutput />
        </>
      )}

      <Footer />
    </>
  );
}
