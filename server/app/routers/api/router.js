const express = require("express");

const router = express.Router();
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);
/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const categoriesRouter = require("../categories/router");

router.use("/categories", categoriesRouter);

const programActionsRouter = require("./programs/router");

router.use("/programs", programActionsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
