const express = require('express');
const { borrowBook, returnBook } = require('../controllers/borrowedBookController');
const { borrowBookSchema, returnBookSchema } = require('../validations/borrowedBookValidation');
const validate = require('../middleware/validate');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: BorrowedBooks
 *   description: API for borrowing and returning books
 */

/**
 * @swagger
 * /borrowed-books/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [BorrowedBooks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID of the user borrowing the book
 *               bookId:
 *                 type: integer
 *                 description: ID of the book being borrowed
 *     responses:
 *       201:
 *         description: Book borrowed successfully
 *       400:
 *         description: Validation error
 */
router.post('/borrow', validate(borrowBookSchema), borrowBook);

/**
 * @swagger
 * /borrowed-books/return:
 *   post:
 *     summary: Return a borrowed book
 *     tags: [BorrowedBooks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID of the borrowed book
 *               score:
 *                 type: integer
 *                 description: Rating given to the book (0-5)
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       404:
 *         description: Borrowed book not found
 */
router.post('/return', validate(returnBookSchema), returnBook);

module.exports = router;
