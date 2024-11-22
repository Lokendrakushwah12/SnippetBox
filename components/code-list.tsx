"use client";
import { removeFromSnippet } from "@/store/slice/snippetSlice";
import { AnimatePresence } from "framer-motion";
import {
  Check,
  CopyIcon,
  EyeIcon,
  TrashIcon
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AnimationContainer from "./animation-container";
import DeleteModal from "./DeleteModal";
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
  const dispatch = useDispatch();
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedSnippetId, setSelectedSnippetId] = useState<string | null>(
    null
  );
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  const handleDelete = (snippetId: string) => {
    setSelectedSnippetId(snippetId);
    setDeleteModal(true);
  };

  const handleConfirm = () => {
    if (selectedSnippetId) {
      dispatch(removeFromSnippet({ _id: selectedSnippetId }));
    }
    setDeleteModal(false);
    setSelectedSnippetId(null);
  };

  const handleCopy = (snippetId: string, snippetCode: string) => {
    setCopiedSnippetId(snippetId);
    navigator.clipboard.writeText(snippetCode);
    setTimeout(() => {
      setCopiedSnippetId(null);
    }, 2000);
  };

  return (
    <>
      <AnimatePresence>
        {deleteModal && (
          <DeleteModal
            isOpen={deleteModal}
            onClose={() => setDeleteModal(false)}
            onConfirm={handleConfirm}
          />
        )}
      </AnimatePresence>
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
                        <button
                          onClick={() => handleCopy(snippet._id, snippet.code)}
                          className="text-[#555] hover:text-white"
                        >
                          {copiedSnippetId === snippet._id ? (
                            <Check size={16} />
                          ) : (
                            <CopyIcon size={16} />
                          )}
                        </button>
                        <button
                          onClick={() => handleDelete(snippet._id)}
                          className="text-[#555] hover:text-white"
                        >
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
    </>
  );
};

export default CodeList;
