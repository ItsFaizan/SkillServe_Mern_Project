import express from 'express';
import { createService, updateService, deleteService, getService } from '../controller/serviceController.js';
import { createServiceOrder, updateServiceOrderStatus, getServiceOrders } from '../controller/serviceOrderController.js';
import  jwt from 'jsonwebtoken';

async function auth(req, res, next) 
{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    await jwt.verify(token, process.env.SECRET_KEY, (err, user) => 
    {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
}

const backendRouter = express.Router();

backendRouter.post('/createservice', auth, createService);
backendRouter.put('/updateservice/:userid',auth, updateService);
backendRouter.delete('/deleteservice/:userid',auth, deleteService);
backendRouter.get('/getservice/:userid', auth, getService);

backendRouter.post('/createserviceorder', auth, createServiceOrder);
backendRouter.put('/updateserviceorderstatus/:serviceorderId', auth, updateServiceOrderStatus);
backendRouter.get('/getserviceorders', auth, getServiceOrders);

export default backendRouter;