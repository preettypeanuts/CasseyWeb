import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "CasseyWeb";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export type UserModel = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

export type UserModelCreateInput = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

export const getUsers = async () => {
  const db = await getDb();
  const users = (await db
    .collection("users")
    .find()
    .project({ password: 0 })
    .toArray()) as UserMode[];
  return users;
};

export const getUserById = async (userId: string) => {
  const db = await getDb();
  const objId = new ObjectId(userId);
  const userIdData = (await db
    .collection("users")
    .findOne({ _id: objId }, { projection: { password: 0 } })) as UserModel;
  return userIdData;
};

export const createUser = async (data: UserModelCreateInput) => {
  const db = await getDb();

  const modifiedUser: UserModelCreateInput = {
    ...data,
    password: data.password,
  };
  const userById = await db.collection("users").insertOne({ modifiedUser });
  return userById;

  //   const userById = (await db
  //     .insertOne({ _id: objId }, { projection: { password: 0 } })) as UserMode;
  //   return userById;
};
