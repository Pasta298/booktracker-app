"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../../ui/button";
import { useState } from "react";

export default function ProfileSection() {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  return (
    <div className="relative h-full">
      <div
        className={`
      transition-all duration-300 h-full
      ${!isAuthorized ? "blur-sm pointer-events-none select-none" : ""}
    `}
      >
        <div className="flex flex-col h-70 justify-center items-center">
          <Avatar className="w-40 h-40 border-4 border-gray-500">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="mt-6 text-[30px] text-center font-semibold">
            Welcome back, User!
          </h1>
        </div>

        <div className="flex flex-col h-[50%] justify-center items-center space-y-4">
          <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px]"></div>
          <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px]"></div>
          <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px]"></div>
        </div>

        <div className="grid grid-cols-2 gap-1 space-y-1 place-items-center p-2 mt-5">
          <Button
            className="bg-[#d9d9d9] rounded-full text-xl text-black w-[90%] hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
            size="lg"
          >
            Profile
          </Button>
          <Button
            className="bg-[#d9d9d9] rounded-full text-xl text-black w-[90%] hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
            size="lg"
          >
            My Books
          </Button>
          <Button
            className="bg-[#d9d9d9] rounded-full text-xl text-black w-[90%] hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
            size="lg"
          >
            Calendar
          </Button>
          <Button
            className="bg-[#d9d9d9] rounded-full text-xl text-black w-[90%] hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
            size="lg"
          >
            Log Out
          </Button>
        </div>
      </div>

      {!isAuthorized && (
        <div className="absolute inset-0 z-20 flex items-center justify-center ">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[20px]" />

          <div className="relative z-30 bg-[#d9d9d9] rounded-xl p-6 w-[90%] max-w-[400px] text-center shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">
              You are not logged into account!
            </h2>
            <p className="text-gray-600 mb-2">
              Please log in to access your profile
            </p>
            <Button
              className="w-[80%] text-lg rounded-full mb-2 hover:bg-gray-600 active:bg-black"
              onClick={() => setIsAuthorized(true)}
            >
              Log In
            </Button>
            <h2 className="text-lg font-semibold mb-2">
              Don&apos;t have an account yet?
            </h2>
            <Button
              className="w-[80%] text-lg rounded-full mb-2 hover:bg-gray-600 active:bg-black"
              onClick={() => setIsAuthorized(true)}
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
