import { searchProduct } from "@/db/models/products";

export async function GET(request, { query }) {
  try {
    const searchInput = query.search;

    // Pastikan ada input pencarian sebelum melakukan pencarian
    if (!searchInput) {
      return Response.json({
        statusCode: 400,
        message: "Search parameter is missing",
        data: null,
      }, {
        status: 400,
      });
    }

    const output = await searchProduct(searchInput);
    
    // Jika data ditemukan, kembalikan respons dengan status 200
    if (output) {
      return Response.json({
        statusCode: 200,
        message: "Found data:",
        data: output,
      }, {
        status: 200,
      });
    } else {
      // Jika data tidak ditemukan, kembalikan respons dengan status 404
      return Response.json({
        statusCode: 404,
        message: "Data not found",
        data: null,
      }, {
        status: 404,
      });
    }
  } catch (error) {
    // Tangani error internal server
    return Response.json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    }, {
      status: 500,
    });
  }
}
