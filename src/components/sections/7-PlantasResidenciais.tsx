"use client";
import React, { useState } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const apartmentTypes = [
  {
    size: "63 M²",
    type: "2 DORM.",
    details: "2 DORMS. • SUITE • VAGA OPÇÃO LIVING AMPLIADO",
    finalText:
      "Ilustração artística da planta de 63m2, final 20 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    image: "imgs/plantas/planta-1.png",
  },
  {
    size: "43 M²",
    type: "1 DORM.",
    finalText:
      "Ilustração artística da planta de 43m2, final 21 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    details: "1 DORM. • SUITE • VAGA",
    image: "imgs/plantas/planta-2.png",
  },
  {
    size: "31 M²",
    type: "1 DORM.",
    finalText:
      "Ilustração artística da planta de 31m2, final 12 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. *Opção especifica da unidade residencial. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    details: "1 DORM. •",
    image: "imgs/plantas/planta-3.png",
  },
  {
    size: "26 M²",
    type: "STUDIO",
    finalText:
      "Ilustração artística da planta de 26m2, final 05 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. *Opção especifica da unidade residencial. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    details: "STUDIO •",
    image: "imgs/plantas/planta-4.png",
  },
];

// Features for each apartment type
const apartmentFeatures = [
  [
    "Infraestrutura para ar-condicionado na sala de estar e dormitórios",
    "Infraestrutura para aquecedor de passagem a gás",
    "Ponto de água quente na cozinha e banhos",
    "Bacia com válvula dual flux",
    "Bancadas da cozinha e banheiro entregues",
    "Ponto para máquina de lavar louça na cozinha",
    "Ponto elétrico para instalação de churrasqueira elétrica no terraço social",
    "Laje nivelada entre terraço social e sala de estar",
    "Unidade entregue com piso laminado nos dormitórios e revestimento nas áreas molhadas",
    "Espaço independente de área técnica para condensadora de ar-condicionado",
    "Personal Home by Mitre - Oferta de acabamentos e equipamentos para a personalização da unidade",
  ],
  [
    "Infraestrutura para ar-condicionado na sala de estar e suíte",
    "Lavabo",
    "Ponto de água quente na cozinha e banho",
    "Ponto para máquina de lavar louça na cozinha",
    "Bacia com válvula dual flux",
    "Bancadas da cozinha e banheiro entregues",
    "Ponto elétrico para grill elétrico no terraço social",
    "Infraestrutura para aquecedor de passagem a gás",
    "Laje nivelada entre terraço social e sala de estar",
    "Janela da suíte com persiana de enrolar",
    "Unidade entregue com piso laminado no dormitório e revestimento nas áreas molhadas",
    "Espaço independente de área técnica para condensadora de ar-condicionado",
    "Personal Home by Mitre - Oferta de acabamentos e equipamentos para a personalização da unidade",
  ],
  [
    "INFRAESTRUTURA PARA AR-CONDICIONADO NA SALA DE ESTAR",
    "PONTO DE ÁGUA QUENTE NA COZINHA E BANHO",
    "PONTO PARA MÁQUINA DE LAVAR LOUÇA NA COZINHA",
    "BACIA COM VÁLVULA DUAL FLUX",
    "BANCADAS DA COZINHA E BANHEIRO ENTREGUES",
    "PONTO ELÉTRICO PARA GRILL ELÉTRICO NO TERRAÇO SOCIAL",
    "LAJE NIVELADA ENTRE TERRAÇO SOCIAL E SALA DE ESTAR",
    "JANELA COM PERSIANA DE ENROLAR",
    "UNIDADE ENTREGUE COM PISO LAMINADO E REVESTIMENTO NAS ÁREAS MOLHADAS",
    "ESPAÇO INDEPENDENTE DE ÁREA TÉCNICA PARA CONDENSADORA DE AR-CONDICIONADO",
    "PERSONAL HOME BY MITRE - OFERTA DE ACABAMENTOS E EQUIPAMENTOS PARA A PERSONALIZAÇÃO DA UNIDADE",
  ],
  [
    "INFRAESTRUTURA PARA AR-CONDICIONADO",
    "PONTO DE ÁGUA QUENTE NA COZINHA E BANHO",
    "PONTO PARA MÁQUINA DE LAVAR LOUÇA NA COZINHA",
    "BACIA COM VÁLVULA DUAL FLUX",
    "BANCADAS DA COZINHA E BANHEIRO ENTREGUES",
    "LAJE NIVELADA ENTRE TERRAÇO E SALA",
    "JANELA COM PERSIANA DE ENROLAR",
    "UNIDADE ENTREGUE COM PISO LAMINADO E REVESTIMENTO NAS ÁREAS MOLHADAS",
    "ESPAÇO INDEPENDENTE DE ÁREA TÉCNICA PARA CONDENSADORA DE AR-CONDICIONADO",
    "PERSONAL HOME BY MITRE - OFERTA DE ACABAMENTOS E EQUIPAMENTOS PARA A PERSONALIZAÇÃO DA UNIDADE",
  ],
];

