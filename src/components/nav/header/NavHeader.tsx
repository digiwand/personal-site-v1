import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from 'react';
import Fade from 'components/animations/Fade';

import NavTabs from 'components/nav/header/Tabs';
import NavSocialIcons from 'components/nav/header/SocialIconButtons';
import ThemeSelector from 'components/nav/theme-selector/Dropdown';
import SVGAriellaVu from 'components/svg/ariellavu';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';

interface Props {
  activeSectionId: string;
  pageTopTrackingPixelRef: RefObject<HTMLDivElement | null>;
}

function NavHeader({ activeSectionId, pageTopTrackingPixelRef }: Props) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const handlePageTop = (entry: IntersectionObserverEntry) => {
    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    /** Short delay keeps the header style from flickering at the boundary. */
    scrollTimeoutRef.current = window.setTimeout(() => {
      setHasScrolled(entry.intersectionRatio > 0);
    }, 50);
  };

  const targets = useMemo(
    () => [pageTopTrackingPixelRef],
    [pageTopTrackingPixelRef],
  );

  useIntersectionObserver(targets, handlePageTop);

  useEffect(() => () => {
    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
  }, []);

  return (
    <header
      className="nav-header"
      data-scrolled={hasScrolled.toString()}
    >
      <Fade delay={600} duration={2800}>
        <SVGAriellaVu
          id="NavHeader-SVGAriellaVu"
          className="h-[28rem] transition-transform duration-[400ms] [&_path]:fill-[var(--theme-svg-ariella-vu-active)]"
        />
      </Fade>
      <div
        className="NavHeader_rightSide flex items-center justify-end flex-[1_0_auto] transition-transform duration-[400ms]"
      >
        <NavTabs activeSectionId={activeSectionId} />
        <NavSocialIcons />
        <ThemeSelector />
      </div>
    </header>
  );
}

export default NavHeader;
