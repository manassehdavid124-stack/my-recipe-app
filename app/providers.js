"use client"; // this file is a client component

import { SessionProvider } from "next-auth/react";

export default function ClientProviders({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
