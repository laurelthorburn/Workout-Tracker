const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//missing date

const WorkoutSchema = new Schema({
  name: {
    type: String,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
