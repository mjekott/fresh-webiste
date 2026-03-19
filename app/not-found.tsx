"use client";

import { e400r } from "@/components/index";
import ErrorPage from "@/components/ErrorPage";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleError = () => {
    router.push("/");
  };

  return (
    <ErrorPage
      image={e400r}
      alt="not found"
      value="Go Home"
      reset={handleError}
    />
  );
}
