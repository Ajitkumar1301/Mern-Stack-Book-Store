import express from "express";
import { Book } from "../Model/Bookmodel.js";

const router = express.Router();
// Route for get all book
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res
      .status(200)
      .json({ books: books, message: "books fetched successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Route for get single book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book Not Found" });
    } else {
      return res
        .status(200)
        .json({ book: book, message: "book fetched successfully" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Route for add new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "send all required fields : title,author,year" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Route for update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "send all required fields : title,author,year" });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      res.status(404).json({ message: "Book Not Found" });
    }
    return res.status(200).send({ message: "Book update Successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      res.status(404).json({ message: "Book Not Found" });
    } else {
      return res.status(200).send({ message: "Book Delete Successfully" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;
