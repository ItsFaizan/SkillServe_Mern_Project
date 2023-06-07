import express from 'express';
import { createService, updateService, deleteService, getService, findService, checkservice } from '../controller/serviceController.js';
import { createServiceOrder, getServiceOrders, getSellerServiceOrders, manageServiceOrder, completeServiceOrder, intent  } from '../controller/serviceOrderController.js';
import { login } from '../controller/authController.js';
import { verifyToken } from '../middleware/jwt.js';


const backendRouter = express.Router();

backendRouter.post('/userlogin', login);

backendRouter.post('/createservice', verifyToken, createService);
backendRouter.put('/updateservice',verifyToken, updateService);
backendRouter.delete('/deleteservice',verifyToken, deleteService);
backendRouter.get('/getservice',verifyToken,  getService);
backendRouter.post('/findservice',verifyToken,  findService)
backendRouter.get('/checkservice',verifyToken,  checkservice)

backendRouter.post('/createserviceorder',verifyToken,  createServiceOrder);
backendRouter.put('/manageserviceorder',verifyToken,  manageServiceOrder);
backendRouter.put('/completeserviceorder',verifyToken,  completeServiceOrder);
backendRouter.get('/getsellerserviceorders',verifyToken,  getSellerServiceOrders);
backendRouter.get('/getserviceorders',verifyToken,  getServiceOrders);
backendRouter.post('/create-payment-intent/:id', verifyToken, intent);

export default backendRouter;