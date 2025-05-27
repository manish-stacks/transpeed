import UserModel from "@/model/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";

export const GET = async () => {
  await connectDB();
  try {
    const users = await UserModel.findOne();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  await connectDB();
  try {
    const { username, email, password, role, isActive } = await request.json();

    console.log("Creating/updating user:", { username, email, role, isActive });
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create or update user
    const user = await UserModel.findOneAndUpdate(
      { email },
      { username, email, password: hashedPassword, role, isActive },
      { new: true, upsert: true }
    );

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error creating/updating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
