"use client";
import { CheckIcon, CopyIcon, EyeIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import MagicCard from "./ui/magic-card";
import AnimationContainer from "./animation-container";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

const CodeList = () => {
  const loading = false;

  const snippetsData = useSelector(
    (state: RootState) => state.snippet.snippets
  );

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
              {snippetsData.map((data, index) => (
                <MagicCard key={index}>
                  <li className="flex flex-col bg-white/5 p-4 py-2">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-[#555]">{index + 1}</div>
                        <div className="text-base text-neutral-200">
                          {data.title}
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
                      {data.code}
                    </p>
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
