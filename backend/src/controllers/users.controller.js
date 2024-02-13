const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async(req,res)=> 
{
    const user = await User.find();
    res.json(user);
}

userCtrl.createUser = async(req,res)=> 
{
    const {username}= req.body;
    const newUser=new User({username});
    await newUser.save();
    res.send('User Create')
}

userCtrl.deleteUser =async(req,res)=> 
{
    await User.findByIdAndDelete(req.params.id)
    res.json('User Delete')

}



module.exports = userCtrl;