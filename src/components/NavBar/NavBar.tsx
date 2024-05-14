import { useState } from "react";
import IconButton from "../Buttons/IconButton";
import IconCart from "../Icons/IconCart";
import IconLogo from "../Icons/IconLogo";
import IconMenu from "../Icons/IconMenu";
import NavLinks from "./NavLinks";
import NavMobMenu from "./NavMobMenu";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="flex items-center justify-between flex-auto h-[68px] max-w-[1216px] min-w-fit text-base font-medium mt-4 mb-0 mx-0 md:gap-24 gap-4 px-8 md:px-0 py-0 md:py-3.5">
        <div className="flex gap-24 min-w-fit">
          <IconLogo />
          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>
        <span className="flex gap-4">
          <IconButton icon={<IconCart />} onClick={() => {}} />
          <span className="md:hidden">
            <IconButton icon={<IconMenu />} onClick={toggleMenu} />
          </span>
        </span>
      </div>
      {isMenuOpen && <NavMobMenu onClose={toggleMenu} />}
    </>
  );
}

export default NavBar;
