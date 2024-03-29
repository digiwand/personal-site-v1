import { getColor } from '@theme-ui/color'
import Fade from 'react-reveal/Fade';
import { Button } from 'theme-ui';
import PropTypes from 'prop-types';
import TECH from 'constants/tech';
import JobSectionImgTrio from './JobSectionImgTrio';

const propTypes = {
  className: PropTypes.string,
  companyName: PropTypes.string.isRequired,
  techKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgConfigs: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  })),
};

const defaultProps = {
  className: '',
};

function JobSection({ children, ...props }) {
  const {
    className,
    companyName,
    title,
    subtitle,
    date,
    imgConfigs,
    techKeys,
  } = props;

  return (
    <div
      className={className}
      sx={{
        gridColumnStart: 'content-start',
        maxWidth: '850rem',
      }}
    >
      <Fade>
        <div
          className="u-glass"
          sx={{
            pt: 5,
            pb: 4,
            px: [3, 4, 4],
            textAlign: ['center', 'left', 'left'],
          }}
        >
          <h2
            sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: ['block', 'block', 'inline-block'],
            pr: [0, 0, 3],
            letterSpacing: ['-0.5rem', '3rem', '3rem'],
            color: (t) => getColor(t, 'workHeader'),
          }}
          >
            {title}
          </h2>

          <h2
            sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: ['block', 'block', 'inline-block'],
            pt: [1, 0, 0],
            color: (t) => getColor(t, 'workHeader'),
          }}
          >
            <small>{subtitle}</small>
          </h2>

          <h4
            sx={{
            display: 'block',
            pt: [3, 4, 4],
            pb: 1,
            color: (t) => getColor(t, 'workSubHeader'),
          }}
          >
            {companyName}
          </h4>

          <h5 sx={{ color: (t) => getColor(t, 'workHeader') }}>
            {date}
          </h5>

          <p sx={{ variant: 'text.body', py: 4, textAlign: 'left' }}>
            {children}
          </p>

          <div sx={{
            pt: [3, 3, 2],
            pb: [3, 3, 4],
            textAlign: 'left',
          }}
          >
            {techKeys.map((techKey) => (
              <Button
                variant="tag"
                key={`${companyName}-tech-${techKey}`}
              >
                <a href={TECH[techKey].href} target="_blank" rel="noopener noreferrer">
                  {TECH[techKey].displayName}
                </a>
              </Button>
            ))}
          </div>

          {imgConfigs && <JobSectionImgTrio imgConfigs={imgConfigs} />}

        </div>
      </Fade>
    </div>
  );
}

JobSection.propTypes = propTypes;
JobSection.defaultProps = defaultProps;

export default JobSection;
