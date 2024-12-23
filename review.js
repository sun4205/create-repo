const express = require("express");
const auth = require("./middlewares/auth");
const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { login, createUser } = require("");
const { NOT_FOUNC } = require("");

const router = express.Router();

router.post("/signin", login);
router.post("/signup", createUser);

router.use("/items", itemRouter);

router.use(auth);

router.use("./users", useRouter);

router.use((req, res) => {
  res.status(NOT_FOUDN).send({ message: "Requested Resources not found" });
});

module.exports = router;
