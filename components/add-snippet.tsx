"use client";
import { RootState } from "@/store/rootReducer";
import { addToSnippet, updateToSnippet } from "@/store/slice/snippetSlice";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Snippet {
  title: string;
  code: string;
  _id: string;
}
const AddSnippet = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const snippetId = searchParams.get("snippetId");

  const snippet = useSelector((state: RootState) =>
    state.snippet?.snippets?.find((s) => s._id === snippetId)
  );

  const lineNumbers = text.split("\n").length;
  const newSnippetId = Array.isArray(snippetId)
    ? snippetId[0]
    : snippetId || Date.now().toString(32);

  useEffect(() => {
    if (snippetId && snippet && !isUpdated) {
      setTitle(snippet.title);
      setText(snippet.code);
    }
  }, [snippetId, snippet, isUpdated]);

  const createSnippet = () => {
    if (!title.trim() || !text.trim()) {
      setError("Both title and snippet text are required.");
      return;
    }

    setError("");

    const snippet: Snippet = {
      title: title,
      code: text,
      _id: newSnippetId,
    };

    if (snippetId) {
      dispatch(updateToSnippet(snippet));
      setIsUpdated(true);
    } else {
      dispatch(addToSnippet(snippet));
    }
    setTitle("");
    setText("");
  };

  return (
    <div className="size-full flex flex-col max-w-2xl overflow-hidden gap-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 outline-0 rounded-xl -mb-3 overflow-hidden border-white/5 border-2 bg-neutral-950/80 backdrop-filter-8 text-neutral-400 placeholder:text-neutral-600 p-2 text-sm leading-6 resize-none"
      />

      <div className="relative w-full min-h-32 rounded-xl overflow-hidden border-white/5 border-2 bg-neutral-950/80 backdrop-filter-8 flex">
        {/* Line Numbers */}
        <div className="text-neutral-600 overflow-hidden text-center pt-2 min-w-[20px] flex flex-col">
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
      {error && (
        <div className="text-red-500 text-sm font-medium mb-2">{error}</div>
      )}
      <div className="flex w-full text-[#aaa] gap-2 justify-center items-center">
        <button
          onClick={createSnippet}
          className="rounded-xl w-full font-[500] border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          {snippetId ? "Update" : "Add"}
        </button>
        {snippetId && "OR"}
        {snippetId && (
          <Link
            href="/"
            className="rounded-xl w-[220px] font-[500] border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            + Create one
          </Link>
        )}
      </div>
    </div>
  );
};

export default AddSnippet;
