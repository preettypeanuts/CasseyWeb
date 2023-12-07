import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { getDb } from "./user";

const DATABASE_NAME = "CasseyWeb";

export type ProductModel = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  exerpt: string;
  price: number;
  tags: string;
  thumbnail: string;
  images: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getProducts = async () => {
  const db = await getDb();
  const products = (await db
    .collection("products")
    .find()
    .toArray()) as ProductModel[];
  return products;
};
