import { decodeToken } from "@/db/helpers/jwt";
import {
  addWishList,
  deleteWishList,
  getWishlists,
} from "@/db/models/wishlists";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
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
  const userId = decodedUser._id;

  const wishes = await getWishlists(userId);
  return Response.json(
    {
      statusCode: 200,
      message: "Succesfully get wishlist data",
      data: wishes,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: NextRequest) {
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

  const { productId } = (await request.json()) as {
    productId: string;
  };

  const accessToken = authorization.value.split(" ")[1];
  const decodedUser = await decodeToken(accessToken);
  const userId = decodedUser._id;

  const wishes = await addWishList({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return Response.json(
    {
      statusCode: 200,
      message: "New wishlists added to api/wishlists",
      data: wishes,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(request: NextRequest) {
  const authorization = cookies(request.headers).get("Authorization");

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

  const { productId } = (await request.json()) as {
    productId: string;
  };

  const accessToken = authorization.value.split(" ")[1];
  const decodedUser = await decodeToken(accessToken);
  const userId = decodedUser._id;

  const removedWish = await deleteWishList({

    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
  });

  if (removedWish.deletedCount > 0) {
    return Response.json(
      {
        statusCode: 200,
        message: "Wishlist removed successfully",
        data: removedWish,
      },
      {
        status: 200,
      }
    );
  } else {
    return Response.json(
      {
        statusCode: 404,
        message: "Wishlist not found or already removed",
      },
      {
        status: 404,
      }
    );
  }
}
