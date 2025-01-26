const { Book, BorrowedBook, User } = require('../../models');

// Fetch all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

// Fetch details of a specific book
const getBookDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id, {
      include: [
        {
          model: BorrowedBook,
          as: 'borrowedBooks',
          include: { model: User, as: 'user' },
        },
      ],
    });

    if (!book) return res.status(404).json({ error: 'Book not found' });

    const currentBorrow = book.borrowedBooks.find((bb) => !bb.returnDate);
    const avgRating = book.borrowedBooks.reduce((sum, bb) => sum + (bb.score || 0), 0) / book.borrowedBooks.length || null;

    res.status(200).json({
      id: book.id,
      name: book.name,
      author: book.author,
      year: book.year,
      currentBorrower: currentBorrow ? currentBorrow.user : null,
      avgRating,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book details' });
  }
};

const getBorrowingHistory = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const history = await db.BorrowedBook.findAll({
      where: { bookId },
      include: [
        {
          model: db.User,
          attributes: ["id", "name"], // Include user details
        },
      ],
      order: [["borrowedAt", "DESC"]], // Most recent first
    });

    if (!history) {
      return res.status(404).json({ message: "No borrowing history found." });
    }

    res.json(history);
  } catch (error) {
    console.error("Error fetching borrowing history:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { getBooks, getBookDetails, getBorrowingHistory };
