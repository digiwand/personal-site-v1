import { Button } from 'theme-ui';

function ResumeButton({ className }) {
  return (
    <Button className={className}>
      <a href="/Ariella-Vu-Resume.pdf" download>
        RÉSUMÉ
      </a>
    </Button>
  );
}

export default ResumeButton;
