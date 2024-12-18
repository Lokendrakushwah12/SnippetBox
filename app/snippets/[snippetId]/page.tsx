"use client";
import AnimationContainer from "@/components/animation-container";
import CodeBlock from "@/components/CodeBlock";
import Background from "@/components/ui/background";
import { RootState } from "@/store/rootReducer";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const Page = () => {
  const { snippetId } = useParams();
  const snippet = useSelector((state: RootState) =>
    state.snippet?.snippets?.find((s) => s._id === snippetId)
  );
  console.log(snippet);
  return (
    <>
      <Background />
      <div className="max-w-3xl size-full mx-auto pt-12 md:px-0 px-4 pb-8">
        <AnimationContainer>
          <h2 className="text-3xl py-4 text-center font-[500] mb-2">
            {snippet?.title}
          </h2>
        </AnimationContainer>
        <AnimationContainer delay={0.05}>
          <CodeBlock
            language="tsx"
            title={snippet?.title || ""}
            value={snippet?.code || ""}
          />
        </AnimationContainer>
      </div>
    </>
  );
};

export default Page;
