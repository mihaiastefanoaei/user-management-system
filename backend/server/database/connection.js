const mongoose = require('mongoose');
const dotenv = require("dotenv");

// Configuration file
//dotenv.config({path:'config.env'});

const connectDB =  async()=>{
    try{
        //MongoDb Connection String
        console.log('MONGODB_URI:', process.env.MONGODB_URI);
        const con = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log('MONGODB_URI:', process.env.MONGODB_URI);
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB