import PropTypes from 'prop-types';

interface Props {
  text: 'string';
  className?: 'string';
}

function WorkSideHeading({ text, className }: Props) {
  return (
    <h3
      className={className}
      sx={{
        textAlign: ['center', 'center', 'initial'],
        gridColumnStart: 'label-start',
        pt: [0, 0, 5],
        pb: [0, 0, 5],
      }}
    >
      {text}
    </h3>
  );
}

export default WorkSideHeading;
