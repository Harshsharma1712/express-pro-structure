
# express-pro-structure

📦 A simple utility to instantly generate a professional Express.js folder structure for your backend projects.

## 🚀 Installation & Usage

You can use `npx` to run this package without installing it globally:

```bash
npx express-pro-structure
````

This will generate a pre-configured folder structure for an Express.js project in your current directory.

After the structure is generated, follow these steps:

```bash
npm init -y         # Initialize a new Node.js project
npm install         # Install your required dependencies (e.g., express, mongoose, dotenv, etc.)
```

And you're ready to start building!

## 📁 Folder Structure Example

```bash
project-root/
├── src/
│   ├── controllers/     # Route controllers
│   ├── db/              # Database connection and logic
│   ├── middlewares/     # Custom Express middlewares
│   ├── routes/          # API routes
│   ├── utils/           # Utility/helper functions
│
├── app.js               # Main Express app setup
├── constant.js          # App-wide constants
├── index.js             # Entry point to start server
├── .env                 # Environment variables
├── .env.sample          # Sample env file for reference
├── .gitignore           # Recommended .gitignore
└── README.md  
```

> All necessary folders are set up so you can focus directly on development instead of boilerplate setup.

## 🧰 Features

* Clean and scalable folder structure
* Ideal for production-ready Express.js apps
* Saves time during initial setup

## 💡 Why use this?

Setting up the same folder structure again and again is repetitive. This tool helps developers get up and running quickly with a clean project layout for Express.js.

---

Happy coding! ❤️

