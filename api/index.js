// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const User = require("./models/User");
// const bcrypt = require("bcryptjs");
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
// const secret = "dfsafgewjoiaawoqeu";
// const app = express();
// const port = 3000;
// var salt = bcrypt.genSaltSync(10);

// // Middleware to parse JSON bodies
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// mongoose.connect(
//   "mongodb+srv://blog:I7k2XmzRGEe2wpd5@codeblogger.7qjx8dj.mongodb.net/?retryWrites=true&w=majority&appName=CodeBlogger"
// );
// // Define a route for the root URL
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.post("/api/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const userDoc = await User.findOne({ email });
//     const passok = bcrypt.compareSync(password, userDoc.password);
//     passok ? "" : res.status(400).json("invalid credentials");
//     jwt.sign({ username:userDoc.username, _id: userDoc._id }, secret, {}, (err, token) => {
//       if (err) throw err;
//       res.cookie("token", token).json("ok");
//     });
//   } catch (e) {
//     console.log(e.message);
//   }
// });

// app.post("/api/signup", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const userDoc=await User.create({
//       username,
//       email,
//       password: bcrypt.hashSync(password, salt),
//     });
//     res.json('sign up successfully')
//   } catch (e) {
//     res.json(e.errmsg);
//   }
// });

// app.get("/api/profile", (req, res) => {
//   try {
//     const { token } = req.cookies;
//     jwt.verify(token, secret, {}, (err, info) => {
//       if (err) throw err;
//       res.json(info);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post("/api/logout", (req, res) => {
//   const { token } = req.cookies;
//   res.cookie("token", "").json("ok");
// });

// // Define another route for demonstration
// app.get("/hello/:name", (req, res) => {
//   const name = req.params.name;
//   res.send(`Hello, ${name}!`);
// });

// // Start the server and listen on port 3000
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// //I7k2XmzRGEe2wpd5



const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // For handling CORS requests
const app = express();
app.use(cors());
// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Specify the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) // Specify the filename
  }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
