import { getUsers, createUser } from "@/db/models/user";
import { z } from "zod";

export async function GET(request: Request) {
  const user = await getUsers();
  return Response.json(
    {
      statusCode: 200,
      message: "Connetcted to api/users",
      data: user,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsedData = z
      .object({
        username: z.string(),
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(5),
      })
      .safeParse(data);

    if (!parsedData.success) throw parsedData.error;

    const newUser = await createUser(data);
    return Response.json(
      {
        statusCode: 201,
        message: "Connetcted to api/users",
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
        statusCode: 600,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
