import IconDownload from "components/svg/material-icons/download";
import { cn } from "lib/cn";

type Props = {
  className?: string;
};

function ResumeButton({ className = "" }: Props) {
  return (
    <a
      type="button"
      href="/Resume-Ariella-Vu.pdf" 
      download
      className={cn("btn resume-button px-16 py-8 tracking-[3rem]", className)}
    >
      RÉSUMÉ

      {/* add extra div wrapper to preserve icon size on animate */}
      <div className="resume-icon-container">
        <span>
          <IconDownload />
        </span>
      </div>
    </a>
  );
}

export default ResumeButton;
