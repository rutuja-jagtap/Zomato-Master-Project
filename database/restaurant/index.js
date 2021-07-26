import mongoose from "mongoose";

const RestaurantSchema= new mongoose.Schema({
    name: { type : Strng, required :true },
    city :{ type : Strng, required :true },
    address :{ type : String , required : true},
    mapLocation :{type :String , required : true },
    //optional
    cuisuine: {  String},
    restaurantTimings: String,
    contactNumber: Number,
    website:String,
    popularDishes: [String],
    averageCost :Number,
    amenities:[String],
    menuImages:{
        type:mongoose.Types.ObjectId,
        ref:"Images",
    },
    menu :{
        type:mongoose.Types.ObjectId,
        ref:"Menues",
    },
    reviews:[{
        type:mongoose.Types.ObjectId,
        ref:"Reviews",
    }],
    photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images",
    },

}),

export const RestaurantModel =mongoose.model("Restaurants",RestaurantSchema);