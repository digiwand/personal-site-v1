import styles from 'components/sections/Section.module.scss';

export default function Section({ children, ...props }) {
  return (
    <section id={props.id} className={`${styles.section} ${props.className}`}>
      {children}
    </section>
  );
}