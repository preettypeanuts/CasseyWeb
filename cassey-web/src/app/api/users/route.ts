export async function GET(request: Request){
    return Response.json({
        statusCode: 200,
        message: "Connetcted to api/users"
    }, {
        status: 200
    })
} 