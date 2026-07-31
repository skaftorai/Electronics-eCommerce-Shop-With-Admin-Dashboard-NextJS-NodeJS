import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

// A Next.js App Router route file may only export route handlers. authOptions
// now lives in @/lib/authOptions. NextAuth is cast because next-auth v4's
// main-entry default type doesn't resolve under this tsconfig (see authOptions).
const handler = (NextAuth as any)(authOptions);

export { handler as GET, handler as POST };
