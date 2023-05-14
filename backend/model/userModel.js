import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    contact:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },

    bio:{
        type:String
    },

    password:{
        type:String,
        require:true
    },

    rating:{
        type:Number,
        require:true
    },

    deliveries:{
        type:Number,
        require:true
    },

    revenue:{
        type:Number,
        require:true
    }
},
{timestamps:true}
)

const User = mongoose.model('User', userSchema);
export default User;