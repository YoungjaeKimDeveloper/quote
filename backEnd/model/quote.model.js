import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    content: {
      type: String,
      required: true,
      maxLength: 50,
    },
    category: {
      type: String,
      required: true,
      enum: ["exercise", "love", "life", "study"],
      default: "life",
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Quote = mongoose.model("Quote", quoteSchema);

