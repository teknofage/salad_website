# Hello from Stephanie Alysha Living and Design!

This project includes a Node.js server script and a web page that connects to it. The front-end page presents a website for Stephanie Alysha Living and Design. It allows users to learn more about her services, and to book an consultation appointment through the embedded Calendly widget.🎨

[Node.js](https://nodejs.org/en/about/) is a popular runtime that lets you run server-side JavaScript. This project uses the [Fastify](https://www.fastify.io/) framework and explores basic templating with [Handlebars](https://handlebarsjs.com/).

## What's in this project?

← `README.md`: That’s this file, where I can tell people what my cool website does and how I built it.

← `public/css/style.css`: The styling rules for the pages in your site.

← `server.js`: The **Node.js** server script for my site. The JavaScript defines the endpoints in the site back-end. Each one sends data to a Handlebars template which builds these parameter values into the web page the visitor sees.

← `package.json`: The NPM packages for the project's dependencies.

← `src/`: This folder holds the site template along with some basic data files.

← `src/layout/main.hbs`: This is the main page template for the site. 

← `src/colors.json`: A collection of CSS color names. We use this in the server script to pick a random color, and to match searches against color names.

← `src/seo.json`: When you're ready to share your new site or add a custom domain, change SEO/meta settings in here.

