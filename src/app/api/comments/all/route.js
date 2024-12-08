import { NextResponse } from "next/server";
import { connectToDb } from "@/utils";
import { Comment } from "@/model/comment";


export const GET = async () => {
  try {
    await connectToDb();
    const results = await Comment.find({});
    return NextResponse.json({ data: results.sort((a, b) => b.timestamp - a.timestamp )}, { status: 200 });
  } catch (e) {
    console.log(e, "GET");
    return NextResponse.json({ data: "Error" }, { status: 500 });
  }
}
