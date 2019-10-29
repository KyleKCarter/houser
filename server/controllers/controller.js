getHouses = (req, res) => {
    const db = req.app.get('db');
    db.get_houses().then(houses => {
        res.status(200).json(houses)
    }).catch(error => {
        console.log(error)
        res.status(500).json("Database having issues.")
    })
;}

addHouse = (req, res) => {
    const db = req.app.get ('db');
    const { name, address, city, state, zipcode } = req.body;
    db.add_house( name, address, city, state, zipcode ).then(() => {
        res.sendStatus(200)
    }).catch(error => {
        console.log(error)
        res.status(500).json("Database having issues.");
    })
};

module.exports = {
    getHouses,
    addHouse
}