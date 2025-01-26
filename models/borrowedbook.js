module.exports = (sequelize, DataTypes) => {
  const BorrowedBook = sequelize.define(
    "BorrowedBook",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      borrowDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      score: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "borrowed_books",
    }
  );

  BorrowedBook.associate = (models) => {
    BorrowedBook.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    BorrowedBook.belongsTo(models.Book, { foreignKey: "bookId", as: "book" });
  };

  return BorrowedBook;
};
