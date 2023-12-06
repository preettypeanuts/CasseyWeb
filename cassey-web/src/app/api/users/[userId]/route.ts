export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
    const userId = params.userId

    return Response.json({
        statusCode: 200,
        message: `Connected to api/users/${userId}`
    }, {
        status: 200
    })
}
