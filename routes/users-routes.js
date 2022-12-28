const express = require("express");

const router = express.Router();

const DUMMY_USER = [
  {
    id: "u1",
    name: "minyoung",
    image:
      "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    places: 2,
  },
  {
    id: "u2",
    name: "hyn",
    image:
      "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    places: 3,
  },
];

router.get("/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USER.find((u) => {
    return u.id === userId;
  });
  res.json({ user });
});

module.exports = router;
