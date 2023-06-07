import Admin from '../model/adminModel.js';
import User from '../model/userModel.js';
import Service from '../model/serviceModel.js';
import Notification from '../model/notificationModel.js';
import  jwt  from 'jsonwebtoken';

//Creating a HardCoded Admin Object
const createadmin = async (req, res) => {

    try{  
      const newuser=await Admin.create({
          username:"Admin",
          password:"admin123",
      })
      console.log("Admin Created:", newuser);
      res.sendStatus(200);
  
    }catch(error){
      console.log('Error', error);
      res.status(500).send('Cannot Store');
    }
        
};

   // Create a new notification
const sendnotification = async (req, res) => {
  try {
    const { description } = req.body;
    console.log(description)
    const notification = new Notification({ Description:description});
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// GET route to fetch notifications
const getnotifications = async (req, res) => {
  try {
    const notifications = await Notification.find(); // Fetch all notifications

    res.json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


      //admin login
      const adminlogin = async (req, res) => {
        const { username, password } = req.body;
      
        // Find the admin user by username
        const admin = await Admin.findOne({ username });
      
        if(admin.password===password){
            // Generate a JWT token
            const token = jwt.sign({ username: admin.username }, process.env.JWT_KEY, { expiresIn: '1h' });
            console.log(token);
            // Send the token as a response
            res.json({ token });
            
        }
    
  };

  const getusers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        }
    };

    const getsearchservices= async (req, res) => {
        try {
          const { title, description, tags } = req.query;
      
          // Construct the query object based on the provided parameters
          const query = {};
      
          if (title) {
            query.title = title;
          }
      
          if (description) {
            query.description = description;
          }
      
          if (tags) {
            query.tags = { $in: tags.split(',') };
          }
      
          // Find services that match the query
          const services = await Service.find(query);
      
          res.status(200).json(services);
        } catch (error) {
          console.error('Error retrieving services:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
      };
    

      // Create a GET route to retrieve user details by name
    const getsearchusers = async (req, res) => {
        try {
          const name = req.params.name;
      
          // Find users with the given name
          const users = await User.find({ username: name });
      
          res.status(200).json(users);
        } catch (error) {
          console.error('Error retrieving users by name:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
        };




  export {createadmin,sendnotification,getnotifications,adminlogin, getusers, getsearchservices, getsearchusers}