import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

export default function MyTooltip({
  children,
  text,
  className,
  tooltipHidden,
}: {
  children: React.ReactNode;
  text: string;
  tooltipHidden: boolean;
  className?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className={cn("cursor-default", className)}>
        {children}
      </TooltipTrigger>
      <TooltipContent
        className={cn("cursor-default", tooltipHidden ? "max-lg:hidden" : null)}
      >
        <span className="block">{text}</span>
      </TooltipContent>
    </Tooltip>
  );
}
