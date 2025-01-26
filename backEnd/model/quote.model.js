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
      minLength: 5,
      maxLength: 50,
    },
    category: {
      type: String,
      required: true,
      enum: ["운동", "사랑", "삶", "공부"],
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
