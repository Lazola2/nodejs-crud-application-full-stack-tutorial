// import express
import express from "express";
import bodyParser from "body-parser"; 
  
// import function from controller
// import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";

// import the message middleware
import {message} from '../middleware/message.js'
import { showClients } from "../controllers/clients.js";

// init express router
const router = express.Router();

router.get('/', message,  (req, res) => {
    res.status(200).send({
        message: "Welcome Client"
    })
});

// Get All Product
router.get('/clients', showClients);
  
// Get Single Product
// router.get('/products/:id', showProductById);
  
// // Create New Product
// router.post('/products', bodyParser.json(), createProduct);
  
// // Update Product
// router.put('/products/:id', updateProduct);
  
// // Delete Product
// router.delete('/products/:id', deleteProduct);
  
// export default router
export default router;