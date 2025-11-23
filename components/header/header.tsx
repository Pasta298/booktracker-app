import Image from "next/image";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function MainHeader() {
  return (
    <header className="flex w-full min-h-[60px] h-[15%] bg-[#3d6dcc] rounded-t-[20px] items-center pl-6 pr-6">
      <div className="flex items-center shrink-0 h-[65%]">
        <Image
          src="/logo.png"
          alt="BookTime logo"
          width={0}
          height={0}
          sizes="15vw"
          className="w-[15vw] max-w-[380px] min-w-[170px] max-h-[70px] h-auto object-contain"
          priority
        />
      </div>

      <div className="flex grow items-center min-w-0 h-full">
        <InputGroup className="flex grow rounded-full border-0 bg-[#e8f0ff] min-h-[40%] min-w-0">
          <InputGroupInput
            className="grow min-w-0 placeholder:font-semibold placeholder:text-lg"
            placeholder="Type a name of book or ISBN"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              className="rounded-full bg-[#b1d9fe] flex hover:bg-[#7da9ff] active:bg-[#3d6dcc] mr-1"
              size={"icon-sm"}
            >
              <Search stroke="black" className="min-w-5 min-h-5"/>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </header>
  );
}
