import express from "express";
import zod from "zod";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import { User, Account } from "../db.js";
import { authMiddleware } from '../middleware.js';
import { AuthMechanism } from "mongodb";

const router = express.Router();

// Signup Schema

const signupSchema = zod.object(
    {
        username: zod.string().email(),
        firstname: zod.string(),
        lastname: zod.string(),
        password: zod.string()
    }
)

// Signup routes

router.post("/signup" , async (req , res) => {
    const {success} = signupSchema.safeParse(req.body)
    if (!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username:req.body.username
    })

    if (existingUser){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 100000    // Initial balance between 1 and 100000
    })

    const token = jwt.sign({
        userId 
    } , JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

// Signin schema

const signinSchema = zod.object(
    {
        username: zod.string().email(),
        password: zod.string()
    }
)

// Signin routes

router.post("/signin" , async (req , res) => {
    const {success} = signinSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message:"Error while logging in"
        })
    } 

    const user = await user.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user){
        const token =jwt.sign({
            userId: user._id
        },JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message:"Error while logging in"
    })
})

 // Update user info schema

const updateUserInfo = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
})

  //update user route

router.put("/" , authMiddleware , async (req , res) =>{
     const {success} = updateUserInfo.safeParse(req.body)
     if(!success){
        return res.status(411).json({
            message:"Error while updating information / pass too small"
        })
     }

     await User.updateOne({_id:req.userId} ,req.body)

     res.status(200).json({
        message:"Updated Successfully"
     })
})

router.get("/bulk" , async(req , res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        },{
            lastname: {
                    "$regex": filter
                }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})


export default router;