import Service from '../model/serviceModel.js'

const createService = async (req,res)=>{
    const {id,title,description,price,tags} = req.body;
    const service = new Service({
        userid : id,
        title,
        description,
        price,
        tags
    })
    try{
        await service.save();
        res.json("message: Service created successfully!");
    }catch(err){
        console.log(err);
    }
}

const updateService = async (req, res) => {
    const { id } = req.body;
    const { title, description, price, tags } = req.body;
  
    try {
      const updatedService = await Service.findOneAndUpdate(
        { userid: id },
        { title, description, price, tags },
        { new: true }
      );
  
      if (updatedService) {
        res.json({ message: 'Service Updated successfully' });
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to update service' });
    }
  };


  const deleteService = async (req, res) => {
    const { id } = req.body;
  
    try {
      const deletedService = await Service.findOneAndDelete({ userid: id });
  
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
    const { id } = req.body;
  
    try {
      const service = await Service.findOne({userid:id});
  
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

  const findService = async (req, res) => {

    try {
      const { input, filters } = req.body;
  
      if (filters.every((filter) => !filter)) {
        return res.status(310).json({ message: 'No search criteria was selected' });
      }
  
      let query = {};
  
      if (filters.includes('title')) {
        query.title = { $regex: input, $options: 'i' };
      }
  
      if (filters.includes('description')) {
        query.description = { $regex: input, $options: 'i' };
      }
  
      if (filters.includes('price')) {
        query.price = parseFloat(input);
      }
  
      if (filters.includes('tags')) {
        query.tags = { $in: input };
      }
  
      const searchResults = await Service.find(query);
  
      res.json(searchResults);
    } catch (error) {
      console.error('Error occurred during search:', error);
      res.status(500).json({ error: 'An error occurred during search' });
    }

  };
  
export {createService,updateService,deleteService,getService,findService}
  
  