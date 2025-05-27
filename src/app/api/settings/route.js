import connectDB from "@/lib/mongodb";
import WebSetting from "@/model/WebSetting";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const setting = await WebSetting.findOne({});
    if (!setting) {
      return NextResponse.json(
        { error: "Settings not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(setting, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const setting = await WebSetting.findOneAndUpdate({}, body, {
      new: true,
      upsert: true,
    });

    return NextResponse.json(setting, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
