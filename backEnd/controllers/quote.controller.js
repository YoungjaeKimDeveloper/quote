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
export const deleteQuote = async (req, res) => {
  try {
    const quoteID = req.params.quoteID;
    const quote = await Quote.findById(quoteID);
    if (!quote) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find the quote" });
    }
    if (quote.image) {
      const publicID = quote.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(publicID);
        console.info("Image deleted");
      } catch (error) {
        console.error("Failed to delete image", error.message);
      }
    }
    await quote.remove();
    return res
      .status(200)
      .json({ success: true, message: "Quote has been deleted ✅" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `ERROR IN [updateQuote] ${error.message}`,
    });
  }
};

export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({});
    if (!quotes) {
      return res
        .status(404)
        .json({ success: false, message: "Quote is not existed" });
    }
    return res.status(200).json({ success: true, quotes });
  } catch (error) {
    console.error("Error in [getQuotes]", error.message);
    return res.status(500).json({
      success: false,
      message: `ERROR IN [getQuotes] ${error.message}`,
    });
  }
};

export const getSingleQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const singleQuote = await Quote.findById(quoteId);
    if (!singleQuote) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find the quote" });
    }
    return res.status(200).json({ success: true, singleQuote });
  } catch (error) {
    console.error("Error in [getSingleQuote]", error.message);
    return res.status(500).json({
      success: false,
      message: `ERROR IN [getSingleQuote] ${error.message}`,
    });
  }
};

export const getQuoteByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const quotes = await Quote.find({ category: category });
    if (!quotes) {
      return res.status(404).jons({
        success: false,
        message: "Cannot find the quote with the category",
      });
    }
    return res.status(200).json({ success: true, quotes });
  } catch (error) {
    console.error("Error in [getQuoteByCategory]", error.message);
    return res.status(500).json({
      success: false,
      message: `ERROR IN [getQuoteByCategory] ${error.message}`,
    });
  }
};

export const getQuoteByAuthor = async (req, res) => {
  try {
    const author = req.params.author;
    const quotes = await Quote.find({ author: author });
    if (!quotes) {
      return res.status(404).jons({
        success: false,
        message: "Cannot find the quote with the author",
      });
    }
    return res.status(200).json({ success: true, quotes });
  } catch (error) {
    console.error("Error in [getQuoteByAuthor]", error.message);
    return res.status(500).json({
      success: false,
      message: `ERROR IN [getQuoteByAuthor] ${error.message}`,
    });
  }
};
