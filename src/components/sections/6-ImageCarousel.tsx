"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const images = [
  {
    src: "/imgs/imgsCarousel/SPORTSARENA.jpg",
    description: "Perspectiva ilustrada da EMBASAMENTOJUNIOR",
  },
  {
    src: "/imgs/imgsCarousel/BEATYCARE.jpg",
    description: "Perspectiva ilustrada da BEATYCARE",
  },
  {
    src: "/imgs/imgsCarousel/CELEBRATIONHALL.jpg",
    description: "Uma outra CELEBRATION HALL",
  },
  {
    src: "/imgs/imgsCarousel/COWORKING.jpg",
    description: "Perspectiva ilustrada da COWORKING",
  },
  {
    src: "/imgs/imgsCarousel/EMBASAMENTOJUNIOR.jpg",
    description: "Perspectiva ilustrada da EMBASAMENTOJUNIOR",
  },
];

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => void api.off("select", handleSelect);
  }, [api]);

  return (
    <section
      id="galeria"
      className="relative min-h-screen flex flex-col justify-evenly items-center md:pt-[64px] xl:py-[7rem]"
    >
      <div className="absolute z-10 bg-[url(/imgs/cement-wall.jpeg)] opacity-[0.6] bg-cover bg-center bg-no-repeat bottom-0 h-[35%] w-full"></div>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="flex justify-around w-full"
      >
        {/* Left Box */}
        <div className="relative w-full pl-[27px] md:pl-3 xl:pl-[3rem] -mt-[4rem] min-h-[130px] pb-[18px] font-unineue text-black xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex flex-row flex-nowrap items-end">
          <div className="w-full max-w-[65%] sm:max-w-[100%] md:ml-[3rem] ml-2 md:h-full md:max-w-1/2 flex flex-row items-end">
            <span className="relative uppercase font-adero text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] md:mb-[.875rem] md:ml-[0.3rem] lg:ml-[0.5rem] md:p-[4px]">
              <strong>Celebre com estilo </strong>
              <span>em espaços versáteis e sofisticados.</span>
              <div className="absolute w-[5rem] sm:w-[12rem] bottom-0 -left-[1.3rem] md:-left-[105px] border-t border-foreground md:border-1 md:w-[13rem] xl:w-[18rem]"></div>
            </span>
            <div className="inset-0">
              <div className="absolute h-full top-0 left-[32px] md:left-[62px] xl:left-[91px] border-l border-foreground border-1"></div>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="absolute sm:relative right-1 w-full   min-h-[120px] font-unineue text-black sm:items-center md:items-start xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex items-end">
          <div className="relative uppercase w-[95%] flex flex-col items-end text-end text-[2.4rem] leading-[1.8rem] font-gotham-black font-bold sm:w-[65%] sm:mx-auto sm:text-[3.4rem] sm:leading-[2.5rem] md:mt-[-16px] md:text-[4.4rem] md:leading-[3.5rem]">
            <strong className="text-black tracking-[-0.13em]">EXCLU</strong>
            <strong className="text-black tracking-[-0.13em]">SIVIDADE</strong>
            <div className="inset-0">
              <div className="absolute h-full top-[-12px] right-[-5px] border-l border-foreground border-1 md:right-[-7px]"></div>
              <div className="absolute w-full max-w-[12rem] top-0 md:top-[2px] -right-[0.875rem] sm:max-w-[6rem]  md:-right-[1rem] border-t border-foreground  md:border-1 md:w-[13rem] xl:w-[18rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="relative flex justify-center items-center z-10 w-full"
      >
        {/* Botões de navegação */}
        <ChevronRight
          className="absolute z-20 cursor-pointer right-0 sm:right-10 sm:top-1/2 transform -translate-y-1/2"
          color="white"
          size={80}
          onClick={() => api?.scrollNext()}
          strokeWidth={1}
        />
        <ChevronLeft
          className="absolute z-20 cursor-pointer left-0 sm:left-10 sm:top-1/2 transform -translate-y-1/2"
          color="white"
          size={80}
          onClick={() => api?.scrollPrev()}
          strokeWidth={1}
        />

        <Carousel
          setApi={setApi}
          className="relative w-full  xl:mt-[7rem]"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="py-3 flex">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className="relative h-[280px] sm:h-[320px] md:h-[400px] xl:h-[520px]  basis-full sm:basis-1/2   px-2"
              >
                <div
                  className="p-1 w-full h-full flex flex-col justify-center items-center shadow-2xl transition-transform duration-500"
                  style={{
                    transform: current === index ? "scale(1.1)" : "scale(0.9)",
                  }}
                >
                  <div className="relative w-full h-full">
                    {/* Sombra no topo */}
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

                    <Dialog>
                      <DialogTrigger>
                        <img
                          src={img.src}
                          alt={img.description}
                          className="object-cover cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="w-full h-[56vw] xl:max-h-[800px] max-w-[80vw] p-2 flex items-center justify-center">
                        <DialogTitle className="sr-only hidden">
                          {img.description}
                        </DialogTitle>
                        <div className="relative w-full h-full">
                          <img
                            src={img.src}
                            alt={img.description}
                            className="object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div
                    className={`text-white bg-[#803A2C] h-12 w-full flex justify-center items-center text-[10px]`}
                    style={{
                      marginBottom: current === index ? "8px" : "",
                    }}
                  >
                    {img.description}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
