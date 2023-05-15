import express from 'express';
import { createService, updateService, deleteService, getService } from '../controller/serviceController.js';
import { createServiceOrder, updateServiceOrderStatus, getServiceOrders } from '../controller/serviceOrderController.js';

const backendRouter = express.Router();

backendRouter.post('/createservice', createService);
backendRouter.put('/updateservice/:userid', updateService);
backendRouter.delete('/deleteservice/:userid', deleteService);
backendRouter.get('/getservice/:userid', getService);

backendRouter.post('/createserviceorder', createServiceOrder);
backendRouter.put('/updateserviceorderstatus/:serviceorderId', updateServiceOrderStatus);
backendRouter.post('/getserviceorders', getServiceOrders);

export default backendRouter;