import Fade from 'components/animations/Fade';

function Footer() {
  return (
    <footer
      className="flex flex-col-reverse sm:flex-row justify-between py-8 min-h-[40rem]
        px-32 land:px-128 whitespace-nowrap text-center text-[14rem] font-body font-light tracking-[1rem]
        [background-color:var(--theme-footer-bg)] [backdrop-filter:blur(4px)_saturate(130%)]
        [box-shadow:0_8rem_32rem_0_rgba(31,38,135,0.37)]"
    >
      <Fade bottom>
        <span className="block land:inline-block py-16 sm:py-8 land:py-4">
          © 2021-{new Date().getFullYear()}
        </span>
      </Fade>
      <Fade bottom>
        <span
          className="flex sm:block land:inline-block flex-wrap justify-center flex-col sm:flex-row
            pt-16 sm:pt-8 land:pt-[5px]"
        >
          Made with ❤&nbsp; • &nbsp;Ariella Vu

          <span className="hidden sm:inline">
            &nbsp; • &nbsp;
          </span>

          <a
            href="https://github.com/digiwand/personal-site-v1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link pt-16 sm:pt-0 land:pt-[5px]"
          >
            Open Source on Github
          </a>
        </span>
      </Fade>
    </footer>
  );
}

export default Footer;
