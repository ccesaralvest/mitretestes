import Image from "next/image";

import CustomButton from "../CustomButton";

const Hero = () => (
  <section id="homeHero" className="w-full flex flex-col">
    <div className="w-full flex justify-between self-center mt-[67px] md:mt-[75px] relative">
      <div className="absolute bottom-0 opacity-[0.3] left-0 w-full h-[60%] bg-[url(/imgs/cement-wall.jpeg)] bg-cover bg-bottom z-[-1]"></div>
      <div className="relative flex flex-col  flex-1 justify-end">
      
        <div className="relative">
          <div className="relative z-20">
            <img
              src="/imgs/fachada-topo.png"
              alt="LOGO STATION"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute inset-0">
            {/* Top border */}
            {/*   <div className="absolute left-5 right-0 top-16 w-[95%] border-t border-foreground sm:w-[48,31rem] sm:left-14 sm:top-28 xl:top-[20rem] xl:border-2 xl:w-[100%] "></div>

            <div className="absolute top-10 right-0 bottom-0 h-[50%]  border-r border-foreground  sm:h-[80%]  sm:top-16 xl:border-2 xl:top-[35%]"></div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-around md:justify-between items-start">
        <div className="z-10 w-[50%] mt-8 ml-[11%]">
          {/* Imagem corrigida */}
          <img
            src="/imgs/logo-station.svg"
            alt="LOGO STATION"
          
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col items-end justify-center gap-1 mr-2 sm:mr-10 md:mr-8 md:gap-4 lg:mr-5 max-w-[60%] ml-[7%] h-[50%]">
          <div className="flex items-start justify-center gap-2 xl:gap-8">
            {/* imgm corrigida */}
            <img
              src="/imgs/medida_topo.png"
              alt="Euture"
              className="w-full h-auto object-cover"
            />
          </div>

          <p
            className="text-[0.5rem] leading-[10px] md:leading-[1.2rem] sm:text-[0.55rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[1rem]    
       text-black uppercase font-adero text-end self-end max-w-[100%]"
          >
            Viva com <strong>praticidade</strong> e <strong>conecte-se</strong>{" "}
            <br />
            com o <strong>melhor de São Paulo</strong>.
          </p>

          <a href="#contact" className="block">
            <CustomButton />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
