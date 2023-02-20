// import connection
import db from '../config/database.js'
import {hash, compare, hashSync} from 'bcrypt'

// get all products
export const getClients = result => {
    db.query('SELECT * FROM Clients', (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        } 
        result(null, results);
    });
}

// insert Product to Database
export const insertClient = (data, result) => {
    db.query('INSERT INTO Clients SET ?', [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        result(null, results);
    });
}

// // get single product
// export const getProductById = (id, result) => {
//     db.query('SELECT * FROM product WHERE product_id = ?', [id], (err, results) => {
//         if (err) {
//             console.log(err);
//             result(err, null);
//             return;
//         }
//         result(null, results[0]);
//     });
// }


// // Update Product to Database
// export const updateProductById = (data, id, result) => {
//     db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }
  
// // Delete Product to Database
// export const deleteProductById = (id, result) => {
//     db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }