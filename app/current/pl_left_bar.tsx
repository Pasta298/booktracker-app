import { Button } from "@/components/ui/button";
import PlBook from "./pl_book";
import Link from "next/link";

export default function PlLeftBar() {
  const percent = 37;

  const books = [
    { id: 1, name: "1984", author: "George Orwell" },
    { id: 2, name: "Dune", author: "Frank Herbert" },
    { id: 3, name: "The Eye of the World", author: "Robert Jordan" },
  ];

  return (
    <div className="mt-2 ml-2 w-[25%] h-full">
      <div className="w-full h-[35%]">
        <h1 className="font-bold text-3xl">Currently Reading</h1>
        <div className="flex flex-row mt-2 h-[82%] bg-[#f0f0f0] rounded-[20px] pt-2">
          <div className="bg-[#c7c8c9] h-[95%] w-[40%] rounded-2xl ml-2" />
          <div className="flex flex-col w-[52%] h-[95%] ml-2 justify-center">
            <h1 className="font-bold text-xl">Name</h1>
            <h2 className="text-lg">Author</h2>
            <div className="w-full mt-6 h-[6%] rounded-[100px] bg-[#d9d9d9]">
              <div
                style={{ width: `${percent}%` }}
                className="h-full rounded-[100px] bg-[#888888]"
              />
            </div>
            <h2>{percent}% completed</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[67%]">
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-bold text-3xl">My Library</h1>

          <Button
            asChild
            className="bg-[#d9d9d9] text-lg text-black hover:bg-[#d4ecff] active:bg-[#3d6dcc] w-[40%] h-9 rounded-[14px]"
          >
            <Link href="/library">Look All</Link>
          </Button>
        </div>
        <div className="h-[88%]">
          {books.map((book) => (
            <PlBook key={book.id} name={book.name} author={book.author} />
          ))}
        </div>
      </div>
    </div>
  );
}
