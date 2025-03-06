"use client";
import React from "react";

interface AreaItem {
  id: string;
  title: string;
}

const FloorPlan: React.FC = () => {
  const internalAreas: AreaItem[] = [
    { id: "01", title: "LOBBY" },
    { id: "02", title: "FITNESS CENTER" },
    { id: "03", title: "SAUNA" },
    { id: "04", title: "MASSAGEM" },
    { id: "05", title: "DESCANSO" },
    { id: "06", title: "BEAUTY CARE" },
    { id: "07", title: "LAUNDRY" },
    { id: "08", title: "COWORKING" },
    { id: "09", title: "GAME LOUNGE" },
    { id: "10", title: "STEAK BAR" },
    { id: "11", title: "CELEBRATION HALL" },
    { id: "12", title: "PRIVATE TERRACE" },
    { id: "13", title: "KIDS LOUNGE" },
  ];

  const externalAreas: AreaItem[] = [
    { id: "14", title: "PISCINA ADULTO COM RAIA 25M" },
    { id: "15", title: "PISCINA INFANTIL" },
    { id: "16", title: "SOLARIUM" },
    { id: "17", title: "SPA" },
    { id: "18", title: "PLAYGROUND" },
    { id: "19", title: "SQUARE" },
    { id: "20", title: "SPORTS ARENA" },
  ];

  return (
    <section id="areasComuns" className="relative min-h-screen mb-[16px] sm:mb-[0] md:py-[54px] lg:pt-[74px]">
      <img
        src="/imgs/old-mob-cimento.png"
        className="absolute md:hidden bottom-0 right-0"
        alt="Old Cement"
      />
      <img
        src="/imgs/old-mob-cimento.png"
        className="absolute md:hidden top-0 right-0 mt-4"
        alt="Old Cement"
      />
      <img
        src="/imgs/old-desktop-cimento.png"
        className="absolute hidden h-14 md:block bottom-0 left-0 mt-4"
        alt="Old Cement"
      />
      <img
        src="/imgs/box-left.svg"
        className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 h-[28%]"
        alt="Old Cement"
      />
      <div   data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className="relative w-full pl-[27px] md:pl-4 xl:pl-[3rem] -mt-[1rem] min-h-[130px] pb-[18px] font-unineue text-black xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex flex-row flex-nowrap items-end">
        <div  className="w-full max-w-[200px] sm:max-w-[200px] md:ml-[3rem] ml-2 md:mt-[3rem] md:h-full md:max-w-[210px] lg:max-w-[250px] xl:max-w-[400px] flex flex-row items-end">
          <span className="relative uppercase font-adero text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] md:mb-[.875rem] md:ml-[0.3rem] lg:ml-[0.5rem] md:p-[4px]">
            <span>Implantação das </span>
            <strong>áreas comuns</strong>
            {/* Linha horizontal */}
            <div className="absolute w-[5rem] sm:w-[12rem] bottom-0 -left-[1.3rem] md:-left-[105px] border-t border-foreground md:border-1 md:w-[13rem] xl:w-[18rem]"></div>
          </span>
          {/* Linha vertical */}
          <div className="absolute h-full top-0 left-[32px] md:left-[62px] xl:left-[91px] border-l border-foreground border-1"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 text-black font-unineue">
        {/* Desktop Layout */}
        <div   data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className="hidden md:flex gap-8">
          {/* Left side - Areas List */}
          <div className="w-1/4 md:pl-[2%]">
            <div>
              <h2 className="text-base font-bold mb-2 uppercase">
                Áreas Internas
              </h2>
              <ul className="space-y-1 mb-6">
                {internalAreas.map((area) => (
                  <li key={area.id} className="flex items-start text-xs">
                    <span className="font-medium mr-1">{area.id}.</span>
                    <span>{area.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold mb-2 uppercase">
                Áreas Externas
              </h2>
              <ul className="space-y-1">
                {externalAreas.map((area) => (
                  <li key={area.id} className="flex items-start text-xs">
                    <span className="font-medium mr-1">{area.id}.</span>
                    <span>{area.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - Floor Plan Image */}
          <div className="w-3/4">
            <div className="relative">
              <img
                src="/imgs/plantaGrande.png"
                alt="Floor Plan"
                className="w-full h-auto"
                style={{ aspectRatio: "2616/1096" }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div   data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className="md:hidden">
          {/* Floor Plan Image */}
          <div className="mb-6">
            <div className="relative">
              <img
                src="/imgs/plantaGrande.png"
                alt="Floor Plan"
                className="w-full h-auto"
                style={{ aspectRatio: "2616/1096" }}
              />
            </div>
          </div>

          {/* Divider line */}
          <div className="border-t border-foreground my-6 w-1/2 mx-auto"></div>

          {/* Areas Lists */}
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <div>
              <h2 className="text-base font-bold mb-2 uppercase">
                Áreas Internas
              </h2>
              <ul className="space-y-1">
                {internalAreas.slice(0, 7).map((area) => (
                  <li key={area.id} className="flex items-start text-xs">
                    <span className="font-medium mr-1">{area.id}.</span>
                    <span className="whitespace-nowrap truncate max-w-[120px]">
                      {area.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold mb-2 opacity-0">
                Áreas Internas
              </h2>
              <ul className="space-y-1">
                {internalAreas.slice(7).map((area) => (
                  <li key={area.id} className="flex items-start text-xs">
                    <span className="font-medium mr-1">{area.id}.</span>
                    <span>{area.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 justify-items-center">
            <div>
              <h2 className="text-base font-bold mb-2 uppercase">
                Áreas Externas
              </h2>
              <ul className="space-y-1">
                {externalAreas.map((area) => (
                  <li key={area.id} className="flex items-start text-xs">
                    <span className="font-medium mr-1">{area.id}.</span>
                    <span className="whitespace-nowrap max-w-[116px]">
                      {area.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
