import { userModel } from "@/models/user-Model";
import connectMongo from "@/services/mongo";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  await connectMongo();
  const newUser = {
    name,
    email,
    password
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};