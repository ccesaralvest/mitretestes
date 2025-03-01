import React from "react";

const Services = () => {
  return (
    <section id="services" className="min-h-100% bg-[#803A2C]">
      <div className="flex flex-col w-full relative md:flex-row">
     {/*  h-[75vw] */}
        <div className="sm:flex-1 min-w-screen relative z-10  sm:h-auto sm:min-h-[600px] lg:min-h-[750px] xl:min-h-[750px]">
          <img
            src="/imgs/19-beauty.svg"
            className="object-fill sm:object-cover h-full w-full"
            alt="Preparando quarto de hotel"
          />
          <div className="hidden md:block h-36 w-full bg-[linear-gradient(to_bottom,rgba(128,58,44,0)_10%,#803A2C_80%)] absolute bottom-0 sm:w-36 sm:h-full sm:bg-[linear-gradient(to_right,rgba(128,58,44,0)_10%,#803A2C_80%)] sm:-right-3"></div>
        </div>

        <div className="bg-[#803A2C] md:flex-1">
          <div className="relative max-w-[350px] sm:max-w-[400px] lg:max-w-[100%] xl:max-w-[60%] mt-12 md:mt-[98px] ml-9 uppercase text-[14px] text-white sm:text-[16px] lg:text-[16px] xl:text-[18px]">
            <span className="">
              UM PROJETO DE EXCELÊNCIA, COM A ASSINATURA DOS{" "}
            </span>
            <strong>MELHORES PARCEIROS.</strong>

            <div className="inset-0">
              <div className="absolute w-[70%] -bottom-1 left-[-2rem] border-t border-white xl:w-[30rem] xl:-bottom-3"></div>
              <div className="absolute bottom-0 border-r border-white left-[-4px] min-h-[27vw] sm:min-h-[200px] h-[158px] top-[-16vw] md:min-h-[14vw] md:top-[-7vw] xl:min-h-[220px]"></div>
            </div>
          </div>

          {/* servicesMobile */}
          <div
            id="servicesMobile"
            className="grid leading-[25px] font-unineue md:grid lg:hidden grid-cols-2 max-w-[500px] mx-auto gap-4 p-4 text-white sm:hidden mt-10"
          >
            {/* Column 1 */}
            <div className="space-y-8 ">
              <div id="atlhetica">
                <div className="flex flex-col items-start mb-2">
                  <img
                    src="/imgs/iconService/compAtlhetic.svg"
                    className="h-8 max-w-[100%] mb-2"
                    alt="Imagem Companhia Atlhetica"
                  />
                </div>
                <p className="text-[12px] text-left">
                  Garantia de equipamentos e especificações ideais para uma
                  academia de alto nível, proporcionando a melhor experiência de
                  treino para os moradores.
                </p>
              </div>

              <div id="cobasi">
                <div className="flex flex-col items-start mb-2">
                  <img
                    src="/imgs/iconService/cobasi.svg"
                    className="h-8 max-w-[100%] mb-2"
                    alt="Imagem Cobasi"
                  />
                </div>
                <p className="text-[12px] text-left">
                  Um espaço pet pensado para eles e para você. Campanhas e
                  ativações que tornam o ambiente mais amigável, seguro e bem
                  equipado para o seu amigão.
                </p>
              </div>

              <div id="modulocker">
                <div className="flex flex-col items-start mb-2">
                  <img
                    src="/imgs/iconService/modulocker.svg"
                    className="h-10 max-w-[100%] mb-2"
                    alt="Imagem Team Training"
                  />
                </div>
                <p className="text-[12px] text-left">
                  Instalação e operação de estação de recarga para carros
                  elétricos, trazendo mais conveniência para o dia a dia dos
                  moradores.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {/* Team Training */}
              <div id="teamTraining">
                <div className="flex flex-col items-start mb-2">
                  <img
                    src="/imgs/iconService/teamTraining.svg"
                    className="h-10 max-w-[100%] mb-0"
                    alt="Imagem Team Training"
                  />
                </div>
                <p className="text-[12px] text-left">
                  Aulas e atividades como yoga, futebol, balé e muito mais,
                  promovendo saúde, lazer e integração no condomínio.
                </p>
              </div>

              <div id="bluma">
                <div className="flex flex-col items-start mb-2 pt-4">
                  <img
                    src="/imgs/iconService/bluma.svg"
                    className="h-6 max-w-[100%] my-3"
                    alt="Imagem Bluma"
                  />
                </div>
                <p className="text-[12px] text-left">
                  Um espaço exclusivo operado pela Bluma, com serviços pay per
                  use como manicure, massagem e cabelo, proporcionando mais
                  praticidade para os moradores.
                </p>
              </div>

              <div id="omo">
                <div className="flex flex-col items-start mb-2">
                  <img
                    src="/imgs/iconService/omo.png"
                    className="h-10 max-w-[100%] mb-2"
                    alt="Imagem Omo"
                  />
                </div>
                <p className="text-[12px] text-left">
                  Tenha à disposição uma lavanderia by OMO, equipada com
                  máquinas de última geração para oferecer mais facilidade e
                  eficiência no seu dia a dia.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-start mb-2">
                <img
                  src="/imgs/iconService/ellegance.svg"
                  className="h-12 max-w-[100%] "
                  alt="Imagem Omo"
                />
              </div>
              <p className="text-[12px] text-left">
                Ajustes e reparos em peças de roupa no formato pay-per-use,
                garantindo conveniência os moradores.
              </p>
            </div>

            <div>
              <div className="flex flex-col items-start mb-2">
                <img
                  src="/imgs/iconService/nutricar.svg"
                  className="h-8 max-w-[100%] my-2"
                  alt="Imagem nutricar"
                />
              </div>
              <p className="text-[12px] text-left">
                Ajustes e reparos em peças de roupa no formato pay-per-use,
                garantindo conveniência os moradores.
              </p>
            </div>

            <div>
              <div className="flex flex-col items-start mb-2">
                <img
                  src="/imgs/iconService/ezvolt.svg"
                  className="h-8 max-w-[100%] my-2"
                  alt="Imagem nutricar"
                />
              </div>
              <p className="text-[12px] text-left">
                Instalação e operação de estação de recarga para carros
                elétricos, trazendo mais conveniência para o dia a dia dos
                moradores.
              </p>
            </div>
          </div>

          {/* servicesDesktop */}
          <div
            id="servicesDesktop"
            className="hidden font-unineue sm:grid md:hidden lg:grid grid-cols-3 gap-0 p-12 text-white"
          >
            {/* Row 1 */}
            <div className="relative pb-4 pr-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/compAtlhetic.svg"
                    className="h-8 max-w-[100%] mb-2"
                    alt="Companhia Atlhetica"
                  />
                </div>

                <p className="text-xs">
                  Garantia de equipamentos e especificações ideais para uma
                  academia de alto nível, proporcionando a melhor experiência de
                  treino para os moradores.
                </p>
              </div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-white/30"></div>
            </div>

            <div className="relative px-4 pb-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/teamTraining.svg"
                    className="h-10 max-w-[100%]"
                    alt="Team Training"
                  />
                </div>

                <p className="text-xs">
                  Aulas e atividades como yoga, futebol, balé e muito mais,
                  promovendo saúde, lazer e integração no condomínio.
                </p>
              </div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-white/30"></div>
            </div>

            <div className="pl-4 pb-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/cobasi.svg"
                    className="h-8 max-w-[100%] mb-2"
                    alt="Cobasi"
                  />
                </div>

                <p className="text-xs">
                  Um espaço pet pensado para eles e para você. Campanhas e
                  ativações que tornam o ambiente mais amigável, seguro e bem
                  equipado para o seu amigão.
                </p>
              </div>
            </div>

            {/* Row 2 */}

            {/* Bluma */}
            <div className="relative pt-4 pr-4 ">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/bluma.svg"
                    className="h-6 max-w-[100%] my-3"
                    alt="Bluma"
                  />
                </div>

                <p className="text-xs">
                  Um espaço exclusivo operado pela Bluma, com serviços pay per
                  use como manicure, massagem e cabelo, proporcionando mais
                  praticidade para os moradores.
                </p>
              </div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-white/30"></div>
            </div>

            {/* Modulocker*/}
            <div className="relative  px-4 pt-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/modulocker.svg"
                    className="h-10 max-w-[100%] mb-2"
                    alt="Modulocker"
                  />
                </div>

                <p className="text-xs">
                  Instalação e operação de estação de recarga para carros
                  elétricos, trazendo mais conveniência para o dia a dia dos
                  moradores.
                </p>
              </div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-white/30"></div>
            </div>

            <div className="pl-4 pt-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/omo.png"
                    className="h-10 max-w-[100%] mb-2"
                    alt="OMO"
                  />
                </div>

                <p className="text-xs">
                  Tenha à disposição uma lavanderia by OMO, equipada com
                  máquinas de última geração para oferecer mais facilidade e
                  eficiência no seu dia a dia.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative pt-4 pr-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/ellegance.svg"
                    className="h-12 max-w-[100%]"
                    alt="Elegancy Costuras"
                  />
                </div>

                <p className="text-xs">
                  Ajustes e reparos em peças de roupa no formato pay-per-use,
                  garantindo conveniência os moradores.
                </p>
              </div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-white/30"></div>
            </div>

            <div className="relative px-4 pt-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/nutricar.svg"
                    className="h-8 max-w-[100%] my-2"
                    alt="Nutricar"
                  />
                </div>

                <p className="text-xs">
                  Ajustes e reparos em peças de roupa no formato pay-per-use,
                  garantindo conveniência os moradores.
                </p>
              </div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-white/30"></div>
            </div>

            <div className="pl-4 pt-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img
                    src="/imgs/iconService/ezvolt.svg"
                    className="h-8 max-w-[100%] my-2"
                    alt="Ez Volt"
                  />
                </div>

                <p className="text-xs">
                  Instalação e operação de estação de recarga para carros
                  elétricos, trazendo mais conveniência para o dia a dia dos
                  moradores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
