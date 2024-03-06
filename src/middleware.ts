import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const requireAuth: string[] = ["/use-case-1", "/use-case-2", "/use-case-3"];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (requireAuth.some((path) => pathname.startsWith(path))) {
    const token = await getToken({
      req: request,
    });

    if (!token) {
      const url = new URL(`/`, request.url);
      return NextResponse.redirect(url);
    }
  }

  return res;
}

export const config = {
  matcher: ["/use-case-1/:path*", "/use-case-2/:path*", "/use-case-3/:path*"],
};
