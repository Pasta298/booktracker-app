import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import Link from "next/link";

export default function LogInPage() {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="flex flex-col gap-2 z-30 bg-[#d9d9d9] rounded-xl p-6 w-[90%] max-w-100 text-center shadow-xl items-center">
        <h1 className="text-lg font-bold">Log In</h1>
        <InputGroup className="flex rounded-full border-0 bg-[#e8f0ff] w-[80%] text-lg ">
          <InputGroupInput
            className="grow min-w-0 placeholder:font-semibold placeholder:text-lg"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup className="flex rounded-full border-0 bg-[#e8f0ff] w-[80%] text-lg ">
          <InputGroupInput
            className="grow min-w-0 placeholder:font-semibold placeholder:text-lg"
            placeholder="Password"
          />
        </InputGroup>

        <Button className="w-[80%] text-lg rounded-full hover:bg-gray-600 active:bg-black">
          Log In
        </Button>
        <Link href="/" className="w-full">
          <Button className="w-[80%] text-lg rounded-full mb-2 hover:bg-gray-600 active:bg-black">
            Cancel
          </Button>
        </Link>
        <span>
          If you don&apos;t have an account yet, then{" "}
          <Link href="/signup">
            <span className="underline underline-offset-2 hover:underline-offset-1 active:underline-offset-2 cursor-pointer">
              sign up
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
}
