"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <>
      <Button onClick={() => signOut()}>Sign Out</Button>
      <h1>Landing Page - Coming Soon</h1>
    </>
  );
}
