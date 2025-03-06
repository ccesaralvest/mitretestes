"use client";
import React from "react";

const professionals = [
  {
    name: "ALEXANDRE MILLEU",
    role: "PROJETO ARQUITETÔNICO",
    description:
      "Tribeca e Brooklin se encontram em um estilo de vida sofisticado e dinâmico. A arquitetura une elegância e modernidade, inspirada na autenticidade industrial nova-iorquina, com design que equilibra funcionalidade e sofisticação. Os espaços de lazer foram projetados para oferecer experiências únicas, do relaxamento ao convívio social, trazendo a vibração cosmopolita de Tribeca com o charme acolhedor do Brooklin.",
    imageUrl: "/imgs/p1.svg",
  },
  {
    name: "PAULA AVEIRO",
    role: "PROJETO INTERIORES",
    description:
      "O projeto de interiores do Haus Mitre Station Brooklin foi inspirado em Tribeca, trazendo um conceito cosmopolita e contemporâneo com elementos da atmosfera nova-iorquina. Tons de terracota, concreto, cinza e caramelo, combinados com texturas de tijolos e couro, conferem elegância e personalidade. As áreas comuns foram projetadas para oferecer conforto e uma experiência diversificada de espaços, criando uma atmosfera que remete a Tribeca em cada detalhe.",
    imageUrl: "/imgs/P2-novo.png",
  },
  {
    name: "NÚCLEO ARQUITETURA DA PAISAGEM",
    role: "PROJETO PAISAGÍSTICO",
    description:
      "O paisagismo do Haus Mitre Station Brooklin é glamouroso e aconchegante, com linhas poéticas que valorizam o verde dentro de uma estética cosmopolita. O projeto urbano traz referências de Tribeca, associando o bem-estar e a vanguarda. A presença do tijolo, seus tons terrosos, e a vegetação diversificada criam uma atmosfera vibrante e envolvente, proporcionando momentos de lazer e relaxamento conectados aos ambientes construídos.",
    imageUrl: "/imgs/p3.svg",
  },
];

const Professionals = () => {
  return (
    <section id="professionals" className="md:pt-[55px]">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="h-full   md:py-0 pt-[3rem] w-full flex xl:min-h-[300px] md:min-h-[200px]"
      >
        <div className="relative w-full pl-[27px] min-h-[130px] pb-[18px] font-unineue text-black mt-5 md:pl-3 xl:pl-[3rem] flex flex-row flex-nowrap justify-between items-start justify-end items-end xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px]">
          {/* Left Box */}
          <div className="md:ml-[3rem] ml-2 md:h-full w-[100%] flex flex-row items-end md:max-w-1/2 md:w-[50%]">
            <span className="relative font-adero text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] md:mb-[1.7rem] md:ml-[0.3rem] lg:ml-[0.5rem] md:p-[4px]">
              <span>Um </span>
              <strong>projeto </strong>
              <span>assinado pelos mais </span>
              <strong>renomados profissionais</strong>
              <div className="absolute w-[12rem] bottom-0 -left-[1.3rem] md:-left-[5.4rem] border-t border-foreground md:-left-[105px] md:border-1 md:w-[13rem]  xl:w-[18rem]"></div>
            </span>

            <div className="inset-0">
              <div className="absolute h-full left-[32px]  md:left-[62px] xl:left-[91px] top-0 border-foreground border-l border-1"></div>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-[url(/imgs/TEX-CIMENTO.png)]   bg-cover bg-center bg-no-repeat mb-[57px] md:mb-[0] h-[50%] md:h-[100%] md:max-w-[56vw] lg:max-w-[64vw] w-full"></div>
        </div>
      </div>

      <div className=" bg-white p-8">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="false"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {professionals.map((professional, index) => (
            <React.Fragment key={professional.name}>
              <div className="p-6 relative">
                <img
                  src={professional.imageUrl}
                  alt={professional.name}
                  className="w-full aspect-square object-cover grayscale mb-4"
                />
                <h2 className="text-xl font-bold mb-4">{professional.name}</h2>
                <p className="text-xs uppercase text-gray-500 mb-2">
                  {professional.role}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {professional.description}
                </p>

                {index < professionals.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-foreground" />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;
