const Doctor = require("../models/DoctorModel");

const mentalHealthDoctorsInMumbai =[
  {
    name: "Dr. Nisha Sharma",
    location: {
      lat: 19.075983,
      long: 72.877655
    },
    speciality: "Psychiatrist"
  },
  {
    name: "Dr. Rahul Mehta",
    location: {
      lat: 19.119219,
      long: 72.882743
    },
    speciality: "Clinical Psychologist"
  },
  {
    name: "Dr. Ananya Desai",
    location: {
      lat: 19.060691,
      long: 72.836524
    },
    speciality: "Mental Health Counselor"
  },
  {
    name: "Dr. Priya Joshi",
    location: {
      lat: 19.022954,
      long: 72.854956
    },
    speciality: "Psychotherapist"
  },
  {
    name: "Dr. Vivek Shah",
    location: {
      lat: 19.124485,
      long: 72.865746
    },
    speciality: "Clinical Psychiatrist"
  },
  {
    name: "Dr. Aarti Jain",
    location: {
      lat: 19.056859,
      long: 72.834681
    },
    speciality: "Child Psychologist"
  },
  {
    name: "Dr. Sanjay Patel",
    location: {
      lat: 19.109771,
      long: 72.881855
    },
    speciality: "Neuropsychiatrist"
  }
];

module.exports.getDoctos = async (req, res, next) => {
    try {
        
        console.log("called")
        res.send(mentalHealthDoctorsInMumbai);
      } catch (ex) {
        next(ex);
      }
};