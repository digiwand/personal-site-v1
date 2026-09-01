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
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',

        '.resume-icon-container': {
          position: 'absolute',
          left: '100%',
          paddingLeft: '16rem',
          display: 'flex',
          transition: 'opacity 0.18s ease-out',
          opacity: '0',

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
          opacity: '1',
        },
      }}
    >
      <a href="/Resume-Ariella-Vu.pdf" download>
        RÉSUMÉ
      </a>
      <div className="resume-icon-container">
        <IconDownload />
      </div>
    </Button>
  );
}

export default ResumeButton;
