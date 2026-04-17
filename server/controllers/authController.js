const db = require('../config/db');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation

exports.register = (req, res) => {
    const { Username, Email, Password } = req.body;
    const hashed = bcrypt.hashSync(Password, 10); // Hash the password    
    if (!Username || !Email || !Password) {
        return res.status(400).send({ error: 'Missing fields' });
    }
    const q = 'insert into users (Username, Email, Password) values (?, ?, ?)';
    db.query(q, [Username, Email, hashed], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'User created successfully' });
    });
};

exports.login = (req, res) => {
    const { Username, Password } = req.body;

    if (!Username || !Password) {
        return res.status(400).json({ message: "Missing credentials" });
    }

    const q = "SELECT * FROM users WHERE Username = ?";
    db.query(q, [Username], (err, data) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (data.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const user = data[0];

        const isPasswordValid = bcrypt.compareSync(Password, user.Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "JWT config error" });
        }

        const token = jwt.sign(
            { id: user.ID },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            token,
            user: {
                id: user.ID,
                username: user.Username,
                email: user.Email
            }
        });
    });
};

exports.getme = (req, res) => {
    const userID = req.userID;
    const q = 'SELECT Username, Email, PhotoURL  FROM users WHERE ID = ?';
    db.query(q, [userID], (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data[0]);
    });
}