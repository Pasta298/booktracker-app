"use client";

import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { signUpAction } from "@/data/actions/auth-actions";
import Link from "next/link";
import { useActionState } from "react";
import ZodErrors from "./ZodErrors";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(
    signUpAction,
    INITIAL_STATE
  );

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="flex flex-col gap-2 z-30 bg-[#d9d9d9] rounded-xl p-6 w-[90%] max-w-100 text-center shadow-xl items-center">
        <h1 className="text-lg font-bold">Sign Up</h1>
        <form
          action={formAction}
          className="flex flex-col items-center w-full gap-2"
        >
          <InputGroup className="flex rounded-full border-0 bg-[#e8f0ff] w-[80%] text-lg">
            <InputGroupInput
              name="username"
              placeholder="Username"
              className="grow min-w-0 placeholder:font-semibold placeholder:text-lg"
            />
          </InputGroup>
          <ZodErrors error={state?.zodErrors?.username} />

          <InputGroup className="flex rounded-full border-0 bg-[#e8f0ff] w-[80%] text-lg">
            <InputGroupInput
              name="email"
              placeholder="Email"
              className="grow min-w-0 placeholder:font-semibold placeholder:text-lg"
            />
          </InputGroup>
          <ZodErrors error={state?.zodErrors?.email} />

          <InputGroup className="flex rounded-full border-0 bg-[#e8f0ff] w-[80%] text-lg">
            <InputGroupInput
              name="password"
              type="password"
              placeholder="Password"
              className="grow min-w-0 placeholder:font-semibold placeholder:text-lg"
            />
          </InputGroup>
          <ZodErrors error={state?.zodErrors?.password} />

          <InputGroup className="flex rounded-full border-0 bg-[#e8f0ff] w-[80%] text-lg">
            <InputGroupInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm a password"
              className="grow min-w-0 placeholder:font-semibold placeholder:text-lg"
            />
          </InputGroup>
          <ZodErrors error={state?.zodErrors?.confirmPassword} />
          {state.success && <p style={{ color: "#16a34a" }}>{state.message}</p>}

          <Button
            type="submit"
            className="w-[80%] text-lg rounded-full hover:bg-gray-600 active:bg-black"
          >
            {isPending ? "Loading..." : "Sign Up"}
          </Button>

          <Link href="/" className="w-full">
            <Button className="w-[80%] text-lg rounded-full mb-2 hover:bg-gray-600 active:bg-black">
              Cancel
            </Button>
          </Link>
        </form>
        <span>
          If you already have an account then{" "}
          <Link href="/login">
            <span className="underline underline-offset-2 hover:underline-offset-1 active:underline-offset-2">
              log in
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
}
