"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../../ui/button";
import { useState } from "react";
import ProfileSectionBlock from "./ps_block";
import Link from "next/link";

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
          <Avatar asChild className="w-40 h-40 border-4 border-gray-500">
            <Link href="/profile">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Link>
          </Avatar>
          <h1 className="mt-6 text-[30px] text-center font-semibold">
            Welcome back, User!
          </h1>
        </div>

        <div className="flex flex-col h-[50%] justify-center items-center space-y-4">
          <ProfileSectionBlock
            title="Current Readings"
            content='Harry Potter and The Prisoner of Azkaban, The Martian, Project "Hail Mary", The Name of The Wind'
          />
          <ProfileSectionBlock title="Books in Library" content="151" />
          <ProfileSectionBlock title="Books Read" content="77" />
        </div>

        <div className="grid grid-cols-2 gap-1 space-y-1 place-items-center p-2 mt-5">
          <Button
            asChild
            size="lg"
            className="bg-[#d9d9d9] rounded-full text-xl text-black w-[90%] hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
          >
            <Link href="/profile">Profile</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-[#d9d9d9] rounded-full text-xl text-black w-[90%] hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
          >
            <Link href="/current">My Books</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-[#d9d9d9] rounded-full text-xl text-black w-[90%] hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
          >
            <Link href="/calendar">Calendar</Link>
          </Button>
          <div className="w-[90%]">
            <Button
              className="bg-[#d9d9d9] rounded-full text-xl text-black w-full hover:bg-[#d4ecff] active:bg-[#3d6dcc]"
              size="lg"
            >
              Log Out
            </Button>
          </div>
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
