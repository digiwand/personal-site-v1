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
  const {  displayName, href, isActive } = props;

  return (
    <Link href={href} scroll={false}>
      <a sx={{
          minWidth: '120rem',
          p: 3,
          ml: 3,
        }}
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