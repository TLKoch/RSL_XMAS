// =====================================================================
//  Scavenger hunt content. Edit this file, then upload it to GitHub.
//  Everything here is readable by anyone who opens the page source,
//  so do not put anything secret in it.
// =====================================================================

const HUNT = {
  title: "Ground Station Waid",
  subtitle: "RS group scavenger hunt · Irchel → Die Waid",

  // Number of groups that can be chosen on the start screen.
  groups: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"],

  // Shown before the first station.
  intro:
    "Eight stations lie between Irchel and the ground station at Die Waid. " +
    "At each station, answer one multiple-choice question. Every answer carries a number: " +
    "collect them all. After answering, you get the clue to the next station. " +
    "You cannot change an answer once it is locked in, so discuss as a team first.",

  // Clue to the first station (shown after the intro).
  firstClue: "TODO: clue to station 1 (suggested: Irchelpark, by the pond).",

  // Shown at the very end, above the list of answers.
  finale:
    "All eight stations done. Head to Restaurant Die Waid, Waidbadstrasse 45, " +
    "and try your lock code. If the lock stays shut, one of your answers was wrong: " +
    "check your list below with the other groups.",

  // true: the end screen also shows the correct answer for each question.
  revealCorrect: false,

  // The lock code shown at the end. "stations" lists which stations' numbers
  // form the code, in order (1 = first station). Use all eight for an
  // 8-digit code, or e.g. [2, 4, 6, 8] for a 4-digit lock.
  // With the correct answers below, all eight stations give 7 3 6 1 4 8 5 2.
  lock: {
    label: "Lock code",
    stations: [1, 2, 3, 4, 5, 6, 7, 8]
  },

  // Each station: a name (shown once the team has arrived), the question,
  // the options with their numbers, the correct option (only used if
  // revealCorrect is true), and the clue to the NEXT station.
  stations: [
    {
      name: "Station 1 · Irchelpark (suggested)",
      question: "Which two rivers meet at the Platzspitz, behind Zürich main station?",
      options: [
        { text: "Limmat and Glatt", number: 4 },
        { text: "Limmat and Sihl", number: 7 },
        { text: "Sihl and Reuss", number: 2 },
        { text: "Limmat and Aare", number: 9 }
      ],
      correct: 1,
      nextClue: "TODO: clue to station 2 (suggested: Milchbuck)."
    },
    {
      name: "Station 2 · Milchbuck (suggested)",
      question: "In the Swiss LV95 grid, the reference point E 2 600 000 / N 1 200 000 lies in which city?",
      options: [
        { text: "Zürich", number: 5 },
        { text: "Lucerne", number: 8 },
        { text: "Bern", number: 3 },
        { text: "Neuchâtel", number: 1 }
      ],
      correct: 2,
      nextClue: "TODO: clue to station 3 (suggested: Bucheggplatz)."
    },
    {
      name: "Station 3 · Bucheggplatz (suggested)",
      question: "Where is the famous Keeling curve of atmospheric CO₂ measured?",
      options: [
        { text: "Mauna Loa", number: 6 },
        { text: "Jungfraujoch", number: 2 },
        { text: "South Pole", number: 8 },
        { text: "Greenland", number: 0 }
      ],
      correct: 0,
      nextClue: "TODO: clue to station 4 (suggested: Guggach)."
    },
    {
      name: "Station 4 · Guggach (suggested)",
      question: "Which river carries Swiss water towards the Black Sea?",
      options: [
        { text: "Rhine", number: 3 },
        { text: "Rhône", number: 7 },
        { text: "Ticino", number: 5 },
        { text: "Inn", number: 1 }
      ],
      correct: 3,
      nextClue: "TODO: clue to station 5 (suggested: Wibichstrasse)."
    },
    {
      name: "Station 5 · Wibichstrasse (suggested)",
      question: "Roughly where does the red edge of vegetation lie?",
      options: [
        { text: "450–500 nm", number: 9 },
        { text: "700–750 nm", number: 4 },
        { text: "550–600 nm", number: 6 },
        { text: "1550–1650 nm", number: 2 }
      ],
      correct: 1,
      nextClue: "TODO: clue to station 6 (suggested: Rosengartenstrasse)."
    },
    {
      name: "Station 6 · Rosengartenstrasse (suggested)",
      question: "Which Zürich church has the largest church clock face in Europe?",
      options: [
        { text: "Grossmünster", number: 1 },
        { text: "Fraumünster", number: 3 },
        { text: "Predigerkirche", number: 0 },
        { text: "St. Peter", number: 8 }
      ],
      correct: 3,
      nextClue: "TODO: clue to station 7 (suggested: Röschibachplatz / Wipkingen station)."
    },
    {
      name: "Station 7 · Röschibachplatz (suggested)",
      question: "Which is the largest glacier in the Alps?",
      options: [
        { text: "Great Aletsch Glacier", number: 5 },
        { text: "Rhône Glacier", number: 9 },
        { text: "Gorner Glacier", number: 4 },
        { text: "Morteratsch Glacier", number: 7 }
      ],
      correct: 0,
      nextClue: "TODO: clue to station 8 (suggested: Aussichtspunkt Waid)."
    },
    {
      name: "Station 8 · Aussichtspunkt Waid (suggested)",
      question: "How many spectral bands does the Sentinel-2 MultiSpectral Instrument have?",
      options: [
        { text: "9", number: 6 },
        { text: "11", number: 0 },
        { text: "13", number: 2 },
        { text: "15", number: 5 }
      ],
      correct: 2,
      nextClue: "" // last station: the finale text above is shown instead
    }
  ]
};
