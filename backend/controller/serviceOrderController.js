import ServiceOrder from '../model/serviceOrderModel.js'

const createServiceOrder = async (req,res)=>{
    const {serviceid,sellerid,price,description,response,status} = req.body.body;
    const buyerid = req.userid;
    const serviceOrder = new ServiceOrder({
        serviceid,
        buyerid,
        sellerid,
        price,
        description,
        response,
        status
    })
    try{
        await serviceOrder.save();
        res.json({message:"Service order created successfully!"});
    }catch(err){
        res.json({error:err});
    }
}

const updateServiceOrderStatus = async (req, res) => {
    const { serviceorderId } = req.params; 
    const { status } = req.body;
  
    try {
      const serviceOrder = await ServiceOrder.findById(serviceorderId); 
  
      if (!serviceOrder) {
        return res.status(404).json({ error: 'Service order not found' });
      }
  
      serviceOrder.status = status;
      await serviceOrder.save();
  
      res.json(serviceOrder);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  const getServiceOrders = async (req, res) => {
    const { buyerid, sellerid, status } = req.body;
    let query = {};
  
    if (buyerid) {
      query.buyerid = buyerid;
    }
  
    if (sellerid) {
      query.sellerid = sellerid;
    }
  
    if (status === 'completed') 
    {
      query.status = 'completed';
    } else 
    {
      query.status = { $ne: 'completed' };
    }
  
    try {
      let serviceOrders;
      
      if (buyerid && !status) 
      {
        serviceOrders = await ServiceOrder.find({ buyerid: buyerid });
      } 
      else if (sellerid && !status) 
      {
        serviceOrders = await ServiceOrder.find({ sellerid: sellerid });
      } 
      else 
      {
        serviceOrders = await ServiceOrder.find(query);
      }
  
      res.json(serviceOrders);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

export {createServiceOrder,updateServiceOrderStatus,getServiceOrders}
  