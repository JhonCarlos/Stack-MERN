const { Router} = require('express');
const router = Router();


router.route('/')
    .get((req,res)=> res.send('User Routes'))

module.exports = router;