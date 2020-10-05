var session = {
  start: null,
  end: null,
  preworkout: {
    timeBefore: null,
    mealComponents: []
  },
  postWorkout: {
    timeAfter: null,
    mealComponents: []
  },
  workouts: []
}

var workout = {
  name: "",
  focus: "speed|strength|endurance|mobility",
  components: []
}

var component = {
  exercise: {},
  weight: null,
  weightUnits: "lbs|kg",
  reps: null,
  distance: null,
  distanceUnits: "mi|km|m",
  time: null,
  benchmarks: ["weight|reps|rounds|roundsReps|distance|time"],
  rounds: null
}

var exercise = {
  name: "",
  focus: "",
  measures: ["weight|reps|distance|time"]
}

var meal = {
  date: null,
  time: null,
  items: []
}

var foodItem = {
  name: "",
  macros: ["protein|fat|carb"],
  supplements: ["stimulant|vitamin|..."],
  qtyMeasure: "calories|grams|lbs|oz|cups|liters|scoops|pills|packs",
  qty: null
}