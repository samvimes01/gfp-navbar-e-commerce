function NavLinks({ disabled }: { disabled?: boolean }) {
  const links = [
    { url: "#", label: "Shop all" },
    { url: "#", label: "Latest arriavals" },
  ];
  const disabledCls = disabled ? "text-neutral-400 pointer-events-none" : "";
  return (
    <nav className="flex justify-between flex-1 flex-col md:flex-row gap-2 md:gap-8 my-auto mx-0 text-neutral-600">
      {links.map((l, i) => (
        <a
          key={i}
          href={l.url}
          className={`no-underline py-2 md:py-0 px-3 md:px-0.5 h-9 md:h-fit hover:text-neutral-900 focus:text-neutral-900 focus:bg-white focus:shadow-foc ${disabledCls}`}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
