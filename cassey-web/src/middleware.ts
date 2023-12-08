import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  console.log(request.url, "<< dari middleware");

  if (request.url.includes("api/products")) {
    const authorization = cookies().get("Authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          message: "Authentication failed",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = authorization.value.split(" ")[1];
    const decodedUser = await decodeToken(accessToken);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", decodedUser._id);
    requestHeaders.set("x-user-email", decodedUser.email);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }

  if (request.url.includes("api/wishlist")) {
    const authorization = cookies().get("Authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          message: "Authentication failed",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = authorization.value.split(" ")[1];
    const decodedUser = await decodeToken(accessToken);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", decodedUser._id);
    requestHeaders.set("x-user-email", decodedUser.email);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/api/:path*",
};
