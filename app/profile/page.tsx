"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import InfoField from "./info_field";
import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import StatsBlock from "./stats_block";

export default function Profile() {
  const fieldContent: { id: number; title: string; content: string }[] = [
    {
      id: 1,
      title: "Nickname",
      content: "Alehandro122",
    },
    {
      id: 2,
      title: "Full Name",
      content: "Alex Smith",
    },
    {
      id: 3,
      title: "Email",
      content: "alex122@gmail.com",
    },
    {
      id: 4,
      title: "Number",
      content: "+380765679019",
    },
    {
      id: 5,
      title: "Birth Date",
      content: "12-02-2001",
    },
    {
      id: 6,
      title: "Country",
      content: "Ukraine",
    },
  ];

  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [showMaxMessage, setShowMaxMessage] = useState<boolean>(false);

  const handleAddFavourite = () => {
    if (favourites.length >= 16) {
      setShowMaxMessage(true);
      setTimeout(() => setShowMaxMessage(false), 5000);
      return;
    }

    setIsAdding(true);
  };

  const handleSubmit = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) return;

    const isDuplicate = favourites.some(
      (item) => item.toLowerCase() === trimmed.toLowerCase()
    );

    if (isDuplicate) {
      alert("This genre already exists");
      return;
    }

    setFavourites((prev) => [...prev, trimmed]);
    setInputValue("");
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setInputValue("");
  };

  const handleRemoveFavourite = (index: number) => {
    setFavourites((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col p-4 ml-2 gap-12 h-full">
      <div className="flex flex-row justify-between mt-2">
        <div className="flex flex-row">
          <Avatar className="w-34 h-34 border-4 rounded-full border-gray-500">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-4 justify-center gap-2">
            <h1 className="text-3xl font-bold">Nickname</h1>
            <h2 className="text-2xl text-[#888888]">Name Surname</h2>
          </div>
        </div>
        <div>
          <Button
            className={`w-20 h-8 rounded-full text-xl text-center ${
              !isEditable
                ? `bg-[#3d6dcc] hover:bg-[#2f5599] active:bg-[#5ecc3d]`
                : `bg-[#5ecc3d] hover:bg-[#4bb12f] active:bg-[#3d6dcc]`
            }`}
            onClick={() => setIsEditable((prev) => !prev)}
          >
            {!isEditable ? "Edit" : "Save"}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-20 gap-x-12">
        {fieldContent.map((data) => (
          <InfoField key={data.id} title={data.title} isEditable={isEditable}>
            {data.content}
          </InfoField>
        ))}
      </div>
      <div className="flex flex-row h-full gap-2">
        <div className="flex flex-col w-[40%] gap-2">
          <h1 className="text-3xl font-bold">Favourites</h1>

          <div
            className="flex flex-wrap gap-2 max-h-full overflow-hidden relative"
            style={{ width: "100%" }}
          >
            {favourites.map((favourite, index) => (
              <Badge
                key={index}
                className="flex justify-between h-9 py-1 rounded-full bg-[#3d6dcc] text-white font-bold text-sm"
              >
                {favourite}
                <Button
                  onClick={() => handleRemoveFavourite(index)}
                  className="w-6 h-6 rounded-full text-white bg-transparent hover:bg-[#2f5599]"
                >
                  <X className="size-5" />
                </Button>
              </Badge>
            ))}

            {isAdding && (
              <div className="flex items-center gap-1">
                <input
                  autoFocus
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit();
                    if (e.key === "Escape") {
                      setIsAdding(false);
                      setInputValue("");
                    }
                  }}
                  className="h-9 py-1 px-3 w-[150px] rounded-full bg-[#3d6dcc] text-white font-bold text-sm"
                  placeholder="Genre..."
                />
                <Button
                  className="px-3 w-9 h-9 rounded-full bg-[#3d6dcc] hover:bg-[#2f5599] hover:text-gray-200 text-white"
                  onClick={handleSubmit}
                >
                  <Check className="size-6" />
                </Button>
                <Button
                  className="px-3 w-9 h-9 rounded-full bg-[#3d6dcc] hover:bg-[#2f5599] hover:text-gray-200 text-white"
                  onClick={handleCancel}
                >
                  <X className="size-6" />
                </Button>
              </div>
            )}

            {!isAdding && (
              <Button
                className="w-9 h-9 rounded-full text-white bg-[#3d6dcc] hover:bg-[#2f5599]"
                onClick={handleAddFavourite}
              >
                <Plus className="size-7" />
              </Button>
            )}

            {showMaxMessage && (
              <span className="absolute right-0 bottom-0 text-red-500 font-bold text-sm">
                Max badges reached
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[60%] gap-2 h-full">
          <h1 className="text-3xl font-bold">Statistics</h1>
          <div className="flex flex-row w-full h-full gap-2">
            <StatsBlock title="Books Read">151</StatsBlock>
            <StatsBlock title="Pages Read">20.451</StatsBlock>
            <StatsBlock title="Hours Read">21.021</StatsBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
