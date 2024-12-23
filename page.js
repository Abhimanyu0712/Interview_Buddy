"use client";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard");
  }, []);
  return (
    <div className="h-[100vh] flex flex-col gap-10 justify-center items-center">
      <h1>Not A Page to Visit</h1>
      <Button>Lets Go Back to Dashboard </Button>
    </div>
  );
}
