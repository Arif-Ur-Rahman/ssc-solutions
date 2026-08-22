'use client'

import { Search } from 'lucide-react'
import { useState, FormEvent } from 'react'

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ 
  onSearch, 
  placeholder = "Search for subjects, chapters, or topics..." 
}: SearchBarProps) {
  const [query, setQuery] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSearch && query.trim()) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white rounded-lg shadow-md p-2">
      <Search className="h-5 w-5 shrink-0 text-gray-400 ml-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        /* `text-base` keeps iOS from zooming the page when the field takes focus. */
        className="min-w-0 flex-1 px-2 py-2 text-base focus:outline-none"
        aria-label="Search"
      />
      <button
        type="submit"
        aria-label="Search"
        className="inline-flex shrink-0 items-center justify-center bg-indigo-600 text-white px-3 sm:px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
      >
        <Search className="h-4 w-4 sm:hidden" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  )
}