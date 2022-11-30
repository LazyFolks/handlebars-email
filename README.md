# Handlebars Email

A Handlebars template engine for emails.

Handlebars provides the power necessary to let you build **semantic templates** effectively with no frustration.  
Checkout the official Handlebars docs site at [handlebarsjs.com](https://handlebarsjs.com) or [Give it a Try](https://handlebarsjs.com/playground.html).

## Installation

Use the [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) package manager to install [Handlebars Email](https://www.npmjs.com/package/handlebars-email).

```bash
npm i handlebars-email
```

## Usage

Import Handlebars Email `hbsEmail` method.  
`hbsEmail( template, context )` take 2 argument a template & a context argument. Which will be used to render the final template.

- template - Path of the template with extension ( .hbs or .handlebars ) or template name if hbsEmailConfig is set.
- context - The actual context Object.

`hbsEmailConfig()`

- views - Views Path of the email template folder
- extname - template extension ( .hbs or .handlebars )

```js
hbsEmailConfig({
  views: "views/email/",
  extname: ".hbs"
});
```

Once you have a template, use the `hbsEmail` method to render the template by passing the template & context.

## Example

email.js

```javascript
const { hbsEmail } = require("handlebars-email");
const path = require("path");

const template = path.join("views", "email", "template.hbs");
const context = { message: "Hello World!" };
const eMailTemplate = hbsEmail(template, context);
```

With hbsEmailConfig

```javascript
const { hbsEmail, hbsEmailConfig } = require("handlebars-email");

hbsEmailConfig({
  views: "views/email/",
  extname: ".hbs",
});

const context = { message: "Hello World!" };
const eMailTemplate = hbsEmail("template", context);
```

template.hbs

```hbs
<html>
  <head>
    <title>Message HTML Title</title>
  </head>
  <body>
    <div>
      <h2>Message: </h2>
      <p>{{message}}</p>
    </div>
  </body>
</html>
```

Would render:

```html
<html>
  <head>
    <title>Message HTML Title</title>
  </head>
  <body>
    <div>
      <h2>Message:</h2>
      <p>Hello World!</p>
    </div>
  </body>
</html>
```

---

## With Nodemailer

email.js

```js
const { hbsEmail } = require("handlebars-email");
const nodemailer = require("nodemailer");
const path = require("path");

const template = path.join(__dirname, "/template.hbs");
const context = { message: "Hello World!" };
const eMailTemplate = hbsEmail(template, context);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_PORT === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const mailOptions = {
  from: "sender@example.com", // Sender address
  to: "receiver@example.com", // List of recipients
  subject: "Node Mailer Handlebars Email", // Subject line
  html: eMailTemplate, // Handlebars eMail template
};

transporter.sendMail(mailOptions, (error, email) => {
  if (error) return console.log(error);
  console.log("Message sent: %s", email.messageId);
});
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (` git checkout -b feature/AmazingFeature`)
3. Commit your Changes (` git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (` git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.
