"use client";
import React, { useState } from "react";

const AddSnippet = () => {
  const [text, setText] = useState("");

  const lineNumbers = text.split("\n").length;

  return (
    <div className="size-full flex flex-col max-w-2xl overflow-hidden gap-4">
      <div className="relative w-full min-h-32 rounded-xl overflow-hidden bg-neutral-950/80 backdrop-filter-8 flex">
        {/* Line Numbers */}
        <div className="text-neutral-500 overflow-hidden text-center pt-2 min-w-[20px] flex flex-col">
          {Array.from({ length: lineNumbers }, (_, i) => (
            <span key={i} className="text-sm leading-6">
              {i + 1}
            </span>
          ))}
        </div>

        <textarea
          placeholder="Add your snippet here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 outline-0 bg-transparent overflow-hidden text-neutral-400 placeholder:text-neutral-600 p-2 text-sm leading-6 resize-none"
        />
      </div>

      <button className="rounded-xl w-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
        Add
      </button>
    </div>
  );
};

export default AddSnippet;
