import { Progress } from "./components/ui/progress";

export const ModelProgress = ({
  text,
  percentage,
}: {
  text: string;
  percentage: number;
}) => {
  return (
    <div className="w-full space-y-1">
      <p>{text}</p>
      <Progress value={percentage} />
    </div>
  );
};
