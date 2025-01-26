const express = require("express");
const { getBooks, getBookDetails } = require("../controllers/bookController");
const { getBookByIdSchema } = require("../validations/bookValidation");
const { getBorrowingHistory } = require("../controllers/bookController");

const validate = require("../middleware/validate");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API for managing books
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Book ID
 *                   name:
 *                     type: string
 *                     description: Book name
 *                   author:
 *                     type: string
 *                     description: Author of the book
 *                   year:
 *                     type: integer
 *                     description: Year of publication
 *                   score:
 *                     type: number
 *                     description: Average rating of the book
 */
router.get("/", getBooks);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get book details by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Book ID
 *                 name:
 *                   type: string
 *                   description: Book name
 *                 author:
 *                   type: string
 *                   description: Author of the book
 *                 year:
 *                   type: integer
 *                   description: Year of publication
 *                 currentBorrower:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: User ID
 *                     name:
 *                       type: string
 *                       description: User name
 *                 avgRating:
 *                   type: number
 *                   description: Average rating of the book
 *       404:
 *         description: Book not found
 */

//router.get("/:id", validate(getBookByIdSchema), getBookDetails);
router.get("/:id", getBookDetails);

router.get("/:id/history", getBorrowingHistory);


module.exports = router;
