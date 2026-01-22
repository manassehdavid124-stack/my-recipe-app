import { signOut } from "next-auth/react";

<button onClick={() => signOut({ callbackUrl: "/signin" })}>
  Log out
</button>
