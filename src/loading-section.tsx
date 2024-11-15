import { useTranslationContext } from "./context";
import { ModelProgress } from "./model-progress";

export const ModelFilesLoadingSection = () => {
  const { ready, progress_items } = useTranslationContext();
  return ready === false ? (
    <div className="mt-8 flex flex-col items-center w-full p-4 border border-muted rounded-md space-y-2 mx-5 lg:mx-0">
      {
        <label>
          Loading models... (first run downloads model files, susbsequent runs
          verify files)
        </label>
      }
      {progress_items.map((data) => (
        <div className="w-full" key={data.file}>
          <ModelProgress text={data.file} percentage={data.progress} />
        </div>
      ))}
    </div>
  ) : null;
};
