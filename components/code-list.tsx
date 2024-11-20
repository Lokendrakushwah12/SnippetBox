import { CheckIcon, CopyIcon, EyeIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import MagicCard from "./ui/magic-card";
import AnimationContainer from "./animation-container";

const CodeList = () => {
  const loading = false;

  const snippets = [
    {
      id: "1",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "2",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "3",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "4",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "5",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "6",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "7",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "8",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "9",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
    {
      id: "10",
      title: "Hello World",
      code: "console.log('Hello, World!')",
    },
  ];

  return (
    <div className="py-12 w-full h-full">
      <AnimationContainer delay={0.2}>
        <h2 className="text-2xl font-[500] mb-2">Recently Added snippets</h2>
        <ul className="space-y-2">
          {loading ? (
            <div className="flex flex-col gap-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="h-[44px] w-full bg-white/5 rounded-lg border-white/10 border animate-pulse"
                />
              ))}
            </div>
          ) : (
            <>
              {snippets.map((data, index) => (
                <MagicCard key={index}>
                  <li className="flex bg-white/5 p-4 py-2 items-center w-full justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-[#555]">{data.id}</div>
                      <div className="text-sm text-white/80">{data.title}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-[#555] hover:text-white">
                        <EyeIcon size={18} />
                      </button>
                      <button className="text-[#555] hover:text-white">
                        <CopyIcon size={16} />
                      </button>
                      <button className="text-[#555] hover:text-white">
                        <TrashIcon size={16} />
                      </button>
                    </div>
                  </li>
                </MagicCard>
              ))}
            </>
          )}
        </ul>
      </AnimationContainer>
    </div>
  );
};

export default CodeList;
