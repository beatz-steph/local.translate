import React, { useEffect, useState } from "react";

export const useTranslationWorker = ({
  worker,
}: {
  worker: React.MutableRefObject<Worker | null>;
}) => {
  const [ready, set_ready] = useState<boolean | null>(null);
  const [disabled, set_disabled] = useState(false);
  const [progress_items, set_progress_items] = useState<
    { file: string; progress: number }[]
  >([]);
  const [output, set_output] = useState<string>("");

  // We use the `useEffect` hook to setup the worker as soon as the `App` component is mounted.
  useEffect(() => {
    if (!worker.current) {
      // Create the worker if it does not yet exist.
      worker.current = new Worker(new URL("./worker.js", import.meta.url), {
        type: "module",
      });
    }

    // Create a callback function for messages from the worker thread.
    const onMessageReceived = (e: any) => {
      switch (e.data.status) {
        case "initiate":
          // Model file start load: add a new progress item to the list.
          set_ready(false);
          set_progress_items((prev) => [...prev, e.data]);
          break;

        case "progress":
          // Model file progress: update one of the progress items.
          set_progress_items((prev) =>
            prev.map((item) => {
              if (item.file === e.data.file) {
                return { ...item, progress: e.data.progress };
              }
              return item;
            })
          );
          break;

        case "done":
          // Model file loaded: remove the progress item from the list.
          set_progress_items((prev) =>
            prev.filter((item) => item.file !== e.data.file)
          );
          break;

        case "ready":
          // Pipeline ready: the worker is ready to accept messages.
          set_ready(true);
          break;

        case "update":
          // Generation update: update the output text.
          set_output(e.data.output);
          break;

        case "complete":
          // Generation complete: re-enable the "Translate" button
          set_disabled(false);
          break;

        case "error":
          console.log("error", { e });
          break;
      }
    };

    // Attach the callback function as an event listener.
    worker.current.addEventListener("message", onMessageReceived);

    // Define a cleanup function for when the component is unmounted.
    return () =>
      worker?.current?.removeEventListener("message", onMessageReceived);
  });

  return { ready, disabled, progress_items, output, set_disabled };
};
