import { getUsers } from "@/db/models/user";

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
    const newUser = await 
}
