import LibraryBookComponent from "./lb_component";

type BookStatus = "finished" | "reading" | "postponed" | "dnf";

export default function MyBooks() {
  const books_statuses: { id: number; status: BookStatus }[] = [
    { id: 1, status: "postponed" },
    { id: 2, status: "dnf" },
    { id: 3, status: "finished" },
    { id: 4, status: "reading" },
    { id: 5, status: "postponed" },
    { id: 6, status: "dnf" },
    { id: 7, status: "finished" },
    { id: 8, status: "reading" },
    { id: 9, status: "postponed" },
    { id: 10, status: "dnf" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      {books_statuses.map((book) => (
        <LibraryBookComponent key={book.id} status={book.status} />
      ))}
    </div>
  );
}
