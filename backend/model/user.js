const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const bcrypt = require("bcryptjs");
const { CreateToken } = require("../services/authentication.js");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      //required: true,
    },
    email: {
      type: String,
      //required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      //required: true,
    },

    ticketsPurchased: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
    ticketsListed: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
    userType: {
      type: String,
      default: "USER",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified) return;
  if (user.password) {
    const salt = (await bcrypt.genSalt(10)).toString();

    const hashedPassword = createHmac("sha256", salt)
      .update(user.password)
      .digest("hex");
    this.salt = salt;
    this.password = hashedPassword;
  }
  next();
});

// UserSchema.static("CreateTokenOnregister", async function(email){
//   const user = await this.findOne({email})
//   console.log("user ",user)
//   const token =  CreateToken(user)
//   return token
// })

UserSchema.static(
  "MatchPasswordandCreateToken",
  async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) return null;

    const salt = user.salt;
    const hashedPassword = user.password;

    const userPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if (hashedPassword !== userPassword) throw new Error("Wrong Password");
    const token = CreateToken(user);
    return token;
  }
);



const User = mongoose.model("user", UserSchema);
module.exports = User;
