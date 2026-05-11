import { Button } from 'theme-ui';

type Props = {
  className?: string;
}

function ResumeButton({ className = '' }: Props) {
  return (
    <Button className={className}>
      <a href="/Resume-Ariella-Vu.pdf" download>
        RÉSUMÉ
      </a>
    </Button>
  );
}

export default ResumeButton;
