import React from 'react'
import { CiSearch } from 'react-icons/ci'
const Search = () => {
  return (

    <div className="flex relative rounded-md w-full px-4 h-8 max-w-xl">
    <input type="text" name="q" id="query" placeholder="search"
        className="w-full p-3  rounded-l-3xl border-2 border-r-white rounded-4x     border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
    <button
        className="inline-flex  rounded-r-3xl items-center gap-2 bg-indigo-500 text-white text-lg font-semibold py-4 pt-4 px-2 ">
        <CiSearch/>
        <span className="hidden md:block">
            
        </span>
    </button>

</div>
  )
}

export default Search
