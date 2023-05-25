"use client";

import { duelUsers, inspectUser } from "@/services/userService";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const result = inspectUser();
    console.log(result);
  }, []);

  return <h1>Home</h1>;
}
