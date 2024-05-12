import { IoSearch } from "react-icons/io5"

interface propsTypes {
  value?: string | number | readonly string[]
  setState: React.Dispatch<React.SetStateAction<string | undefined>>
}

const SearchBar = ({ value, setState }: propsTypes) => {
  return (
    <div className="w-[52%] flex items-center gap-2 h-12 transition-all rounded-full pl-4 focus:outline-blue-300 bg-gray-300 dark:bg-gray-800">
      <IoSearch className="text-gray-500 text-[24px]" />
      <input
        value={value}
        onChange={(e) => setState(e.target.value)}
        className="w-[90%] bg-transparent outline-none"
        type="text"
      />
    </div>
  )
}

export default SearchBar
