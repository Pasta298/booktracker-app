"use client";

import { useState } from "react";
import { CalendarHeader } from "./calendar_header";
import Link from "next/link";

type Day = {
  date: Date;
  currentMonth: boolean;
};

function generateCalendar(year: number, month: number): Day[] {
  const result: Day[] = [];

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = (firstDay.getDay() + 6) % 7;

  for (let i = startDay; i > 0; i--) {
    const date = new Date(year, month, 1 - i);
    result.push({ date, currentMonth: false });
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    result.push({
      date: new Date(year, month, i),
      currentMonth: true,
    });
  }

  while (result.length % 7 !== 0) {
    const date = new Date(
      year,
      month,
      lastDay.getDate() + (result.length % 7) + 1
    );
    result.push({ date, currentMonth: false });
  }

  return result;
}

export default function Calendar() {
  const today = new Date();
  const isToday = (date: Date) => date.toDateString() === today.toDateString();

  const [currentDate, setCurrentDate] = useState(today);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = generateCalendar(year, month);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));

  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="flex w-full h-full p-4">
      <div className="flex flex-col w-full h-full bg-muted rounded-xl p-4">
        <CalendarHeader
          currentDate={currentDate}
          onPrev={prevMonth}
          onNext={nextMonth}
        />

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, i) => {
            const todayMatch = isToday(day.date);

            return (
              <Link
                href="/book"
                key={i}
                className={`
          gap-2 h-23 rounded-lg flex flex-col items-center justify-start p-2
          ${day.currentMonth ? "bg-background" : "bg-muted/50"}
          ${todayMatch ? "border border-blue-400 bg-blue-50" : ""}
        `}
              >
                <div className="mt-1 w-8 h-11 bg-gray-300 rounded-[10px]" />
                <span
                  className={`text-sm ${
                    day.currentMonth ? "text-[#3d6dcc]" : "bg-muted/50"
                  }`}
                >
                  {day.date.getDate()}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
