import mongoose from 'mongoose'

const serviceOrderSchema = mongoose.Schema({

    serviceid:{
        type:String,
        require:true,
    },
    buyerid:{
        type:String,
        require:true,
    },
    sellerid:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    status:{
        type: String,
        require:true
    }

},
{timestamps:true}
)

const ServiceOrder = mongoose.model('Service Order', serviceOrderSchema);
export default ServiceOrder;