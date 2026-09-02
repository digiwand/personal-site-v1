import { cn } from 'lib/cn';

interface Props {
  text: string;
  className?: string;
}

function WorkSideHeading({ text, className }: Props) {
  return (
    <h3
      className={cn(
        'text-center land:text-left work-col-label pt-0 land:pt-64 pb-0 land:pb-64',
        className,
      )}
    >
      {text}
    </h3>
  );
}

export default WorkSideHeading;
