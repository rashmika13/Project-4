const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hydrationSchema = new Schema(
  {
    drink: { type: String, required: true },
    numOfDrinks: { type: Number, required: true },
    activity: { type: Schema.Types.ObjectId, ref: "Activity" },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hydration", hydrationSchema);
