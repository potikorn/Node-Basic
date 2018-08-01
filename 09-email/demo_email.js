var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { // email service provider authentication
        user: '',
        pass: ''
    }
});

var mailOptions = {
    from: 'noreply@thammo.com', // from who?
    to: 'potikornth@gmail.com', // to...who? in case multiple receiver use ',' ('myfriend@yahoo.com, myotherfriend@yahoo.com')
    subject: 'Sending Email using Node.js (nodemailer)', // subject mail
    text: 'That was easy?' // text only in mail
    // if not send only text use 'html'...
    // html: <h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log('Email sent: ' + info.response);
    }
});