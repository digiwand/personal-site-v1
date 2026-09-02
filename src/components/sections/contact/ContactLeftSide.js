import Fade from 'components/animations/Fade';
import ContactSocialIconButtons from 'components/sections/contact/SocialIconButtons';
import SVGPlantInPot from 'components/svg/plant-in-pot';

function ContactLeftSide() {
  return (
    <div
      className="flex flex-col justify-between flex-[1_0_25%] max-w-[680rem] min-w-[160rem]
        w-full land:w-1/4 pb-0 land:pb-[88rem] text-center"
    >
      <div>
        <div className="text-heading [color:var(--theme-contact-sub-header)] pb-16 text-[20rem] sm:text-[22rem]
          tracking-[5rem] mb-[4px]">
          <Fade delay={200}>
            Let&apos;s Connect!
          </Fade>
        </div>
        <ContactSocialIconButtons />
      </div>

      <Fade delay={1000} duration={2400} className="flex justify-center">
        <SVGPlantInPot
          className="hidden land:flex w-1/2 pt-24 land:pt-8 mx-auto max-w-[225rem] min-w-[160rem] [&_path]:fill-[var(--theme-contact-plant)]"
        />
      </Fade>
    </div>
  );
}

export default ContactLeftSide;
