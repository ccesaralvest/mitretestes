export type DormBoxProps = {
  type: string;
  meters: number;
  additionals?: string;
};
export default function DormBox({ type, meters, additionals }: DormBoxProps) {
  return (
    <div className="flex flex-col text-black items-center justify-center    ">
      <div className="text-[0.37em] sm:text-[0.5em] xl:text-[1.2rem]">
        {type}
      </div>
      <div className="relative border border-black  w-[1.79rem] h-[1.79rem]  flex flex-col justify-center items-center sm:w-[3rem] sm:h-[3rem] lg:w-[4rem] lg:h-[4rem] xl:w-[9rem] xl:h-[9rem] xl:border-4 ">
        <span className=" self-end mr-1 text-[6px]  leading-none lg:text-[0.5em]  xl:absolute top-3 right-1 xl:text-[1.2em] xl:mr-8 xl:mb-2">
          m2
        </span>
        <span className="font-bold text-lg text-black leading-none sm:text-2xl lg:text-[2em] xl:text-[4em] ">
          {meters}
        </span>
      </div>
      <div className="mt-1 text-[4px]  leading-none  whitespace-nowrap sm:text-[0.25em] xl:text-[1.1em] ">
        {additionals}
      </div>
    </div>
  );
}
