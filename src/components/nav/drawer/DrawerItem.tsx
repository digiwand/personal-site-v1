import Link from 'next/link';

type Props = {
  displayName: string,
  handleCloseMenu(): void,
  href: string,
  isActive?: boolean,
};

const defaultProps = {
  isActive: false,
};

function NavDrawerItem({
  displayName,
  handleCloseMenu,
  href,
  isActive,
}: Props) {
  return (
    <Link href={href} scroll={false} passHref>
      <a
        sx={(t) => ({
          py: 3,
          fontSize: 4,
          letterSpacing: '2rem',
          textAlign: 'center',
          color: t.colors.frameText,
          height: '68rem',
          transition: 'color 0.2s, background 0.2s',

          '&:hover': {
            color: t.colors.navDrawerActiveColor,

            '> span::before': {
              transform: 'translatex(0)',
              opacity: '1',
            },
          },

          '&[is-active="true"]': {
            color: t.colors.navDrawerActiveColor,
            fontWeight: 700,
          },

        })}
        href={href}
        is-active={String(isActive)}
        onClick={() => { handleCloseMenu(); }}
      >
        <span sx={{
          position: 'relative',
          width: '190rem',
          pr: [0, 2],
          textAlign: ['center', 'right'],
          display: 'inline-block',

          '&::before': {
            content: '""',
            height: '2rem',
            width: '190rem',
            position: 'absolute',
            bottom: '-2rem',
            left: '0',
            opacity: '0',
            background: (t) => t.colors.text,
            transform: 'translatex(80rem)',
            transition: 'transform 0.4s ease-in-out, opacity 0.4s linear',
          },
        }}
        >
          {displayName}
        </span>
      </a>
    </Link>
  );
}

NavDrawerItem.defaultProps = defaultProps;

export default NavDrawerItem;
