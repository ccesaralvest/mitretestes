import Image from "next/image";

 

function LocationItem({ name, minutes }: { name: string; minutes: number }) {
  return (
    <div className="flex justify-start">
      <span>{name}</span>
      <div className="flex items-center">
        <span className="mr-1 ml-[3px] text-black font-unineue">
          <strong > - {minutes } MIN</strong>
        </span>
        <img src="/imgs/car-icon.svg" alt="Pin Car"   className="w-[10px] h-[10px]"   />
      </div>
    </div>
  );
}

export default LocationItem;
