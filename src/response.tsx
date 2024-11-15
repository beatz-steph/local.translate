import { Check, ChevronsUpDown, Copy } from "lucide-react";
import { Button } from "./components/ui/button";
import { useTranslationContext } from "./context";
import { LANGUAGES } from "./languages";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/ui/command";
import { cn } from "./lib/utils";

export const Response = () => {
  const { target_language, set_target_language, disabled, output } =
    useTranslationContext();
  const [open, set_open] = useState<boolean>(false);
  return (
    <div className="w-xl mx-5 lg:mx-auto mt-10 border p-2 rounded-md bg-muted/50 flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <Popover open={open} onOpenChange={set_open}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {target_language || "Select framework..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." className="h-9" />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {Object.keys(LANGUAGES).map((language) => (
                    <CommandItem
                      key={language}
                      value={language}
                      onSelect={() => {
                        set_target_language(language);
                        set_open(false);
                      }}
                    >
                      {language}
                      <Check
                        className={cn(
                          "ml-auto",
                          language === target_language
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Button disabled={disabled} variant="ghost" className="p-0 w-fit mr-4">
          <Copy />
        </Button>
      </div>
      {output ? <p className="text-sm my-8">{output}</p> : null}
    </div>
  );
};
