import Link from 'next/link';

export default function NavTab({ children, ...props }) {
  return (
    <Link href={props.href} scroll={false}>
      <a sx={{
          minWidth: '120rem',
          p: 3,
          ml: 3,
        }}
      >
        {props.displayName}
      </a>
    </Link>
  );
}