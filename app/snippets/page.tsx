import CodeList from "@/components/code-list";
import Background from "@/components/ui/background";
import React from "react";

const page = () => {
  return (
    <>
      <Background />
      <div className="max-w-3xl size-full mx-auto">
          <CodeList />
      </div>
    </>
  );
};

export default page;
