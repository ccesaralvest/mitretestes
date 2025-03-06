"use client";
import Image from "next/image";
import CustomButton from "../CustomButton";

const Tribeca = () => {
  return (
    <section id="tribeca" className="w-full">
      <div className="flex flex-col justify-between mt-78px items-center md:flex-row md:my-[60px] ">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex flex-wrap order-2 px-6 md:order-1 lg:w-[40%] md:w-[65%]"
        >
          <div className="relative  md:w-[100%] font-unineue text-black mt-5 md:mr-2 pl-3 py-2 xl:pl-[3rem]">
            <div className="relative md:mb-[5rem] mb-[2rem] md:ml-8">
              <span className="font-adero text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] left-0">
                <strong>On board:</strong>
                <span> o melhor de dois mundos.</span>
              </span>
              <div className="relative inset-0">
                <div className="absolute  w-[12rem] bottom-0 -left-[5.4rem] md:border-t border-foreground xl:-left-[7rem] xl:border-1 xl:w-[18rem]"></div>
                <div className="absolute left-[-3%] top-[-117px] h-[8rem] md:border-r border-foreground xl:border-1.5 md:h-[15rem] md:top-[-215px]"></div>
              </div>
            </div>
            <div className=" grow font-medium md:mr-2 space-y-2 md:ml-7 md:text-[9px] w-full xl:w-[40.5rem] xl:text-[1rem] xl:space-y-4 xl:mt-[3rem] md:max-w-[92%]">
              <p className="w-full text-[0.775rem] leading-[1.625rem]">
                Tribeca e Brooklin se encontram em um estilo de vida sofisticado
                e dinâmico. A arquitetura une elegância e modernidade, inspirada
                na autenticidade industrial nova-iorquina, com design que
                equilibra funcionalidade e sofisticação. Os espaços de lazer
                foram projetados para oferecer experiências únicas, do
                relaxamento ao convívio social, trazendo a vibração cosmopolita
                de Tribeca com o charme acolhedor do Brooklin.
              </p>
              {/*  <p>
              Tem cultura diversificada, que inclui um festival de cinema,
              restaurantes famosos e tours históricos, atraindo mentes criativas
              de todo o mundo. É um bairro repleto de galerias de arte e
              fotografia, bibliotecas e livrarias, produtoras e sets de
              filmagem, cafés, bares e restaurantes. Além disso, o bairro conta
              com um dos maiores festivais de cinema do mundo, o Tribeca
              Festival.
            </p>
            <p>
              Na arquitetura e no design temos uma grande variedade de conceitos
              e estilos: Neo-gregos e fachadas de ferro forjado, em prédios
              baixos em estilo loft. Além de estilos como o renascentista,
              italiano e federal americano em contraste com prédios modernos,
              feitos das mais atuais tecnologias.
            </p> */}
              <a href="#contact" className="block">
                <CustomButton text="SAIBA MAIS" />
              </a>
            </div>
            <div className="absolute -left-[2.1rem] top-1/2 transform -translate-y-1/2 w-[12px] h-[104px] bg-foreground md:w-[22px] w-[16px] xl:w-[42px] xl:h-[249px]"></div>
          </div>
        </div>
        <div className="grow md:order-1  md:my-20 md:mt-6 ml-[8%] !w-[92%] md:w-[60%] w-full">
          <div className="relative   md:top-[76px] lg:top-[102px] xl:top-[140px] w-full">
            <Image
              src="/imgs/brooklin.png"
              alt="LOGO STATION BROOKLIN"
              layout="responsive"
              width={308}
              height={155}
              className="w-full h-full object-fill inset-0 z-10 absolute lg:left-[-12%]  md:left-[-10%]"
            />
          </div>
          <div className="relative ">
            <Image
              src="/imgs/fundo-tribeca.svg"
              alt="LOGO STATION"
              layout="responsive"
              width={308}
              height={155}
              className=" w-full h-full object-fill inset-0 z-10 "
            />
            <div className="absolute inset-0 absolute inset-0 h:[105%]">
              {/* Linhas - bordas */}
              <div className="absolute bottom-0 w-[70%]  left-[-1rem] border-t border-foreground border-1   md:top-0"></div>
              <div className="absolute h-[107%] border-r border-foreground md:h-[100%] md:bottom-[22px] md:h-[100%] xl:border-1.5 xl:h-[100%] "></div>

              <div className="absolute h-[107%] border-0 md:border-1 border-r border-foreground md:h-[100%] md:bottom-[22px] md:h-[100%] xl:border-1.5 xl:h-[100%] "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tribeca;
