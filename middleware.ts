import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db, token } from "@/src/schema";
import { eq } from "drizzle-orm";
import { VerifyTokenAction } from "./app/_actions/VerifyToken";

export async function middleware(request: NextRequest) {
    const authToken = cookies().get("authToken");
    if (!authToken) {
        return NextResponse.redirect(new URL("/auth/login", request.url).toString());
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!auth|_next/static|_next/image|favicon.ico).*)',
    ],
  }