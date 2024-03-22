const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema(
  {
    name: {
      text: { type: String, required: true },
    },
    location: {
        lat: { type: Number, required: true },
        long: { type: Number, required: true },
    },
    speciality: {
      text: { type: String, required: true },
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("doctors", DoctorSchema);
