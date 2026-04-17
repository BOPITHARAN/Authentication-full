const mysql = require("mysql");
require('dotenv').config()


// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DBhost || "localhost",
    user: process.env.DBuser || "root",
    password: process.env.DBpassword || "",
    database: process.env.DB || "authentication"
});

db.connect(err => {
    if (err) {
        console.error("❌ DB Connection Error");
        process.exit(1);
    }
    console.log("✅ MySQL Connected");
});


// exporting method 
module.exports = db;