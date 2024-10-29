"use client";

import { SignInFlow } from "@/types/types";
import { useState } from "react";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";

export default function Auth() {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="h-full flex items-center justify-center ">
      <div className="text-white md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignIn setState={setState} />
        ) : (
          <SignUp setState={setState} />
        )}
      </div>
    </div>
  );
}
