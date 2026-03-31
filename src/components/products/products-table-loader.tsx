import * as React from "react";

import { Progress } from "@/ui/progress";

export const ProductsTableLoader = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Progress value={progress} className="w-[20%]" />
    </div>
  );
};
