const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Bisleri",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log(`connection successful`);
}).catch((e) => {
    console.log("Failed to connect");
})

const LogInSchemaAdmin = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ['Administrator', 'Producer'],
        required: true
    },
    enterprise:{
        type: String,
        required: true
    },
    registrationType:{
        type: String,
        enum: ['Registered with CPCB', 'Unregistered with CPCB'],
        required: true
    },
    state: {
        type: String,
        enum: [
            'Andaman and Nicobar Islands',
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chandigarh',
            'Chhattisgarh',
            'Dadra and Nagar Haveli and Daman and Diu',
            'Delhi',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jammu and Kashmir',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Ladakh',
            'Lakshadweep',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Puducherry',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal'
        ],
        required: true
    },
    address:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    employerID:{
        type: String,
        required: true
    }
})

const collection = new mongoose.model("Collection",LogInSchemaAdmin);
module.exports = collection