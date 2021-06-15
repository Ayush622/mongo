const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("./database/User");
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/learning");

app.get("/", async (req, res) => {
  User.create(
    {
      firstname: "ayush",
      lastname: "jaiswal",
      email: "ayush.d@gna.com",
      password: "Test@123",
    },
    (error, post) => {
      res.json({
        msg: "user ",
      });
    }
  );
  // const posts = await User.find({})
  // console.log(posts)
  // res.render('index', {
  //     posts
  // })
});

app.get("/user/:id", async (req, res) => {
  const post = await User.findById(req.params.id);
  res.render("user", {
    post,
  });
});

app.post("/posts/store", (req, res) => {
  User.create(req.body, (error, post) => {
    res.redirect("/");
  });
});

app.listen(3001, () => {
  console.log("App listening to port 3001");
});
