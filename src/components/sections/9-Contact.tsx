"use client";
import FormContact from "../FormContact";

export default function Contact( {handleSubmit, register, errors, onSubmit, readPolicy, setReadPolicy}: any) {
  return (
    <section id="contact">
      <div className="flex flex-col items-center w-full pt-[67px]">
        <div className="relative mt-5 w-[207px] sm:w-[369px] md:-ml-[10%]">
          <span className="font-adero text-black text-base uppercase text-[16px] sm:text-[1.4rem] ">
            FALE COM NOSSOS ESPECIALISTAS
          </span>
          <div className="absolute inset-0">
            <div className="absolute w-[70%] -bottom-1 -left-8 border-t border-foreground sm:-bottom-6 sm:border-1 sm:w-[60vw] sm:-left-[35vw]"></div>
            <div className="absolute -left-3 h-[90px] -top-5 bottom-0 border-r border-foreground border-1 sm:-left-6  sm:h-[220px]"></div>
          </div>
        </div>
        <div>
          <FormContact handleSubmit={handleSubmit} register={register} errors={errors} onSubmit={onSubmit} readPolicy={readPolicy} setReadPolicy={setReadPolicy} />
        </div>
        <div className="relative w-full h-[11.3rem] bg-[#803A2C]  ">
          <div className="absolute -top-32 bg-[#803A2C] h-full w-full"></div>
        </div>
      </div>
    </section>
  );
}
