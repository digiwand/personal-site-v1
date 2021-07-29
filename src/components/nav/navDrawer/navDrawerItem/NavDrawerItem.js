import Link from 'next/link';

export default function NavDrawerItem({ children, ...props }) {
  return (
    <Link href={props.href} scroll={false}>
      <a sx={{
          mt: 3,
          mb: 3,
        }}
      >
        {props.displayName}
      </a>
    </Link>
  );
}