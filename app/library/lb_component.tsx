import { Button } from "@/components/ui/button";
import { Check, Clock, Ellipsis, Octagon, X } from "lucide-react";

type BookStatus = "finished" | "reading" | "postponed" | "dnf";

export default function LibraryBookComponent({
  status,
}: {
  status: BookStatus;
}) {
  const statusConfig = {
    finished: {
      color: "text-[#5ecc3d]",
      bg: "bg-[#5ecc3d]",
      icon: <Check className="size-10 text-white" />,
      label: "Finished",
    },
    reading: {
      color: "text-[#d2c000]",
      bg: "bg-[#d2c000]",
      icon: <Clock className="size-10 text-white" />,
      label: "Reading",
    },
    postponed: {
      color: "text-[#3d6dcc]",
      bg: "bg-[#3d6dcc]",
      icon: <Octagon className="size-8 text-white fill-white" />,
      label: "Postponed",
    },
    dnf: {
      color: "text-[#da0105]",
      bg: "bg-[#da0105]",
      icon: <X className="size-10 text-white" />,
      label: "DNF",
    },
  };

  const current = statusConfig[status];

  return (
    <div className="relative flex w-[445px] h-[250px] p-2 rounded-[20px] bg-white shadow-[1px_1px_4px_0_rgba(0,0,0,0.3)]">
      <div className="bg-[#c7c8c9] h-full w-[35%] rounded-[14px]" />

      <div className="flex flex-col justify-between w-[52%] h-[95%] ml-3 mt-2">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Name</h1>
          <h2 className="text-2xl">Author</h2>
        </div>
        <div>
          <h1 className={`font-bold text-xl ${current.color}`}>
            {current.label}
          </h1>
          <h1 className={`font-bold text-xl ${current.color}`}>Date</h1>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <Button className="rounded-full w-10 h-10 ml-2 hover:bg-gray-600 active:bg-black">
          <Ellipsis className="size-9" />
        </Button>
        <div
          className={`rounded-full w-13 h-13 ${current.bg} flex items-center justify-center`}
        >
          {current.icon}
        </div>
      </div>
    </div>
  );
}
