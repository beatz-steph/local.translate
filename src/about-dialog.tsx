import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./components/ui/dialog";

export const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm font-semibold">About</DialogTrigger>
      <DialogContent>
        <DialogHeader className="font-bold">About</DialogHeader>
        <p className="text-sm">
          This multilingual translation tool is an efficient, high-performance
          application built with Vite and ShadCN, designed for translating text
          across multiple languages. It’s inspired by the{" "}
          <a
            href="https://huggingface.co/spaces/Xenova/react-translator"
            target="_blank"
          >
            Xenova React Translator
          </a>
          , with additional enhancements to streamline and optimize the user
          experience.
        </p>
        <p className="text-sm">
          Leveraging the power of a quantized machine learning model, the app
          performs translations swiftly while minimizing resource consumption,
          making it both accessible and responsive on various devices. The
          quantization approach compresses the model without compromising
          accuracy, allowing for quicker translations and a smoother user
          experience.
        </p>
        <p className="text-sm mb-8">
          Built with a strong focus on usability and speed, this app showcases
          the latest in frontend technology and natural language processing,
          delivering reliable, real-time translations to users around the globe.
        </p>
      </DialogContent>
    </Dialog>
  );
};
