import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProfileSectionBlock({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px] p-3 flex flex-col overflow-hidden">
      <h1 className="font-bold text-[24px] shrink-0 wrap-break-word">
        {title}
      </h1>

      <Tooltip>
        <div className="flex items-center h-full">
          <TooltipTrigger asChild>
            <p className="text-[22px] line-clamp-2 wrap-break-word">
              {content}
            </p>
          </TooltipTrigger>
          <TooltipContent
            side={"bottom"}
            className="max-w-xs whitespace-normal wrap-break-word"
          >
            {content}
          </TooltipContent>
        </div>
      </Tooltip>
    </div>
  );
}
