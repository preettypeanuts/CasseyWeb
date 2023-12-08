import { ObjectId } from "mongodb";
import { getDb } from "./user";
import { ProductModel } from "./products";

export type WishlistModel = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  wishListUser: ProductModel[];
};

export const getWishlists = async () => {
  const db = await getDb();
  const wishes = (await db
    .collection("wishlists")
    .find()
    .toArray()) as WishlistModel[];
  return wishes;
};

type WishlistInputModel = Omit<WishlistModel, "_id" | "wishListUser">;

export const addWishList = async (data: WishlistInputModel) => {
  const db = await getDb();
  const newWishes = await db.collection("wishlists").insertOne(data);
  return newWishes;
};
