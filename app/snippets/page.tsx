"use client";
import AnimationContainer from "@/components/animation-container";
import CodeList from "@/components/code-list";
import Background from "@/components/ui/background";
import { RootState } from "@/store/rootReducer";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const snippetsData = useSelector(
    (state: RootState) => state.snippet.snippets
  );

  const filteredData = snippetsData.filter((snippet) =>
    snippet.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  return (
    <>
      <Background />
      <div className="max-w-3xl size-full mx-auto pt-12 md:px-0 px-4">
        <AnimationContainer>
          <h2 className="text-3xl py-4 text-center font-[500] mb-2">
            Recently Added snippets
          </h2>
        </AnimationContainer>
        <div className="relative">
          <AnimationContainer delay={0.1}>
            <button className="absolute top-3 left-2 text-[#aaa] hover:text-[#eee]">
              <Search size={18} />
            </button>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search with title..."
              className="search-input flex-1 w-full pl-8 outline-0 rounded-xl overflow-hidden border-white/5 border-2 bg-neutral-950/80 backdrop-filter-8 text-neutral-400 placeholder:text-neutral-600 p-2 text-sm leading-6 resize-none"
            />
          </AnimationContainer>
        </div>
        <CodeList snippetsData={filteredData} />
      </div>
    </>
  );
};

export default page;
