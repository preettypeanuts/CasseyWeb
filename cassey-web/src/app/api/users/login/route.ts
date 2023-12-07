import { compareTextWithHash } from "@/db/helpers/bcrypt";
import { UserModel, createUser, getUserByEmail } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Omit<UserModel, "_id">;
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

    const isValidPassword = compareTextWithHash(
      data.password,
      (user).password
    );

    if (!isValidPassword) {
        return NextResponse.json(
            {
                message: "Wrong email/password"
            }
        )
    }
  } catch (error) {}
}
