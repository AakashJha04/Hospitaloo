import validator from 'validator'
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary'
import docterModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken'

const addDoctor = async (req, res) => {

    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile){
            return res.json({
                success:false,
                message:"Missing Details"
            })
        }

        // validating email format 
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please Enter a valid email"
            })
        }
        
        // validating strong password 
        if(password.length < 8){
            return res.json({
                success:false,
                message:"Please Enter a password of lenght 8"
            })
        }

        // hash doctor password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        
        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor =  new docterModel(doctorData);
        await newDoctor.save();

        res.json({
            success:true,
            message:"Doctor Created successfully"
        })

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}


// API for admin Login

const loginAdmin = async (req,res) => {
    try {
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({
                success:true,
                token
            })
        }
        else{
            res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}

export { addDoctor , loginAdmin}