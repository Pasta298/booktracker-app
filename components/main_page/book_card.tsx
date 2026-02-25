"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function BookCard({
  name,
  author,
}: {
  name: string;
  author: string;
}) {
  return (
    <Link
      className="flex flex-col items-center bg-white w-[20%] h-[90%] rounded-[10px]"
      href="/book"
    >
      <div className="bg-[#d4ecff] mt-4 w-[85%] flex-4 rounded-[6px]"></div>

      <div className="flex justify-between items-center w-[85%] flex-1 mt-1">
        <div className="flex flex-col min-w-0">
          <span className="font-bold truncate">{name}</span>
          <span className="text-[#989898] font-semibold truncate">
            {author}
          </span>
        </div>

        <Button
          className="rounded-full w-10 h-10 bg-[#3d6dcc] p-0 hover:bg-[#4e9d85] hover:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Plus className="size-8 text-white" />
        </Button>
      </div>
    </Link>
  );
}
