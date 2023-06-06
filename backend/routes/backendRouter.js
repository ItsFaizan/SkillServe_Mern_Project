import express from 'express';
import { createService, updateService, deleteService, getService, findService } from '../controller/serviceController.js';
import { createServiceOrder, updateServiceOrderStatus, getServiceOrders } from '../controller/serviceOrderController.js';
import { login } from '../controller/authController.js';
import { verifyToken } from '../middleware/jwt.js';


const backendRouter = express.Router();

backendRouter.post('/userlogin', login);

backendRouter.post('/createservice', verifyToken, createService);
backendRouter.put('/updateservice',verifyToken, updateService);
backendRouter.delete('/deleteservice',verifyToken, deleteService);
backendRouter.get('/getservice',verifyToken,  getService);
backendRouter.post('/findservice',verifyToken,  findService)

backendRouter.post('/createserviceorder',verifyToken,  createServiceOrder);
backendRouter.put('/updateserviceorderstatus/:serviceorderId',verifyToken,  updateServiceOrderStatus);
backendRouter.get('/getserviceorders',verifyToken,  getServiceOrders);

export default backendRouter;