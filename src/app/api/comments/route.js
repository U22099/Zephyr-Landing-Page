import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDb } from "@/utils";
import { Comment } from "@/model/comment";