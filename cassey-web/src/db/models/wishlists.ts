import { ObjectId } from "mongodb";
import { getDb } from "./user";
import { ProductModel } from "./products";
import { log } from "console";

export type WishlistModel = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  wishListUser: ProductModel[];
};

export const getWishlists = async (userId: string) => {
  console.log(userId, "<<<");
  
  const db = await getDb();

  const wishes = (await db
    .collection("wishlists")
    .aggregate([
      {
        $match: { userId: new ObjectId(userId) },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
    ])
    .toArray()) as WishlistModel[];
  return wishes;
};

type WishlistInputModel = Omit<WishlistModel, "_id" | "wishListUser">;

export const addWishList = async (data: WishlistInputModel) => {
  const db = await getDb();
  const newWishes = await db.collection("wishlists").insertOne(data);
  return newWishes;
};
