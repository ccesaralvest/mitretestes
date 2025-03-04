"use client";
import React from "react";
import { Calendar } from "lucide-react";
import Image from "next/image";

/* interface EventCardComponentProps {
  title: string;
  description: string;
  dates: string;
  time: string;
  imageUrl: string;
} */
const events = [
  {
    title: "CIA ATHLETICA",
    description:
      "Prepare-se para uma experiência revitalizante com atividades físicas, dicas de nutrição e momentos para saúde do corpo e mente.",
    dates: "08 e 09/03",
    time: "A PARTIR DAS 9H",
    imageUrl: "imgs/eventos/cia-athletica.png",
  },
  {
    title: "QUINTAL DEBETTI",
    description:
      "Em parceria com chefs especializados, oferecemos uma experiência única de degustação com sabores incríveis e combinações criativas.",
    dates: "15 e 16/03",
    time: "A PARTIR DAS 9H",
    imageUrl: "imgs/eventos/quintal-hamburguer.png",
  },
  {
    title: "BAR DE DRINKS",
    description:
      "Uma noite exclusiva de drinks autorais. Mix e Shake! Bartender convidado, drinks exclusivos e combinações surpreendentes.",
    dates: "22 e 23/03",
    time: "A PARTIR DAS 9H",
    imageUrl: "imgs/eventos/bar-drink.png",
  },
  {
    title: "BLUMA E TEAM TRAINING",
    description:
      "Desfrute de uma aula fitness especial e depois de uma massagem relaxante para recuperar energias.",
    dates: "28, 29 e 30/03",
    time: "A PARTIR DAS 9H",
    imageUrl: "imgs/eventos/bluma-unha.png",
  },
];

const EventCardComponent = () => {
  return (
    <section
      id="eventCard"
      className="pt-[94px] lg:pt-[110px] min-h-screen pt-8"
    >
      <div className="relative max-w-[100rem] mx-auto flex justify-around w-full mb-[54px]">
        {/* Left Box */}
        <div className="relative w-full pl-[27px] md:pl-3 xl:pl-[3rem] -mt-[4rem] min-h-[130px] font-unineue text-black xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex flex-row flex-nowrap items-end">
          <div className="w-full max-w-[65%] sm:max-w-[100%] md:ml-[3rem] ml-2 md:h-full md:max-w-1/2 flex flex-row items-end">
            <div className=" uppercase font-adero text-black text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px]   md:ml-[0.3rem] lg:ml-[0.5rem] md:p-[4px]">
              <div className="relative">
                <span>Participe de experiências exclusivas e </span>
                <strong>imperdíveis</strong>
                <div className="absolute w-[5rem] sm:w-[12rem] bottom-0 -left-[1.3rem] md:-left-[105px] border-t border-foreground md:border-1 md:w-[13rem] xl:w-[18rem]"></div>
              </div>
              <div className="max-w-[300px] leading-none">
                <span className="text-[10px] lg:text-[12px] lowercase">
                  Inscreva-se e aguarde a confirmação de sua participação por
                  e-mail.
                </span>
              </div>
            </div>
            <div className="inset-0">
              <div className="absolute h-full top-0 left-[32px] md:left-[62px] xl:left-[91px] border-l border-foreground border-1"></div>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="absolute sm:relative top-[-24px] sm:top-0 right-1 w-full  font-unineue text-black sm:items-center md:items-start xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex items-end">
          <div className="relative uppercase w-[95%] flex flex-col items-end text-end text-[2.4rem] leading-[1.8rem] font-gotham-black font-bold sm:w-[65%] sm:mx-auto sm:text-[3.4rem] sm:leading-[2.5rem] md:mt-[-16px] md:text-[4.4rem] md:leading-[3.5rem]">
            <strong className="text-black tracking-[-0.13em]">EVEN</strong>
            <strong className="text-black tracking-[-0.13em]">TOS</strong>
            <div className="inset-0">
              <div className="absolute h-full top-[-12px] right-[-5px] border-l border-foreground border-1 md:right-[-7px]"></div>
              <div className="absolute w-full max-w-[9rem] top-0 md:top-[2px] -right-[0.875rem] sm:max-w-[6rem]  md:-right-[1rem] border-t border-foreground  md:border-1 md:w-[13rem] xl:w-[18rem]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  mx-auto">
        <div className="absolute w-full h-full bg-[url(/imgs/bg-eventComponents.png)] opacity-[0.4] bg-cover bg-center bg-no-repeat"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:p-8 sm:px-12">
          {events.map((event, index) => (
            <div key={index} className="relative md:min-h-[500px] flex flex-col justify-between">
              <div className="overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-auto scale-105 sm:scale-100 sm:h-auto lg:h-[400px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative p-4 pl-0 space-y-2">
                <div className="hidden sm:block inset-0">
                  <div className="absolute h-[81.5%] top-[12%] left-0 border-l border-foreground border-1 "></div>
                </div>

                <h2 className="text-xl ml-6 text-black font-bold font-adero  tracking-wider">
                  {event.title}
                </h2>
                <p className="text-sm ml-6  max-w-[320px] font-unineue font-normal text-black leading-snug">
                  {event.description}
                </p>

                <div className="flex ml-6  items-center gap-1 mt-6">
                  <Calendar size={16} className="text-gray-700" />
                  <p className="text-2xl font-bold font-unineue text-black">
                    {event.dates}
                  </p>
                </div>
                <p className="text-xs ml-6  uppercase font-unineue text-black">
                  {event.time}
                </p>

                <button className="relative font-unineue ml-6  tracking-[0.09em] font-normal mt-2 bg-[#8B3A2A] text-white uppercase text-sm py-1 px-6 hover:bg-[#6d2e21] transition-colors">
                <div className="hidden sm:block absolute w-[12rem] top-0 left-[-3.4rem] border-t border-foreground  border-1 "></div>
                
                  Inscreva-se
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCardComponent;
