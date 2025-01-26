const { BorrowedBook } = require("../../models");

// Borrow a book
const borrowBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    const newBorrow = await BorrowedBook.create({
      borrowDate: new Date(),
      userId,
      bookId,
    });

    res.status(201).json(newBorrow);
  } catch (error) {
    res.status(500).json({ error: "Failed to borrow book" });
  }
};

// Return a book
/*
const returnBook = async (req, res) => {
  try {
    const { id, score } = req.body;

    const borrowedBook = await BorrowedBook.findByPk(id);
    if (!borrowedBook)
      return res.status(404).json({ error: "Borrowed book not found" });

    borrowedBook.returnDate = new Date();
    borrowedBook.score = score || null;
    await borrowedBook.save();

    res.status(200).json(borrowedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to return book" });
  }
};
*/

const returnBook = async (req, res) => {
  try {
    const { id, score } = req.body;

    // Find the borrowed book by its ID
    const borrowedBook = await BorrowedBook.findByPk(id);

    if (!borrowedBook) {
      return res.status(404).json({ error: 'Borrowed book not found' });
    }

    // Update the returnDate and score
    borrowedBook.returnDate = new Date();
    borrowedBook.score = score || null;
    await borrowedBook.save();

    res.status(200).json(borrowedBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to return book' });
  }
};
module.exports = { borrowBook, returnBook };
