import { useEffect, useState } from "react";

import { Progress } from "@/ui/progress";

export const ProductsTableLoader = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-125 flex flex-col justify-center items-center">
      <Progress value={progress} className="w-[20%]" />
    </div>
  );
};
