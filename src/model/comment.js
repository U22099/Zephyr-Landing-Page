import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "text",
    required: true
  },
  senderName: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number
  },
});

export const Comment =
  mongoose.models.Comment || mongoose.model('Comment', commentSchema);