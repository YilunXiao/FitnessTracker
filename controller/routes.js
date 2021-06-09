// Express dependency
const router = require('express').Router();

// Routes
// main route
router.get('/', async (req, res) => {
    // res.render('../public/index.html');
    res.sendFile('index.html');
});

// exercise route
router.get('/exercise', async (req, res) => {
    // res.render('../public/index.html');
    res.sendFile('exercise.html');
});

// stats route
router.get('/stats', async (req, res) => {
    // res.render('../public/index.html');
    res.sendFile('stats.html');
});

module.exports = router;