import { NextResponse } from "next/server";
import { connectToDb } from "@/utils";
import { Comment } from "@/model/comment";


export const GET = async () => {
  try {
    await connectToDb();
    const results = await Comment.find({});
    return NextResponse.json({ data: results.sort((a, b) => b.timestamp - a.timestamp ).slice(10)}, { status: 200 });
  } catch (err) {
    console.log(err.message, "GET");
    return NextResponse.json({ data: "Error" }, { status: 500 });
  }
}

export const POST = async (req) => {
  try {
    await connectToDb();
    const { content, senderName, timestamp } = req.json();
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