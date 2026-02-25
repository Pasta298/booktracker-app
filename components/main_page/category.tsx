"use client";

import BookCard from "@/components/main_page/book_card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useRef, useState } from "react";

const books = [
  { name: "Name of the Wind", author: "Patrick Rothfuss" },
  { name: "Harry Potter and Prisoner of Azkaban", author: "J. K. Rowling" },
  { name: "Hyperion", author: "Dan Simmons" },
  { name: "The Eye of the World", author: "Robert Jordan" },
  { name: "Dune", author: "Frank Herbert" },
  { name: "The Hobbit", author: "J. R. R. Tolkien" },
  { name: "Mistborn", author: "Brandon Sanderson" },
  { name: "The Witcher", author: "Andrzej Sapkowski" },
];

const BOOKS_PER_PAGE = 4;

export default function Category({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [currentPage, setCurrentPage] = useState(1);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const deltaX = e.clientX - startX.current;
    const threshold = 100;

    if (deltaX > threshold && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }

    if (deltaX < -threshold && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="mb-4">
      <h1 className="text-3xl font-semibold font-inter ml-4 mb-2">
        {children}
      </h1>

      <div className="flex flex-col bg-[#f0f0f0] ml-2 mr-2 rounded-[10px] pl-4 pr-4">
        <div
          className="overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentPage - 1) * 100}%)`,
            }}
          >
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex justify-between items-center h-[400px] w-full shrink-0"
              >
                {books
                  .slice(
                    pageIndex * BOOKS_PER_PAGE,
                    pageIndex * BOOKS_PER_PAGE + BOOKS_PER_PAGE
                  )
                  .map((book, index) => (
                    <BookCard key={index} {...book} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        <Pagination className="mb-4">
          <PaginationContent className="gap-3">
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(index + 1);
                  }}
                  className={`w-4 h-4 rounded-full transition-all ${
                    currentPage === index + 1
                      ? "bg-black hover:bg-black"
                      : "bg-[#b1d9fe] hover:bg-[#3d6dcc]"
                  }`}
                />
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
