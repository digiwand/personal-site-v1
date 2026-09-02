import Link from 'next/link';

type Props = {
  displayName: string,
  handleCloseMenu(): void,
  href: string,
  isActive?: boolean,
};

function NavDrawerItem({
  displayName,
  handleCloseMenu,
  href,
  isActive = false,
}: Props) {
  return (
    <Link
      href={href}
      scroll={false}
      className="nav-drawer-item"
      data-active={String(isActive)}
      onClick={() => { handleCloseMenu(); }}
    >
      <span className="nav-drawer-item-label relative w-[190rem] pr-0 sm:pr-8 text-center sm:text-right inline-block">
        {displayName}
      </span>
    </Link>
  );
}

export default NavDrawerItem;
