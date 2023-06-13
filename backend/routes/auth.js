const router = require('express').Router();
const {User} = require ('../models/user.js');
const Joi = require("joi");
const bcrypt = require ('bcrypt');


router.post('/', async( req,res) => {
    try {
        const{error}= validate(req.body);
        if (error)
        return res.status(400).send({message : error.details[0].message});
        
        const user = await User.findOne({email : req.body.email});
        if (!user)
            return res.status(401).send({message : "invalid Email or password"});
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if (!validPassword)
            return res.status(401).send({message:'invalid Password'});
        
        const token = user.generateAuthToken();
        res.status(200).send({data: token, message: "Logged in Successfully"})


    } catch (error) {
        res.status(500).send({message:'internal server error'});
    }
})

const validate = (data) => {
    const schema = Joi.object({
        email : Joi.string().email().required().label("email"),
        password : Joi.string().email().required().label("password")
    })  
    return schema.validate(data);
}

module.exports = router;