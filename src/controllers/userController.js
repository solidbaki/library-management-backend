const { User, BorrowedBook, Book } = require('../../models');

// Fetch all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Fetching user details for ID: ${id}`); // Debug log

    const user = await User.findByPk(id, {
      include: [
        {
          model: BorrowedBook,
          as: 'borrowedBooks',
          include: { model: Book, as: 'book' },
        },
      ],
    });

    if (!user) {
      console.log(`User with ID: ${id} not found`); // Debug log
      return res.status(404).json({ error: 'User not found' });
    }

    const currentBooks = user.borrowedBooks.filter((bb) => !bb.returnDate);
    const pastBooks = user.borrowedBooks.filter((bb) => bb.returnDate);

    res.status(200).json({
      id: user.id,
      name: user.name,
      currentBooks: currentBooks.map((bb) => bb.book),
      pastBooks: pastBooks.map((bb) => ({
        book: bb.book,
        rating: bb.score,
      })),
    });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Failed to fetch user details' });
  }
};


module.exports = { getUsers, getUserDetails };
