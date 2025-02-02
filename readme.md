# Node.js Sample Project - NodeFarm

## Project Overview

This project demonstrates how to:

1. Create your own server using Node.js.
2. Set up a small local API.
3. Implement asynchronous code to prevent blocking.
4. Read and write files synchronously and asynchronously.
5. Handle AJAX requests using `fetch()`.
6. Parse URLs and handle different routes.
7. Work with JSON data and manipulate strings using `slugify`.
8. Allow Cross-Origin Resource Sharing (CORS).

> **Note:** This project is built for learning purposes only.

---

## Features

- **Custom HTTP Server**: Built using Node.js' `http` module.
- **Routing System**: Handles requests for `/overview`, `/product`, and `/api`.
- **AJAX Handling**: Supports `fetch()` for both GET and POST requests.
- **File Handling**:
  - Reads HTML templates from the `templates` folder.
  - Reads and parses JSON data from `dev-data/data.json`.
  - Supports synchronous and asynchronous file operations.
- **Dynamic Content Rendering**: Generates product pages dynamically by replacing placeholders with actual data.
- **CORS Support**: Enables cross-origin resource sharing for API requests.
- **Data Parsing & String Manipulation**: Uses `slugify` to create SEO-friendly URLs.
- **Error Handling**: Gracefully handles incorrect routes with a 404 response.

---

## Installation

To install all necessary modules, run:

```bash
npm install
```

---

## Running the Server

To install required dependencies :

```bash
npm i
```

To start the server, use:

```bash
node index.js
```

OR

```bash
npm start
```

The server will run on `http://127.0.0.1:8000/`.

---

## API Endpoints

### 1. **Overview Page** (`/overview`)

- Displays all products by dynamically generating product cards.
- Supports **POST** requests to receive data asynchronously.

### 2. **Product Page** (`/product?id=X`)

- Displays detailed information about a specific product.

### 3. **API Endpoint** (`/api`)

- Returns all product data in JSON format.

---

## Example AJAX Requests

### Fetching Data (GET Request)

```javascript
fetch("http://127.0.0.1:8000/api")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error fetching data:", err));
```

### Sending Data (POST Request)

```javascript
fetch("http://127.0.0.1:8000/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "johndoe@example.com",
  }),
});
```

---

## Additional Notes

- **Synchronous vs Asynchronous File Handling**:
  - Uses `fs.readFileSync()` for reading files synchronously.
  - Uses `fs.readFile()` with callbacks for non-blocking asynchronous file operations.
- **Slugify Usage**:
  - Converts product names into URL-friendly slugs.
- **CORS Handling**:
  - Allows cross-origin requests with appropriate headers.

---

## Learning Outcomes

By working on this project, you will:

- Understand the basics of creating a Node.js server.
- Learn how to handle routes dynamically.
- Get hands-on experience with asynchronous programming in JavaScript.
- Learn how to work with JSON data and render HTML dynamically.
- Understand CORS and how to handle cross-origin requests.

---

## License

This project is for educational purposes only and is not intended for production use.
