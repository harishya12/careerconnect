const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { id: 1, title: 'Software Developer', location: 'Remote' },
        { id: 2, title: 'UI/UX Designer', location: 'New York' },
    ]);
});

module.exports = router;