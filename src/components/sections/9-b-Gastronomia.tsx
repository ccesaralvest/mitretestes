import React from "react";
import LocationItem from "../ui/LocationPin";
import Image from "next/image";

function LocationItemOutput() {
  return (
    <section     id="gastronomia" className="relative min-h-screen bg-white  md:p-8 md:p-0 pb-[74px] md:pt-[67px]">
       <img
        src="/imgs/old-cement.svg"
        className="absolute md:hidden bottom-0 right-0 h-[50px]"
        alt="Old Cement"
      />
  
      <img
        src="/imgs/old-cement-desk.svg"
        className="absolute hidden h-[80px] md:block bottom-0 right-0 mt-4"
        alt="Old Cement"
      />
      <img
        src="/imgs/box-left.svg"
        className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 h-[28%]"
        alt="Old Cement"
      />
      <div className="relative h-full w-full flex items-center justify-center px-0 md:px-0   md:pb-0">
        <div   data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className="hidden md:block absolute w-full h-full z-10  md:max-w-[430px] lg:max-w-[540px] left-0 top-[-32px] md:top-0">
          <Image
            src="/imgs/gastroImage.png"
            alt="Gastro Image"
            layout="responsive"
            className=" w-full h-auto object-cover "
            width={208}
            height={220}
          />
        </div>
        <div   data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className="w-full max-w-7xl flex flex-col md:flex-row z-10">
          <div className="w-full md:w-[41%] pt-[24px] md:pt-0 md:pr-0">
            <Image
              src="/imgs/gastroImage-mobile.png"
              alt="Gastro Image"
              layout="responsive"
              className=" w-full h-auto object-cover md:hidden"
              width={208}
              height={220}
            />
          </div>
          <div className="w-full  p-8 md:py-16 md:px-0 md:w-[59%] mt-4 md:mt-0 md:flex md:items-end lg:flex lg:items-center md:mt-[6px] lg:mt-[28px]">
            <div className="max-w-4xl mx-auto md:text-[12px] font-unineue text-black lg:text-sm">
              {/* Paragraph at the top */}
              <p className="text-sm md:text-[12px] xl:text-sm mb-6 ">
                Poucas regiões na cidade reúnem uma cena cultural tão vibrante
                que inclui galerias de arte, teatros e livrarias com diversas
                atividades para todas as faixas etárias. O Brooklin também
                abriga um excelente número de instituições renomadas de ensino
                médio e fundamental, além da proximidade de grandes faculdades e
                universidades.
              </p>

              <div className="grid grid-cols-1 uppercase md:grid-cols-2 md:gap-x-4 gap-y-0 md:gap-y-8 md:text-[10px] lg:text-sm">
                <div>
                  <div className="mb-8">
                    <h3 className="font-bold mb-2 text-sm">GASTRONOMIA</h3>
                    <div className="space-y-1 md:text-[10px] xl:text-sm text-[12px]">
                      <LocationItem name="Vicolo Nostro" minutes={3} />
                      <LocationItem name="Portucho" minutes={3} />
                      <LocationItem name="Pizzaria A Esperança" minutes={3} />
                      <LocationItem name="Natory Sushi" minutes={7} />
                      <LocationItem name="Jucalemão " minutes={5} />
                      <LocationItem name="Bar do Juarez" minutes={6} />
                      <LocationItem name="Lolla Osteria" minutes={7} />
                      <LocationItem name="Manga bar" minutes={6} />
                    </div>
                  </div>

                  {/* Serviços e Lazer section */}
                  <div className="mb-8">
                    <h3 className="font-bold mb-2 text-sm">SERVIÇOS E LAZER</h3>
                    <div className="space-y-1 md:text-[10px] xl:text-sm text-[12px]">
                      <LocationItem name="CIA Athletica" minutes={6} />
                      <LocationItem name="Buddha Spa Av Morumbi" minutes={3} />
                      <LocationItem name="Shopping Market Place" minutes={5} />
                      <LocationItem name="Shopping Morumbi" minutes={6} />
                      <LocationItem name="Shopping Ibirapuera" minutes={7} />
                      <LocationItem name="Bluefit" minutes={2} />
                      <LocationItem
                        name="Padaria Pássaros e Flores"
                        minutes={4}
                      />
                      <LocationItem name="Carrefour" minutes={5} />
                      <LocationItem name="Parque do Povo" minutes={7} />
                      <LocationItem name="Smart Fit" minutes={7} />
                      <LocationItem name="Parque Ibirapuera" minutes={12} />
                      <LocationItem name="Parque Bruno Covas" minutes={12} />
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div>
                  {/* Mobilidade section */}
                  <div className="mb-8">
                    <h3 className="font-bold text-sm mb-2">MOBILIDADE</h3>
                    <div className="space-y-1 md:text-[10px] xl:text-sm text-[12px]">
                      <LocationItem name="Av. Morumbi" minutes={2} />
                      <LocationItem name="Av. Nações Unidas" minutes={3} />
                      <LocationItem name="Estação Brooklin" minutes={3} />
                      <LocationItem name="Av. Santo Amaro" minutes={3} />
                      <LocationItem
                        name="Av. Vereador José Diniz"
                        minutes={4}
                      />
                      <LocationItem name="Ponte Estaiada" minutes={6} />
                      <LocationItem name="Av. Bandeirantes" minutes={7} />
                      <LocationItem
                        name="Av. Luis Carlos Berrini"
                        minutes={10}
                      />
                      <LocationItem name="Av. Faria Lima" minutes={11} />
                    </div>
                  </div>

                  {/* Saúde section */}
                  <div className="mb-8">
                    <h3 className="font-bold text-sm mb-2">SAÚDE</h3>
                    <div className="space-y-1 md:text-[10px] xl:text-sm text-[12px]">
                      <LocationItem
                        name="Hospital Israelita A. Einstein"
                        minutes={10}
                      />
                      <LocationItem
                        name="Hospital São Luiz Itaim"
                        minutes={12}
                      />
                      <LocationItem name="Droga Raia" minutes={4} />
                      <LocationItem name="Lavoisier Santo Amaro" minutes={4} />
                    </div>
                  </div>

                  {/* Ensino section */}
                  <div className="mb-8">
                    <h3 className="font-bold text-sm mb-2">ENSINO</h3>
                    <div className="space-y-1 md:text-[10px] xl:text-sm text-[12px]">
                      <LocationItem
                        name="Unip Chacara Santo Antônio"
                        minutes={4}
                      />
                      <LocationItem
                        name="Cultura Inglesa Santo Amaro"
                        minutes={6}
                      />
                      <LocationItem
                        name="Faculdade Estácio Campo Belo"
                        minutes={7}
                      />
                      <LocationItem name="CNA Santo Amaro" minutes={7} />
                    </div>
                  </div>

                  {/* Cultura section */}
                  <div className="mb-8">
                    <h3 className="font-bold text-sm mb-2">CULTURA</h3>
                    <div className="space-y-1 md:text-[10px] xl:text-sm text-[12px]">
                      <LocationItem name="Teatro Vivo" minutes={3} />
                      <LocationItem
                        name="Casa de Vidro Lina Bo Bardi"
                        minutes={6}
                      />
                      <LocationItem
                        name="Teatro Multiplan Morumbi Shopping"
                        minutes={6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Location item component with name and minutes

export default LocationItemOutput;
