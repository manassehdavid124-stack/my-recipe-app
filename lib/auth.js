// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export async function requireAuth(req, res) {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     res.status(401).json({ message: "Unauthorized" });
//     return;
//   }
//   return session;
// }

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }
  return session;
}
