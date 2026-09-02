import SVGAriellaVu from 'components/svg/ariellavu';

const headerAndFooterHeight = '60rem';

type Props = {
  handleCloseMenu(): void,
};

function DrawerHeader({ handleCloseMenu }: Props) {
  const closeButton = (
    <button
      type="button"
      className="NavDrawer_iconButton btn-icon drawer-fade-init h-[60rem] w-[60rem]
        hover:[&_.NavDrawer_closeSVG>path]:fill-[var(--theme-nav-drawer-social-icons-hover-color)]"
      onClick={() => { handleCloseMenu(); }}
    >
      <svg
        aria-label="Close Menu"
        className="NavDrawer_closeSVG h-[30rem]"
        viewBox="0 0 24 24"
      >
        <path
          className="transition-[fill] duration-150 fill-[var(--theme-frame-text)]"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    </button>
  );

  return (
    <div
      className="flex items-center justify-between h-[60rem]"
      style={{ flex: `0 0 ${headerAndFooterHeight}` }}
    >
      <span
        className="NavDrawer_profileLogo drawer-fade-init translate-x-[26rem] pt-[4rem]
          text-[var(--theme-frame-text)]
          [transition:background_0.4s,opacity_1s,transform_1s_cubic-bezier(0.215,0.61,0.355,1)]"
      >
        <SVGAriellaVu
          id="NavDrawer-SVGAriellaVu"
          className="relative h-[24rem] transition-[height,transform] duration-[400ms]
            [&_path]:fill-[var(--theme-svg-ariella-vu-active)]"
        />
      </span>
      {closeButton}
    </div>
  );
}

export default DrawerHeader;
