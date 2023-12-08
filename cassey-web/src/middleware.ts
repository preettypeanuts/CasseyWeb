import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.url, "<< dari middleware");

  if (request.url.includes("api/products")) {
    const authorization = cookies().get("Authorization");

    console.log('====================================');
    console.log(authorization);
    console.log('====================================');

    if (!authorization) {
      return NextResponse.json({
        message: "Authentication failed"
      }, {
        status: 401
      })
    }
  }

}

export const config = {
  matcher: "/api/:path*",
};
