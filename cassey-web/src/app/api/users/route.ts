import { getUsers, createUser } from "@/db/models/user";

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
  const data = await request.json();
  const newUser = await createUser(data);
  return Response.json({
    statusCode: 201,
    message: "Connetcted to api/users",
    data: newUser,
  }, {
    status: 201
  });
}
