require('dotenv').config()
const express = require('express');
const app = express();

const path = require("path");
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout: 'main',
    // handlebars: allowInsecurePrototypeAccess(handlebars),
});
app.engine('handlebars', hbs.engine);
// Use handlebars to render
app.set('view engine', 'handlebars');

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false
});


// Setup our static files
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/" // optional: default '/'
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars")
  }
});

// Load and parse SEO data
const seo = require("./src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}

/**
* Our home page route
*
* Returns src/pages/main.hbs with data built into it
*/
fastify.get("/", function(request, reply) {
  
  // params is an object we'll pass to our handlebars template
  let params = { seo: seo };
  
  reply.view("/src/layouts/main.hbs", params);
});

/**
* Our POST route to handle and react to form submissions 
*
* Accepts body data indicating the user choice
*/
fastify.post("/", function(request, reply) {
  
  // Build the params object to pass to the template
  let params = { seo: seo };
  
  // The Handlebars template will use the parameter values to update the page with the chosen color
  reply.view("/src/layouts/main.hbs", params);
});

/**
* Our Contact page route
*
* Returns src/pages/contact.hbs with data built into it
*/
fastify.get("/contact", function(request, reply) {
  
  // params is an object we'll pass to our handlebars template
  let params = { seo: seo };
  
  reply.view("/src/partials/contact.hbs", params);
});

/**
* Our POST route to handle and react to form submissions 
*
* Accepts body data indicating the user choice
*/
fastify.post("/contact", function(request, reply) {
  
  // Build the params object to pass to the template
  let params = { seo: seo };
  
  // The Handlebars template will use the parameter values to update the page with the chosen color
  reply.view("/src/partials/contact.hbs", params);
});




// Run the server and report out to the logs
fastify.listen(process.env.PORT || 3333, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
