// import connection
import db from '../config/database.js'

// get all products
export const getProducts = result => {
    db.query('SELECT * FROM product', (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        } 
        result(null, results);
    });
}

// get single product
export const getProductById = (id, result) => {
    db.query('SELECT * FROM product WHERE product_id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        result(null, results[0]);
    });
}

// insert Product to Database
export
















