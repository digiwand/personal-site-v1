const glass = {
  boxShadow: '0 8rem 32rem 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(4px) saturate(130%)',
  borderRadius: '10rem',
  background: (t) => t.colors.glassBg,
  border: (t) => t.colors.glassBorder,

  thick: {
    background: (t) => t.colors.glassBgThick,
  },
};

export default glass;
