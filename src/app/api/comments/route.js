import { NextResponse } from "next/server";
import { connectToDb } from "@/utils";
import { Comment } from "@/model/comment";


export const GET = async () => {
  try {
    await connectToDb();
    const results = await Comment.find({})
      .sort({ timestamp: -1 })
      .limit(10)
      .lean()
      .exec();
    return NextResponse.json({ data: results }, { status: 200 });
  } catch (err) {
    console.log(err.message, "GET");
    return NextResponse.json({ data: "Error" }, { status: 500 });
  }
}

export const POST = async (req) => {
  try {
    await connectToDb();
    const { content, senderName, timestamp } = await req.json();
    await Comment.create({
      content,
      senderName,
      timestamp
    });
    return NextResponse.json({ data: "Success" }, { status: 200 });
  } catch (err) {
    console.log(err.message, "GET");
    return NextResponse.json({ data: "Error" }, { status: 500 });
  }
}