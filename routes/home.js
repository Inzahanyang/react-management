var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send({message: 'hello'})
});

module.exports = router;
