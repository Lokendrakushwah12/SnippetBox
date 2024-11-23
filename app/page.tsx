import AddSnippet from "@/components/add-snippet";
import AnimationContainer from "@/components/animation-container";
import Background from "@/components/ui/background";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Background />
      <div className="flex flex-col overflow-hidden items-center min-h-screen max-w-2xl mx-auto justify-between p-8 py-20 gap-16 sm:pt-12 sm:pb-4">
        <main className="flex flex-col gap-8 justify-start items-center">
          <AnimationContainer>
            <h1
              className={`text-4xl sm:text-6xl font-bold  geist_Sans dark:text-white`}
            >
              Snippet Box
            </h1>
          </AnimationContainer>
          <AnimationContainer className="size-full" delay={0.02}>
            <p className="text-base md:text-lg text-center -mt-4 dark:text-neutral-300">
              Save and access your code snippets anytime, anywhere.
            </p>
          </AnimationContainer>
          <AnimationContainer className="size-full" delay={0.04}>
            <p className="text-base md:text-lg dark:text-neutral-300">
              Built with Next.js, Redux for state management, and data saved in
              local storage.
            </p>
          </AnimationContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <AnimationContainer className="size-full" delay={0.06}>
              <AddSnippet />
            </AnimationContainer>
          </Suspense>
          <AnimationContainer className="size-full" delay={0.08}>
            <Link
              href="/snippets"
              className="rounded-xl max-w-2xl w-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-white/[0.02] hover:border-white/[.05] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              View all snippets
            </Link>
          </AnimationContainer>
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
        <AnimationContainer delay={0.1}>
          <footer className="flex gap-2 items-center justify-center">
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
        </AnimationContainer>
      </div>
    </>
  );
}
