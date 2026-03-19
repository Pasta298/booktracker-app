"use client";

import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { useState } from "react";

export default function InfoField({
  title,
  isEditable,
  children,
}: {
  title: string;
  isEditable: boolean;
  children: React.ReactNode;
}) {
  const [inputValue, setInputValue] = useState(
    children ? String(children) : ""
  );

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <InputGroup className="flex rounded-full w-full border-2 border-[#888888] bg-[#e6e6e6] ">
        <InputGroupInput
          readOnly={!isEditable}
          className={`font-bold items-center text-[#888888] truncate ${
            !isEditable ? "pointer-events-none" : ""
          } `}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}
