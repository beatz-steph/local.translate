import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { LANGUAGES } from "./languages";
import { useTranslationWorker } from "./use-worker";

type TranslationContextType = {
  source_language: string;
  set_source_language: (value: string) => void;
  target_language: string;
  set_target_language: (value: string) => void;
  text: string;
  set_text: (value: string) => void;
  output: string;

  ready: boolean | null;
  disabled: boolean;
  progress_items: { file: string; progress: number }[];

  translate: () => void;
};

const TranslationContext = createContext<TranslationContextType>({
  source_language: "English",
  set_source_language: () => {},
  target_language: "French",
  set_target_language: () => {},
  text: "",
  set_text: () => {},
  output: "",
  ready: false,
  disabled: false,
  progress_items: [],
  translate: () => {},
});

export const TranslationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // Inputs and Outputs
  const [source_language, set_source_language] = useState<string>("English");
  const [target_language, set_target_language] = useState<string>("French");
  const [text, set_text] = useState<string>("");

  // Create a reference to the worker object.
  const worker = useRef<Worker>(null);

  const { output, ready, disabled, progress_items, set_disabled } =
    useTranslationWorker({
      worker,
    });

  const translate = () => {
    set_disabled(true);
    worker?.current?.postMessage({
      text,
      src_lang: LANGUAGES[source_language],
      tgt_lang: LANGUAGES[target_language],
    });
  };

  return (
    <TranslationContext.Provider
      value={{
        source_language,
        set_source_language,
        target_language,
        set_target_language,
        text,
        set_text: set_text,
        output,
        ready,
        disabled,
        progress_items,
        translate,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw Error(
      "useTranslationContext must be used within a TranslationContextProvider"
    );
  }

  return context;
};
