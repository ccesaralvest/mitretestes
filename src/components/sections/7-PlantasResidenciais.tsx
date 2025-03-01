import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const items = [
  "ELEVADOR PRIVATIVO",
  "Fechadura eletrônica",
  "Lavabo",
  "Infraestrutura seca para futura automação",
  "piso nivelado entre living e terraço",
  "2 cubas na suíte master",
  "Lavabo",
  "Infraestrutura seca para futura automação",
  "piso nivelado entre living e terraço",
  "2 cubas na suíte master",
  "Lavabo",
  "Infraestrutura seca para futura automação",
  "piso nivelado entre living e terraço",
  "2 cubas na suíte master",
  "2 cubas na suíte master",
  "Lavabo",
  "Infraestrutura seca para futura automação",
  "piso nivelado entre living e terraço",
  "2 cubas na suíte master",
  "2 cubas na suíte master",
];

const PlantasResidenciais = () => (
  <section id="plantas" className="sm:hidden">
    <div className="flex flex-col items-center relative sm:items-start max-w-screen ">
      <div className="relative w-[8rem]  mt-10 sm:w-full sm:mt-20 sm:mb-16">
        <span className="font-adero text-black  text-base uppercase text-[16px] sm:text-[2rem] sm:leading-[48px] sm:ml-[5rem] ">
          PLANTAS RESIDENCIAIS
        </span>
        <div className="absolute inset-0">
          <div className="absolute  w-[120%] -bottom-2 -left-10 border-t border-foreground sm:border-1  sm:w-[40rem] sm:-bottom-10 sm:-left-[0rem]"></div>
          <div className="absolute -left-6  h-[230%] -top-10 bottom-0 border-r border-foreground sm:border-1 sm:left-[4rem] sm:h-[13rem] sm:-top-[5rem]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center  sm:flex-row sm:items-start sm:w-full sm:mb-20 sm:pl-[5rem] max-w-full">
        <div>
          <div className="mt-12 w-[278px] space-y-2 sm:flex sm:justify-center sm:flex-1 sm:space-y-0 sm:w-full sm:gap-4">
            <Button className="rounded-none w-full sm:w-[262.33px]">
              62 M² | 2 DORM.
            </Button>
            <Button
              variant="outline"
              className="rounded-none w-full  bg-white text-black  border-black sm:w-[262.33px]"
            >
              62 M² | 2 DORM.
            </Button>
            <Button
              variant="outline"
              className="rounded-none w-full bg-white text-black border-black sm:w-[262.33px]"
            >
              62 M² | 2 DORM.
            </Button>
          </div>
          <div className="hidden sm:flex flex-col items-start flex-wrap gap-4 mt-6 ">
            <div className="text-black font-medium text-[20px] font-unineue">
              2 DORMS. • SUITE • VAGA
            </div>
            <div className="flex gap-10 uppercase text-black font-unineue  ">
              <div className="w-1/2">
                {items.slice(0, 10).map((item, index) => (
                  <div key={index} className="flex  items-center gap-2 mb-4">
                    <div className="rounded-full w-[13px] h-[13px] bg-foreground"></div>
                    <div className="text-[14px]">{item}</div>
                  </div>
                ))}
              </div>
              <div className="w-1/2">
                {items.slice(10, 20).map((item, index) => (
                  <div
                    key={index + 10}
                    className="flex  items-center gap-2 mb-4"
                  >
                    <div className="rounded-full w-[13px] h-[13px] bg-foreground"></div>
                    <div className="text-[14px]">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center relative w-full h-full sm:hidden flex items-center justify-around h-10">
          <span className="text-[12px] text-black ">
            2 DORMS. · SUITE · VAGA
          </span>

          <span className="bg-foreground -top-4 right-6 ml-6 w-[39px] h-[39px] flex items-center justify-center sm:hidden ">
            <Plus className="stroke-white" size={15} strokeWidth={4} />
          </span>
        </div>

        <div className="w-[96vw] min-w-[100%]  h-[72vw]  relative sm:w-[100%] sm:h-[504px] sm:flex-1  ">
          <Image
            src="/imgs/planta-harmonizada.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Planta Harmonizada"
          />
        </div>
      </div>
      <div className="hidden absolute  right-0 top-1/2 transform -translate-y-1/2 w-[12px] h-[104px] bg-foreground sm:block  sm:w-[22px]  xl:w-[42px] xl:h-[449px]"></div>
    </div>
  </section>
);

export default PlantasResidenciais;
