const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');

exports.sendEmail = async (req, res, next) => {

    // point to the template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
    };
    try {
        // Node mailer settings
        const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL, pass: process.env.PASSWORD } });
        const mailOptions = { 
            from: process.env.EMAIL, 
            to: req.body.email, 
            subject:'Votre demande de contact - Leslie EL KATTOUSSI', 
            template: 'replyEmailTemplate',
            context:{
                firstName: req.body.firstName,
                lastName: req.body.lastName 
            },
            attachments : [
                {
                    filename: 'LEK.png',
                    path: `${req.protocol}://${process.env.HOST}/images/logo.png`,
                    cid: "LEKLogo"
                },
            ]

        };

        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions));

        // Send email to the requester and the admin
        transporter.sendMail(mailOptions, (err) => {
            if (err) { 
                return res.status(500).json({
                    error : "NODEMAILER_ERROR",
                    message: err.message
                }); 
            }

            // Node mailer settings
            const transporter2 = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL, pass: process.env.PASSWORD } });
            const mailOptions2 = { 
                from: process.env.EMAIL, 
                to: process.env.EMAIL, 
                subject: 'Nouvelle demande de contact', 
                template: 'emailTemplate',
                context:{
                    firstName: req.body.firstName,
                    lastName: req.body.lastName ,
                    email: req.body.email,
                    message: req.body.message
                }
        
            };
        
            // use a template file with nodemailer
            transporter2.use('compile', hbs(handlebarOptions));
        
            // Send email to the requester and the admin
            transporter2.sendMail(mailOptions2, (err) => {
                if (err) { 
                    return res.status(500).json({
                        error : "NODEMAILER_ERROR",
                        message: err.message
                    }); 
                }
                return res.status(200).json();
            });
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "SERVER_ERROR",
            message: error
        });
    }

    try {
    }
    catch (error) {
        return res.status(500).json({
            error: "SERVER_ERROR",
            message: error
        });
    }   
};