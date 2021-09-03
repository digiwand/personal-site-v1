import React from 'react';
import { Themed } from 'theme-ui';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  descriptionSide: PropTypes.string,
  companyName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
};

const defaultProps = {
  className: '',
  descriptionSide: 'left',
};

function JobSection({ children, ...props }) {
  const {
    className,
    descriptionSide,
    companyName,
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
        background: (t) => t.colors.backgroundWorkJobBox,
        boxShadow: 'rgba(133, 133, 133, 0) 2px 5px 15px 0px',
        p: 5,
        mb: [1, 1, 0],
        alignSelf: 'center',
        maxWidth: [null, '580rem', '510rem'],
      }}
      >
        <Themed.h2>{companyName}</Themed.h2>

        <div sx={{
          mt: 4,
          mb: 5,
          height: '1rem',
          background: (t) => t.colors.text,
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
