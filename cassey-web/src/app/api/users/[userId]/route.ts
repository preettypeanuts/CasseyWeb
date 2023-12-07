import { getUserById } from "@/db/models/user";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const userById = await getUserById(userId);
  return Response.json(
    {
      statusCode: 200,
      message: `Connected to api/users/${userId}`,
      data: userById,
    },
    {
      status: 200,
    }
  );
}
