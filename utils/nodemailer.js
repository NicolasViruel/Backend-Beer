const nodemailer = require("nodemailer");

const sendEmail = async (email, remitente, text) => {

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            service: "gmail",
            auth: {
              user: process.env.USER_EMAIL,
              pass: process.env.USER_PASS,
            },
          });

          const response = await transporter.sendMail({
            from: remitente,
            to: email,
            html: text
          })

          console.log("The email has been sent");
          
    } catch (error) {
        console.error(error)
        console.log("Error the email was not sent");
    }
}

module.exports ={
    sendEmail
}