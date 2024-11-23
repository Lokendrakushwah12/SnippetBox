"use client";
import { CheckIcon, CopyIcon } from "lucide-react";
import { memo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkDark
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { toast } from "sonner";

export const programmingLanguages = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
  tsx: ".tsx",
  bash: ".sh",
  // add more file extensions here
};

const CodeBlock = memo(function CodeBlock({
  language,
  value,
  title,
}: {
  language: keyof typeof programmingLanguages;
  value: string;
  title: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(value);
    toast.success("Snippet copied successfully 🎉");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const syntaxTheme = coldarkDark;

  return (
    <div className="scroll-min relative w-full overflow-hidden rounded-lg border border-[#212121] bg-black/50 font-sans">
      <div className="flex w-full items-center justify-between border-b border-[#212121] bg-white/5 px-4 py-2 text-foreground">
        <span className="text-xs lowercase text-[#b0b0b0]">{title}</span>
        <div className="flex items-center space-x-1">
          <button
            className="rounded-sm p-[3px] transition-all hover:bg-[#ffffff1d]"
            onClick={onCopy}
          >
            {isCopied ? (
              <CheckIcon size={14} className="text-[#b0b0b0]" />
            ) : (
              <CopyIcon size={14} className="text-[#b0b0b0]" />
            )}
            <span className="sr-only">Copy code</span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={syntaxTheme}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "0.5rem",
        }}
        codeTagProps={{
          style: {
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)",
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
});

export default CodeBlock;
