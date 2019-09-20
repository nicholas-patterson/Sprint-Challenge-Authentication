const router = require("express").Router();
const Users = require("./auth-helpers");
const bcrypt = require("bcrypt");

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  const hash = bcrypt.hashSync(password, 10);

  Users.register({ username, password: hash })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ error: `Server could not register user` });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.login({ username })
    .then(user => {
      const authenticate = bcrypt.compareSync(password, user.password);
      if (user && authenticate) {
        req.session.user = user;
        res.status(200).json({ message: `Welcome, ${user.username}` });
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    })
    .catch(500)
    .json({ error: "Sever could not log user in" });
});

module.exports = router;
