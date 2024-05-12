"use client"
import { DarkMode, InfiniteScroll, SearchBar } from "@/components"
import { useState } from "react"

export default function Home() {
  const [searchWord, setSearchWord] = useState<string | undefined>("")

  return (
    <div className="flex flex-col gap-3 transition-all duration-[.2s] text-black dark:text-white  relative bg-white dark:bg-black min-h-screen">
      <nav className="px-5 bg-white z-10 dark:bg-black py-4 flex  gap-3   justify-between items-center sticky top-0">
        <h2 className="text-3xl ">Image Gallery</h2>
        <SearchBar value={searchWord} setState={setSearchWord} />
        <DarkMode />
      </nav>
      <main>
        <InfiniteScroll searchWord={searchWord} />
      </main>
    </div>
  )
}
