import User from '../model/User.js';

export const getUsers = async (req, res) => {
    // console.log('req.query1', req.query1);
    try {
        const user = await User.find(req.query1);
        // console.log('user count', user.length)
        res.status(200).json({'userDetails':user})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.message })
    }
};

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user)
    try {
        const newUser1 = await newUser.save()
        res.status(201).json({createdUser: newUser1})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.message })

    }

};

export const updateUser = async (req, res) => {
    
    const newUpdate = {
        phoneNumber: Math.floor(Math.random() * 1000000000 ) + 9000000000
    }
    try {
        const user = await User.updateMany(req.query1, {$set: newUpdate})
        // console.log(user)
        res.status(200).json({message: `Updated ${user.modifiedCount} users`})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.message })

    }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.deleteMany(req.query1)
    // console.log(user)
    res.status(200).json({message: `${user.deletedCount} Users deleted`})
} catch (error) {
    console.log(error.message);
    res.status(500).json({error: error.message })

}
};
