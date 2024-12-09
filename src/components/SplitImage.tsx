import * as React from "react";

export default function SplitImage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
      {children}
    </div>
  );
}

export function Split({ children }: { children: React.ReactNode }) {
  return <div className="!mb-0 flex flex-col space-y-4">{children}</div>;
}
