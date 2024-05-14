import { ReactNode } from "react";
type Props = {
  icon: ReactNode;
  onClick: () => void;
};
function IconButton({ icon, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center p-0 m-0 border-0 w-5 h-5 bg-transparent disabled:text-neutral-400 hover:text-neutral-900 focus:text-neutral-900 focus:shadow-foc focus:bg-white"
    >
      {icon}
    </button>
  );
}

export default IconButton;
