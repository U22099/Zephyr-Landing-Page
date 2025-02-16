import { NextResponse } from "next/server";
import { connectToDb } from "@/utils";
import { Comment } from "@/model/comment";


export const GET = async () => {
  try {
    await connectToDb();
    const results = await Comment.find()
    .sort({ timestamp: -1 })
    .limit(10000)
    .lean();
    return NextResponse.json({ data: results}, { status: 200 });
  } catch (err) {
    console.log(err.message, "GET");
    return NextResponse.json({ data: "Error" }, { status: 500 });
  }
}
