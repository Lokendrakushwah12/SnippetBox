import CodeList from "@/components/code-list";
import Background from "@/components/ui/background";
// import { geist_Sans } from "./layout";
import AddSnippet from "@/components/add-snippet";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Background />
      <div className="flex flex-col items-center min-h-screen justify-between p-8 py-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 justify-start items-center">
          <h1
            className={`text-4xl sm:text-6xl font-bold  ${geist_Sans.className} dark:text-white`}
          >
            Snippet Box
          </h1>
          <p className="text-base md:text-lg text-center dark:text-neutral-300">
            Save, organize, and access your code snippets anytime, anywhere.
          </p>
          <AddSnippet />
          <Link
            href="/snippets"
            className="rounded-xl max-w-2xl w-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-white/[0.02] hover:border-white/[.05] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            View all snippets
          </Link>
          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy now
            </a>

           
          </div> */}
        </main>
        <footer className="row-start-3 flex gap-3 flex-wrap items-center justify-center">
          <p>Built by</p>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://x.com/Lokendratwt"
            target="_blank"
            rel="noopener noreferrer"
          >
            @lokendratwt
          </a>
        </footer>
      </div>
    </>
  );
}
