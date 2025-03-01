import Menu from "../Menu";

const Header = () => (
  <header className="min-w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
    <div className="flex justify-end sm:justify-center  sm:shadow-[0_4px_6px_rgba(0,0,0,0.1)] ">
      <Menu />
    </div>
  </header>
);

export default Header;
