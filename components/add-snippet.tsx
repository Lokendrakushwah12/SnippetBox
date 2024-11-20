"use client";
import { addToSnippet, updateToSnippet } from "@/store/slice/snippetSlice";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface Snippet {
  title: string;
  code: string;
  _id: string;
}
const AddSnippet = () => {
  const { pasteId } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const lineNumbers = text.split("\n").length;
  const snippetId = Array.isArray(pasteId)
    ? pasteId[0]
    : pasteId || Date.now().toString(32);

  const createSnippet = () => {
    if (!title.trim() || !text.trim()) {
      setError("Both title and snippet text are required.");
      return;
    }

    setError("");

    const snippet: Snippet = {
      title: title,
      code: text,
      _id: snippetId,
    };

    if (pasteId) {
      dispatch(updateToSnippet(snippet));
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
      <button
        onClick={createSnippet}
        className="rounded-xl w-full font-[500] border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        Add
      </button>
    </div>
  );
};

export default AddSnippet;
