import mongoose, {Schema} from "mongoose";

const subscriptionSchema= new Schema({
    subscriber:{
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId,  //to whom subscriber is subscribing
        ref:"User"
    }
}, {timestamps: true})



export const Subscription=mongoose.model("Subscription", subscriptionSchema);