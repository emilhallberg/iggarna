const players = [
  {
    id: 614,
    name: "Angelica Tagg",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1649.jpg",
  },
  {
    id: 917,
    name: "Anna Lindblom",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1651.jpg",
  },
  {
    id: 615,
    name: "Cajsa Vedin",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1659.jpg",
  },
  {
    id: 921,
    name: "Elin Lindqvist",
    team: "Damer",
    picture: "",
  },
  {
    id: 386,
    name: "Elin Tegenfeldt",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1391.jpg",
  },
  {
    id: 916,
    name: "Emma Borin",
    team: "Damer",
    picture: "",
  },
  {
    id: 920,
    name: "Emma Trönnhagen",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1653.jpg",
  },
  {
    id: 803,
    name: "Erika Frisk",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1663.jpg",
  },
  {
    id: 876,
    name: "Evelina Fredin",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1648.jpg",
  },
  {
    id: 915,
    name: "Fanny Westman",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1660.jpg",
  },
  {
    id: 714,
    name: "Frida Borin",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1661.jpg",
  },
  {
    id: 911,
    name: "Ida Tilemo",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1664.jpg",
  },
  {
    id: 804,
    name: "Isabel Brink",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1652.jpg",
  },
  {
    id: 866,
    name: "Johanna Ohlsson",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1655.jpg",
  },
  {
    id: 733,
    name: "Johanna Skarin",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1662.jpg",
  },
  {
    id: 622,
    name: "Julia Andersson",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1658.jpg",
  },
  {
    id: 736,
    name: "Klara Palmlöf",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1650.jpg",
  },
  {
    id: 715,
    name: "Linnea Persson",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1394.jpg",
  },
  {
    id: 716,
    name: "Linnea Åkerlund",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1657.jpg",
  },
  {
    id: 623,
    name: "Lovisa Elmerfors",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1656.jpg",
  },
  {
    id: 963,
    name: "Matilda Brink",
    team: "Damer",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1665.jpg",
  },
  {
    id: 910,
    name: "Sara Åkerlund",
    team: "Damer",
    picture: "",
  },
  {
    id: 674,
    name: "Alva Bergsman",
    team: "F02-04",
    picture: "",
  },
  {
    id: 964,
    name: "Alva Wallner",
    team: "F02-04",
    picture: "",
  },
  {
    id: 797,
    name: "Ebba Bergsman",
    team: "F02-04",
    picture: "",
  },
  {
    id: 681,
    name: "Ellen Danielsson",
    team: "F02-04",
    picture: "",
  },
  {
    id: 672,
    name: "Emma Andersson",
    team: "F02-04",
    picture: "",
  },
  {
    id: 907,
    name: "Ida Eriksson",
    team: "F02-04",
    picture: "",
  },
  {
    id: 682,
    name: "Isa Wennström",
    team: "F02-04",
    picture: "",
  },
  {
    id: 835,
    name: "Linn Schedin",
    team: "F02-04",
    picture: "",
  },
  {
    id: 678,
    name: "Maja Gillsäter",
    team: "F02-04",
    picture: "",
  },
  {
    id: 670,
    name: "Mira Åslin",
    team: "F02-04",
    picture: "",
  },
  {
    id: 673,
    name: "Moa Backström",
    team: "F02-04",
    picture: "",
  },
  {
    id: 671,
    name: "Thea Logren",
    team: "F02-04",
    picture: "",
  },
  {
    id: 778,
    name: "Wilma Pettersson",
    team: "F02-04",
    picture: "",
  },
  {
    id: 432,
    name: "Elina Falk",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-724.gif",
  },
  {
    id: 433,
    name: "Elina Fernlund",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-725.gif",
  },
  {
    id: 434,
    name: "Ellen Fernlund",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-726.gif",
  },
  {
    id: 293,
    name: "Emma Sundström",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-727.gif",
  },
  {
    id: 430,
    name: "Erika Elfstrand",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-728.gif",
  },
  {
    id: 294,
    name: "Frida Henriksson",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-729.gif",
  },
  {
    id: 429,
    name: "Fundesa Bitiq",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-730.gif",
  },
  {
    id: 303,
    name: "Johanna Engnell",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-731.gif",
  },
  {
    id: 428,
    name: "Julia Andersson",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-732.gif",
  },
  {
    id: 431,
    name: "Julia Eriksson",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-733.gif",
  },
  {
    id: 435,
    name: "Sandra Ström",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-734.gif",
  },
  {
    id: 299,
    name: "Sofia Jonsson",
    team: "F93",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-735.gif",
  },
  {
    id: 460,
    name: "Emelie Ström",
    team: "F94-95",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-597.jpg",
  },
  {
    id: 390,
    name: "Julia Skarin",
    team: "F94-95",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-586.jpg",
  },
  {
    id: 549,
    name: "Sofia Östlund",
    team: "F94-95",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-833.jpg  ",
  },
  {
    id: 861,
    name: "Andreas Karlsson",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1157.jpg",
  },
  {
    id: 602,
    name: "Daniel Wester",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1365.jpg",
  },
  {
    id: 635,
    name: "Dennis Baban",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1687.jpg",
  },
  {
    id: 895,
    name: "Dennis Backström",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1689.jpg",
  },
  {
    id: 823,
    name: "Erik Sundman",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1694.jpg",
  },
  {
    id: 924,
    name: "Fredrik Nord-Norén",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1688.jpg",
  },
  {
    id: 607,
    name: "Glenn Sjögren",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1270.jpg",
  },
  {
    id: 900,
    name: "Hans Ohlsson",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1695.jpg",
  },
  {
    id: 896,
    name: "Johan Näsman",
    team: "Herrar",
    picture: "",
  },
  {
    id: 875,
    name: "Lars Skärpe",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1690.jpg",
  },
  {
    id: 603,
    name: "Marcus Larsson",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1678.jpg",
  },
  {
    id: 923,
    name: "Martin Strid",
    team: "Herrar",
    picture: "",
  },
  {
    id: 870,
    name: "Mathias Svärd",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1676.jpg",
  },
  {
    id: 955,
    name: "Mattias Samuelsson",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1692.jpg",
  },
  {
    id: 869,
    name: "Niclas Lindström",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1679.jpg",
  },
  {
    id: 859,
    name: "Olivier Lindh",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1683.jpg",
  },
  {
    id: 957,
    name: "Robin Stigevik",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1682.jpg",
  },
  {
    id: 800,
    name: "Tobias Björk",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1681.jpg",
  },
  {
    id: 877,
    name: "Viktor Jansson",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1685.jpg",
  },
  {
    id: 54,
    name: "Emil Hallberg",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1693.jpg",
  },
  {
    id: 847,
    name: "Jonas Höglund",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1696.jpg",
  },
  {
    id: 846,
    name: "Kenneth Jansson",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1697.jpg",
  },
  {
    id: 332,
    name: "Martin Lööf",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1677.jpg",
  },
  {
    id: 336,
    name: "Mikael Andersson",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1680.jpg",
  },
  {
    id: 342,
    name: "Niklas Nordström",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1684.jpg",
  },
  {
    id: 579,
    name: "Patrick Åslin",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1382.jpg",
  },
  {
    id: 848,
    name: "Stefan Nordström",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1360.jpg",
  },
  {
    id: 509,
    name: "Victor Hallberg",
    team: "Herrar",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1686.jpg",
  },
  {
    id: 842,
    name: "Adhurim Bytyqi",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1537.jpg",
  },
  {
    id: 632,
    name: "Agahan Karayev",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1255.jpg",
  },
  {
    id: 545,
    name: "Ahmed Rashid",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1253.jpg",
  },
  {
    id: 914,
    name: "Ali Reza Payande",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1614.jpg",
  },
  {
    id: 872,
    name: "Anantachai Sornsang",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1538.jpg",
  },
  {
    id: 629,
    name: "Anders Wiklund",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1259.jpg",
  },
  {
    id: 726,
    name: "Andreas Andersson",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1302.jpg",
  },
  {
    id: 927,
    name: "Andreas Olsson",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 816,
    name: "Anton Bergsten",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1539.jpg",
  },
  {
    id: 930,
    name: "Christoffer Samuelsson",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 738,
    name: "Daniel Nilsson",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1303.jpg",
  },
  {
    id: 967,
    name: "Edin Kamberi",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 965,
    name: "Emil Strömgren",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 883,
    name: "Jack Andersson",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1543.jpg",
  },
  {
    id: 613,
    name: "Jesper Hedblom",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1250.jpg",
  },
  {
    id: 819,
    name: "Jesper Lindén",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1544.jpg",
  },
  {
    id: 646,
    name: "Johan Elfving",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1256.jpg",
  },
  {
    id: 813,
    name: "Johan Näsman",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1545.jpg",
  },
  {
    id: 817,
    name: "Jonatan Sondell",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1551.jpg",
  },
  {
    id: 636,
    name: "Marcus Westby",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1258.jpg",
  },
  {
    id: 788,
    name: "Najem Seddiqi",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1249.jpg",
  },
  {
    id: 908,
    name: "Oskar Fahlberg",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 662,
    name: "Patrik Blomdahl",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1304.jpg",
  },
  {
    id: 795,
    name: "Rasmus Bergqvist",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1248.jpg",
  },
  {
    id: 874,
    name: "Sacha Lefebvre Filleau",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1547.jpg",
  },
  {
    id: 969,
    name: "Tobias Hammarström",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 634,
    name: "Wilhelm Groth",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1247.jpg",
  },
  {
    id: 573,
    name: "Emil Hallberg",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1251.jpg",
  },
  {
    id: 725,
    name: "Joacim Andersson",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 371,
    name: "Olivier Lindh",
    team: "Herrar 2",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1282.jpg",
  },
  {
    id: 787,
    name: "Sobhi Darwiche",
    team: "Herrar 2",
    picture: "",
  },
  {
    id: 582,
    name: "Albin Nilsson",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1308.jpg",
  },
  {
    id: 583,
    name: "Alfons Wennström",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1306.jpg",
  },
  {
    id: 959,
    name: "Axel Andersson",
    team: "P01",
    picture: "",
  },
  {
    id: 860,
    name: "Calle Westerlund",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1310.jpg",
  },
  {
    id: 585,
    name: "Emil Forslund",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1312.jpg",
  },
  {
    id: 586,
    name: "Filip Nilsson",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1313.jpg",
  },
  {
    id: 587,
    name: "Hugo Andersson",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1314.jpg",
  },
  {
    id: 589,
    name: "Karl Palmlöf",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1315.jpg",
  },
  {
    id: 591,
    name: "Melwin Hällström",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1317.jpg",
  },
  {
    id: 890,
    name: "Melvin Stark",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1318.jpg",
  },
  {
    id: 905,
    name: "Niklas Nyberg",
    team: "P01",
    picture: "",
  },
  {
    id: 904,
    name: "Robin Eriksson",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1320.jpg",
  },
  {
    id: 891,
    name: "Thilde",
    team: "P01",
    picture: "",
  },
  {
    id: 594,
    name: "Tim Wiklund",
    team: "P01",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/IIK-1321.jpg",
  },
  {
    id: 701,
    name: "Adam Taipale",
    team: "P02",
    picture: "",
  },
  {
    id: 706,
    name: "Alexander Engberg",
    team: "P02",
    picture: "",
  },
  {
    id: 695,
    name: "Axel Stillmark",
    team: "P02",
    picture: "",
  },
  {
    id: 693,
    name: "Ellis Nilsson",
    team: "P02",
    picture: "",
  },
  {
    id: 690,
    name: "Emil Westrin",
    team: "P02",
    picture: "",
  },
  {
    id: 692,
    name: "Erik Nordqvist",
    team: "P02",
    picture: "",
  },
  {
    id: 689,
    name: "Fredrik Mickelsson",
    team: "P02",
    picture: "",
  },
  {
    id: 688,
    name: "Hampus Östby",
    team: "P02",
    picture: "",
  },
  {
    id: 704,
    name: "Hugo Andersson",
    team: "P02",
    picture: "",
  },
  {
    id: 881,
    name: "joakim Sjökvist",
    team: "P02",
    picture: "",
  },
  {
    id: 696,
    name: "Kevin Kirik",
    team: "P02",
    picture: "",
  },
  {
    id: 880,
    name: "Le Paw",
    team: "P02",
    picture: "",
  },
  {
    id: 691,
    name: "Lukas Lindgren",
    team: "P02",
    picture: "",
  },
  {
    id: 697,
    name: "Valdemar Gruvberg",
    team: "P02",
    picture: "",
  },
  {
    id: 703,
    name: "Viktor Persson",
    team: "P02",
    picture: "",
  },
  {
    id: 702,
    name: "Wille Schilling",
    team: "P02",
    picture: "",
  },
  {
    id: 849,
    name: " Simon Dahllberg",
    team: "P03",
    picture: "",
  },
  {
    id: 852,
    name: "Alfred Johansson",
    team: "P03",
    picture: "",
  },
  {
    id: 760,
    name: "Alvin Brisvag",
    team: "P03",
    picture: "",
  },
  {
    id: 854,
    name: "Amir Hosein Payande",
    team: "P03",
    picture: "",
  },
  {
    id: 746,
    name: "Andre Pettersson",
    team: "P03",
    picture: "",
  },
  {
    id: 761,
    name: "Buster Ström",
    team: "P03",
    picture: "",
  },
  {
    id: 909,
    name: "Daniel Rosén",
    team: "P03",
    picture: "",
  },
  {
    id: 886,
    name: "Emil Wenn",
    team: "P03",
    picture: "",
  },
  {
    id: 902,
    name: "Jonat",
    team: "P03",
    picture: "",
  },
  {
    id: 887,
    name: "Max Söderström",
    team: "P03",
    picture: "",
  },
  {
    id: 850,
    name: "Mervan Yilmaz",
    team: "P03",
    picture: "",
  },
  {
    id: 759,
    name: "Nils Widen",
    team: "P03",
    picture: "",
  },
  {
    id: 851,
    name: "Olle Olsson",
    team: "P03",
    picture: "",
  },
  {
    id: 744,
    name: "Philip Johansson",
    team: "P03",
    picture: "",
  },
  {
    id: 888,
    name: "Rodi Ismail",
    team: "P03",
    picture: "",
  },
  {
    id: 763,
    name: "Simon Vahlberg",
    team: "P03",
    picture: "",
  },
  {
    id: 947,
    name: "Albin Kring",
    team: "P04-05",
    picture: "",
  },
  {
    id: 931,
    name: "Alex Söderström",
    team: "P04-05",
    picture: "",
  },
  {
    id: 932,
    name: "Ali Alkadome",
    team: "P04-05",
    picture: "",
  },
  {
    id: 944,
    name: "Amos Hammarstrand",
    team: "P04-05",
    picture: "",
  },
  {
    id: 962,
    name: "Chokchi Vannasing",
    team: "P04-05",
    picture: "",
  },
  {
    id: 933,
    name: "Elian Åslin",
    team: "P04-05",
    picture: "",
  },
  {
    id: 897,
    name: "Elias Nordqvist",
    team: "P04-05",
    picture: "",
  },
  {
    id: 935,
    name: "Isac Jonsson",
    team: "P04-05",
    picture: "",
  },
  {
    id: 936,
    name: "Joel Forslund",
    team: "P04-05",
    picture: "",
  },
  {
    id: 945,
    name: "Kalle Svärd",
    team: "P04-05",
    picture: "",
  },
  {
    id: 937,
    name: "Kevin Halvarsson",
    team: "P04-05",
    picture: "",
  },
  {
    id: 946,
    name: "Leo Palm",
    team: "P04-05",
    picture: "",
  },
  {
    id: 938,
    name: "Lucas Andersson",
    team: "P04-05",
    picture: "",
  },
  {
    id: 939,
    name: "Marius Alkerud",
    team: "P04-05",
    picture: "",
  },
  {
    id: 934,
    name: "Martin Skarin",
    team: "P04-05",
    picture: "",
  },
  {
    id: 954,
    name: "Max Danielsson",
    team: "P04-05",
    picture: "",
  },
  {
    id: 940,
    name: "Mohammed Amiri",
    team: "P04-05",
    picture: "",
  },
  {
    id: 941,
    name: "Oscar Fullbrook",
    team: "P04-05",
    picture: "",
  },
  {
    id: 942,
    name: "Oskar Fredeiksson",
    team: "P04-05",
    picture: "",
  },
  {
    id: 943,
    name: "Wictor Bergström",
    team: "P04-05",
    picture: "",
  },
  {
    id: 953,
    name: "William Larsson",
    team: "P04-05",
    picture: "",
  },
  {
    id: 952,
    name: "William Svensson",
    team: "P04-05",
    picture: "",
  },
  {
    id: 378,
    name: "Emil Strömgren",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-696.jpg",
  },
  {
    id: 61,
    name: "Erik Söderstedt",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-886.jpg  ",
  },
  {
    id: 479,
    name: "Mohamed Darwiche",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-878.jpg  ",
  },
  {
    id: 523,
    name: "Oskar Axlund",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-877.jpg  ",
  },
  {
    id: 481,
    name: "Pelle Skoglund",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-889.jpg  ",
  },
  {
    id: 524,
    name: "Pontus Persson",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-885.jpg  ",
  },
  {
    id: 510,
    name: "Robin Larsson",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-883.jpg  ",
  },
  {
    id: 56,
    name: "Victor Hallberg",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-882.jpg  ",
  },
  {
    id: 278,
    name: "Willhelm Groth",
    team: "P93-94",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-402.jpg",
  },
  {
    id: 534,
    name: "Albin Larsson",
    team: "P98",
    picture: "",
  },
  {
    id: 528,
    name: "Alexander Döss",
    team: "P98",
    picture: "",
  },
  {
    id: 531,
    name: "Anton Nygårds",
    team: "P98",
    picture: "",
  },
  {
    id: 535,
    name: "Calle Matsson",
    team: "P98",
    picture: "",
  },
  {
    id: 526,
    name: "Dennis Backström",
    team: "P98",
    picture: "",
  },
  {
    id: 541,
    name: "Filip Sondell",
    team: "P98",
    picture: "",
  },
  {
    id: 530,
    name: "Filip Steringer",
    team: "P98",
    picture: "",
  },
  {
    id: 529,
    name: "Fredrik Wikberg",
    team: "P98",
    picture: "",
  },
  {
    id: 539,
    name: "Gabriel Papaztchev",
    team: "P98",
    picture: "",
  },
  {
    id: 645,
    name: "Hampus Eriksson",
    team: "P98",
    picture: "",
  },
  {
    id: 538,
    name: "Johan Moberg",
    team: "P98",
    picture: "",
  },
  {
    id: 537,
    name: "Johan Näsman",
    team: "P98",
    picture: "",
  },
  {
    id: 525,
    name: "Linus Wallner",
    team: "P98",
    picture: "",
  },
  {
    id: 527,
    name: "Olle Strömberg",
    team: "P98",
    picture: "",
  },
  {
    id: 536,
    name: "Sacha Lefebvre-Filleau ",
    team: "P98",
    picture: "",
  },
  {
    id: 491,
    name: "Fredrik Blom",
    team: "Övrigt",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-896.jpg  ",
  },
  {
    id: 565,
    name: "Kristoffer Wennström",
    team: "Övrigt",
    picture: "",
  },
  {
    id: 381,
    name: "Oscar Jonsson",
    team: "Övrigt",
    picture: "http://arkiv.iggesundsik.se/bildarkivet/iik-868.jpg  ",
  },
];

export default players;
