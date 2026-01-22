"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // redirects to /api/auth/signin
    }
  }, [status]);

  // while loading session
  if (status === "loading") {
    return <p className="text-white p-10">Checking authentication...</p>;
  }

  // unauthenticated users are redirected, authenticated users see content
  if (!session) return null;

  return <>{children}</>;
  
}
