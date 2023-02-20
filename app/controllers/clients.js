// import all function from the product mode
import { getClients } from "../models/clients.js";

// get all products
export const showClients = (req, res) => {
    getClients((err, results) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(results);
    });
}
