import IconButton from "../Buttons/IconButton";
import IconClose from "../Icons/IconClose";
import IconLogo from "../Icons/IconLogo";
import NavLinks from "./NavLinks";

function NavMobMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="w-full h-screen bg-neutral-950/70 z-10 absolute"
      onClick={onClose}
    >
      <div
        className="flex flex-col justify-between gap-6 pt-8 px-4 pb-4 h-full w-11/12 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <IconLogo />
            <IconButton icon={<IconClose />} onClick={onClose} />
          </div>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}
export default NavMobMenu;
