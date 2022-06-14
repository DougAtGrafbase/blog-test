import fetch from "node-fetch";
import fs from "fs";
//const fs = require('fs');

var apiKey = process.env.API_KEY;
var endpoint = process.env.ENDPOINT;
var debug = process.env.DEBUG;

// Get filename specified after -d
const myArgs = process.argv.slice(2);

if (debug) {
  console.log('myArgs: ', myArgs);
}

if (myArgs.length != 2) {
  console.log("Missing -d FILENAME args");
  process.exit();
}

if (myArgs[0] == "-d") {
  var filename = myArgs[1];
  if (debug) {
    console.log("Reading contents of " + filename);
  }
} else {
  console.log("Missing -d flag");
  process.exit();
}

// var content = '{"query":"{ userCollection(first: 10) { edges { node { id } } } }"}';

fs.readFile(filename, 'utf8', (err, content) => {
  if (err) {
    console.error(err);
    return;
  }

  if (debug) {
    console.log("Contents of " + filename + ":");
    console.log(content);
  }

  var q = "`" + content + "`";

  var body = JSON.stringify({
    query: q
  });

  /*
  var dummy = '{"query":"{ userCollection(first: 10) { edges { node { id } } } }"}"';

  if (body == dummy) {
    console.log("body and dummy are equal. body:");
    console.log(body);
    console.log("dummy:");
    console.log(dummy);
  } else {
    console.log("body and dummy are NOT equal. body:");
    console.log(body);
    console.log("dummy:");
    console.log(dummy);
  }

  if (debug) {
    console.log("Body:");
    console.log(body);
  }
  */

  fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + apiKey
    },
    body: //JSON.stringify({
      body
    //})
  }).then(async (data) => {
    console.log(await data.json())
  })
});

// var content = JSON.parse(fs.readFileSync(filename, 'utf8'));

