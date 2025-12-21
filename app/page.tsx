import Category from "@/components/main_page/category";

export default function Home() {
  return (
    <div className="flex flex-col justify-left p-2">
      <Category>New Books</Category>
      <Category>Recommended</Category>
    </div>
  );
}
