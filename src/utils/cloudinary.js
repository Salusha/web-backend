import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary= async (localFilePath)=>{
        try {
            if(!localFilePath) return null
            //upload file on cloudinary
            const response= await cloudinary.uploader.upload(localFilePath,{
               resource_type: 'auto'
            })
            //file has been uploaded successfully
            // console.log("file uploaded on cloudinary", response.url);
            console.log("Deleting file at:", localFilePath);
            fs.unlinkSync(localFilePath);
            return response;
        } catch (error) {
            console.error("Cloudinary upload error:", error.message || error);
            fs.unlinkSync(localFilePath)   //remove the locally saved temporary file as the upload operation got failed
            return null;
        }
    }

export {uploadOnCloudinary}
    