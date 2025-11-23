import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileSection() {
  return (
    <>
      <div className="flex flex-col h-70 justify-center items-center">
        <Avatar className="w-40 h-40 border-4 border-gray-500">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="mt-6 text-[30px] font-semibold">Welcome back, User!</h1>
      </div>
      <div className="flex flex-col h-[50%] justify-center items-center space-y-4">
        <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px]"></div>
        <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px]"></div>
        <div className="bg-[#f0f0f0] w-[95%] h-[35%] rounded-[10px]"></div>
      </div>
    </>
  );
}
