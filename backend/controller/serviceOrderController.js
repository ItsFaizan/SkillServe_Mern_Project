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



  const getServiceOrders = async (req, res) => {
    const userid = req.userid;
    try {
      
      const serviceOrders = await ServiceOrder.find({ buyerid: userid });
  
      res.json(serviceOrders);
    } catch (err) {
      res.json({ error: err });
    }
  };

  const getSellerServiceOrders = async (req, res) => {
    const userid = req.userid;
    try {

      const serviceOrders = await ServiceOrder.find({ sellerid: userid });

      res.json(serviceOrders);
    } catch (err) {
      res.json({ error: err });
    }
  };

  const manageServiceOrder = async (req, res) => {
    const { serviceid, status } = req.body;

    try {

      await ServiceOrder.updateOne(
        { _id: serviceid },
        { $set: { status: status } } 
      );

      res.json({ message: 'Service order updated successfully' });
    } catch (err) {
      res.json({ error: err });
    }
  };
  
  const completeServiceOrder = async (req, res) => {

    const { serviceid, status, response } = req.body;

    console.log(serviceid, status, response);

    try {

      await ServiceOrder.updateOne(
        { _id: serviceid },
        { $set: { status: status, response: response } }
      );
      

      res.json({ message: 'Service order completed successfully' });

    } catch (err) {
      res.json({ error: err });
    }
  };


export {createServiceOrder,getServiceOrders, getSellerServiceOrders, manageServiceOrder, completeServiceOrder}
  