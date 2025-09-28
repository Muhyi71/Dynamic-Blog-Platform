import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-16">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-4 rounded-2xl glass-button hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-6 h-6 text-violet-600" />
      </button>

      {/* First page */}
      {pageNumbers[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-6 py-4 rounded-2xl glass-button hover:bg-white/30 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            1
          </button>
          {pageNumbers[0] > 2 && <span className="px-3 text-gray-500 font-bold text-xl">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-6 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl ${
            currentPage === page
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-600 scale-110'
              : 'glass-button hover:bg-white/30'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last page */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="px-3 text-gray-500 font-bold text-xl">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-6 py-4 rounded-2xl glass-button hover:bg-white/30 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-4 rounded-2xl glass-button hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Next page"
      >
        <ChevronRight className="w-6 h-6 text-violet-600" />
      </button>
    </div>
  );
}