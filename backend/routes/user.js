const express = require("express");
const mongoose = require("mongoose");
const { OAuth2Client } = require("google-auth-library");
const User = require("../model/user.js");

const { isDisposable } = require("../components/validateEmail/validEmail.js");
const { CreateToken } = require("../services/authentication.js");
const {Authorize} = require("../middlewares/authorization.js");

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
        secure: process.env.NODE_ENV === 'production',
        sameSite: "strict",
        maxAge: 60 * 24 * 60 * 60 * 1000,
        path: '/'
  
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

  

module.exports = router;
