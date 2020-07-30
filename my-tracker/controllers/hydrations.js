const Hydration = require("../models/hydration");

module.exports = {
  index,
  create,
  show,
  delete: deleteOne,
  update,
};

function index(req, res) {
  Hydration.find()

    .then((hydrations) => res.json(hydrations))
    .catch((err) => res.status(400).json("Error:" + err));
  console.log(Hydration);
}

function create(req, res) {
  const drinks = req.body.drinks;
  const numOfDrinks = Number(req.body.numOfDrinks);

  const newHydration = new Hydration({
    drinks,
    numOfDrinks,
  });

  newHydration
    .save()
    .then(() => res.json("Hydration added"))
    .catch((err) => res.status(400).json("Error:" + err));
}

function show(req, res) {
  Hydration.findById(req.params.id)
    .then((hydration) => res.json(hydration))
    .catch((err) => res.status(400).json("Error:" + err));
}

function deleteOne(req, res) {
  Hydration.findByIdAndDelete(req.params.id)
    .then(() => res.json("Hydration deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
}

function update(req, res) {
  Hydration.findById(req.params.id)
    .then((hydration) => {
      hydration.drinks = req.body.drinks;
      hydration.numOfDrinks = Number(req.body.numOfDrinks);

      hydration
        .save()
        .then(() => res.json("Hydration updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
}
