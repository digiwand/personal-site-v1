import SOCIAL from 'constants/social';

function FormErrorMessage({ isVisible }) {
  return (
    <div
      data-visible={String(isVisible)}
      className="absolute text-[var(--theme-error)] text-[12rem] opacity-0 top-full tracking-[1rem]
        right-0 pt-16 land:pt-32 left-0 land:left-auto whitespace-normal land:whitespace-nowrap
        transition-opacity duration-300 data-[visible=true]:opacity-100"
    >
      Sorry. An error has occured. Please retry or email me directly at
      {' '}
      <a
        href={SOCIAL.email.url}
        className="text-link"
      >
        ariellavu@gmail.com
      </a>
    </div>
  );
}

export default FormErrorMessage;
