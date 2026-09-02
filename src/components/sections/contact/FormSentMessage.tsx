interface Props {
  email: string;
  isVisible?: boolean;
}

function FormSentMessage({ isVisible = false, email }: Props) {
  return (
    <div
      data-visible={String(isVisible)}
      className="absolute h-full w-full left-0 top-0 flex flex-col items-center justify-center p-32
        opacity-0 pointer-events-none transition-opacity duration-300 bg-[var(--theme-input-bg)]
        data-[visible=true]:opacity-100 data-[visible=true]:pointer-events-auto"
    >
      <h3>Email sent!</h3>
      <div>
        <br />
        <br />
        Thank you! I should get back to you as soon as I can if you are expecting a response
        {email && ` to ${email}`}
        .
        <br />
        <br />
        <br />
        <h3 className="text-center">
          Best wishes,
        </h3>
        <h3 className="text-center land:text-left pt-8 block">
          Ariella
        </h3>
      </div>
    </div>
  );
}

export default FormSentMessage;
