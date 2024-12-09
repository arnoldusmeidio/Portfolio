"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import MyTooltip from "./MyTooltip";
import { toast } from "sonner";

export default function HireMe({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const handleCopyClick = async () => {
    try {
      await window.navigator.clipboard.writeText(text);
      toast("Email copied to clipboard");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      toast.error("Unable to copy to clipboard");
    }
  };

  return (
    <TooltipProvider delayDuration={100}>
      <MyTooltip
        text={text}
        tooltipHidden={false}
        className="hover:cursor-pointer hover:underline"
      >
        <span className="font-bold" onClick={handleCopyClick}>
          {children}
        </span>
      </MyTooltip>
    </TooltipProvider>
  );
}
