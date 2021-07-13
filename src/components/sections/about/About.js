import styles from 'components/sections/about/About.module.scss';

import Section from 'components/sections/Section';

export default function AboutSection() {
  return (
    <Section id="about" className={styles.Section}>
      <div>
        This is the about section
      </div>
    </Section>
  );
}