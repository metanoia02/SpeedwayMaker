const leaguesResponse =
  [
    {
      id: 1,
      name: "Premiership",
      ruleset: {
        id: 1,
        superHeat: true,
        scores: "3210"
      }
    },
    {
      id: 2,
      name: "Championship",
      ruleset: {
        id: 1,
        superHeat: true,
        scores: "3210"
      }
    },
    {
      id: 3,
      name: "National Development League",
      ruleset: {
        id: 2,
        superHeat: false,
        scores: "3210"
      }
    }
  ];

const teamsResponse =
  [
    {
      id: 1,
      name: "Belle Vue Aces",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/belle_vue_95th_anniversary.png",
      leagueId: 1,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 2,
      name: "Ipswich Witches",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/ipswich2022_300x300.png",
      leagueId: 1,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 3,
      name: "King’s Lynn Stars",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/KLYNN-TRANS-300-x-300-1.png",
      leagueId: 1,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 4,
      name: "Leicester Lions",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/LIONS-TRANS-300-x-300-2.png",
      leagueId: 1,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 5,
      name: "Peterborough Panthers",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/02/peterborough2023_300x300.png",
      leagueId: 1,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 6,
      name: "Sheffield Tigers",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/SHEFFIELD-TRANS-300-x-300-1.png",
      leagueId: 1,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 7,
      name: "Wolverhampton Wolves",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/02/wolverhampton23_300x300.png",
      leagueId: 1,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 8,
      name: "Berwick Bandits",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/BERWICK-TRANS-300-x-300-1.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 9,
      name: "Birmingham Brummies",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/BIRMINGHAM-TRANS-300-x-300-v2-1.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 10,
      name: "Edinburgh Monarchs",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/edinburgh22_300x300.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 11,
      name: "Glasgow Tigers",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/GLASGOW-TRANS-340-x-340-1-300x300.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 12,
      name: "Oxford Cheetahs",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/10/oxford_cheetahs_300x300.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 13,
      name: "Plymouth Gladiators",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/plymouth22_300x300.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 14,
      name: "Poole Pirates",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/POOLE-TRANS-300-x-300-1.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 15,
      name: "Redcar Bears",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/REDCAR-TRANS-300-x-300-1.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 16,
      name: "Scunthorpe Scorpions",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/SCUNTHORPE-TRANS-300-x-300_.png",
      leagueId: 2,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 17,
      name: "Belle Vue Colts",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/bellevuecolts23_300x300.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 18,
      name: "Berwick Bullets",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/11/BERWICKBULLETSTRANS-340-x-300-v2-300x300-1.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 19,
      name: "Edinburgh Academy",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/01/monarchs_academy_300x300.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 20,
      name: "Kent Royals",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/KENTROYALSTRANS-300-x-300-1.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 21,
      name: "Leicester Lion Cubs",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/LIONS-TRANS-300-x-300-2.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 22,
      name: "Mildenhall Fen Tigers",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/04/MILDENHALLTRANS-300-x-300-1.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 23,
      name: "Oxford Chargers",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/11/oxford_chargers_300x300.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    },
    {
      id: 24,
      name: "Workington Comets",
      logoUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/02/workington_2023_300x300.png",
      leagueId: 3,
      league: null,
      teamRiders: [],
      riders: []
    }
  ];

