import { Button } from "./ui/button";
type props = {
  text?: string;
};
const CustomButton = ({ text = "FALE COM O ESPECIALISTA" }: props) => (
  <Button
    className=" z-10 font-adero font-[400] text-[6px] rounded-none h-4 p-2  flex items-center justify-center  self-end xl:text-[1rem] xl:h-10 xl:p-4"
    style={{ lineHeight: 1 }}
  >
    {text}
  </Button>
);

export default CustomButton;
