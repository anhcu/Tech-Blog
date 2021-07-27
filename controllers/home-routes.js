const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello and good bye');
});

module.exports = router;