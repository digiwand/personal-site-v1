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
  const {  displayName, href, isActive } = props;

  return (
    <Link href={href} scroll={false}>
      <a sx={{
          mt: 3,
          mb: 3,
        }}
        is-active={String(isActive)}
      >
        {displayName}
      </a>
    </Link>
  );
};

NavDrawerItem.propTypes = propTypes;
NavDrawerItem.defaultProps = defaultProps;

export default NavDrawerItem;