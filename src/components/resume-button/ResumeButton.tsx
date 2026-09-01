import { getColor } from "@theme-ui/color";
import { Button } from "theme-ui";
import IconDownload from "components/svg/material-icons/download";

type Props = {
  className?: string;
};

function ResumeButton({ className = "" }: Props) {
  return (
    <Button
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',

        '.resume-icon-container': {
          display: 'flex',
          justifyContent: 'end',
          transition: 'width 0.1s',
          width: '0',
          overflow: 'hidden',
          pt: '1rem',

          '> span': {
            display: 'flex',
            alignItems: 'center',
          },

          svg: {
            position: 'relative',
            height: '24rem',
            width: '24rem',
          },
          path: {
            fill: (t) => getColor(t, 'buttonText'),
            opacity: '0.7',
          },
        },

        '&:hover .resume-icon-container': {
          width: '32rem',
        },
      }}
    >
      <a href="/Resume-Ariella-Vu.pdf" download>
        RÉSUMÉ
      </a>
      <div className="resume-icon-container">
        <span>
          <IconDownload />
        </span>
      </div>
    </Button>
  );
}

export default ResumeButton;
