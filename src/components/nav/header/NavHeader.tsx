import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import Fade from 'components/animations/Fade';

import NavTabs from 'components/nav/header/Tabs';
import NavSocialIcons from 'components/nav/header/SocialIconButtons';
import ThemeSelector from 'components/nav/theme-selector/Dropdown';
import SVGAriellaVu from 'components/svg/ariellavu';

type Props = {
  activeSectionId: string,
  pageTopTrackingPixelRef?: MutableRefObject<HTMLDivElement>,
};

function NavHeader({ activeSectionId, pageTopTrackingPixelRef = null }: Props) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pageTopObserverRef = useRef<IntersectionObserver>();

  const handlePageTopObserver = ([entry]) => {
    /** @todo @hack temp hack to smooth out animation */
    setTimeout(() => {
      setHasScrolled(entry.intersectionRatio > 0);
    }, 50);
  };

  useEffect(() => {
    if (pageTopObserverRef.current) { pageTopObserverRef.current.disconnect(); }

    let currentObserver;

    if (pageTopTrackingPixelRef) {
      pageTopObserverRef.current = new IntersectionObserver(handlePageTopObserver);
      currentObserver = pageTopObserverRef.current;

      const currentRef = pageTopTrackingPixelRef.current;

      if (currentRef) {
        currentObserver.observe(currentRef);
      }
    }

    return () => { if (currentObserver) { currentObserver.disconnect(); } };
  }, [pageTopTrackingPixelRef]);

  return (
    <header
      className="nav-header"
      data-scrolled={hasScrolled.toString()}
    >
      <Fade delay={600} duration={2800} cascade>
        <SVGAriellaVu
          id="NavHeader-SVGAriellaVu"
          className="h-[28rem] transition-transform duration-[400ms] [&_path]:fill-[var(--theme-svg-ariella-vu-active)]"
        />
      </Fade>
      <div
        className="NavHeader_rightSide flex items-end justify-end flex-[1_0_auto] transition-transform duration-[400ms]"
      >
        <NavTabs activeSectionId={activeSectionId} />
        <NavSocialIcons />
        <ThemeSelector />
      </div>
    </header>
  );
}

export default NavHeader;
