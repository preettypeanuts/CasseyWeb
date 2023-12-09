import { ObjectId } from "mongodb";
import { getDb } from "./user";

export type ProductModel = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  exerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type ProductSearch = {
  name: string;
};

export const getProducts = async () => {
  const db = await getDb();
  const products = (await db
    .collection("products")
    .find()
    .toArray()) as ProductModel[];
  return products;
};

export const getProductById = async (id: string) => {
  const db = await getDb();
  const objId = new ObjectId(id);
  const productIdData = (await db
    .collection("products")
    .findOne({ _id: objId })) as ProductModel;
  return productIdData;
};

// export const pagination = async () => {
//   const db = await getDb();
//   const products = (await db
//     .collection("products")
//     .find()
//     .skip(0)
//     // .limit(8)
//     .toArray()) as ProductModel[];
//   return products;
// };

// export const searchProduct = async (data: string) => {
//   const db = await getDb();
//   const searchData = await db
//     .collection("products")
//     .find({ name: { $regex: data, $options: 'i' } })
//     .toArray();
//   return searchData;
// };

export const pagination = async (searchData?: string) => {
  const db = await getDb();
  let products;

  if (searchData) {
    products = await db
      .collection("products")
      .find({ name: { $regex: searchData, $options: "i" } })
      .toArray();
  } else {
    products = await db
      .collection("products")
      .find()
      .skip(0)
      // .limit(8)
      .toArray();
  }

  return products;
};

// export const searchProduct = async (data: string) => {
//   const db = await getDb();
//   const searchData = await db
//     .collection("products")
//     .find({
//       $or: [{ name: regex }],
//     })
//     // .find({ name: { $regex: data, $options: 'i' } })
//     .toArray();
//   return searchData;
// };

export const getFeaturedProducts = async () => {
  const db = await getDb();
  const products = (await db
    .collection("products")
    .find()
    .limit(8)
    .toArray()) as ProductModel[];
  return products;
};
