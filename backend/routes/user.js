const express = require("express");
const mongoose = require("mongoose");
const { OAuth2Client } = require("google-auth-library");
const User = require("../model/user.js");

const { isDisposable } = require("../components/validateEmail/validEmail.js");
const { CreateToken, GetUser } = require("../services/authentication.js");
const { Authorize } = require("../middlewares/authorization.js");
const sendLoginLink = require("../components/mails/sendmail.js");

const router = express.Router();

const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;
const client = new OAuth2Client(googleClientID);

router.post("/api/user/google-auth", async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: googleClientID,
    });
    const { name, email, picture } = ticket.getPayload();
    console.log("ticket.getPayload()", email);
    let newuser;
    const useralreadyexists = await User.findOne({ email: email });

    if (useralreadyexists) {
      newuser = useralreadyexists;
    } else {
      newuser = await User.create({
        fullname: name,
        email,
        password: Math.random().toString(36).slice(-8),
      });
    }
    const token = CreateToken(newuser);
    console.log(("token", token));

    res.cookie("token", token, {
      // httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 24 * 60 * 60 * 1000,
      path: "/",
    });
    res.json({
      message: "User registered successfully",
      userId: newuser._id,
    });
    return res.send();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Email Already Registered",
      errorCode: "EMAIL_REGISTERED",
    });
  }
});

router.post("/api/user/auth", async (req, res) => {
  const { email } = req.body;
  let newuser;
  const useralreadyexists = await User.findOne({ email: email });

  if (useralreadyexists) {
    newuser = useralreadyexists;
  } else {
    newuser = await User.create({
      email,
      password: Math.random().toString(36).slice(-8),
    });
  }
  const token = CreateToken(newuser);
  console.log(("token", token));
  const link = `http://localhost:5173/login/user/${token}`;
  const subject = "Login Link for DEUCE";
  const content = `<p> Dear customer, </p>
    <p> Please click on the link below to login to your account </p>
    <a href="${link}"> Click here to login </a>
    <p> if the above link does not work, please click on the link below </p>
    <a href="${link}"> ${link} </a>
    <p> Regards, </p>
    <p> DEUCE </p>`;

  const loginmail = await sendLoginLink(email, subject, content);
  console.log("loginmail", loginmail);
  return res.json({
    message: "User registered successfully",
    userId: newuser._id,
  });
  // res.cookie("token", token, {
  //   // httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: "strict",
  //   maxAge: 60 * 24 * 60 * 60 * 1000,
  //   path: "/",
  // });
});


router.get("/api/user/verify-login/:token", async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = GetUser(token);
    const userId = decoded.id;

    const user = await User.findById(userId);
    // create a new JWT 
    const newToken = CreateToken(user);    
    res.cookie("token", newToken, {
      // httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired login link" });
  }
});

router.get("/api/auth/user",(req,res)=>{
  const userinfo = Authorize()
  if (!req.user) {
    console.log("no user");
  }
  // console.log("user ",req.user)
    res.json({user:req.user})
})

module.exports = router;
