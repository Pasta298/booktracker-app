"use client";
import { useRef, useState, useEffect } from "react";

export default function ProfileSectionBlock({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setIsOverflowed(
        el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth
      );
    };

    const id = requestAnimationFrame(checkOverflow);

    return () => cancelAnimationFrame(id);
  }, [content]);

  return (
    <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px] p-3 flex flex-col overflow-hidden">
      <h1 className="font-bold text-[24px] shrink-0 wrap-break-word">
        {title}
      </h1>

      <div className="flex items-center h-full">
        <p
          ref={textRef}
          className="text-[22px] line-clamp-2 wrap-break-word"
          title={isOverflowed ? content : ""}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
