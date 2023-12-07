import { UserModel, createUser, getUserByEmail } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Omit<UserModel, "_id">;
    const parsedData = z
      .object({
        username: z.string(),
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(5),
      })
      .safeParse(data);

    if (!parsedData.success) throw parsedData.error;

    const user = await getUserByEmail(data.email);

    if (user) {
      return NextResponse.json(
        {
          message: "Email already registered",
        },
        {
          status: 401,
        }
      );
    }
    const newUser = await createUser(data);
    return Response.json(
      {
        statusCode: 201,
        message: "Succesfully added new user",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          statusCode: 400,
          message: "Error from api/users",
          error: error,
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
