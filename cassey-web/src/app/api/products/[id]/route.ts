import { getProductById } from "@/db/models/products";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const productId = params.id;
  const productById = await getProductById(productId);
  return Response.json({
    statusCOde: 200,
    message: `Connected to api/products/${productId}`,
    data: productById,
  },{
    status: 200
  });
}
