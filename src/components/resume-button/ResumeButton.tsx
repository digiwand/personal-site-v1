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
      <a href="/Resume-Ariella-Vu.pdf" download>
        RÉSUMÉ
      </a>
    </Button>
  );
}

ResumeButton.defaultProps = defaultProps;

export default ResumeButton;
