import { IconButton } from 'theme-ui';

export default function HamburgerMenu(props) {

  const menuLine = {
    background: 'white',
    margin: '2px 0',
    width: '15px',
    height: '1px',
  };

  return (
    <button sx={{
        position: 'absolute',
        top: '0',
        right: '0',
        display: 'flex',
        height: '50px',
        width: '50px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'opacity .3s',
        mt: 3,
        mr: 3,
        opacity: [1, 0, 0],
        pointerEvents: ['initial', 'none', 'none']
      }} 
      onClick={props.onClick}
      aria-label="Open menu drawer"
    >
      <div sx={{
          ...menuLine
        }}
      />
      <div sx={{
          ...menuLine
        }}
      />
      <div sx={{
          ...menuLine
        }}
      />
    </button>
    // <IconButton aria-label="Open menu drawer">
    //<svg class="MuiSvgIcon-root jss178" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
    // </IconButton>
  )
}