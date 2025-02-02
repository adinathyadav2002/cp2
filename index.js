const fs = require("fs");
const http = require("http");
const url = require("url");
const cors = require("cors");
const slugify = require("slugify");

const replaceHtml = require("./modules/replaceHtml");

// SERVER
const card = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const overview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const productHtml = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const parsedData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url);

  if (pathname === "/overview") {
    if (req.method == "POST") {
      let body = "";

      // THIS IS HOW WE CAN READ THE DATA FROM REQUEST
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        console.log(body);

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Data received");
      });
    } else {
      const cards = parsedData
        .map((product) => replaceHtml(product, card))
        .join(" ");
      res.writeHead(200, {
        "content-type": "text/html",
      });

      const output = overview.replace(/{%PRODUCT_CARDS%}/, cards);
      res.end(output);
    }
  } else if (pathname === "/product") {
    const product = parsedData[Number.parseInt(query.slice(3))];
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const output = replaceHtml(product, productHtml);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("Site not found");
  }
});

server.listen(8000, "127.0.0.1");

// ***********************************************************************************
// ADDITIONAL INFO :

// An "AJAX request" is a specific type of "HTTP request" that is made asynchronously in the background
// using JavaScript, allowing a web page to update parts of its content without reloading the entire page,
// while a regular HTTP request typically results in a full page refresh to display new content

// AJAX -- old way
// fetch()  -- modern and effective way to make asynchronous http requests

// HTTP GET METHOD

// fetch("http://127.0.0.1:8000/api")
//   .then((res) => {
//     if (!res.ok) throw new Error("There is problem in fetching the api");
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// HTTP POST METHOD

// fetch("http://127.0.0.1:8000/api", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "John Doe",
//     email: "johndoe@example.com",
//   }),
// });

// http:  npm module provide interface for http methods
// fs  :  npm package to read from files

// SYNCHRONOUS
// const readData = fs.readFileSync("./txt/input.txt", "utf-8");

// const writeData = `Importance of avocado : ${readData}.\nCreated on ${new Date()}`;
// fs.writeFileSync("./txt/output.txt", writeData);

// ASYNCHRONOUS
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Found Error");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, (err) => {
//         console.log("wrote content on the file.");
//       });
//     });
//   });
// });

// slugify : npm package to manipulate the strings
// const allSlugs = parsedData.map((item) =>
//   slugify(item.productName, { lower: true })
// );
// console.log(allSlugs);
// output:
// "fresh-avocados",
//   "goat-and-sheep-cheese",
//   "apollo-broccoli",
//   "baby-carrots",
//   "sweet-corncobs
// ";

// allowing cross origin resource sharing
//  Origin(Protocol + Host + Port);

// res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
// res.setHeader(
//   "Access-Control-Allow-Methods",
//   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
// );
// res.setHeader(
//   "Access-Control-Allow-Headers",
//   "X-Requested-With,content-type"
// );
// res.setHeader("Access-Control-Allow-Credentials", true); // Allow cookies if needed

// ***********************************************************************************
