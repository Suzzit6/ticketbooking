const nodemailer = require("nodemailer");
const fs = require("fs");

async function sendLoginLink(
    recipientEmail,
    subject,
    content
) {
  // Create a transporter using SMTP
  console.log("recipientEmail ", recipientEmail);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ferryellaaa3@gmail.com",
      pass: "cmfrdscxiqxsywtb",
    },
  });

  // Email options
  const emailHTML = content

  let mailOptions = {
    from: "ferryellaaa3@gmail.com",
    to: recipientEmail,
    subject: subject,
    html: emailHTML,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(" email sent successfully");
    return "Mail Sent"
  } catch (error) {
    console.error("Error sending email:", error);
  }
  
}


module.exports = sendLoginLink