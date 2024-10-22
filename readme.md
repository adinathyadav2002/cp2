# Node.js Sample Project

## Project Overview

This project demonstrates how to:

1. Create your own server using Node.js.
2. Set up a small local API.
3. Implement asynchronous code to prevent blocking.

## Steps

### 1. Creating a Basic Server

We use Node.js' built-in `http` module to set up a server. The server listens on a specified port and responds to HTTP requests.

### 2. Creating a Local API

We use the `express` framework to build a local API that handles different HTTP requests (GET, POST, etc.).

### 3. Writing Asynchronous Code

To ensure that operations like file reading are non-blocking, we use `async`/`await` or promises.

## Installation

To install all the necessary modules from `package.json`, run the following command:

```bash
npm install
```
