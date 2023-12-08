import { ObjectId } from "mongodb";
import { UserModel, getDb } from "./user";
import { ProductModel } from "./products";
import { log } from "console";

export type WishlistModel = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  product: ProductModel;
  user: UserModel;
};

export const getWishlists = async (userId: string) => {
  // console.log(userId, "<<<");
  
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
      { $set: { 'user': { $first: '$user' } } },
      { $set: { 'product': { $first: '$product' } } },
    ])
    .toArray()) as WishlistModel[];
  return wishes;
};

type WishlistInputModel = Omit<WishlistModel, "_id" | "product" | "user">;

export const addWishList = async (data: WishlistInputModel) => {
  const db = await getDb();
  const newWishes = await db.collection("wishlists").insertOne(data);
  return newWishes;
};

type WishlistDeleteModel = Omit<WishlistModel, "_id" | "product" | "user" | "createdAt" | "updatedAt">;


export const deleteWishList = async (data: WishlistDeleteModel) => {
  const db = await getDb();
  const deletedWish = await db.collection("wishlists").deleteOne({
    userId: data.userId,
    productId: data.productId,
  });
  return deletedWish;
};
