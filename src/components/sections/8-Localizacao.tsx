import Image from "next/image";
import ConfiraTodosItens from "../ConfiraTodosItens";
import Map from "../Map";

const Localizacao = () => {
  return (
    <section id="localizacao" className="sm:hidden">
      <ConfiraTodosItens />
      <div className="relative flex flex-col items-center w-full h-full  sm:flex-row  sm:h-[49.1rem]">
        <div className="bg-[url(/imgs/cement-wall.jpeg)] opacity-[0.4] h-full mt-[10rem]  w-full sm:h-[938px] sm:mt-[10rem] absolute "></div>
        <div className="relative w-full h-[251px] mt-7 sm:h-full sm:flex-1  sm:order-2  sm:w-[146px] xl:-mt-[5rem]  xl:mr-16">
          <Image
            src="/imgs/localizacao.png"
            fill
            alt="Localização"
            className="object-contain z-10 "
          />
        </div>
        <div className="flex-1  relative  flex flex-col items-center  sm:pt-[8rem] sm:h-full ">
          <div className="relative    xl:w-[608px]">
            <span className="font-adero text-black font-semibold text-base uppercase text-[16px]  xl:text-[32px] text-left">
              LOCALIZAÇÃO
            </span>
            <div className="absolute inset-0">
              <div className="absolute w-[110%] -bottom-1 -left-7 border-t border-foreground xl:border-2 xl:-bottom-4 xl:w-[16rem] xl:-left-[11rem]"></div>
              <div className="absolute -left-3 h-[300%] -top-8 bottom-0 border-r border-foreground xl:border-2 xl:-left-6 xl:h-[17rem] xl:-top-[8rem]"></div>
            </div>
          </div>
          <div className="font-unineue text-[8px] text-black p-10 space-y-5   xl:text-[16px] xl:w-[608px] xl:space-y-11 xl:mt-20 xl:p-0 ">
            <p>
              Sucesso de vendas e já consagrada na capital paulista, a linha
              Haus Mitre surpreende novamente com uma edio especial que respira
              sofisticação e bom-gosto. E a escolha do bairro não poderia ser
              diferente.
            </p>

            <p>
              O protagonismo do Brooklin em São Paulo evoca Nova York em todos
              os sentidos. Além de prestar homenagem ao famoso bairro da cidade
              estadunidense, compartilha muitas de suas características: seu
              charme inconfundível, a mistura de culturas e influências, as
              inúmeras soluções de mobilidade, as ruas arborizadas, além do alto
              potencial de valorização. Um bairro em ampla transformação próximo
              ao eixo Faria Lima-Chucri Zaidan, o maior vetor de crescimento em
              São Paulo.
            </p>

            <p>
              Assim como Brooklyn e Nova York são organismos vivos e
              inseparáveis, o mesmo se aplica ao Brooklin SP. A região se
              transformou em um hotspot estratégico da capital, integrada por
              bares, boutiques, restaurantes, parques, shoppings e uma vibrante
              cena cultural. Morar no coração do Brooklin é viver um estilo de
              vida único, que se torna ainda mais exclusivo no Haus Mitre
              Station Brooklin.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center xl:p-[5rem]">
        <Map />
        <div className="flex flex-col w-full items-center sm:flex-row   ">
          <div className="relative w-[207px] mt-10 order-1 sm:order-2 sm:hidden  ">
            <span className="font-adero text-black  text-base uppercase text-[16px] xl:text-[32px]">
              vivencia uma das localizações mais privilegiadas de são paulo.
            </span>
            <div className="absolute inset-0">
              <div className="absolute w-[110%] -bottom-1 -left-7 border-t border-foreground"></div>
              <div className="absolute -left-3 h-[158px] -top-10 bottom-0 border-r border-foreground"></div>
            </div>
          </div>
          <div className="relative order-2 sm:order-1 w-full h-[375px] mt-8 xl:order-1 xl:w-[550px] xl:min-h-[1060px] ">
            <Image
              src="/imgs/shutterstock.jpeg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="font-unineue uppercase text-[12px] text-black p-14 text-sm/6 space-y-5 flex-col order-2 sm:ml-[7rem]  ">
            <div className="hidden sm:block relative mt-5  w-[28rem]  order-2 ">
              <span className="font-adero text-black leading-relaxed  text-base uppercase text-[16px] xl:text-[32px]">
                vivencia uma das localizações mais privilegiadas de são paulo.
              </span>
              <div className="absolute inset-0">
                <div className="absolute w-[50rem] -top-7 -left-[7rem] border-t border-foreground xl:border-2"></div>
                <div className="absolute -left-6 h-[16.8rem] -top-[9.1rem]  border-r border-foreground xl:border-2 "></div>
              </div>
            </div>
            <div className="sm:flex sm:gap-14">
              <div className="flex flex-col space-y-4  sm:w-1/2  xl:w-[428px] ">
                <div>
                  <p className="font-bold sm:text-[14px]">parques</p>
                  <p className="font-thin sm:text-[14px]">
                    Parque do Povo – 6 min. de carro​ ​ Bosque do Brooklin – 8
                    min. de carro​ Parque Burle Marx – 15 min. de carro Parque
                    Severo Gomes – 17 min. de carro
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Colégios</p>
                  <p className="font-thin sm:text-[14px]">
                    Colégio C.E.C.I - 3 min. a pé​ Escola Patoxo Simão Frugis -
                    4 min a pé​ Vértice – 8 min. de carro Augusto Laranja – 14
                    min. de carro Colégio Porto Seguro – 18 min. de carro Pueri
                    Domus – 18 min. de carro Chapel – 19 min. de carro Suíço
                    Brasileiro – 19 min. de carro Graded - The American School
                    of São Paulo – 24 min. carro
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Universidades</p>
                  <p className="font-thin sm:text-[14px]">
                    Universidade Insper – 12 min. de carro Universidade Anhembi
                    Morumbi – 12 min. de carro
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Hospitais</p>
                  <p className="font-thin sm:text-[14px]">
                    Hospital Premier – 6 min. a pé​ Hospital Blanc – 9 min. de
                    carro ​Hospital São Luiz Morumbi – 13 min. de carro Hospital
                    Einstein – 15 min. de carro Hospital Santa Paula – 16 min.
                    de carro​
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Shoppings</p>
                  <p className="font-thin sm:text-[14px]">
                    JK Iguatemi – 6 min. de carro​ Shopping Morumbi – 16 min. de
                    carro​ Shopping Cidade Jardim – 12 min. de carro
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 sm:w-1/2 xl:w-[428px]">
                <div>
                  <p className="font-bold sm:text-[14px]">restaurantes</p>
                  <p className="font-thin sm:text-[14px]">
                    Lar Bianco – 2 min. a pé​ Lolla Osteria – 5 min. a pé​
                    Pizzaria A Esperança - 3 min. a pé​ Vicolo Nostro - 7 min.
                    de carro Verissimo – 2 min. de carro Churrascaria Rancho do
                    Vinho – 30 min. de carro Jardineira – 8 min. de carro Fogo
                    de Chão – 7 min. de carro Restaurantes Pobre Juan / Barbacoa
                    – 10 min. de carro Restaurantes Adega Santiago / Due coche –
                    12 min. de carro
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Hotéis​</p>
                  <p className="font-thin sm:text-[14px]">
                    Hilton Morumbi – 6 min. de carro​ Hotel Hyatt – 6 min. de
                    carro Palácio Tangará – 17 min. de carro ​
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Padarias​</p>
                  <p className="font-thin sm:text-[14px]">
                    O Pão - Padaria Artesanal - 4 min. a pé​ Padaria Manhattan –
                    8 min. de carro ​ ​Padaria Santa Marcelina – 9 min. de carro
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Academias​</p>
                  <p className="font-thin sm:text-[14px]">
                    Academia Reebok – 10 min. de carro ​ Cia Atlhetica – 9 min.
                    de carro
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">Aeroporto​</p>
                  <p className="font-thin sm:text-[14px]">
                    Aeroporto de Congonhas – 20 minutos de carro​
                  </p>
                </div>
                <div>
                  <p className="font-bold sm:text-[14px]">
                    Turismo e outras atividades
                  </p>
                  <p className="font-thin sm:text-[14px]">
                    Hípica Paulista – 4 minutos de carro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
