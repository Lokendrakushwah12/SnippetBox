import CodeList from "@/components/code-list";
import Background from "@/components/ui/background";

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
