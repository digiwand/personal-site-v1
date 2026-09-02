import Fade from 'components/animations/Fade';
import ContactForm from 'components/sections/contact/Form';
import SOCIAL from 'constants/social';

function ContactRightSide() {
  return (
    <div className="flex-[3_1_auto] transition-[width] duration-300 w-full land:w-auto">
      <div className="max-w-[680rem] w-full mx-auto text-center land:text-left">
        <div className="text-heading [color:var(--theme-contact-sub-header)] pb-16 text-[20rem] sm:text-[22rem]
          tracking-[5rem]">
          <Fade delay={200}>
            Send me a message
          </Fade>
        </div>

        <br />

        <Fade>
          <h6 className="pb-32 text-[var(--theme-contact-text)]">
            Email me here or directly at
            {' '}
            <a
              href={SOCIAL.email.url}
              className="text-link"
            >
              ariellavu@gmail.com
            </a>
          </h6>
        </Fade>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactRightSide;
