"use client";
import { Button } from "@nextui-org/button";
import toast, { Toaster } from "react-hot-toast";
const notify = () =>
  toast.success("Successfully created!", {
    duration: 1000,
  });

export default function Page() {
  const handleClick = () => {};

  return (
    <div>
      <Button onClick={notify}>Make me a toast</Button>
      <Toaster />
    </div>
  );
}
