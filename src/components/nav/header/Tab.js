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

function NavTab({ children, ...props }) {
  const {
    className, displayName, href, isActive,
  } = props;

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
          letterSpacing: '1.6rem',
          fontSize: '14rem',
          borderBottom: '2rem solid transparent',
          transition: 'font-weight 0.2s, color 0.2s, border-bottom 0.2s',

          '&:hover': {
            fontWeight: '700',
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
        {displayName}
      </a>
    </Link>
  );
}

NavTab.propTypes = propTypes;
NavTab.defaultProps = defaultProps;

export default NavTab;
