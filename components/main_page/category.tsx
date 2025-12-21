import BookCard from "@/components/main_page/book_card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function Category({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-semibold font-inter ml-4 mb-2">
        {children}
      </h1>
      <div className="flex flex-col  bg-[#f0f0f0] ml-2 mr-2 rounded-[10px] pl-4 pr-4">
        <div className="flex h-[400px] justify-between items-center">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>

        <Pagination className="mb-4">
          <PaginationContent className="gap-3">
            <PaginationItem>
              <PaginationLink
                href="#"
                className="w-4 h-4 rounded-full bg-[#b1d9fe] hover:outline-0 hover:bg-[#3d6dcc] active:bg-black"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="w-4 h-4 rounded-full bg-[#b1d9fe] hover:outline-0 hover:bg-[#3d6dcc] active:bg-black"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="w-4 h-4 rounded-full bg-[#b1d9fe] hover:outline-0 hover:bg-[#3d6dcc] active:bg-black"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="w-4 h-4 rounded-full bg-[#b1d9fe] hover:outline-0 hover:bg-[#3d6dcc] active:bg-black"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
