import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CalendarHeaderProps = {
  currentDate: Date;
  onPrev: () => void;
  onNext: () => void;
};

export function CalendarHeader({
  currentDate,
  onPrev,
  onNext,
}: CalendarHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" onClick={onPrev}>
          <ChevronLeft />
        </Button>

        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <Button variant="ghost" size="icon" onClick={onNext}>
          <ChevronRight />
        </Button>
      </div>

      <div className="grid grid-cols-7 text-center text-sm mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="font-medium text-muted-foreground">
            {d}
          </div>
        ))}
      </div>
    </>
  );
}
