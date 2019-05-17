module.exports = {
    getInventory: (req, res, next) => {
        const database = req.app.get('db');
        database.get_inventory()
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
                    console.log(err);
            });
    },
    addProduct: (req, res, next) => {
        const database = req.app.get('db');
        const { name, price, image_url } = req.body;
        database.create_product({name, price, image_url})
            .then(() => {
                res.sendStatus(200);
            })
            .catch((err) => {
                res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
                    console.log(err);
            });
    },
    deleteProduct: (req, res, next) => {
        const database = req.app.get('db');
        const { id } = req.params;
        database.delete_product_by_id({ id })
            .then(() => {
                res.sendStatus(200);
            })
            .catch((err) => {
                res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
                    console.log(err);
            });
    },
    updateProduct: (req, res, next) => {
        const database = req.app.get('db');
        const { id } = req.params;
        const { name, price, image_url } = req.body;
        database.update_product_by_id({id, name, price, image_url})
            .then(() => {
                res.sendStatus(200);
            })
            .catch((err) => {
                res.status(500).send({errorMessage: 'Something went wrong! Check the console'});
                    console.log(err);
            });
    }
};