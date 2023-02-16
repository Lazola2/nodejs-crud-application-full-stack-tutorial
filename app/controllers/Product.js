// import all function from the product model
import {getProducts, getProductById, insertProduct, deleteProductById, updateProductById} from '../models/productModels.js';

// get all products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(results);
    });
}

// get a single product
export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
            return;
        } 
        res.json(results);
    });
}

// create a new product
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(results);
    });
}

// update product
export const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(results);
    });
}

// delete a product
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(results);
    });
}








































