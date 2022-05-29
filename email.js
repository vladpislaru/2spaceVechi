const nodemailer = require("nodemailer");

let membru = {
    "index":"",
    "nume":"",
    "clasaprofil":""
}
let echipa = {
    "nume":"",
    "teamLeader":{
        "nume":"",
        "tel":"",
        "email":""
    },
    "profesor":{
        "nume":"",
        "tel":"",
        "email":""
    },
    "membrii":[],
    "motivatie":"",
    "documente":[]
}


// async..await is not allowed in global scope, must use a wrapper
async function main(body) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:"outlook",
    auth: {
      user: "bot.2s@outlook.com",
      pass: "2f6emTTh6yRusFF",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "bot.2s@outlook.com", // sender address
    to: "alexandrudut123@gmail.com", // list of receivers
    subject: "format", // Subject line
    text: body, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });


  console.log("Message sent: %s", info.messageId);
}

str = "Nume Echipa\nNume TeamLeader\nNr tel TL\nEmail TL\nNume Prof\nNr tel prof\nEmail prif\n<Date participanti>\nMotivatie\n<Atasamante>"

main("blablabala").catch(console.error);