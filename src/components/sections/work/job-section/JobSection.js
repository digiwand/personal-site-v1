import React from 'react';
import { Themed } from 'theme-ui';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string.isRequired,
  descriptionSide: PropTypes.string,
  companyLogo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
};

const defaultProps = {
  descriptionSide: 'left',
};

function JobSection({ children, ...props }) {
  const {
    className,
    descriptionSide,
    companyLogo,
    title,
    subtitle,
    date,
    img,
  } = props;

  const flexDirection = descriptionSide === 'left'
    ? ['column', 'column', 'row']
    : ['column', 'column', 'row-reverse'];

  return (
    <div
      className={className}
      sx={{
        display: 'flex',
        flexDirection,
        pb: [0, 0, 5],
      }}
    >
      <div sx={{
        flex: '0 0 45%',
        position: 'relative',
        border: '1px double #ccc',
        background: (t) => `${t.colors.background2}`,
        p: 5,
        mb: [1, 1, 0],
      }}
      >
        {companyLogo}

        <div sx={{
          mt: 5,
          mb: 3,
          height: '2px',
          background: '#333',
          width: '90px',
        }}
        />

        <Themed.h4>
          {title}
          {' '}
          <small>{subtitle}</small>
        </Themed.h4>

        <Themed.h5>{date}</Themed.h5>

        <Themed.p sx={{ mt: 3 }}>{children}</Themed.p>
      </div>

      {img}

    </div>
  );
}

JobSection.propTypes = propTypes;
JobSection.defaultProps = defaultProps;

export default JobSection;
