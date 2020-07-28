const Activity = require("../models/activity");

module.exports = {
  index,
  create,
  show,
  delete: deleteOne,
  update,
};

function index(req, res) {
  Activity.find()

    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json("Error:" + err));
  console.log(Activity);
}

function create(req, res) {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newActivity = new Activity({
    username,
    description,
    duration,
    date,
  });

  newActivity
    .save()
    .then(() => res.json("Activity added"))
    .catch((err) => res.status(400).json("Error:" + err));
}

function show(req, res) {
  Activity.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json("Error:" + err));
}

function deleteOne(req, res) {
  Activity.findByIdAndDelete(req.params.id)
    .then(() => res.json("Activity deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
}

function update(req, res) {
  Activity.findById(req.params.id)
    .then((activity) => {
      activity.username = req.body.username;
      activity.description = req.body.description;
      activity.duration = Number(req.body.duration);
      activity.date = Date.parse(req.body.date);

      activity
        .save()
        .then(() => res.json("Exercise updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
}
