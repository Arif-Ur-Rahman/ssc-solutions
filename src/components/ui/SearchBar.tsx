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
    <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-lg shadow-md p-2">
      <Search className="h-5 w-5 text-gray-400 ml-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 focus:outline-none"
        aria-label="Search"
      />
      <button 
        type="submit"
        className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
      >
        Search
      </button>
    </form>
  )
}