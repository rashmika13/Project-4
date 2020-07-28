const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

// Ensure that initials are uppercase & not longer than 3 characters
// activitySchema.pre("save", function (next) {
//   this.initials = this.initials.substr(0, 3).toUpperCase();
//   next();
// });

module.exports = mongoose.model("Activity", activitySchema);
