"use client"
import { DarkMode, InfiniteScroll, SearchBar } from "@/components"
import { useState } from "react"

export default function Home() {
  const [searchWord, setSearchWord] = useState<string | undefined>("")

  return (
    <div className="flex flex-col gap-3 transition-all duration-[.2s] text-black dark:text-white relative bg-white dark:bg-black min-h-screen">
      <nav className="px-5 mx-4 backdrop-blur-3xl rounded-3xl z-10 py-4 flex flex-col gap-3 sticky top-2">
        <div className="w-full flex justify-between items-center gap-3 transition-all duration-[.2s]">
          <h2 className="text-2xl">Image Gallery</h2>
          <div className="w-[52%] hidden md:inline-block">
            <SearchBar value={searchWord} setState={setSearchWord} />
          </div>
          <DarkMode />
        </div>
        <div className="w-full inline-block md:hidden">
          <SearchBar value={searchWord} setState={setSearchWord} />
        </div>
      </nav>
      <main>
        <InfiniteScroll searchWord={searchWord} />
      </main>
    </div>
  )
}
