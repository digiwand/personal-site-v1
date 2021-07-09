import styles from 'components/sections/contact/Contact.module.scss';

import Section from 'components/sections/Section';

export default function ContactSection() {
  return (
    <Section id="contact" className={styles.Section}>
      <div>
        This is the contact section
      </div>
    </Section>
  );
}