import Link from 'next/link';
import Flip from 'components/animations/Flip';
import { cn } from 'lib/cn';

type Props = {
  className?: string,
  displayName: string,
  href: string,
  index: number,
  isActive?: boolean,
};

function NavTab({
  className = '',
  displayName,
  href,
  index,
  isActive = false,
}: Props) {
  return (
    <Link
      href={href}
      scroll={false}
      className={cn(className, 'NavTab nav-tab')}
      data-active={String(isActive)}
    >
      <span className="relative">
        <Flip top delay={700 + (index * 140)}>
          {displayName}
        </Flip>
        <span
          className="NavTab_hoverText absolute top-0 left-0 overflow-hidden
            text-[var(--theme-nav-tab-hover-color)] transition-[width] duration-300"
        >
          {displayName}
        </span>
      </span>
    </Link>
  );
}

export default NavTab;
