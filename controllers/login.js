const express = require('express');
const passport = require('../middlewares/authentication');
const Redirect = require('../middlewares/redirect');
const models = require('../models');
const router = express.Router();
const flash = require('connect-flash');

router.get('/',(req,res) => {
  			res.json({
    			msg: "This is login page"
  			})
		});

router.post('/', passport.authenticate('local'),
	(req,res)=>{
	res.json([{username: req.user.username}]);
})

module.exports = router;

