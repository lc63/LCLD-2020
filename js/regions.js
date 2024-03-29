const REGIONS = [
  {
    name: "County totals",
    voterTurnout: "35.53",
    yesVotes: "4780",
    library: "N/A",
    distanceToLibrary: "10.72",
  },
  {
    name: "Waldport",
    voterTurnout: 42.47,
    yesVotes: 54,
    library: "Waldport",
    distanceToLibrary: "0",
  },
  {
    name: "Alsea",
    voterTurnout: 37.86,
    yesVotes: 218,
    library: "Waldport",
    distanceToLibrary: "39.5",
  },
  {
    name: "Seaview",
    voterTurnout: 41.51,
    yesVotes: 282,
    library: "Waldport",
    distanceToLibrary: "8.6",
  },
  {
    name: "Tidewater",
    voterTurnout: 33.39,
    yesVotes: 120,
    library: "Waldport",
    distanceToLibrary: "29.4",
  },
  {
    name: "Yachats",
    voterTurnout: 40.1,
    yesVotes: 132,
    library: "Waldport",
    distanceToLibrary: "11.6",
  },
  {
    name: "Bayview",
    voterTurnout: 50.27,
    yesVotes: 507,
    library: "Waldport",
    distanceToLibrary: "3.9",
  },
  {
    name: "Seal Rock",
    voterTurnout: 43.82,
    yesVotes: 404,
    library: "Waldport",
    distanceToLibrary: "5.1",
  },
  {
    name: "South Beach",
    voterTurnout: 43.57,
    yesVotes: 213,
    library: "Newport",
    distanceToLibrary: "6.6",
  },
  {
    name: "Yaquina",
    voterTurnout: 38.52,
    yesVotes: 146,
    library: "Newport",
    distanceToLibrary: "4.8",
  },
  {
    name: "Agate Beach",
    voterTurnout: 29.51,
    yesVotes: 11,
    library: "Newport",
    distanceToLibrary: "2.8",
  },
  {
    name: "Otter Rock",
    voterTurnout: 49.17,
    yesVotes: 136,
    library: "Newport",
    distanceToLibrary: "8.1",
  },
  {
    name: "Depoe Bay",
    voterTurnout: 41.4,
    yesVotes: 340,
    library: "Driftwood",
    distanceToLibrary: "12.3",
  },
  {
    name: "Fogarty Creek",
    voterTurnout: 40.61,
    yesVotes: 380,
    library: "Driftwood",
    distanceToLibrary: "5.1",
  },
  {
    name: "Kern",
    voterTurnout: 40.41,
    yesVotes: 375,
    library: "Driftwood",
    distanceToLibrary: "15.9",
  },
  {
    name: "Schooner Creek",
    voterTurnout: 34.86,
    yesVotes: 92,
    library: "Driftwood",
    distanceToLibrary: "7.9",
  },
  {
    name: "Sunset West",
    voterTurnout: 39.06,
    yesVotes: 133,
    library: "Driftwood",
    distanceToLibrary: "4.5",
  },
  {
    name: "Sunset East",
    voterTurnout: 24.42,
    yesVotes: 239,
    library: "Driftwood",
    distanceToLibrary: "6.7",
  },
  {
    name: "Rose Lodge",
    voterTurnout: 24.4,
    yesVotes: 156,
    library: "Driftwood",
    distanceToLibrary: "14.7",
  },
  {
    name: "Big Elk",
    voterTurnout: 12.17,
    yesVotes: 10,
    library: "Toledo",
    distanceToLibrary: "30.0",
  },
  {
    name: "Elk City",
    voterTurnout: 29.36,
    yesVotes: 23,
    library: "Toledo",
    distanceToLibrary: "10.4",
  },
  {
    name: "Fruitvale",
    voterTurnout: 34.1,
    yesVotes: 201,
    library: "Toledo",
    distanceToLibrary: "5.8",
  },
  {
    name: "Eddyville",
    voterTurnout: 26.77,
    yesVotes: 82,
    library: "Toledo",
    distanceToLibrary: "13.7",
  },

  {
    name: "Siletz",
    voterTurnout: 25.38,
    yesVotes: 329,
    library: "Siletz",
    distanceToLibrary: "0",
  },
  {
    name: "Rock Creek",
    voterTurnout: 33.44,
    yesVotes: 74,
    library: "Siletz",
    distanceToLibrary: "13.7",
  },
  {
    name: "East Toledo",
    voterTurnout: 31.56,
    yesVotes: 123,
    library: "Toledo",
    distanceToLibrary: "7.0",
  },
];

const LIBS = [
  {
    name: "Newport",
    borrowers: "18,298",
    budget: "$988,444",
    physical: "77,978",
    digital: "76,240",
    hours: "62",
    visits: "160,605",
    checkouts: "344,866",
    programs: "453",
  },
  {
    name: "Toledo",
    borrowers: "2,843",
    budget: "$263,256",
    physical: "38,160",
    digital: "76,240",
    hours: "76,240",
    visits: "15,600",
    checkouts: "55,906",
    programs: "80",
  },
  {
    name: "Waldport",
    borrowers: "4,811",
    budget: "$272,231",
    physical: "26,881",
    digital: "79,691",
    hours: "45",
    visits: "50,909",
    checkouts: "67,772",
    programs: "376",
  },
  {
    name: "Driftwood",
    borrowers: "6,460",
    budget: "$949,680",
    physical: "88,926",
    digital: "76,403",
    hours: "58",
    visits: "128,125",
    checkouts: "177,455",
    programs: "286",
  },
  {
    name: "Siletz",
    borrowers: "2,350",
    budget: "$689,198",
    physical: "19,930",
    digital: "79,691",
    hours: "40",
    visits: "8,365",
    checkouts: "10,914",
    programs: "225",
  },
];
