import NavTab from 'components/nav/header/Tab';
import { SECTION_DISPLAY_NAME } from 'constants/section';

const NAVTAB_WIDTH = 80;
const NAVTAB_MARGIN_LEFT = 16;
const NUM_OF_TABS = Object.keys(SECTION_DISPLAY_NAME).length;

/** Hover needs higher specificity than active: `~` only matches later siblings, so equal-specificity source order lets a later active tab block hover on earlier tabs. */
function generateNavTabUnderlineCss() {
  const rules: string[] = [];

  for (let i = 0; i < NUM_OF_TABS; i += 1) {
    const translateX = `${i * (NAVTAB_WIDTH + NAVTAB_MARGIN_LEFT)}rem`;
    const nth = `a:nth-of-type(${i + 1})`;

    rules.push(
      `.nav-tabs ${nth}[data-active="true"] ~ .nav-tab-underline { transform: translateX(${translateX}); }`,
      `.nav-tabs ${nth}.nav-tab:hover ~ .nav-tab-underline { transform: translateX(${translateX}); }`,
    );
  }

  return rules.join('\n');
}

const navTabsUnderlineCss = generateNavTabUnderlineCss();

function Underline() {
  return (
    <div
      className="nav-tab-underline absolute h-[2rem] w-[80rem] transition duration-300 ease-in-out
        bg-[var(--theme-text)] bottom-0 left-0"
    />
  );
}

function NavTabs({ activeSectionId } : { activeSectionId: string }) {
  const tabs = Object.keys(SECTION_DISPLAY_NAME).map((key, index) => {
    const displayName = SECTION_DISPLAY_NAME[key];
    return (
      <NavTab
        index={index}
        key={`NavTab-${key}`}
        href={`/#${key}`}
        displayName={displayName}
        isActive={activeSectionId === key}
      />
    );
  });

  return (
    <nav className="NavTabs nav-tabs relative">
      <style dangerouslySetInnerHTML={{ __html: navTabsUnderlineCss }} />
      {tabs}
      <Underline />
    </nav>
  );
}

export default NavTabs;
