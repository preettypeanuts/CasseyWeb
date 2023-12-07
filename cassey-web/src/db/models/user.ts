import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashText } from "../helpers/bcrypt";

const DATABASE_NAME = "CasseyWeb";

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

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const getUsers = async () => {
  const db = await getDb();
  const users = (await db
    .collection("users")
    .find()
    .project({ password: 0 })
    .toArray()) as UserModel[];
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
  const newData: UserModelCreateInput = {
    ...data,
    password: hashText(data.password),
  };
  const newUser = await db.collection("users").insertOne(newData);
  return newUser;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection("users")
    .findOne({ email: email })) as UserModel;
    // console.log(user, "usernya");
    
  return user;
};
