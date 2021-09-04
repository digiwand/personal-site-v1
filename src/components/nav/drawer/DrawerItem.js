import Link from 'next/link';
import PropTypes from 'prop-types';

const propTypes = {
  displayName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

const defaultProps = {
  isActive: false,
};

function NavDrawerItem({ children, ...props }) {
  const { displayName, href, isActive } = props;

  return (
    <Link href={href} scroll={false} passHref>
      <a
        sx={(t) => ({
          py: 3,
          fontSize: 5,
          letterSpacing: '2rem',
          textAlign: 'center',
          color: t.colors.frameText,
          height: '68rem',
          transition: 'color 0.2s, background 0.2s',

          '&:hover': {
            color: t.colors.frameHoverText,
            // background: t.colors.frameBorder,
          },
          '&[is-active="true"]': {
            color: t.colors.frameHoverText,
            // background: t.colors.frameBorder,
            fontWeight: 700,
          },
        })}
        href={href}
        is-active={String(isActive)}
      >
        {displayName}
      </a>
    </Link>
  );
}

NavDrawerItem.propTypes = propTypes;
NavDrawerItem.defaultProps = defaultProps;

export default NavDrawerItem;
