import Link from 'next/link';
import styles from 'components/Nav/Nav.module.scss';

export default function Nav({ children, home }) {
  /**
   * @todo change style based on user is on landing / home
   */ 
  console.log('Is home?', home);

  return (
    <header 
      sx={{
        position: 'fixed',
        display: 'flex',
        textAlign: 'center',
        top: '0',
        right: '0',
        mt: 4,
        mr: 4,
      }}
    >

      {/* @todo extract this into NavTabs component */}
      <Link href="#home" scroll={false}>
        <a className={styles.NavTab}>
          Home
        </a>
      </Link>
      <Link href="#about" scroll={false}>
        <a className={styles.NavTab}>
          About
        </a>
      </Link>
      <Link href="#contact" scroll={false}>
        <a className={styles.NavTab}>
          Contact
        </a>
      </Link>

    </header>
  )
}