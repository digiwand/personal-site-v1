import { Button } from 'theme-ui';

type Props = {
  className?: string;
}

const defaultProps = {
  className: '',
};

function ResumeButton({ className }: Props) {
  return (
    <Button className={className}>
      <a href="/Ariella-Vu-Resume-2021.pdf" download>
        RÉSUMÉ
      </a>
    </Button>
  );
}

ResumeButton.defaultProps = defaultProps;

export default ResumeButton;
