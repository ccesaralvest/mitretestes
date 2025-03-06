/* import Image from "next/image"; */

const LocalCity = () => {
  return (
    <section 
     id="localCity" className="min-h-screen md:min-h-full sm:pt-[64px] relative">
      <div className="absolute bottom-0 opacity-[0.4] left-0 w-full h-full bg-[url(/imgs/cement-wall.jpeg)] bg-cover bg-bottom z-[-0]"></div>

      <div   data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className="relative pt-[14px] w-full pl-[27px] md:pl-4 xl:pl-[3rem] -mt-[1rem] min-h-[130px] pb-[18px] font-unineue text-black xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex flex-row flex-nowrap items-end">
        <div className=" w-full max-w-[240px] sm:max-w-[240px] md:ml-[3rem] ml-2 md:mt-[3rem] md:h-full md:max-w-[280px] lg:max-w-[310px] xl:max-w-[400px] flex flex-row items-end">
          <span className="relative uppercase font-adero text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] md:mb-[.875rem] md:ml-[0.3rem] lg:ml-[0.5rem] md:p-[4px]">
            <span>O MAIOR EIXO DE CRESCIMENTO DA CIDADE</span>

            {/* Linha horizontal */}
            <div className="absolute w-[5rem] sm:w-[12rem] bottom-0 -left-[1.3rem] md:-left-[105px] border-t border-foreground md:border-1 md:w-[13rem] xl:w-[18rem]"></div>
          </span>
          {/* Linha vertical */}
          <div className="absolute h-full top-0 left-[32px] md:left-[62px] xl:left-[91px] border-l border-foreground border-1"></div>
        </div>
      </div>
      <div   data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className=" h-full w-full flex items-center justify-center p-4 md:p-8 md:pb-0">
        <div className="w-full max-w-8xl flex flex-col md:flex-row z-10">
          {/* Left side - Text content */}
          <div className="w-full order-2 md:order-1 md:w-[30%] lg:w-[22%] p-4 md:p-8 md:pr-0">
            <div className="uppercase mt-8 md:mt-12 leading-[2.5] text-xs md:text-sm grid grid-cols-2 md:grid-cols-1 justify-items-center md:justify-items-start">
              <div className=" text-black font-unineue gap-y-1">
                <p>01. Estação Brooklin do metrô</p>
                <p>02. Shopping Morumbi</p>
                <p>03. Ponte Estaiada</p>
                <p>04. Vicolo Nostro</p>
                <p>05. Portucho Brooklin</p>
                <p>06. Shopping Market Place</p>
                <p>07. Parque Bruno Covas</p>
                <p>08. Parque do Povo</p>
                </div>
              <div className=" text-black font-unineue gap-y-1">
                <p>09. Hípica Paulista</p>
                <p>10. Carrefour</p>
                <p>11. Pão de Açúcar</p>
                <p>12. Maremonti</p>
                <p>13. Pobre Juan</p>
                <p>14. Hospital Santa Paula</p>
                <p>15. Colégio Elvira Brandão</p>
                <p>16. Pueri Domus</p>
              </div>
            </div>
          </div>

          {/* Right side - Map image */}
          <div className="w-full order-1 md:order-2 md:w-[70%] lg:w-[78%] mt-4 md:mt-0 md:flex md:items-end lg:flex lg:items-center">
            <img
              src="/imgs/map-ativo.png"
              alt="Mapa ilustrado da cidade"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalCity;
