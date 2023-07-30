const express = require("express");
const router = express.Router();
const {connection} = require('../database/sql');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM blogs', (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
