function NavMenuButton({ onClick }: { onClick(): void}) {
  const lineClass = 'my-[2.5rem] w-[24rem] h-[2rem] transition-[background] duration-200 rounded-[2rem] bg-[image:var(--theme-glass-thick-bg)]';

  return (
    <button
      type="button"
      className="btn cursor-pointer absolute top-0 right-0 flex h-[54rem] w-[60rem] flex-col justify-center items-center
        mt-32 rounded-tr-none rounded-br-none opacity-100 pointer-events-auto
        land:opacity-0 land:pointer-events-none"
      onClick={onClick}
    >
      <span className={lineClass} />
      <span className={lineClass} />
      <span className={lineClass} />
    </button>
  );
}

export default NavMenuButton;
