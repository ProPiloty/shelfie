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
    }
};