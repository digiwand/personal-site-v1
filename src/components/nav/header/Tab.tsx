import Link from 'next/link';
import Flip from 'react-reveal/Flip';

type Props = {
  className: string,
  displayName: string,
  href: string,
  index: number,
  isActive?: boolean,
};

const defaultProps = {
  isActive: false,
};

function NavTab({
  className,
  displayName,
  href,
  index,
  isActive,
}: Props) {
  const hoverText = (
    <span
      className="NavTab_hoverText"
      sx={{
        position: 'absolute',
        transition: 'width 0.3s',
        top: '0',
        left: '0',
        width: '0',
        overflow: 'hidden',
        color: (t) => t.colors.navTabHoverColor,
      }}
    >
      {displayName}
    </span>
  );

  return (
    <Link href={href} scroll={false} passHref>
      <a
        className={`${className} + NavTab`}
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40rem',
          fontSize: '14rem',
          fontFamily: 'body',
          fontWeight: '300',
          borderBottom: '2rem solid transparent',
          transition: 'font-weight 0.2s, color 0.2s, border-bottom 0.2s',

          '&:hover .NavTab_hoverText': {
            width: '100%',
            transition: 'all 0.3s ease-in-out',
          },
          '&:is-active': {
            fontWeight: '700',
          },

          '&:first-of-type': {
            ml: 0,
          },

        }}
        href={href}
        is-active={String(isActive)}
      >
        <span sx={{ position: 'relative' }}>
          <Flip top delay={700 + (index * 140)}>
            {displayName}
          </Flip>
          {hoverText}
        </span>
      </a>
    </Link>
  );
}

NavTab.defaultProps = defaultProps;

export default NavTab;
