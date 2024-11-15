import { Check, ChevronsUpDown, Send } from "lucide-react";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { useTranslationContext } from "./context";
import { cn } from "./lib/utils";
import { LANGUAGES } from "./languages";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/ui/command";

export const Query = () => {
  const {
    set_text,
    source_language,
    set_source_language,
    translate,
    disabled,
  } = useTranslationContext();

  const [open, set_open] = useState(false);

  const [local_text, set_local_text] = useState<string>("");

  return (
    <div
      className={cn(
        "w-xl mx-5 lg:mx-auto mt-16 border p-2 rounded-md flex flex-col gap-2",
        local_text.length > 5000 && "border-destructive"
      )}
    >
      <Textarea
        placeholder="Enter your statement"
        className="focus-visible:ring-0 border-none"
        rows={4}
        value={local_text}
        onChange={(e) => set_local_text(e.target.value)}
        disabled={disabled}
        onBlur={() => set_text(local_text)}
      />
      <div className="w-full flex items-center justify-between">
        <Popover open={open} onOpenChange={set_open}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {source_language || "Select language..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search language..." className="h-9" />
              <CommandList>
                <CommandEmpty>No language found.</CommandEmpty>
                <CommandGroup>
                  {Object.keys(LANGUAGES).map((language) => (
                    <CommandItem
                      key={language}
                      value={language}
                      onSelect={() => {
                        set_source_language(language);
                        set_open(false);
                      }}
                    >
                      {language}
                      <Check
                        className={cn(
                          "ml-auto",
                          language === source_language
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
        <div className="flex items-center gap-2">
          <p> {local_text.length}/5000</p>
          <Button
            disabled={disabled || local_text.length > 5000}
            onClick={translate}
            size="sm"
          >
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
};