function PlantasResidenciais() {
  const [selectedType, setSelectedType] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);

  const handlePrevious = () => {
    setSelectedType((prev) =>
      prev === 0 ? apartmentTypes.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedType((prev) =>
      prev === apartmentTypes.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="plantas-residenciais"
      className="relative min-h-screen bg-white text-black pt-[64px] lg:pt-[74px]"
    >
      <div className="absolute hidden lg:block h-[28%] -translate-y-1/2 top-1/2 right-0 ">
        <Image
          src="/imgs/box-left.svg"
          className="w-full h-full object-cover "
          alt="Old Cement"
          width={100}
          height={100}
        />
      </div>

      <div
        id="plantas-title"
        className="relative w-full pl-[27px] md:pl-4 xl:pl-[3rem] -mt-[1rem] min-h-[130px] pb-[18px] font-unineue text-black xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex flex-row flex-nowrap items-end"
      >
        <div className="w-full max-w-[200px] sm:max-w-[200px] md:ml-[3rem] ml-2 md:mt-[3rem] md:h-full md:max-w-[210px] lg:max-w-[250px] xl:max-w-[400px] flex flex-row items-end">
          <span className="relative uppercase font-adero text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] md:mb-[.875rem] md:ml-[0.3rem] lg:ml-[0.5rem] md:p-[4px]">
            <span>PLANTAS</span>

            {/* Linha horizontal */}
            <div className="absolute w-[5rem] sm:w-[12rem] bottom-0 -left-[1.3rem] md:-left-[105px] border-t border-foreground md:border-1 md:w-[13rem] xl:w-[18rem]"></div>
          </span>
          {/* Linha vertical */}
          <div className="absolute h-full top-0 left-[32px] md:left-[62px] xl:left-[91px] border-l border-foreground border-1"></div>
        </div>
      </div>

      <div id="imagem-plantas" className="max-w-[1200px] mx-auto px-4 py-8">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 lg:pr-12 md:min-h-[350px]">
            <div className="hidden md:grid md:grid-cols-4 md:gap-0 mb-6">
              {apartmentTypes.map((apt, index) => (
                <button
                  key={index}
                  className={`py-3 px-2 border border-black transition-colors text-xs ${
                    selectedType === index
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedType(index)}
                >
                  {apt.size} | {apt.type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-2 mb-6 md:hidden">
              {apartmentTypes.map((apt, index) => (
                <a
                  href="#plantas-title"
                  key={index}
                  onClick={() => setSelectedType(index)}
                  className={`text-center py-3 px-4 border border-black transition-colors ${
                    selectedType === index
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {apt.size} | {apt.type}
                </a>
              ))}
            </div>

            <div className="mb-6 hidden lg:block">
              <h3 className="text-[12px] font-normal mb-4">
                {apartmentTypes[selectedType].details}
              </h3>
            </div>

            <div className="hidden md:block ml-4">
              <div className="grid grid-cols-1 gap-y-2">
                {apartmentFeatures[selectedType].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-black flex-shrink-0 mt-1"></div>
                    <span className="text-xs font-normal uppercase">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {showFeatures && (
              <div className="md:hidden mt-4 ml-2">
                {apartmentFeatures[selectedType].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 mb-2">
                    <div className="w-1 h-1 rounded-full bg-black flex-shrink-0 mt-1"></div>
                    <span className="text-[12px] uppercase">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative mt-2 lg:mt-0 lg:w-1/2">
            <p className="text-xs text-center mt-2 md:hidden">
              *IMAGEM PRELIMINAR
            </p>

            {/* Mobile navegação */}
            <div className="relative flex items-center justify-center mb-4 md:mb-2 lg:hidden">
              <button
                className="flex h-[52px] w-[46px] md:hidden items-center justify-center text-black"
                onClick={handlePrevious}
              >
                <ChevronLeft size={52} strokeWidth={1} />
              </button>

              <span className="text-[12px] lg:hidden w-[50%] text-center">
                {apartmentTypes[selectedType].details}
              </span>

              <button
                className="flex h-[52px] w-[46px] md:hidden items-center justify-center text-black"
                onClick={handleNext}
              >
                <ChevronRight size={52} strokeWidth={1} />
              </button>

              <a
                href="#imagem-plantas"
                className="md:hidden absolute right-0 w-10 h-10 bg-black flex items-center justify-center"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                <Plus className="text-white" size={16} strokeWidth={3} />
              </a>
            </div>

            {/* Desktop navegação */}
            <div className="relative flex items-center">
              <button
                className="hidden md:block absolute left-0 lg:top-1/3 z-10 w-10 h-10 md:w-[52px] md:h-26 flex items-center justify-center text-foreground hover:text-gray-800 "
                onClick={handlePrevious}
                aria-label="Apartamento anterior"
              >
                <ChevronLeft size={62} strokeWidth={1.5} />
              </button>

              <div className="relative w-full">
                <div className="relative w-full mx-auto min-h-[300px] md:w-[80%]">
                  <img
                    src={apartmentTypes[selectedType].image}
                    alt={`Planta do apartamento ${apartmentTypes[selectedType].size}`}
                    className="w-full h-full object-cover  "
                  />
                </div>
                <p className="text-xs text-left mt-2 hidden md:block">
                  *IMAGEM PRELIMINAR
                </p>
              </div>

              <button
                className="hidden md:block absolute right-2 lg:top-1/3 z-10 w-10 h-10 md:w-[52px] md:h-26 flex items-center justify-center text-foreground hover:text-gray-800 "
                onClick={handleNext}
                aria-label="Próximo apartamento"
              >
                <ChevronRight size={62} strokeWidth={1.5} />
              </button>
            </div>

            <p className="text-[10px] mt-4 text-gray-600">
              ILUSTRAÇÃO ARTÍSTICA DA PLANTA DE{" "}
              {apartmentTypes[selectedType].size}. FINAL 21 COM SUGESTÃO DE
              DECORAÇÃO. OS MÓVEIS E UTENSÍLIOS SÃO DE DIMENSÕES COMERCIAIS E
              NÃO FAZEM PARTE DO CONTRATO DE COMPRA E VENDA DO IMÓVEL. AS
              MEDIDAS, ÁREAS, FACES DAS PAREDES. A PLANTA APRESENTADA É
              ILUSTRATIVA E CONTÉM SUGESTÃO DE DECORAÇÃO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlantasResidenciais;
