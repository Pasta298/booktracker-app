import { ArrowDown, ArrowUp, Equal } from "lucide-react";

export default function ReadInfoComponent() {
  return (
    <div className="flex flex-col min-w-[304px] min-h-[180px] h-[180px] rounded-[20px] bg-[#d9d9d9] gap-2 p-3">
      <div className="flex flex-row h-[50%] items-center justify-between">
        <h1 className="text-2xl font-bold">12.57%</h1>
        <div className="flex flex-col">
          <h2>2 hours 12 min</h2>
          <h2>Today 13:23</h2>
        </div>
      </div>
      <div className="w-full h-0.5 bg-black" />
      <div className="flex flex-row justify-between w-full h-full mt-2">
        <div className="flex flex-col w-[40%] ">
          <h2>Estimated time of completition:</h2>
          <h2>4 hrs 2 mins</h2>
        </div>
        <ArrowUp className="size-20 stroke-[#06aa11]" />
        {/* <ArrowDown className="size-20 stroke-[#d50509]" /> */}
        {/* <Equal className="size-20 stroke-[#c5c500]" /> */}
      </div>
    </div>
  );
}
