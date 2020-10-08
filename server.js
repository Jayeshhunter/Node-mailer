"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    // true for 465, false for other ports
    auth: {
      user: "YOUR MAIL ID HERE", // generated ethereal user
      pass: "YOUR EMAIL PASSWORD", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "YOUR EMAIL-ID", // sender address
    to: "ALL OTHER EMAIL ADDRESS", // list of receivers
    subject: "Search Cross Event", // Subject line
    text: `Greetings, participant!

    Thank you so much for signing up for e-IMF 2020 organized by Sri Ramanujan Mathematics Club of SRM. We're thrilled to see your interest! 
    
    Sri Ramanujan Mathematics Club was founded in the year 1991 through which an Intra Mathematics Festival (IMF) and Engineering Mathematics Festival (EMF) comprising of events like quiz, puzzles, dumb C, crossword, IQ, etc., are conducted every year to help the students to sharpen their analytical skills.
    
    We hope you complete the quiz with positivity and dedication. So brace yourself for the test and best of luck!
    
    Time: 
    
    Stay tuned!
    Warmest regards,
    Sri Ramanujan Mathematics Club, SRMIST`,
    html:
      '<p style="font-size:20px;background:orange;border:3px;border-radius:15px;box-shadow:10px;color:black;padding:20px">Greetings, participant!<br/><br/>Thank you so much for signing up for e-IMF 2020 organized by Sri Ramanujan Mathematics Club of SRM. We re thrilled to see your interest!<br/>Sri Ramanujan Mathematics Club was founded in the year 1991 through which an Intra Mathematics Festival (IMF) and Engineering Mathematics Festival (EMF) comprising of events like quiz, puzzles, dumb C, crossword, IQ, etc., are conducted every year to help the students to sharpen their analytical skills.<br/><br/>We hope you complete the quiz with positivity and dedication. So brace yourself for the test and best of luck!<br/><br/>Time:<br/><br/>Stay tuned!<br/>Warmest regards,<br/>Sri Ramanujan Mathematics Club, SRMIST<br/><button style="background-color: #4CAF50;border: none;color: white;padding: 16px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;transition-duration: 0.4s;cursor: pointer;"><a style="text-decoration:none;color:white;" href="https://docs.google.com/forms/d/e/1FAIpQLSdotKLYFXHCBU3elh57_f55dOnt6BTJ30GEa30Da7IkqQMaHw/viewform?usp=sf_link">Click Here for the Form</a></button></p>', // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
