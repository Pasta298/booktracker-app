import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function SearchedBookComponent() {
  const rating = 2.3;

  const annotation = `The Malazan Empire simmers with discontent, bled dry by interminable warfare, 
  bitter infighting and bloody confrontations with the formidable Anomander Rake and his Tiste Andii, 
  ancient and implacable sorcerers. Even the imperial legions, long inured to the bloodshed, yearn for 
  some respite. Yet Empress Laseen's rule remains absolute, enforced by her dread Claw assassins...`;

  return (
    <div className="flex w-full h-[300px] p-3">
      <div className="flex flex-row p-3 w-full h-full bg-[#f0f0f0] rounded-[20px]">
        <div className="flex flex-row w-[40%] h-full">
          <div className="bg-[#c7c8c9] h-full w-[35%] rounded-[12px]" />
          <div className="flex flex-col ml-6 gap-1">
            <h2 className="text-2xl font-bold">Gardens of the moon</h2>

            <span className="text-lg italic text">
              Malazan Book of the Fallen
            </span>

            <span className="text-lg text-gray-400">Steven Erickson</span>

            <div className="flex flex-col items-center justify-center gap-5 mt-4">
              <span className="text-3xl font-bold">Rating</span>

              <div className="flex flex-row gap-5 justify-center">
                {Array.from({ length: 5 }).map((_, i) => {
                  const fillPercent = Math.max(
                    0,
                    Math.min(100, (rating - i) * 100)
                  );

                  return (
                    <div key={i} className="relative w-8 h-8">
                      <Star className="absolute top-0 left-0 w-8 h-8 text-[#888888]" />

                      {fillPercent > 0 && (
                        <div
                          className=" overflow-hidden"
                          style={{ width: `${fillPercent}%` }}
                        >
                          <Star className="w-8 h-8 text-yellow-400 fill-current" />
                        </div>
                      )}
                    </div>
                  );
                })}
                <span className="text-2xl font-bold">{rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[60%] h-full justify-between">
          <p className="line-clamp-7 text-justify text-xl">{annotation}</p>

          <div className="flex justify-end gap-2 mt-2">
            <Button className="bg-[#3d6dcc] hover:bg-[#2f5599] active:bg-[#3d6dcc] text-white text-lg rounded-full">
              Add to library
            </Button>

            <Link href="/book">
              <Button className="bg-[#3d6dcc] hover:bg-[#2f5599] active:bg-[#3d6dcc] text-white text-lg rounded-full">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
