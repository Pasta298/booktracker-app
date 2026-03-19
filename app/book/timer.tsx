"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Pause, Play, Square } from "lucide-react";
import { useEffect, useState } from "react";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

export default function Timer() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const toggleTimer = () => setIsRunning((prev) => !prev);

  const handleStartContinueClick = () => {
    if (seconds == 0) {
      setIsModalOpen(true);
    } else {
      toggleTimer();
    }
  };

  const handleStopClick = () => {
    setIsRunning(false);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    const numberValue = Number(inputValue.trim());

    if (inputValue.trim() === "" || isNaN(numberValue)) {
      alert("Please enter a valid number");
      return;
    }

    if (seconds === 0) {
      toggleTimer();
    } else {
      setSeconds(0);
    }

    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (sec: number) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="flex flex-row items-center justify-between w-[20%] h-full">
      <p className="ml-2 text-4xl">{formatTime(seconds)}</p>

      {seconds > 0 && isRunning && (
        <Button
          className="group w-14 h-14 rounded-full bg-transparent hover:bg-transparent border-4 border-black"
          onClick={handleStopClick}
        >
          <Square className="size-10 rounded-[20px] stroke-0 fill-[#ff0000] group-hover:fill-[#ff3333] group-active:fill-[#ff0000]" />
        </Button>
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Page Window</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col py-4 text-center items-center gap-4">
            <h1 className="text-lg">Please type the reading start/end page.</h1>
            <InputGroup className="flex rounded-full w-[50%] border-2 border-[#888888] bg-[#e6e6e6]">
              <InputGroupInput
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                className="font-bold text-[#888888] text-center"
              />
            </InputGroup>
          </div>

          <DialogFooter className="flex items-center sm:justify-center">
            <Button
              className="rounded-full w-[50%] bg-[#3d6dcc] hover:bg-[#2f5599] active:bg-[#3d6dcc]"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button
        className="group w-14 h-14 rounded-full bg-transparent hover:bg-transparent border-4 border-black"
        onClick={handleStartContinueClick}
      >
        {!isRunning ? (
          <Play className="size-12 fill-[#3d6dcc] stroke-0 group-hover:fill-[#2f5599] group-active:fill-[#3d6dcc]" />
        ) : (
          <Pause className="size-10 stroke-0 fill-[#d2c000] group-hover:fill-[#b5ad00] group-active:fill-[#d2c000]" />
        )}
      </Button>
    </div>
  );
}
