import cloudinary from "../lib/cloudinary.config.js";
import { Quote } from "../model/quote.model.js";

export const createQuote = async (req, res) => {
  try {
    const { author, content, category, image } = req.body;
    if (!author || !content || !category || !image) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill up the all forms 🥹" });
    }
    const image_URL = await cloudinary.uploader.upload(image);
    const newQuote = new Quote({
      author,
      content,
      category,
      image: image_URL.secure_url,
    });
    await newQuote.save();
    return res.status(201).json({
      success: true,
      message: "New Quote has been created successfully  ✅",
      newQuote,
    });
  } catch (error) {
    console.error("ERROR IN [createQuote]", error.message);
    return res.status(500).json({
      success: false,
      message: `ERROR IN [createQuote] ${error.message}`,
    });
  }
};

export const updateQuote = async (req, res) => {
  try {
    const quoteID = req.body.params;
    const { author, content, category, image } = req.body;
    const quote = await Quote.findById(quoteID);
    if (!quote) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find the quote" });
    }
    if (author) quote.author = author;
    if (content) quote.content = content;
    if (category) quote.category = category;
    if (image) {
      const new_image_url = await cloudinary.uploader.upload(image);
      quote.image = new_image_url.secure_url;
    }
    await quote.save();
    return res
      .status(200)
      .json({ success: true, message: "Quote Updated", quote });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `ERROR IN [updateQuote] ${error.message}`,
    });
  }
};
