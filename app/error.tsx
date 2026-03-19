"use client";

import { e500r } from "@/components";
import ErrorPage from "@/components/ErrorPage";

const error = () => {
  const handleError = () => {
    window.location.reload();
  };
  return (
    <ErrorPage
      image={e500r}
      alt="server error"
      value="Refresh"
      reset={handleError}
    />
  );
};

export default error;
