import { compareTextWithHash } from "@/db/helpers/bcrypt";
import { createToken } from "@/db/helpers/jwt";
import { getUserByEmail } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsedData = z
      .object({
        email: z.string().email(),
        password: z.string().min(5),
      })
      .safeParse(data);

    if (!parsedData.success) throw parsedData.error;

    const user = await getUserByEmail(data.email);


    if (!user) {
      return NextResponse.json(
        {
          message: "Email/Password not found!",
        },
        {
          status: 401,
        }
      );
    }

    const isValidPassword = compareTextWithHash(data.password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        {
          message: "Wrong email/password",
        },
        {
          status: 400,
        }
      );
    }
    const accessToken = createToken({
      _id: user._id.toString(),
    });

    const response = NextResponse.json(
      {
        data: {
          message: 'Login user succes',
          token: accessToken,
        },
      },
      {
        status: 200,
      }
    );

    response.cookies.set("Authorization", `Bearer ${accessToken}`)
    
    return response
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
