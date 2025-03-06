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
import { type LeadResponseOrUndefined, postLead } from "@/api/Leads";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactEvents from "@/components/sections/9-b-ContactEvents";

type InputForm = {
  name: string;
  email: string;
  fone: string;
  message: string;
};

const InputFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  fone: z.string().regex(/^\+?[0-9]{10,15}$/, "Telefone inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export default function Home() {
  const [showEventOnly, setShowEventOnly] = useState(false);
  const [readPolicy, setReadPolicy] = useState(false);
  const [eventData, setEventData] = useState<{
    name: string;
    email: string;
    fone: string;
    date: string;
    time: string;
    title: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InputForm>({
    resolver: zodResolver(InputFormSchema),
  });

  const onSubmit = async (data: InputForm) => {
    try {
      const response: LeadResponseOrUndefined = await postLead(data);
      if (response) toast.success(response.message);
    } catch (error: unknown) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar os dados"
      );
    }
  };

  // Captura os valores do EventCardComponent
  const handleEventData = (data: {
    name: string;
    email: string;
    fone: string;
    date: string;
    time: string;
    title: string;
  }) => {
    setEventData(data);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined") {
        if (
          window.location.hash === "#eventCard" ||
          window.location.hash === "#contactEvents"
        ) {
          setShowEventOnly(true);
        } else {
          setShowEventOnly(false);
        }
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    if (showEventOnly) {
      setTimeout(() => {
        document
          .getElementById(window.location.hash.substring(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [showEventOnly]);

  useEffect(() => {
    if (!showEventOnly) {
      setTimeout(() => {
        const currentHash = window.location.hash;
        if (currentHash) {
          document
            .getElementById(currentHash.substring(1))
            ?.scrollIntoView({ behavior: "smooth" });
            setValue("name", "");
            setValue("email", "");
            setValue("fone", "");
            setValue("message", "");
        }

      }, 500);
    }
  }, [showEventOnly]);

  useEffect(() => {
    if (eventData) {
      setValue("name", eventData.name);
      setValue("email", eventData.email);
      setValue("fone", eventData.fone);
      setValue(
        "message",
        `AGENDAMENTO  - Evento: ${eventData.title}, data: ${eventData.date}, hora: ${eventData.time}`
      );
    }
  }, [eventData, setValue]);

  return (
    <>
      <GoogleTagManager gtmId="GTM-WH8G73M8" />
      <ContactModal />
      <Header />

      {showEventOnly ? (
        <>
          <EventCardComponent onEventSelect={handleEventData} />
          <ContactEvents
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            readPolicy={readPolicy}
            setReadPolicy={setReadPolicy}
          />
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
          <Contact
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            readPolicy={readPolicy}
            setReadPolicy={setReadPolicy}
          />
        </>
      )}
      <Footer />
    </>
  );
}
