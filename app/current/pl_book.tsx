import { Check } from "lucide-react";
import Link from "next/link";

export default function PlBook({
  name,
  author,
}: {
  name: string;
  author: string;
}) {
  return (
    <Link
      className="relative flex mt-3 h-[30%] bg-white shadow-[1px_1px_4px_0_rgba(0,0,0,0.3)] rounded-[20px] pt-2"
      href="/book"
    >
      <div className="bg-[#c7c8c9] h-[95%] w-[25%] rounded-[14px] ml-2" />

      <div className="flex flex-col w-[52%] h-[95%] ml-2 justify-center gap-2">
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="text-lg">{author}</h2>
      </div>

      <div className="absolute bottom-3 right-3 rounded-full w-8 h-8 bg-[#3d6dcc] flex items-center justify-center">
        <Check className="size-6 text-white" />
      </div>
    </Link>
  );
}
