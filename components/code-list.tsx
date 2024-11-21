"use client";
import { CopyIcon, EyeIcon, TrashIcon } from "lucide-react";
import AnimationContainer from "./animation-container";
import MagicCard from "./ui/magic-card";

interface Snippet {
  title: string;
  code: string;
  _id: string;
}

interface CodeListProps {
  snippetsData: Snippet[];
}

const CodeList = ({ snippetsData }: CodeListProps) => {
  return (
    <div className="py-4 w-full h-full">
      <AnimationContainer delay={0.2}>
        <ul className="space-y-2">
          {snippetsData.length === 0 ? (
            <div className="flex justify-center items-center">
              <h2 className="text-xl text-neutral-300 font-[400] mb-2">
                No Snippets Available
              </h2>
            </div>
          ) : (
            snippetsData.map((snippet, index) => (
              <MagicCard key={snippet._id}>
                <li className="flex flex-col bg-white/5 p-4 py-2">
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-[#555]">{index + 1}</div>
                      <div className="text-base text-neutral-200">
                        {snippet.title}
                      </div>
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
                  </div>
                  <p className="text-neutral-400 pl-4 text-sm line-clamp-3">
                    {snippet.code}
                  </p>
                </li>
              </MagicCard>
            ))
          )}
        </ul>
      </AnimationContainer>
    </div>
  );
};

export default CodeList;
