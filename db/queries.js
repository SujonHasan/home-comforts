import { categoryModel } from "@/models/category-model";
import { userModel } from "@/models/user-Model";
import connectMongo from "@/services/mongo";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
const bcrypt = require("bcrypt");
const { productModel } = require("@/models/product-Model");

async function findUser (user){

  const {email, password} = user;
  const fUser = await userModel.findOne({email});

  if(!fUser) return {status: false, message: "Invalid email. please register first"}
  else {
    const isMatch = await fUser.isPasswordMatch(password);

    if(!isMatch) return {status: false, message: "Password not Match"}
  }
  return {status: true,data: fUser};
}

async function createUser(user){
  
  const {email} = user;

  const xUser = await userModel.findOne({email});

  if(xUser) return {status: false, message: "User already exist"};

  const newUser = await new userModel(user).save();

  return {status: true, data: JSON.stringify(newUser)}
}

async function getAllProducts() {
  
  let products = [];

  await connectMongo();

  products = await productModel
    .find()
    .select({
      _id: 1,
      name: 1,
      thumbnail: 1,
      discountPrice: 1,
      regularPrice: 1,
      reviews: 1,
      category: 1,
      quantity: 1
    })
    .lean();

  if (products) {
    const plainProducts = products.map((product) => {
      return JSON.parse(JSON.stringify(product));
    });

    return plainProducts;
  }

  return null;
}

async function getAllCategoris(){

  let categories = [];

  await connectMongo();

  categories = await categoryModel.find().lean();

  if(categories){
    const plainCategories = categories.map((category) => {
      return JSON.parse(JSON.stringify(category));
    });

    return plainCategories;
  }

  return null;
}

async function getProduct(productId) {

  await connectMongo();
  const product = await productModel.findOne({"_id": productId});
  return JSON.parse(JSON.stringify(product));
  
}

async function getAllCategoryProduct(categoryId) {

  await connectMongo();

  let categoryProducts = [];

  categoryProducts = await productModel.find({"category._id": categoryId });

  if (categoryProducts) {
    const plainCategoryProducts = categoryProducts.map((product) => {
      return JSON.parse(JSON.stringify(product));
    });

    return plainCategoryProducts;
  }

  return null;
}

export { getAllCategoryProduct, getAllProducts, getProduct , findUser, createUser, getAllCategoris};