const teamRidersResponse =
  [
    {
      teamId: 1,
      position: 1,
      rider: {
        id: 28,
        firstName: "Daniel",
        lastName: "Bewley",
        nickname: "Dan",
        dob: "20 May 1999",
        region: "Maryport, Cumbria",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/bewley_dan23-300x300.jpg"
      }
    },
    {
      teamId: 1,
      position: 2,
      rider: {
        id: 93,
        firstName: "Brady",
        lastName: "Kurtz",
        nickname: "",
        dob: "27 September 1996",
        region: "Cowra, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/kurtz_brady21-300x300.jpg"
      }
    },
    {
      teamId: 1,
      position: 3,
      rider: {
        id: 99,
        firstName: "Jaimon",
        lastName: "Lidsey",
        nickname: "",
        dob: "27 February 1999",
        region: "Mildura, Victoria, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/lidsey_jaimon_worldu21champ-300x300.jpg"
      }
    },
    {
      teamId: 1,
      position: 4,
      rider: {
        id: 180,
        firstName: "Charles",
        lastName: "Wright",
        nickname: "",
        dob: "26 October 1988",
        region: "Stockport, Cheshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/wright_charles21_2-300x300.jpg"
      }
    },
    {
      teamId: 1,
      position: 5,
      rider: {
        id: 36,
        firstName: "Thomas",
        lastName: "Brennan",
        nickname: "Tom",
        dob: "2 July 2001",
        region: "Swindon, Wiltshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/brennan_tom23_2-300x300.jpg"
      }
    },
    {
      teamId: 1,
      position: 6,
      rider: {
        id: 31,
        firstName: "Norick",
        lastName: "Blodorn",
        nickname: "",
        dob: "1 June 2004",
        region: "Neumunster, Germany",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/blodorn_norick22-300x300.jpg"
      }
    },
    {
      teamId: 1,
      position: 7,
      rider: {
        id: 111,
        firstName: "Jake",
        lastName: "Mulford",
        nickname: "",
        dob: "4 March 2004",
        region: "Norwich, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/mulford_jake22-300x300.jpg"
      }
    },
    {
      teamId: 4,
      position: 1,
      rider: {
        id: 62,
        firstName: "Max",
        lastName: "Fricke",
        nickname: "",
        dob: "29 March 1996",
        region: "Mansfield, Vic, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/fricke_max23-300x300.jpg"
      }
    },
    {
      teamId: 4,
      position: 2,
      rider: {
        id: 97,
        firstName: "Richard",
        lastName: "Lawson",
        nickname: "Rich",
        dob: "14 February 1986",
        region: "Whitehaven, Cumbria",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/06/lawson_richard21_2-300x300.jpg"
      }
    },
    {
      teamId: 4,
      position: 3,
      rider: {
        id: 66,
        firstName: "Christopher",
        lastName: "Harris",
        nickname: "Chris",
        dob: "28 November 1982",
        region: "Truro, Cornwall",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/harris_chris23-300x300.jpg"
      }
    },
    {
      teamId: 4,
      position: 4,
      rider: {
        id: 108,
        firstName: "Nicholas",
        lastName: "Morris",
        nickname: "Nick",
        dob: "7 June 1994",
        region: "Canberra, Australian Capital Territory, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/morris_nick21-300x300.jpg"
      }
    },
    {
      teamId: 4,
      position: 5,
      rider: {
        id: 148,
        firstName: "Justin",
        lastName: "Sedgmen",
        nickname: "",
        dob: "17 February 1992",
        region: "Mildura, Victoria, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/sedgmen_justin21_2-300x300.jpg"
      }
    },
    {
      teamId: 4,
      position: 6,
      rider: {
        id: 15,
        firstName: "Jake",
        lastName: "Allen",
        nickname: "",
        dob: "11 August 1995",
        region: "Brisbane, Queensland, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/allen_jake21-300x300.jpg"
      }
    },
    {
      teamId: 4,
      position: 7,
      rider: {
        id: 82,
        firstName: "Drew",
        lastName: "Kemp",
        nickname: "",
        dob: "11 August 2002",
        region: "Osnabruck, Germany",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/06/kemp_drew23-300x300.jpg"
      }
    },
    {
      teamId: 2,
      position: 1,
      rider: {
        id: 50,
        firstName: "Jason",
        lastName: "Doyle",
        nickname: "",
        dob: "6 October 1985",
        region: "Newcastle, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/doyle_jason22-300x300.jpg"
      }
    },
    {
      teamId: 2,
      position: 2,
      rider: {
        id: 145,
        firstName: "Emil",
        lastName: "Sayfutdinov",
        nickname: "",
        dob: "26 October 1989",
        region: "Salavat, Russia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/sayfutdinov_emil23_2-300x300.jpg"
      }
    },
    {
      teamId: 2,
      position: 3,
      rider: {
        id: 88,
        firstName: "Daniel",
        lastName: "King",
        nickname: "Danny",
        dob: "14 August 1986",
        region: "Maidstone, Kent",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/king_danny21_4-300x300.jpg"
      }
    },
    {
      teamId: 2,
      position: 4,
      rider: {
        id: 139,
        firstName: "Erik",
        lastName: "Riss",
        nickname: "",
        dob: "13 September 1995",
        region: "Memmingen, Germany",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/riss_erik21_5-300x300.jpg"
      }
    },
    {
      teamId: 2,
      position: 5,
      rider: {
        id: 74,
        firstName: "Danyon",
        lastName: "Hume",
        nickname: "",
        dob: "25 July 1996",
        region: "Wendover, Buckinghamshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/06/hume_danyon21-1-300x300.jpg"
      }
    },
    {
      teamId: 2,
      position: 6,
      rider: {
        id: 137,
        firstName: "Keynan",
        lastName: "Rew",
        nickname: "",
        dob: "2 April 2003",
        region: "Queensland, Australia,",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/rew_keynan23_2-300x300.jpg"
      }
    },
    {
      teamId: 2,
      position: 7,
      rider: {
        id: 159,
        firstName: "Daniel",
        lastName: "Thompson",
        nickname: "Dan",
        dob: "22 April",
        region: "2004, Nuneaton, Warwickshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/thompson_dan23-300x300.jpg"
      }
    },
    {
      teamId: 3,
      position: 1,
      rider: {
        id: 94,
        firstName: "Artem",
        lastName: "Laguta",
        nickname: "",
        dob: "13 November 1990",
        region: "Vladivostok, Russia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/06/laguta_artem23-300x300.jpg"
      }
    },
    {
      teamId: 3,
      position: 2,
      rider: {
        id: 124,
        firstName: "Michael",
        lastName: "Toft",
        nickname: "",
        dob: "26 July 1990",
        region: "Odense, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/palm_toft_michael23-300x300.jpg"
      }
    },
    {
      teamId: 3,
      position: 3,
      rider: {
        id: 91,
        firstName: "Nicolai",
        lastName: "Klindt",
        nickname: "",
        dob: "29 December 1988",
        region: "Outrup, Vestjylland, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/07/klindt_nicolai19-300x300.jpg"
      }
    },
    {
      teamId: 3,
      position: 4,
      rider: {
        id: 76,
        firstName: "Frederik",
        lastName: "Jakobsen",
        nickname: "",
        dob: "1 May 1998",
        region: "Ejby, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/08/jakobsen_frederik18-300x300.jpg"
      }
    },
    {
      teamId: 3,
      position: 5,
      rider: {
        id: 79,
        firstName: "Thomas",
        lastName: "Jorgensen",
        nickname: "",
        dob: "14 July 1992",
        region: "Aalborg, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/jorgensen_thomas21-300x300.jpg"
      }
    },
    {
      teamId: 3,
      position: 6,
      rider: {
        id: 161,
        firstName: "Kye",
        lastName: "Thomson",
        nickname: "",
        dob: "5 October 1998",
        region: "Yandina, Queensland, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/thomson_kye21-300x300.jpg"
      }
    },
    {
      teamId: 3,
      position: 7,
      rider: {
        id: 52,
        firstName: "Jason",
        lastName: "Edwards",
        nickname: "",
        dob: "14 September 2002",
        region: "Billericay, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/edwards_jason23_2-300x300.jpg"
      }
    },
    {
      teamId: 7,
      position: 1,
      rider: {
        id: 102,
        firstName: "Samuel",
        lastName: "Masters",
        nickname: "Sam",
        dob: "23 May 1991",
        region: "Newcastle, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/masters_sam21-300x300.jpg"
      }
    },
    {
      teamId: 7,
      position: 2,
      rider: {
        id: 146,
        firstName: "Rory",
        lastName: "Schlein",
        nickname: "",
        dob: "1 September 1984",
        region: "Darwin, Northern Territory, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/schlein_rory23_3-300x300.jpg"
      }
    },
    {
      teamId: 7,
      position: 3,
      rider: {
        id: 26,
        firstName: "Luke",
        lastName: "Becker",
        nickname: "",
        dob: "11 February 1999",
        region: "Brentwood, California, USA",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/becker_luke21-300x300.jpg"
      }
    },
    {
      teamId: 7,
      position: 4,
      rider: {
        id: 179,
        firstName: "Steven",
        lastName: "Worrall",
        nickname: "Steve",
        dob: "23 September 1991",
        region: "St Helens, Merseyside",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/06/worrall_steve21_2-300x300.jpg"
      }
    },
    {
      teamId: 7,
      position: 5,
      rider: {
        id: 49,
        firstName: "Ryan",
        lastName: "Douglas",
        nickname: "",
        dob: "9 September 1993",
        region: "Brisbane, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/douglas_ryan21_2-300x300.jpg"
      }
    },
    {
      teamId: 7,
      position: 6,
      rider: {
        id: 46,
        firstName: "Zach",
        lastName: "Cook",
        nickname: "",
        dob: "15 July 1999",
        region: "Cowra, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/cook_zach22-300x300.jpg"
      }
    },
    {
      teamId: 7,
      position: 7,
      rider: {
        id: 58,
        firstName: "Leon",
        lastName: "Flint",
        nickname: "",
        dob: "22 February 2003",
        region: "Ashington, Northumberland",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/flint_leon21-300x300.jpg"
      }
    },
    {
      teamId: 5,
      position: 1,
      rider: {
        id: 75,
        firstName: "Niels-Kristian",
        lastName: "Iversen",
        nickname: "",
        dob: "20 June 1982",
        region: "Esbjerg, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/iversen_nielsk23-300x300.jpg"
      }
    },
    {
      teamId: 5,
      position: 2,
      rider: {
        id: 178,
        firstName: "Richie",
        lastName: "Worrall",
        nickname: "",
        dob: "23 September 1991",
        region: "St Helens, Merseyside",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/worrall_richie21-300x300.jpg"
      }
    },
    {
      teamId: 5,
      position: 3,
      rider: {
        id: 23,
        firstName: "Benjamin",
        lastName: "Basso",
        nickname: "",
        dob: "2 July 2001",
        region: "Odense, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/basso_benjamin23_2-300x300.jpg"
      }
    },
    {
      teamId: 5,
      position: 4,
      rider: {
        id: 44,
        firstName: "Benjamin",
        lastName: "Cook",
        nickname: "Ben",
        dob: "27 October 1997",
        region: "Cowra, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/cook_ben22-300x300.jpg"
      }
    },
    {
      teamId: 5,
      position: 5,
      rider: {
        id: 157,
        firstName: "Vadim",
        lastName: "Tarasenko",
        nickname: "",
        dob: "12 May 1994",
        region: "Sukhodol, Russia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/05/tarasenko_vadim-300x300.jpg"
      }
    },
    {
      teamId: 5,
      position: 6,
      rider: {
        id: 16,
        firstName: "Hans",
        lastName: "Andersen",
        nickname: "",
        dob: "3 November 1980",
        region: "Odense, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/07/andersen_hans21_2-1-300x300.jpg"
      }
    },
    {
      teamId: 5,
      position: 7,
      rider: {
        id: 78,
        firstName: "Jordan",
        lastName: "Jenkins",
        nickname: "",
        dob: "2 August 2001",
        region: "Norwich, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/jenkins_jordan22_2-300x300.jpg"
      }
    },
    {
      teamId: 6,
      position: 1,
      rider: {
        id: 112,
        firstName: "Tobiasz",
        lastName: "Musielak",
        nickname: "",
        dob: "18 August 1993",
        region: "Leszno, Poland",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/11/musielak_tobiasz22-300x300.jpg"
      }
    },
    {
      teamId: 6,
      position: 2,
      rider: {
        id: 70,
        firstName: "Jack",
        lastName: "Holder",
        nickname: "",
        dob: "23 March 1996",
        region: "Appin, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/holder_jack23-300x300.jpg"
      }
    },
    {
      teamId: 6,
      position: 3,
      rider: {
        id: 53,
        firstName: "Adam",
        lastName: "Ellis",
        nickname: "",
        dob: "21 March 1996",
        region: "Marmande, France",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/08/ellis_adam21-300x300.jpg"
      }
    },
    {
      teamId: 6,
      position: 4,
      rider: {
        id: 132,
        firstName: "Joshua",
        lastName: "Pickering",
        nickname: "Josh",
        dob: "30 November 1996",
        region: "Heddon Greta, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/pickering_josh22_2-300x300.jpg"
      }
    },
    {
      teamId: 6,
      position: 5,
      rider: {
        id: 85,
        firstName: "Lewis",
        lastName: "Kerr",
        nickname: "",
        dob: "25 March 1990",
        region: "King’s Lynn, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/kerr_lewis21-300x300.jpg"
      }
    },
    {
      teamId: 6,
      position: 6,
      rider: {
        id: 73,
        firstName: "Kyle",
        lastName: "Howarth",
        nickname: "",
        dob: "11 February 1994",
        region: "Ashton-under-Lyne, Greater Manchester",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/howarth_kyle22-300x300.jpg"
      }
    },
    {
      teamId: 6,
      position: 7,
      rider: {
        id: 63,
        firstName: "Daniel",
        lastName: "Gilkes",
        nickname: "Dan",
        dob: "21 May 2002",
        region: "Northampton, Northamptonshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/gilkes_dan-300x300.jpg"
      }
    },
    {
      teamId: 8,
      position: 1,
      rider: {
        id: 146,
        firstName: "Rory",
        lastName: "Schlein",
        nickname: "",
        dob: "1 September 1984",
        region: "Darwin, Northern Territory, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/schlein_rory23_3-300x300.jpg"
      }
    },
    {
      teamId: 8,
      position: 2,
      rider: {
        id: 79,
        firstName: "Thomas",
        lastName: "Jorgensen",
        nickname: "",
        dob: "14 July 1992",
        region: "Aalborg, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/jorgensen_thomas21-300x300.jpg"
      }
    },
    {
      teamId: 8,
      position: 3,
      rider: {
        id: 58,
        firstName: "Leon",
        lastName: "Flint",
        nickname: "",
        dob: "22 February 2003",
        region: "Ashington, Northumberland",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/flint_leon21-300x300.jpg"
      }
    },
    {
      teamId: 8,
      position: 4,
      rider: {
        id: 55,
        firstName: "Jye",
        lastName: "Etheridge",
        nickname: "",
        dob: "30 April 1995",
        region: "Newcastle, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/etheridge_jye21_2-300x300.jpg"
      }
    },
    {
      teamId: 8,
      position: 5,
      rider: {
        id: 92,
        firstName: "Jonas",
        lastName: "Knudsen",
        nickname: "",
        dob: "4 August 2001",
        region: "Ribe, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/06/knudsen_jonas22-300x300.jpg"
      }
    },
    {
      teamId: 8,
      position: 6,
      rider: {
        id: 71,
        firstName: "Jacob",
        lastName: "Hook",
        nickname: "",
        dob: "21 August 2002",
        region: "Brisbane, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/hook_jacob23-300x300.jpg"
      }
    },
    {
      teamId: 8,
      position: 7,
      rider: {
        id: 41,
        firstName: "Connor",
        lastName: "Coles",
        nickname: "",
        dob: "7 September 1994",
        region: "Exeter, Devon",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/coles_connor21-300x300.jpg"
      }
    },
    {
      teamId: 9,
      position: 1,
      rider: {
        id: 108,
        firstName: "Nicholas",
        lastName: "Morris",
        nickname: "Nick",
        dob: "7 June 1994",
        region: "Canberra, Australian Capital Territory, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/morris_nick21-300x300.jpg"
      }
    },
    {
      teamId: 9,
      position: 2,
      rider: {
        id: 148,
        firstName: "Justin",
        lastName: "Sedgmen",
        nickname: "",
        dob: "17 February 1992",
        region: "Mildura, Victoria, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/sedgmen_justin21_2-300x300.jpg"
      }
    },
    {
      teamId: 9,
      position: 3,
      rider: {
        id: 181,
        firstName: "James",
        lastName: "Wright",
        nickname: "",
        dob: "13 June 1986",
        region: "Stockport, Cheshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/wright_james21_3-300x300.jpg"
      }
    },
    {
      teamId: 9,
      position: 4,
      rider: {
        id: 159,
        firstName: "Daniel",
        lastName: "Thompson",
        nickname: "Dan",
        dob: "22 April",
        region: "2004, Nuneaton, Warwickshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/thompson_dan23-300x300.jpg"
      }
    },
    {
      teamId: 9,
      position: 5,
      rider: {
        id: 35,
        firstName: "Alfred",
        lastName: "Bowtell",
        nickname: "Alfie",
        dob: "23 January 1997",
        region: "Chelmsford, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/bowtell_alfie21-300x300.jpg"
      }
    },
    {
      teamId: 9,
      position: 6,
      rider: {
        id: 127,
        firstName: "James",
        lastName: "Pearson",
        nickname: "",
        dob: "21 May 2005",
        region: "Blacktown, Sydney, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/pearson_james-300x300.jpg"
      }
    },
    {
      teamId: 9,
      position: 7,
      rider: {
        id: 160,
        firstName: "Joseph",
        lastName: "Thompson",
        nickname: "Joe",
        dob: "22 April",
        region: "2004, Nuneaton, Warwickshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/thompson_joe21-300x300.jpg"
      }
    },
    {
      teamId: 20,
      position: 7,
      rider: {
        id: 176,
        firstName: "Samuel",
        lastName: "Woolley",
        nickname: "Sam",
        dob: "22 June 2000",
        region: "Burton-on-Trent, Derbyshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/woolley_sam22-300x300.jpg"
      }
    },
    {
      teamId: 19,
      position: 6,
      rider: {
        id: 174,
        firstName: "Dayle",
        lastName: "Wood",
        nickname: "",
        dob: "22 November 1994",
        region: "Wagga Wagga, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/wood_dayle23-300x300.jpg"
      }
    },
    {
      teamId: 18,
      position: 7,
      rider: {
        id: 169,
        firstName: "Mason",
        lastName: "Watson",
        nickname: "",
        dob: "7 August 2000",
        region: "Berwick-upon-Tweed, Northumberland",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/watson_mason22-300x300.jpg"
      }
    },
    {
      teamId: 22,
      position: 6,
      rider: {
        id: 168,
        firstName: "Joshua",
        lastName: "Warren",
        nickname: "Josh",
        dob: "12 April 2000",
        region: "Peterborough, Cambridgeshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/warren_josh21-300x300.jpg"
      }
    },
    {
      teamId: 22,
      position: 5,
      rider: {
        id: 162,
        firstName: "Benjamin",
        lastName: "Trigger",
        nickname: "Ben",
        dob: "27 May 2006",
        region: "Plymouth, Devon",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/trigger_ben22_2-300x300.jpg"
      }
    },
    {
      teamId: 21,
      position: 1,
      rider: {
        id: 159,
        firstName: "Daniel",
        lastName: "Thompson",
        nickname: "Dan",
        dob: "22 April",
        region: "2004, Nuneaton, Warwickshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/thompson_dan23-300x300.jpg"
      }
    },
    {
      teamId: 19,
      position: 4,
      rider: {
        id: 153,
        firstName: "Alexander",
        lastName: "Spooner",
        nickname: "Alex",
        dob: "18 June 2000",
        region: "Wickford, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/spooner_alex-300x300.jpg"
      }
    },
    {
      teamId: 17,
      position: 2,
      rider: {
        id: 151,
        firstName: "Jack",
        lastName: "Smith",
        nickname: "",
        dob: "17 December 1998",
        region: "Stoke-on-Trent, Staffordshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/smith_jack22-300x300.jpg"
      }
    },
    {
      teamId: 23,
      position: 5,
      rider: {
        id: 147,
        firstName: "Jody",
        lastName: "Scott",
        nickname: "",
        dob: "14 February 2007",
        region: "King’s Lynn, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/06/scott_jody23_2-300x300.jpg"
      }
    },
    {
      teamId: 19,
      position: 2,
      rider: {
        id: 142,
        firstName: "Adam",
        lastName: "Roynon",
        nickname: "",
        dob: "30 August 1988",
        region: "Barrow-in-Furness, Cumbria",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/roynon_adam21-300x300.jpg"
      }
    },
    {
      teamId: 22,
      position: 7,
      rider: {
        id: 138,
        firstName: "William",
        lastName: "Richardson",
        nickname: "",
        dob: "31 October 2004",
        region: "Edingthorpe, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/02/richardson_william22-300x300.jpg"
      }
    },
    {
      teamId: 18,
      position: 5,
      rider: {
        id: 136,
        firstName: "Benjamin",
        lastName: "Rathbone",
        nickname: "Ben",
        dob: "8 April 1997",
        region: "Middlesbrough, North Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/rathbone_ben21-300x300.jpg"
      }
    },
    {
      teamId: 24,
      position: 3,
      rider: {
        id: 133,
        firstName: "Ace",
        lastName: "Pijper",
        nickname: "",
        dob: "6 September 2006",
        region: "Edinburgh, West Lothian",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/pijper_ace23-300x300.jpg"
      }
    },
    {
      teamId: 21,
      position: 3,
      rider: {
        id: 129,
        firstName: "Max",
        lastName: "Perry",
        nickname: "",
        dob: "29 April 2007",
        region: "Hungerford, Berkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/perry_max22-300x300.jpg"
      }
    },
    {
      teamId: 17,
      position: 3,
      rider: {
        id: 127,
        firstName: "James",
        lastName: "Pearson",
        nickname: "",
        dob: "21 May 2005",
        region: "Blacktown, Sydney, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/pearson_james-300x300.jpg"
      }
    },
    {
      teamId: 19,
      position: 5,
      rider: {
        id: 125,
        firstName: "Mark",
        lastName: "Parker",
        nickname: "",
        dob: "25 May 2005",
        region: "Carlisle, Cumbria",
        imageUrl: ""
      }
    },
    {
      teamId: 20,
      position: 6,
      rider: {
        id: 116,
        firstName: "Rhys",
        lastName: "Naylor",
        nickname: "",
        dob: "22 August 1993",
        region: "Basildon, Essex, England",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/naylor_rhys-300x300.jpg"
      }
    },
    {
      teamId: 24,
      position: 2,
      rider: {
        id: 115,
        firstName: "Samuel",
        lastName: "Mcgurk",
        nickname: "Sam",
        dob: "1 January 2006",
        region: "Bradford, Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/mcgurk_sam21-300x300.jpg"
      }
    },
    {
      teamId: 17,
      position: 7,
      rider: {
        id: 110,
        firstName: "Luke",
        lastName: "Muff",
        nickname: "",
        dob: "20 November 1987",
        region: "Calderdale, West Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/08/muff_luke21_3-300x300.jpg"
      }
    },
    {
      teamId: 20,
      position: 1,
      rider: {
        id: 106,
        firstName: "Ben",
        lastName: "Morley",
        nickname: "",
        dob: "10 March 1994",
        region: "Southend, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/morley_ben22-300x300.jpg"
      }
    },
    {
      teamId: 17,
      position: 5,
      rider: {
        id: 101,
        firstName: "Matthew",
        lastName: "Marson",
        nickname: "",
        dob: "15 March 2000",
        region: "Perth, Western Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/01/marson_matt22-300x300.jpg"
      }
    },
    {
      teamId: 19,
      position: 7,
      rider: {
        id: 100,
        firstName: "Kyran",
        lastName: "Lyden",
        nickname: "",
        dob: "18 May 2002",
        region: "Middlesbrough, Teesside",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/lyden_kyran23-300x300.jpg"
      }
    },
    {
      teamId: 23,
      position: 3,
      rider: {
        id: 90,
        firstName: "Ryan",
        lastName: "Kinsley",
        nickname: "",
        dob: "25 September 1998",
        region: "Norwich, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/kinsley_ryan21-300x300.jpg"
      }
    },
    {
      teamId: 20,
      position: 4,
      rider: {
        id: 89,
        firstName: "Jack",
        lastName: "Kingston",
        nickname: "",
        dob: "6 October",
        region: "1995, Ilford, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/kingstone_jack-300x300.jpg"
      }
    },
    {
      teamId: 20,
      position: 5,
      rider: {
        id: 87,
        firstName: "Connor",
        lastName: "King",
        nickname: "",
        dob: "29 August 1998",
        region: "Suffolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/king_connor22_2-300x300.jpg"
      }
    },
    {
      teamId: 23,
      position: 7,
      rider: {
        id: 86,
        firstName: "Luke",
        lastName: "Killeen",
        nickname: "",
        dob: "16 April 2005",
        region: "Perth, Western Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/killeen_luke23-300x300.jpg"
      }
    },
    {
      teamId: 24,
      position: 5,
      rider: {
        id: 81,
        firstName: "Elliot",
        lastName: "Kelly",
        nickname: "",
        dob: "22 January 2004",
        region: "Yarm, North Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/07/kelly_elliot21_2-300x300.jpg"
      }
    },
    {
      teamId: 23,
      position: 1,
      rider: {
        id: 78,
        firstName: "Jordan",
        lastName: "Jenkins",
        nickname: "",
        dob: "2 August 2001",
        region: "Norwich, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/jenkins_jordan22_2-300x300.jpg"
      }
    },
    {
      teamId: 21,
      position: 6,
      rider: {
        id: 77,
        firstName: "Max",
        lastName: "James",
        nickname: "",
        dob: "5 July 2007",
        region: "Sheffield, South Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/james_max23-300x300.jpg"
      }
    },
    {
      teamId: 19,
      position: 3,
      rider: {
        id: 71,
        firstName: "Jacob",
        lastName: "Hook",
        nickname: "",
        dob: "21 August 2002",
        region: "Brisbane, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/hook_jacob23-300x300.jpg"
      }
    },
    {
      teamId: 17,
      position: 4,
      rider: {
        id: 69,
        firstName: "Freddy",
        lastName: "Hodder",
        nickname: "",
        dob: "18 April 2006",
        region: "Rugby, Warwickshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/hodder_freddie22-300x300.jpg"
      }
    },
    {
      teamId: 24,
      position: 7,
      rider: {
        id: 67,
        firstName: "Luke",
        lastName: "Harrison",
        nickname: "",
        dob: "15 June 2007",
        region: "Scunthorpe, Lincolnshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/12/harrison_luke22-300x300.jpg"
      }
    },
    {
      teamId: 18,
      position: 4,
      rider: {
        id: 65,
        firstName: "Jamie",
        lastName: "Halder",
        nickname: "",
        dob: "21 May 1999",
        region: "Selby, North Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/halder_jamie21-300x300.jpg"
      }
    },
    {
      teamId: 21,
      position: 7,
      rider: {
        id: 59,
        firstName: "Vinnie",
        lastName: "Foord",
        nickname: "",
        dob: "13 July 2006",
        region: "Hailsham, East Sussex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/foord_vinnie22-300x300.jpg"
      }
    },
    {
      teamId: 18,
      position: 6,
      rider: {
        id: 54,
        firstName: "Josh",
        lastName: "Embleton",
        nickname: "",
        dob: "3 June 1996",
        region: "Newcastle-Upon-Tyne, Northumberland",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/embleton_josh21-300x300.jpg"
      }
    },
    {
      teamId: 23,
      position: 4,
      rider: {
        id: 51,
        firstName: "Kelsey",
        lastName: "Dugard",
        nickname: "",
        dob: "5 May 1998",
        region: "Hayward’s Heath Sussex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/dugard_kelsey21-300x300.jpg"
      }
    },
    {
      teamId: 24,
      position: 4,
      rider: {
        id: 47,
        firstName: "Luke",
        lastName: "Crang",
        nickname: "",
        dob: "6 April 1991",
        region: "Darlington, County Durham",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/01/crang_luke21-300x300.jpg"
      }
    },
    {
      teamId: 22,
      position: 4,
      rider: {
        id: 43,
        firstName: "George",
        lastName: "Congreve",
        nickname: "",
        dob: "30 December 1999",
        region: "Christchurch, New Zealand",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/congreve_george23-300x300.jpg"
      }
    },
    {
      teamId: 18,
      position: 2,
      rider: {
        id: 41,
        firstName: "Connor",
        lastName: "Coles",
        nickname: "",
        dob: "7 September 1994",
        region: "Exeter, Devon",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/coles_connor21-300x300.jpg"
      }
    },
    {
      teamId: 23,
      position: 6,
      rider: {
        id: 40,
        firstName: "Jacob",
        lastName: "Clouting",
        nickname: "",
        dob: "28 August 1999",
        region: "Ipswich, Suffolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/clouting_jacob22-300x300.jpg"
      }
    },
    {
      teamId: 19,
      position: 1,
      rider: {
        id: 39,
        firstName: "Max",
        lastName: "Clegg",
        nickname: "",
        dob: "11 April 1997",
        region: "Brighouse, West Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/clegg_max21_2-300x300.jpg"
      }
    },
    {
      teamId: 22,
      position: 3,
      rider: {
        id: 37,
        firstName: "Arran",
        lastName: "Butcher",
        nickname: "",
        dob: "30 November 2000",
        region: "Barwell, Leicestershire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/butcher_arran21-300x300.jpg"
      }
    },
    {
      teamId: 17,
      position: 6,
      rider: {
        id: 34,
        firstName: "Paul",
        lastName: "Bowen",
        nickname: "",
        dob: "15 March 1989 Chorley",
        region: "Lancashire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/bowen_paul21-300x300.jpg"
      }
    },
    {
      teamId: 21,
      position: 4,
      rider: {
        id: 33,
        firstName: "Ashton",
        lastName: "Boughen",
        nickname: "",
        dob: "21 August 2007",
        region: "King’s Lynn, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/boughen_ashton23-300x300.jpg"
      }
    },
    {
      teamId: 18,
      position: 3,
      rider: {
        id: 30,
        firstName: "Greg",
        lastName: "Blair",
        nickname: "",
        dob: "14 October 1990",
        region: "Jedburgh, Roxburghshire, Scotland",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/blair_greg23-300x300.jpg"
      }
    },
    {
      teamId: 24,
      position: 1,
      rider: {
        id: 21,
        firstName: "Connor",
        lastName: "Bailey",
        nickname: "",
        dob: "13 August 2002",
        region: "Perth, Western Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/bailey_connor2-300x300.jpg"
      }
    },
    {
      teamId: 23,
      position: 2,
      rider: {
        id: 19,
        firstName: "Henry",
        lastName: "Atkins",
        nickname: "",
        dob: "2 January 2001",
        region: "Exeter, Devon",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/atkins_henry21-300x300.jpg"
      }
    },
    {
      teamId: 20,
      position: 2,
      rider: {
        id: 12,
        firstName: "Nathan",
        lastName: "Ablitt",
        nickname: "",
        dob: "3 March 2004",
        region: "Battle, East Sussex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/ablitt_nathan22-300x300.jpg"
      }
    },
    {
      teamId: 18,
      position: 1,
      rider: {
        id: 131,
        firstName: "Daniel",
        lastName: "Phillips",
        nickname: "Danny",
        dob: "4 July 1996",
        region: "Middlesbrough, North Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/phillips_danny21-300x300.jpg"
      }
    },
    {
      teamId: 24,
      position: 6,
      rider: {
        id: 114,
        firstName: "Harold",
        lastName: "Mcgurk",
        nickname: "Harry",
        dob: "4 March 2004",
        region: "Bradford, Yorkshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/mcgurk_harry21-300x300.jpg"
      }
    },
    {
      teamId: 22,
      position: 1,
      rider: {
        id: 35,
        firstName: "Alfred",
        lastName: "Bowtell",
        nickname: "Alfie",
        dob: "23 January 1997",
        region: "Chelmsford, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/bowtell_alfie21-300x300.jpg"
      }
    },
    {
      teamId: 21,
      position: 5,
      rider: {
        id: 152,
        firstName: "Thomas",
        lastName: "Spencer",
        nickname: "Tom",
        dob: "20 February 2000",
        region: "Derby, Derbyshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/spencer_tom22-300x300.jpg"
      }
    },
    {
      teamId: 21,
      position: 2,
      rider: {
        id: 160,
        firstName: "Joseph",
        lastName: "Thompson",
        nickname: "Joe",
        dob: "22 April",
        region: "2004, Nuneaton, Warwickshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/thompson_joe21-300x300.jpg"
      }
    },
    {
      teamId: 20,
      position: 3,
      rider: {
        id: 177,
        firstName: "Thomas",
        lastName: "Woolley",
        nickname: "Tom",
        dob: "23 November 1993",
        region: "Burton-on-Trent, Derbyshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/woolley_tom21-300x300.jpg"
      }
    },
    {
      teamId: 22,
      position: 2,
      rider: {
        id: 42,
        firstName: "Lee",
        lastName: "Complin",
        nickname: "",
        dob: "17 November 1984",
        region: "Cowling, Nr",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/complin_lee23_2-300x300.jpg"
      }
    },
    {
      teamId: 10,
      position: 1,
      rider: {
        id: 132,
        firstName: "Joshua",
        lastName: "Pickering",
        nickname: "Josh",
        dob: "30 November 1996",
        region: "Heddon Greta, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/pickering_josh22_2-300x300.jpg"
      }
    },
    {
      teamId: 10,
      position: 2,
      rider: {
        id: 45,
        firstName: "Craig",
        lastName: "Cook",
        nickname: "",
        dob: "21 May 1987",
        region: "Whitehaven, Cumbria",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/cook_craig21_2-300x300.jpg"
      }
    },
    {
      teamId: 10,
      position: 3,
      rider: {
        id: 161,
        firstName: "Kye",
        lastName: "Thomson",
        nickname: "",
        dob: "5 October 1998",
        region: "Yandina, Queensland, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/thomson_kye21-300x300.jpg"
      }
    },
    {
      teamId: 10,
      position: 4,
      rider: {
        id: 38,
        firstName: "Michele",
        lastName: "Castagna",
        nickname: "Paco",
        dob: "4 March 1994",
        region: "Arzignano, Italy",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/castagna_paco21-300x300.jpg"
      }
    },
    {
      teamId: 10,
      position: 5,
      rider: {
        id: 32,
        firstName: "Bastian",
        lastName: "Borke",
        nickname: "",
        dob: "16 July 2002",
        region: "Voel, Arhus, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/05/borke_bastian23-300x300.jpg"
      }
    },
    {
      teamId: 10,
      position: 6,
      rider: {
        id: 60,
        firstName: "Lasse",
        lastName: "Fredriksen",
        nickname: "",
        dob: "8 June 1997",
        region: "Varhaug, Norway",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/fredriksen_lasse-300x300.jpg"
      }
    },
    {
      teamId: 10,
      position: 7,
      rider: {
        id: 174,
        firstName: "Dayle",
        lastName: "Wood",
        nickname: "",
        dob: "22 November 1994",
        region: "Wagga Wagga, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/wood_dayle23-300x300.jpg"
      }
    },
    {
      teamId: 11,
      position: 1,
      rider: {
        id: 66,
        firstName: "Christopher",
        lastName: "Harris",
        nickname: "Chris",
        dob: "28 November 1982",
        region: "Truro, Cornwall",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/harris_chris23-300x300.jpg"
      }
    },
    {
      teamId: 11,
      position: 2,
      rider: {
        id: 23,
        firstName: "Benjamin",
        lastName: "Basso",
        nickname: "",
        dob: "2 July 2001",
        region: "Odense, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/basso_benjamin23_2-300x300.jpg"
      }
    },
    {
      teamId: 11,
      position: 3,
      rider: {
        id: 36,
        firstName: "Thomas",
        lastName: "Brennan",
        nickname: "Tom",
        dob: "2 July 2001",
        region: "Swindon, Wiltshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/brennan_tom23_2-300x300.jpg"
      }
    },
    {
      teamId: 11,
      position: 4,
      rider: {
        id: 121,
        firstName: "Marcin",
        lastName: "Nowak",
        nickname: "",
        dob: "18 August 1995",
        region: "Poland",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/nowak_marcin23-300x300.jpg"
      }
    },
    {
      teamId: 11,
      position: 5,
      rider: {
        id: 166,
        firstName: "Claus",
        lastName: "Vissing",
        nickname: "",
        dob: "6 June 1986",
        region: "Grindsted, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/vissing_claus23-300x300.jpg"
      }
    },
    {
      teamId: 11,
      position: 6,
      rider: {
        id: 42,
        firstName: "Lee",
        lastName: "Complin",
        nickname: "",
        dob: "17 November 1984",
        region: "Cowling, Nr",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/complin_lee23_2-300x300.jpg"
      }
    },
    {
      teamId: 11,
      position: 7,
      rider: {
        id: 133,
        firstName: "Ace",
        lastName: "Pijper",
        nickname: "",
        dob: "6 September 2006",
        region: "Edinburgh, West Lothian",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/pijper_ace23-300x300.jpg"
      }
    },
    {
      teamId: 12,
      position: 1,
      rider: {
        id: 102,
        firstName: "Samuel",
        lastName: "Masters",
        nickname: "Sam",
        dob: "23 May 1991",
        region: "Newcastle, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/masters_sam21-300x300.jpg"
      }
    },
    {
      teamId: 12,
      position: 2,
      rider: {
        id: 118,
        firstName: "Scott",
        lastName: "Nicholls",
        nickname: "",
        dob: "16 May 1978",
        region: "Ipswich, Suffolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/nicholls_scott21_3-300x300.jpg"
      }
    },
    {
      teamId: 12,
      position: 3,
      rider: {
        id: 85,
        firstName: "Lewis",
        lastName: "Kerr",
        nickname: "",
        dob: "25 March 1990",
        region: "King’s Lynn, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/kerr_lewis21-300x300.jpg"
      }
    },
    {
      teamId: 12,
      position: 4,
      rider: {
        id: 78,
        firstName: "Jordan",
        lastName: "Jenkins",
        nickname: "",
        dob: "2 August 2001",
        region: "Norwich, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/jenkins_jordan22_2-300x300.jpg"
      }
    },
    {
      teamId: 12,
      position: 5,
      rider: {
        id: 68,
        firstName: "Cameron",
        lastName: "Heeps",
        nickname: "",
        dob: "27 October 1995",
        region: "Perth, Western Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/heeps_cameron21_2-300x300.jpg"
      }
    },
    {
      teamId: 12,
      position: 6,
      rider: {
        id: 90,
        firstName: "Ryan",
        lastName: "Kinsley",
        nickname: "",
        dob: "25 September 1998",
        region: "Norwich, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/kinsley_ryan21-300x300.jpg"
      }
    },
    {
      teamId: 12,
      position: 7,
      rider: {
        id: 19,
        firstName: "Henry",
        lastName: "Atkins",
        nickname: "",
        dob: "2 January 2001",
        region: "Exeter, Devon",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/atkins_henry21-300x300.jpg"
      }
    },
    {
      teamId: 13,
      position: 1,
      rider: {
        id: 73,
        firstName: "Kyle",
        lastName: "Howarth",
        nickname: "",
        dob: "11 February 1994",
        region: "Ashton-under-Lyne, Greater Manchester",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/howarth_kyle22-300x300.jpg"
      }
    },
    {
      teamId: 13,
      position: 2,
      rider: {
        id: 22,
        firstName: "Benjamin",
        lastName: "Barker",
        nickname: "Ben",
        dob: "10 March 1988",
        region: "Truro, Cornwall",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/barker_ben21-300x300.jpg"
      }
    },
    {
      teamId: 13,
      position: 3,
      rider: {
        id: 178,
        firstName: "Richie",
        lastName: "Worrall",
        nickname: "",
        dob: "23 September 1991",
        region: "St Helens, Merseyside",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/worrall_richie21-300x300.jpg"
      }
    },
    {
      teamId: 13,
      position: 4,
      rider: {
        id: 63,
        firstName: "Daniel",
        lastName: "Gilkes",
        nickname: "Dan",
        dob: "21 May 2002",
        region: "Northampton, Northamptonshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/gilkes_dan-300x300.jpg"
      }
    },
    {
      teamId: 13,
      position: 5,
      rider: {
        id: 106,
        firstName: "Ben",
        lastName: "Morley",
        nickname: "",
        dob: "10 March 1994",
        region: "Southend, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/morley_ben22-300x300.jpg"
      }
    },
    {
      teamId: 13,
      position: 6,
      rider: {
        id: 164,
        firstName: "Jake",
        lastName: "Turner",
        nickname: "",
        dob: "7 December 1996",
        region: "Auckland, New Zealand",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/04/turner_jake23-300x300.jpg"
      }
    },
    {
      teamId: 13,
      position: 7,
      rider: {
        id: 162,
        firstName: "Benjamin",
        lastName: "Trigger",
        nickname: "Ben",
        dob: "27 May 2006",
        region: "Plymouth, Devon",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/trigger_ben22_2-300x300.jpg"
      }
    },
    {
      teamId: 14,
      position: 1,
      rider: {
        id: 179,
        firstName: "Steven",
        lastName: "Worrall",
        nickname: "Steve",
        dob: "23 September 1991",
        region: "St Helens, Merseyside",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/06/worrall_steve21_2-300x300.jpg"
      }
    },
    {
      teamId: 14,
      position: 2,
      rider: {
        id: 97,
        firstName: "Richard",
        lastName: "Lawson",
        nickname: "Rich",
        dob: "14 February 1986",
        region: "Whitehaven, Cumbria",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/06/lawson_richard21_2-300x300.jpg"
      }
    },
    {
      teamId: 14,
      position: 3,
      rider: {
        id: 44,
        firstName: "Benjamin",
        lastName: "Cook",
        nickname: "Ben",
        dob: "27 October 1997",
        region: "Cowra, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/cook_ben22-300x300.jpg"
      }
    },
    {
      teamId: 14,
      position: 4,
      rider: {
        id: 141,
        firstName: "Anders",
        lastName: "Rowe",
        nickname: "",
        dob: "9 May",
        region: "2002, Weymouth, Dorset",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/09/rowe_anders21_3-300x300.jpg"
      }
    },
    {
      teamId: 14,
      position: 5,
      rider: {
        id: 46,
        firstName: "Zach",
        lastName: "Cook",
        nickname: "",
        dob: "15 July 1999",
        region: "Cowra, New South Wales, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/cook_zach22-300x300.jpg"
      }
    },
    {
      teamId: 14,
      position: 6,
      rider: {
        id: 117,
        firstName: "Kyle",
        lastName: "Newman",
        nickname: "",
        dob: "14 December 1991",
        region: "Poole, Dorset",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/newman_kyle22-300x300.jpg"
      }
    },
    {
      teamId: 14,
      position: 7,
      rider: {
        id: 142,
        firstName: "Adam",
        lastName: "Roynon",
        nickname: "",
        dob: "30 August 1988",
        region: "Barrow-in-Furness, Cumbria",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/roynon_adam21-300x300.jpg"
      }
    },
    {
      teamId: 15,
      position: 1,
      rider: {
        id: 88,
        firstName: "Daniel",
        lastName: "King",
        nickname: "Danny",
        dob: "14 August 1986",
        region: "Maidstone, Kent",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/king_danny21_4-300x300.jpg"
      }
    },
    {
      teamId: 15,
      position: 2,
      rider: {
        id: 139,
        firstName: "Erik",
        lastName: "Riss",
        nickname: "",
        dob: "13 September 1995",
        region: "Memmingen, Germany",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/riss_erik21_5-300x300.jpg"
      }
    },
    {
      teamId: 15,
      position: 3,
      rider: {
        id: 180,
        firstName: "Charles",
        lastName: "Wright",
        nickname: "",
        dob: "26 October 1988",
        region: "Stockport, Cheshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/wright_charles21_2-300x300.jpg"
      }
    },
    {
      teamId: 15,
      position: 4,
      rider: {
        id: 74,
        firstName: "Danyon",
        lastName: "Hume",
        nickname: "",
        dob: "25 July 1996",
        region: "Wendover, Buckinghamshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/06/hume_danyon21-1-300x300.jpg"
      }
    },
    {
      teamId: 15,
      position: 5,
      rider: {
        id: 52,
        firstName: "Jason",
        lastName: "Edwards",
        nickname: "",
        dob: "14 September 2002",
        region: "Billericay, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/edwards_jason23_2-300x300.jpg"
      }
    },
    {
      teamId: 15,
      position: 6,
      rider: {
        id: 21,
        firstName: "Connor",
        lastName: "Bailey",
        nickname: "",
        dob: "13 August 2002",
        region: "Perth, Western Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/bailey_connor2-300x300.jpg"
      }
    },
    {
      teamId: 15,
      position: 7,
      rider: {
        id: 111,
        firstName: "Jake",
        lastName: "Mulford",
        nickname: "",
        dob: "4 March 2004",
        region: "Norwich, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/mulford_jake22-300x300.jpg"
      }
    },
    {
      teamId: 16,
      position: 1,
      rider: {
        id: 49,
        firstName: "Ryan",
        lastName: "Douglas",
        nickname: "",
        dob: "9 September 1993",
        region: "Brisbane, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/douglas_ryan21_2-300x300.jpg"
      }
    },
    {
      teamId: 16,
      position: 2,
      rider: {
        id: 15,
        firstName: "Jake",
        lastName: "Allen",
        nickname: "",
        dob: "11 August 1995",
        region: "Brisbane, Queensland, Australia",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/allen_jake21-300x300.jpg"
      }
    },
    {
      teamId: 16,
      position: 3,
      rider: {
        id: 124,
        firstName: "Michael",
        lastName: "Toft",
        nickname: "",
        dob: "26 July 1990",
        region: "Odense, Denmark",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/03/palm_toft_michael23-300x300.jpg"
      }
    },
    {
      teamId: 16,
      position: 4,
      rider: {
        id: 96,
        firstName: "Simon",
        lastName: "Lambert",
        nickname: "",
        dob: "21 February 1989",
        region: "Boston, Lincolnshire",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/lambert_simon21-300x300.jpg"
      }
    },
    {
      teamId: 16,
      position: 5,
      rider: {
        id: 82,
        firstName: "Drew",
        lastName: "Kemp",
        nickname: "",
        dob: "11 August 2002",
        region: "Osnabruck, Germany",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2023/06/kemp_drew23-300x300.jpg"
      }
    },
    {
      teamId: 16,
      position: 6,
      rider: {
        id: 109,
        firstName: "Connor",
        lastName: "Mountain",
        nickname: "",
        dob: "26 August 1997",
        region: "King’s Lynn, Norfolk",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2021/05/mountain_connor-300x300.jpg"
      }
    },
    {
      teamId: 16,
      position: 7,
      rider: {
        id: 12,
        firstName: "Nathan",
        lastName: "Ablitt",
        nickname: "",
        dob: "3 March 2004",
        region: "Battle, East Sussex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/03/ablitt_nathan22-300x300.jpg"
      }
    },
    {
      teamId: 17,
      position: 1,
      rider: {
        id: 64,
        firstName: "Samuel",
        lastName: "Hagon",
        nickname: "Sam",
        dob: "10 October 2004",
        region: "Waltham Abbey, Essex",
        imageUrl: "https://britishspeedway.co.uk/wp-content/uploads/2022/04/hagon_sam22-300x300.jpg"
      }
    }
  ];

export async function fetchApi(url) {
  switch (url) {
    case "leagues":
      return leaguesResponse;
    case "teams":
      return teamsResponse;
    case "TeamRider":
      return teamRidersResponse;
    default:
      throw new Error(`Unhandled request: ${url}`);
  }
}