

interface SearchFiltersProps {
  onSearch: (search: string) => void;
  onTagFilter: (tag: string) => void;
  currentSearch: string;
  currentTag: string;
}

export default function SearchFilters({
  onSearch,
  onTagFilter,
  currentSearch,
  currentTag
}: SearchFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Input */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Posts
          </label>
          <input
            type="text"
            id="search"
            value={currentSearch}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by title or content..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Tag Filter */}
        <div>
          <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            value={currentTag}
            onChange={(e) => onTagFilter(e.target.value)}
            placeholder="Filter by tag..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}