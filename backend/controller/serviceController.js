import Service from '../model/serviceModel.js'

const createService = async (req,res)=>{
    const {userid,title,description,price,tags} = req.body;
    const service = new Service({
        userid,
        title,
        description,
        price,
        tags
    })
    try{
        await service.save();
        res.json(service);
    }catch(err){
        console.log(err);
    }
}

const updateService = async (req, res) => {
    const { userid } = req.params;
    const { title, description, price, tags } = req.body;
  
    try {
      const updatedService = await Service.findOneAndUpdate(
        { userid: userid },
        { title, description, price, tags },
        { new: true }
      );
  
      if (updatedService) {
        res.json(updatedService);
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to update service' });
    }
  };


  const deleteService = async (req, res) => {
    const { userid } = req.params;
  
    try {
      const deletedService = await Service.findOneAndDelete({ userid: userid });
  
      if (deletedService) {
        res.json({ message: 'Service deleted successfully' });
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete service' });
    }
  };


  const getService = async (req, res) => {
    const { userid } = req.params;
  
    try {
      const service = await Service.findOne({userid:userid});
  
      if (service) {
        res.json(service);
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve service' });
    }
  };
  
export {createService,updateService,deleteService,getService}
  
  