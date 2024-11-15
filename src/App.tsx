import { AboutDialog } from "./about-dialog";
import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { TranslationContextProvider } from "./context";
import { ModelFilesLoadingSection } from "./loading-section";
import { Query } from "./query";
import { Response } from "./response";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TranslationContextProvider>
        <div className="bg-background w-screen h-screen">
          <div className="max-w-5xl mx-auto h-full">
            <nav className="flex items-center justify-between py-4 px-5 lg:px-0">
              <div className="flex items-center gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#1C1C1C" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.9999 12.0411C23.9999 12.0274 24 12.0137 24 12C24 5.37259 18.6274 0 12 0C5.37256 0 0 5.37259 0 12C0 18.2907 4.84045 23.4508 11.0001 23.9589C11.0222 17.3504 16.3862 12 23 12C23.3367 12 23.6702 12.0139 23.9999 12.0411Z"
                    fill="#808080"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.6104 6.38959C20.9362 5.50244 19.0267 5 17 5C10.3726 5 5 10.3726 5 17C5 19.0267 5.50244 20.9361 6.38959 22.6104C2.58905 20.5966 0 16.6007 0 12C0 5.37259 5.37256 0 12 0C16.6007 0 20.5966 2.58902 22.6104 6.38959Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <p className="text-xs font-bold border-t border-b py-1 border-foreground w-fit">
                  ML.<span className="font-light">Translation</span>
                </p>
              </div>
              <AboutDialog />
              <ModeToggle />
            </nav>
            <div className="max-w-2xl mx-auto mt-8 lg:mt-16 flex flex-col items-center px-5 lg:px-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-center py-4 mt-10 tracking-tighter lg:tracking-tighter">
                ML-powered multilingual translation, directly in your browser
              </h1>
              <p className="text-muted-foreground">
                Select your language and start translating
              </p>
            </div>
            <ModelFilesLoadingSection />
            <Query />
            <Response />
          </div>
        </div>
      </TranslationContextProvider>
    </ThemeProvider>
  );
}

export default App;
