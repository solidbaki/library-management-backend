const express = require("express");
const { getUsers, getUserDetails } = require("../controllers/userController");
const { getUserByIdSchema } = require("../validations/userValidation");
const validate = require("../middleware/validate");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for managing users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: User ID
 *                   name:
 *                     type: string
 *                     description: User name
 */
router.get("/", getUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: User ID
 *                 name:
 *                   type: string
 *                   description: User name
 *                 currentBooks:
 *                   type: array
 *                   items:
 *                     type: object
 *                 pastBooks:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: User not found
 */
router.get("/:id", getUserDetails);

module.exports = router;
