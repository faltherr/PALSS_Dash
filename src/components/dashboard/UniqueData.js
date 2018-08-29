let uniqueFactorsArr = [
"Struck Against/By",
"Repetitive Motion/cumulative Trauma",
"Slip/Trip/Fall",
"Voluntary Motions",
"Contact",
"Lift/Push/Pull",
"Caught In, On, Under Or Between",
"Bite/sting",
"Allergic/bodily Reaction",
"Exposure",
"Training/Qualification",
"Involuntary Motions",
"Motor Vehicle Accident",
"Hearing Loss/STS"
]

let uniqueJobsArr= [
    "POST MS ADMIN","OFFICIAL STUDENT GUE","MUSEUM SPEC","INTELLIGENCE ANALYST","PROGRAM DIRECTOR","ACCOUNTING TEAM LEAD","MACH/FAB TEC-S","LAB ASSOCIATE FELLOW","SHIFT OPERATIONS MAN","EMERGENCY OPERATIONS","DEPUTY DIVISION LDR","SAFETY BASIS MANAGER","DEPUTY PROJECT DIREC","TRAVEL SERVICES ADMI","ARTIST/DESIGNER","SECURITY PROGRAM LEA","TRANSPORT SPEC-S","INSPECTOR","VIDEO SPEC","STILL IMAGING SPEC","POST BS TEC","COMP INFO SYS SPEC","TEST/MEAS TEC-S","MTRLS HANDLER","TRAINING TEAM LEADER","SIX SIGMA BLACK BELT","LAB ASSOCIATE TEC","PROJ MGMT/SYSTEMS AN","MECH TEC-S","SENIOR STAFF ADVISOR","PROJ MGMT/SYS ANALYS","FOREIGN TRAVEL COORD","MATERIALS MGMT SPEC","Protective Force Major (SOD)","SOFTWARE QUALITY MAN","FORENSIC DRUG AND AL","INFRASTRUCTURE&SITE","PROJECT LEADER TEAM","COMM ANALYST","PROPERTY MANAGER","PROCUREMENT ASSISTAN","ELECTRICAL SAFETY IN","ES&H SPEC","OPPENHEIMER FELLOW","CRITICALITY SAFETY A","ESCORT","TECH ADMIN SPEC","TELECOMMUNICATIONS P","PREVENTATIVE MAINTEN","STARTUP MANAGER","SCHEDULING COORDINAT","DOCUMENT CTRL ASSIST","FIRE PROTECTION MANA","SECURITY OFFICER (SO)","HI SCHOOL CO-OP","LASER/OPTL TEC","LAB ASSOCIATE STAFF","HIGH SCH CO-OP TEC","FIRE PROTECTION SPEC","PROJECT MANAGER","POST MASTERS SA","IT CUSTOMER SUPPORT","TRU WASTE CERTIFICAT","PROPERTY ADMINISTRAT","TRAINING MANAGER","EMERGENCY PLNG AND P","DRAFT/DESIGN TEC","ELEC TEC-S","EXPLOSIVES TEC","SE SECURITY ESCORT","TEC FAC OPERATOR","NUCLEAR MATERIALS SP","PHYSICIAN ASSISTANT","NETWORK SECURITY PRO","SUBCONTRACTS MANAGER","FACILITY COORDINATOR","ADMIN POLICY SPEC","COUNTERINTELLIGENCE","OPERATIONS SUPPORT M","FEYNMAN FELLOW","PROTECTIVE FORCE LT (FOD)","Security Police Officer (SPO) II","Protective Force Major (FOD)","Security Police Officer (SPO) III","Protective Force Lieutenant (SOD)","CYBERSECURITY TECHNI","COMPUTER OPERATOR TE","HPC DATA CENTER SPEC","SOLUTIONS ARCHITECT","DEPUTY DIVISION LEAD","COMPENSATION ANALYST","OCCUPATIONAL PHYSICI","OCCUPATIONAL MED COU","Security Police Officer (SPO) I","OCC NURSE","OCCUPATIONAL NURSE","DIAGNOSTIC TESTING T","OCCUPATIONAL MED MAN","OCCUPATIONAL MED CAS","HEALTH INFORMATION M","SENIOR ADVISOR","SECURITY MANAGER","CLASSIFIED LIBRARY C","DEPUTY OFFICE DIRECT","ADMINISTRATOR","INFORMATION RESOURCE","WRITER/EDITOR","CLASSIFICATION ANALY","SAFETY BASIS ANALYST","CONTRACTOR ASSUR SYS","INFORMATION RESEARCH","HEALTH PHYSICIST","NUC MTRLS SPEC","MC&A MANAGER","CUSTOMER LIAISON SPE","POST BACHELORS ST","LIBRARY PROFESSIONAL","BUSINESS MANAGER","RESERVATIONIST","DEPUTY ASSOCIATE DIR","ACCOUNTING ASSOCIATE","HUMAN RESOURCES REP","GROUP LEADER","Food Service","DESKTOP PUBLISHER","DEPUTY GROUP LEADER","ACCOUNTING MANAGER","ESH MANAGER","BENEFITS ANALYST","HR GENERALIST","HUMAN RESOURCES MANA","SECURITY ASSISTANT","SE PROFESSIONAL","HEALTH FITNESS SPECI","IMMIGRATION SPECIALI","FISCAL/BUDGET SPEC","FOREIGN VIS & ASSIGN","ACCOUNTING ASSISTANT","HRIS ANALYST","HR ASSISTANT","SERVICE CENTER REPRE","POST BS ADMIN","GENERAL CLERK","HR PROGRAMS SPECIALI","HR LABOR RELATIONS S","CUSTODIAN","ASSOCIATE DIRECTOR","PROPERTY SPECIALIST","EXECUTIVE ADVISOR","ADMIN RES ASST","PUBLIC REL SPEC","GOVERNMENT AFFAIRS S","TRANSPORTATION COMPL","BUDGETING GROUP LEAD","IT PROJECT MANAGER","TECHNICAL PROJECT MA","MEDIA PRODUCTION/SER","COMPUTER & INFORMATI","PROGRAM MANAGER (N","LINEMEN (ELECTRICAL)","DIVISION LEADER","OFFICE LEADER","HEALTH AND SAFETY TE","DEVELOPMENT AND FABR","EMERGENCY MGMT/RESP","DIGITAL PRINT & SCAN","ADMIN OPERATIONS SPE","RECORDS SPEC","PROGRAM MANAGER","EXEC OFC ADMIN","ELEC TEC","MAIL CLERK","INTELLIGENCE COMMUNI","MECH TEC","SECURITY SPECIALIST","GRADUATE STUDENT ST","SPECIAL MATERIALS MA","PRODUCTION CONTROL S","MANUFACTURING MANAGE","ELEC-MECH TEC","MACHINIST APPRENTICE","CHEM PROC TEC","TECHNICAL WORK MANAG","TECH ADMIN TEAM LEAD","NETWORK SYSTEMS TEC","MACH/FAB TEC","STARTUP SPECIALIST","MASON","FACILITY MAINTENANCE","FINANCIAL BUSINESS A","CONSTRUCTION ENGINEE","MAINTENANCE MANAGER","SUBCONTRACT TECHNICA","ACCOUNTANT","POST ASSOCIATES ST","WORK CONTROL PLANNER","MAINTENANCE SUPPORT","MACHINIST","HIGH SCHOOL STUDENT","DIRECTORS POSTDOC FE","MAINTENANCE COORDINA","NETWORK PROFESSIONAL","ENVIRONMENTAL TEC","QA/QC INSPECTOR","ROOFER","BUYER","SE TECHNICIAN","QPA SPECIALIST","PROJECT ADMIN","QUALITY ASSURANCE EN","POST BACHELORS SA","QUAL ASSURE SPEC","PACKAGING SPECIALIST","IT PROGRAM MANAGER","SYSTEMS PROGRAMMER","TRANSPORTATION SPECI","SE GENERAL SUPPORT S","PROJECT-PROGRAM DIRE","ELECTRICIAN HELPER (","DRIVER","MATERIALS MANAGEMENT","MANUFACTURING MGR","CHEM LAB TEC","SUPERINTENDENT","EXTERNAL","PAINTER","BIOCHEM LAB TEC","HEALTH/ENV TEC","OPERATOR","R&D MANAGER","CHIEF OF STAFF","OPERATIONS SPECIALIS","PROJECT ENGINEER","NUCLEAR AND HAZARDOU","PROCESS AND SAMPLING","IRONWORKER","R&D ENGINEER","MTRLS SCI TEC","TEST/MEAS TEC","RESEARCH TEC","CONTRACTOR","SCIENTIST","RESEARCH TECHNOLOGIS","CONTRACTOR ASSURANCE","RADIATION CONTROL TE","RADIATION PROTECTION","COMPUTING SYSTEMS TE","COMMUNICATIONS MANAG","EDITOR/WRITER","GRAPHIC ARTIST","ENGINEERED SYSTEMS T","ENGINEERING TECHNOLO","CARPENTER","ASBESTOS WORKER (INS","PIPE FITTER","OPERATING ENGINEER","POWER PLANT OPERATOR","ELECTRICIAN","SHEET METAL WORKER","LABORER","MATERIAL CNTRL & ACC","SECURITY SPEC","PROJECT ADMINISTRATO","OMBUDS MANAGER","POSTDOCTORAL RESEARC","ESH PROFESSIONAL","RECORDS KEEPER","STAFF RESEARCH ASST","APPLICATIONS ADMINIS","DATABASE ADMINISTRAT","TECH TRANSFER SPEC","TECH INFORMATION SPE","INDUSTRIAL HYGIENE &","TECHNOLOGY TRANSFER","ADMIN CLERK","UNDERGRAD STUDENT SA","ADMIN GEN","UNDERGRAD STUDENT ST","PROJECT CONTROLS","RECORDS MANAGEMENT S","TEAMSTER","UNDERGRAD ADMIN AIDE","POST MASTERS ST","ADMIN SPEC","ENVIRONMENTAL MANAGE","OPERATIONS MANAGER","WASTE MANAGEMENT SPE","ENVIRONMENTAL PROFES","UNDERGRADUATE TEC","COMPUTING SYSTEMS PR","ETHICS AUDIT MANAGER","ACQUISITIONS SERVICE","PROCUREMENT SYSTEMS","PROCUREMENT SPECIALI","PROCUREMENT CONTRACT","ACQUISITION OPERATIO","PROC/CONT ASST","SUBCONTRACT SPECIALI","ENGINEERING MANAGER","SYSTEM ADMINISTRATOR","CONFLICT OF INTEREST","COMPUTER TEC","AUDITOR","PROJECT LEADER","IT MANAGER","DOCUMENT CONTROL ANA","PROGRAM ADMIN","QUALITY ASSURANCE SP","TRAINING SPEC","SYSTEM ANALYST","TRAINING SPECIALIST","ATTORNEY","PARALEGAL","SOFTWARE DEVELOPER","TEAM LEADER","OPERATIONS SUPPORT S","LEAN SIX SIGMA","GRADUATE STUDENT SA","OMBUDS SPECIALIST","PROFESSIONAL STAFF A","ENGINEER","DESIGNER/DRAFTER","STAFF MEMBER","ARCHITECT","PROJECT CONTROLS MAN","WEB ADMINISTRATOR/DE","TRAINING COORDINATOR","ADMINISTRATIVE ASSIS","SCIENCE & TECHNOLOGY","INSTRUCTIONAL TECHNO","PLANNER"
]

let uniqueLocationsArr = [
"00-0077",
"00-0078",
"00-0199",
"00-0256",
"00-0480",
"00-0599",
"00-0646",
"00-0650",
"00-0726",
"00-0758",
"00-0759",
"00-0760",
"00-0762",
"00-0767",
"00-0768",
"00-0769",
"00-0770",
"00-0786",
"00-0787",
"00-0788",
"00-0793",
"00-0795",
"00-0850",
"00-0851",
"00-0907",
"00-1056",
"00-1078",
"00-1197",
"00-1237",
"00-1249",
"00-1302",
"00-1303",
"00-1308",
"00-1309",
"00-1320",
"00-1325",
"00-1328",
"00-1329",
"00-1330",
"00-1331",
"00-1355",
"00-1356",
"00-1359",
"03-0016",
"03-0021",
"03-0022",
"03-0024",
"03-0028",
"03-0029",
"03-0030",
"03-0032",
"03-0034",
"03-0035",
"03-0037",
"03-0038",
"03-0039",
"03-0040",
"03-0041",
"03-0046",
"03-0047",
"03-0055",
"03-0057",
"03-0065",
"03-0066",
"03-0067",
"03-0102",
"03-0123",
"03-0130",
"03-0132",
"03-0141",
"03-0142",
"03-0144",
"03-0145",
"03-0147",
"03-0149",
"03-0154",
"03-0159",
"03-0164",
"03-0169",
"03-0170",
"03-0182",
"03-0187",
"03-0194",
"03-0195",
"03-0200",
"03-0206",
"03-0207",
"03-0214",
"03-0215",
"03-0216",
"03-0218",
"03-0223",
"03-0228",
"03-0230",
"03-0231",
"03-0232",
"03-0233",
"03-0253",
"03-0261",
"03-0271",
"03-0316",
"03-0317",
"03-0322",
"03-0332",
"03-0334",
"03-0336",
"03-0390",
"03-0391",
"03-0410",
"03-0422",
"03-0440",
"03-0443",
"03-0451",
"03-0456",
"03-0463",
"03-0468",
"03-0470",
"03-0474",
"03-0477",
"03-0481",
"03-0484",
"03-0494",
"03-0495",
"03-0496",
"03-0502",
"03-0503",
"03-0508",
"03-0510",
"03-0512",
"03-0513",
"03-0514",
"03-0521",
"03-0524",
"03-0525",
"03-0530",
"03-0541",
"03-0551",
"03-0555",
"03-0558",
"03-0562",
"03-0563",
"03-0564",
"03-0565",
"03-0566",
"03-0567",
"03-0568",
"03-0586",
"03-0587",
"03-0592",
"03-0593",
"03-0698",
"03-0699",
"03-0782",
"03-0784",
"03-0786",
"03-0787",
"03-0788",
"03-0789",
"03-0791",
"03-0793",
"03-0795",
"03-0796",
"03-0798",
"03-0799",
"03-0804",
"03-0871",
"03-0872",
"03-0920",
"03-0923",
"03-0926",
"03-0927",
"03-0962",
"03-0963",
"03-0965",
"03-1076",
"03-1085",
"03-1188",
"03-1196",
"03-1228",
"03-1229",
"03-1264",
"03-1269",
"03-1348",
"03-1349",
"03-1353",
"03-1382",
"03-1389",
"03-1394",
"03-1398",
"03-1400",
"03-1402",
"03-1404",
"03-1405",
"03-1406",
"03-1408",
"03-1409",
"03-1410",
"03-1411",
"03-1414",
"03-1415",
"03-1420",
"03-1421",
"03-1423",
"03-1437",
"03-1441",
"03-1443",
"03-1446",
"03-1447",
"03-1448",
"03-1449",
"03-1498",
"03-1522",
"03-1528",
"03-1610",
"03-1615",
"03-1616",
"03-1617",
"03-1650",
"03-1651",
"03-1663",
"03-1673",
"03-1675",
"03-1682",
"03-1690",
"03-1691",
"03-1698",
"03-1701",
"03-1762",
"03-1781",
"03-1790",
"03-1798",
"03-1799",
"03-1806",
"03-1819",
"03-1837",
"03-1855",
"03-1868",
"03-1874",
"03-1887",
"03-1888",
"03-1898",
"03-1908",
"03-1911",
"03-1912",
"03-1930",
"03-1932",
"03-1933",
"03-1934",
"03-1936",
"03-1941",
"03-1951",
"03-1956",
"03-1957",
"03-1960",
"03-1966",
"03-2002",
"03-2003",
"03-2004",
"03-2005",
"03-2006",
"03-2007",
"03-2008",
"03-2009",
"03-2010",
"03-2011",
"03-2012",
"03-2028",
"03-2029",
"03-2031",
"03-2033",
"03-2034",
"03-2039",
"03-2040",
"03-2041",
"03-2042",
"03-2056",
"03-2058",
"03-2062",
"03-2130",
"03-2131",
"03-2132",
"03-2133",
"03-2141",
"03-2158",
"03-2197",
"03-2206",
"03-2207",
"03-2232",
"03-2234",
"03-2236",
"03-2238",
"03-2241",
"03-2245",
"03-2246",
"03-2254",
"03-2265",
"03-2266",
"03-2279",
"03-2280",
"03-2282",
"03-2283",
"03-2288",
"03-2289",
"03-2291",
"03-2292",
"03-2296",
"03-2306",
"03-2313",
"03-2318",
"03-2319",
"03-2320",
"03-2322",
"03-2327",
"03-2330",
"03-2333",
"03-2373",
"03-2382",
"03-2399",
"03-2403",
"03-2408",
"03-2409",
"03-2410",
"03-2411",
"03-2412",
"03-2413",
"03-2414",
"03-2421",
"03-2422",
"03-2423",
"03-2424",
"03-2425",
"03-2437",
"03-2447",
"03-2458",
"03-2459",
"03-2460",
"03-2461",
"03-2464",
"03-2465",
"03-2482",
"03-2511",
"03-2512",
"03-2514",
"03-2518",
"03-2519",
"03-2520",
"03-2521",
"03-2522",
"03-2524",
"03-2525",
"03-2528",
"03-2536",
"03-2538",
"03-2554",
"03-2590",
"03-2600",
"03-2602",
"03-2603",
"03-2604",
"03-3038",
"03-3046",
"03-3074",
"03-3078",
"03-3079",
"03-3080",
"03-3085",
"03-3088",
"03-3089",
"03-3091",
"03-3092",
"03-3093",
"03-4100",
"03-4200",
"05-0023",
"05-0024",
"05-0039",
"05-0040",
"05-0041",
"05-0046",
"05-0050",
"05-0051",
"05-0052",
"05-0053",
"05-0055",
"05-0056",
"05-0061",
"05-LAC",
"06-0037",
"06-0078",
"06-0091",
"06-0100",
"06-0120",
"06-0121",
"06-0122",
"06-0124",
"06-0125",
"06-0126",
"06-0129",
"06-0139",
"06-0143",
"06-0144",
"06-0145",
"06-LAC",
"08-0001",
"08-0002",
"08-0003",
"08-0021",
"08-0022",
"08-0023",
"08-0032",
"08-0070",
"08-0101",
"08-0112",
"08-0120",
"08-0177",
"08-0187",
"09-0020",
"09-0021",
"09-0022",
"09-0023",
"09-0024",
"09-0025",
"09-0026",
"09-0027",
"09-0028",
"09-0029",
"09-0030",
"09-0031",
"09-0032",
"09-0033",
"09-0034",
"09-0036",
"09-0037",
"09-0038",
"09-0039",
"09-0040",
"09-0041",
"09-0042",
"09-0044",
"09-0045",
"09-0046",
"09-0047",
"09-0048",
"09-0049",
"09-0050",
"09-0051",
"09-0052",
"09-0053",
"09-0054",
"09-0055",
"09-0156",
"09-0160",
"09-0204",
"09-0208",
"09-0214",
"09-0260",
"09-0261",
"09-0262",
"09-0263",
"09-0264",
"09-0265",
"09-0270",
"09-0278",
"09-0282",
"09-0292",
"09-0312",
"09-0314",
"09-0315",
"09-0316",
"09-0319",
"09-0322",
"11-0001",
"11-0002",
"11-0003",
"11-0004",
"11-0024",
"11-0025",
"11-0030",
"11-0033",
"11-0036",
"11-0045",
"11-0074",
"11-0075",
"11-0077",
"14-0005",
"14-0006",
"14-0022",
"14-0023",
"14-0024",
"14-0030",
"14-0034",
"14-0038",
"14-0039",
"14-0040",
"14-0043",
"14-0057",
"14-0069",
"15-0009",
"15-0027",
"15-0037",
"15-0041",
"15-0042",
"15-0043",
"15-0044",
"15-0045",
"15-0092",
"15-0138",
"15-0141",
"15-0183",
"15-0184",
"15-0185",
"15-0186",
"15-0187",
"15-0188",
"15-0189",
"15-0198",
"15-0199",
"15-0200",
"15-0201",
"15-0202",
"15-0204",
"15-0233",
"15-0241",
"15-0242",
"15-0243",
"15-0263",
"15-0276",
"15-0280",
"15-0285",
"15-0290",
"15-0306",
"15-0307",
"15-0310",
"15-0312",
"15-0313",
"15-0319",
"15-0327",
"15-0328",
"15-0332",
"15-0333",
"15-0334",
"15-0340",
"15-0342",
"15-0343",
"15-0345",
"15-0346",
"15-0347",
"15-0348",
"15-0349",
"15-0350",
"15-0351",
"15-0353",
"15-0355",
"15-0356",
"15-0357",
"15-0360",
"15-0363",
"15-0365",
"15-0366",
"15-0367",
"15-0369",
"15-0370",
"15-0376",
"15-0381",
"15-0382",
"15-0383",
"15-0432",
"15-0433",
"15-0434",
"15-0435",
"15-0436",
"15-0446",
"15-0461",
"15-0462",
"15-0463",
"15-0467",
"15-0468",
"15-0469",
"15-0475",
"15-0484",
"15-0494",
"15-0496",
"15-0497",
"15-0498",
"15-0499",
"15-0500",
"15-0503",
"15-0532",
"15-0534",
"15-0536",
"15-0554",
"15-0555",
"15-0556",
"15-0563",
"15-0564",
"15-0565",
"15-0566",
"15-0567",
"15-0570",
"15-0571",
"15-0572",
"15-0573",
"15-0574",
"15-0575",
"15-0576",
"15-0577",
"15-0587",
"15-0588",
"15-0591",
"15-0592",
"15-0593",
"15-0597",
"15-0600",
"15-0601",
"15-0603",
"15-0604",
"15-0605",
"15-0606",
"15-0608",
"15-0609",
"15-0614",
"15-0615",
"15-0619",
"15-0621",
"15-0622",
"15-0624",
"15-0625",
"15-0626",
"15-0651",
"15-0658",
"15-0669",
"15-0672",
"15-0674",
"15-0691",
"15-0701",
"15-0702",
"15-1526",
"16-0016",
"16-0054",
"16-0058",
"16-0088",
"16-0171",
"16-0180",
"16-0192",
"16-0200",
"16-0202",
"16-0203",
"16-0204",
"16-0205",
"16-0207",
"16-0210",
"16-0218",
"16-0247",
"16-0260",
"16-0261",
"16-0263",
"16-0265",
"16-0267",
"16-0277",
"16-0278",
"16-0280",
"16-0281",
"16-0283",
"16-0285",
"16-0286",
"16-0294",
"16-0295",
"16-0300",
"16-0301",
"16-0302",
"16-0303",
"16-0304",
"16-0305",
"16-0306",
"16-0307",
"16-0308",
"16-0319",
"16-0328",
"16-0329",
"16-0330",
"16-0332",
"16-0360",
"16-0362",
"16-0363",
"16-0374",
"16-0378",
"16-0380",
"16-0389",
"16-0392",
"16-0399",
"16-0400",
"16-0401",
"16-0402",
"16-0405",
"16-0406",
"16-0410",
"16-0411",
"16-0413",
"16-0414",
"16-0415",
"16-0430",
"16-0435",
"16-0437",
"16-0441",
"16-0449",
"16-0450",
"16-0454",
"16-0460",
"16-0462",
"16-0463",
"16-0468",
"16-0469",
"16-0470",
"16-0471",
"16-0516",
"16-0517",
"16-0530",
"16-0531",
"16-0532",
"16-0533",
"16-0535",
"16-0599",
"16-0668",
"16-0669",
"16-0824",
"16-0900",
"16-0901",
"16-0926",
"16-0927",
"16-0928",
"16-0929",
"16-0933",
"16-0936",
"16-0946",
"16-0969",
"16-0973",
"16-0979",
"16-0980",
"16-0981",
"16-0996",
"16-0997",
"16-0998",
"16-0999",
"16-1182",
"16-1188",
"16-1189",
"16-1190",
"16-1191",
"16-1196",
"16-1197",
"16-1198",
"16-1362",
"16-1363",
"16-1364",
"16-1365",
"16-1371",
"16-1373",
"16-1374",
"16-1380",
"16-1381",
"16-1385",
"16-1416",
"16-1449",
"16-1450",
"16-1451",
"16-1459",
"16-1464",
"16-1469",
"16-1473",
"16-1480",
"16-1483",
"16-1484",
"16-1487",
"16-1490",
"16-1491",
"16-1492",
"16-1507",
"16-1508",
"16-1513",
"16-1514",
"16-1523",
"16-1524",
"16-1525",
"16-1528",
"16-1550",
"16-1552",
"16-1562",
"16-1577",
"16-1579",
"18-0001",
"18-0002",
"18-0005",
"18-0023",
"18-0026",
"18-0029",
"18-0032",
"18-0116",
"18-0186",
"18-0302",
"18-0311",
"18-LAC",
"21-0110",
"21-0111",
"21-0112",
"21-0113",
"21-0257",
"21-0345",
"21-1023",
"21-1024",
"21-1025",
"21-1026",
"21-8000",
"21-9000",
"21-9001",
"22-0001",
"22-0005",
"22-0007",
"22-0008",
"22-0009",
"22-0010",
"22-0011",
"22-0012",
"22-0014",
"22-0015",
"22-0016",
"22-0017",
"22-0018",
"22-0019",
"22-0021",
"22-0022",
"22-0023",
"22-0024",
"22-0025",
"22-0032",
"22-0034",
"22-0035",
"22-0052",
"22-0066",
"22-0067",
"22-0068",
"22-0069",
"22-0076",
"22-0090",
"22-0091",
"22-0092",
"22-0093",
"22-0094",
"22-0095",
"22-0096",
"22-0097",
"22-0098",
"22-0099",
"22-0109",
"22-0110",
"22-0111",
"22-0112",
"22-0115",
"22-0118",
"22-0119",
"22-0120",
"22-0123",
"22-0163",
"22-0169",
"22-0172",
"22-0173",
"22-0174",
"22-0175",
"22-0177",
"22-9501",
"22-9502",
"33-0016",
"33-0019",
"33-0020",
"33-0022",
"33-0023",
"33-0024",
"33-0025",
"33-0026",
"33-0027",
"33-0028",
"33-0036",
"33-0037",
"33-0039",
"33-0087",
"33-0088",
"33-0089",
"33-0091",
"33-0095",
"33-0113",
"33-0114",
"33-0129",
"33-0151",
"33-0168",
"33-0173",
"33-0175",
"33-0178",
"33-0208",
"33-0209",
"33-0211",
"33-0217",
"33-0268",
"33-0271",
"33-0280",
"33-0283",
"33-0284",
"33-0285",
"33-0286",
"33-0287",
"33-0294",
"33-0295",
"33-0296",
"33-0297",
"33-0303",
"33-0304",
"33-0305",
"33-0306",
"33-0307",
"33-0308",
"33-0309",
"33-0310",
"33-0311",
"33-0312",
"33-0313",
"33-0315",
"33-0325",
"33-0328",
"33-0352",
"33-0353",
"33-0355",
"33-0360",
"35-0001",
"35-0002",
"35-0025",
"35-0027",
"35-0029",
"35-0034",
"35-0035",
"35-0053",
"35-0066",
"35-0067",
"35-0068",
"35-0085",
"35-0086",
"35-0087",
"35-0088",
"35-0115",
"35-0124",
"35-0125",
"35-0126",
"35-0127",
"35-0128",
"35-0129",
"35-0186",
"35-0188",
"35-0189",
"35-0207",
"35-0213",
"35-0218",
"35-0238",
"35-0239",
"35-0254",
"35-0255",
"35-0263",
"35-0294",
"35-0301",
"35-0309",
"35-0310",
"35-0325",
"35-0330",
"35-0331",
"35-0344",
"35-0345",
"35-0346",
"35-0347",
"35-0354",
"35-0355",
"35-0356",
"35-0366",
"35-0384",
"35-0385",
"35-0386",
"35-0389",
"35-0392",
"35-0402",
"35-0407",
"35-0421",
"35-0423",
"35-0424",
"35-0425",
"35-0437",
"35-0441",
"35-0455",
"35-0458",
"35-0473",
"35-0507",
"35-0510",
"35-0511",
"35-0512",
"35-0513",
"35-0517",
"35-0518",
"35-0519",
"35-0520",
"35-0521",
"35-0538",
"35-0539",
"35-0540",
"35-0541",
"35-0578",
"35-0585",
"35-0586",
"35-0589",
"35-0590",
"35-0591",
"35-0593",
"35-0594",
"35-0595",
"35-0597",
"35-0598",
"35-0599",
"35-0600",
"35-0601",
"35-0602",
"35-0603",
"35-0604",
"35-0605",
"35-0606",
"35-0607",
"35-0610",
"35-0611",
"35-0612",
"35-0623",
"35-0625",
"35-0626",
"35-0630",
"35-0632",
"36-0001",
"36-0003",
"36-0004",
"36-0005",
"36-0006",
"36-0007",
"36-0008",
"36-0009",
"36-0010",
"36-0011",
"36-0012",
"36-0013",
"36-0019",
"36-0020",
"36-0021",
"36-0046",
"36-0047",
"36-0048",
"36-0053",
"36-0055",
"36-0078",
"36-0083",
"36-0086",
"36-0102",
"36-0103",
"36-0104",
"36-0107",
"36-0110",
"36-0112",
"36-0113",
"36-0117",
"36-0119",
"36-0120",
"36-0121",
"36-0122",
"36-0124",
"36-0125",
"36-0134",
"36-0136",
"36-0194",
"36-0205",
"36-0206",
"36-0214",
"36-0216",
"36-0220",
"36-0228",
"36-0236",
"36-0237",
"36-0238",
"36-0239",
"36-0240",
"36-0241",
"36-0251",
"36-0252",
"36-0253",
"36-0276",
"36-0277",
"36-0278",
"37-0004",
"37-0005",
"37-0006",
"37-0007",
"37-0008",
"37-0009",
"37-0010",
"37-0011",
"37-0012",
"37-0013",
"37-0014",
"37-0015",
"37-0018",
"37-0019",
"37-0020",
"37-0021",
"37-0022",
"37-0023",
"37-0024",
"37-0025",
"37-0026",
"39-0003",
"39-0004",
"39-0005",
"39-0006",
"39-0007",
"39-0008",
"39-0009",
"39-0056",
"39-0057",
"39-0062",
"39-0063",
"39-0064",
"39-0067",
"39-0068",
"39-0069",
"39-0077",
"39-0088",
"39-0089",
"39-0095",
"39-0096",
"39-0097",
"39-0098",
"39-0111",
"39-0115",
"39-0116",
"39-0119",
"39-0121",
"39-0123",
"39-0125",
"39-0137",
"39-0138",
"39-0139",
"39-0141",
"39-0142",
"39-0143",
"39-0144",
"39-0146",
"39-0147",
"39-0150",
"39-0157",
"39-0158",
"39-0164",
"39-0167",
"39-0169",
"39-0170",
"39-0175",
"39-0176",
"39-0177",
"39-0182",
"39-0207",
"39-0210",
"39-0211",
"39-0212",
"39-0216",
"40-0001",
"40-0002",
"40-0003",
"40-0005",
"40-0006",
"40-0007",
"40-0008",
"40-0009",
"40-0010",
"40-0011",
"40-0012",
"40-0013",
"40-0014",
"40-0015",
"40-0016",
"40-0017",
"40-0018",
"40-0023",
"40-0036",
"40-0037",
"40-0038",
"40-0039",
"40-0040",
"40-0041",
"40-0045",
"40-0054",
"40-0058",
"40-0064",
"40-0071",
"40-0074",
"40-0090",
"40-0106",
"40-0107",
"40-0109",
"40-0111",
"40-0112",
"40-0115",
"40-0124",
"41-0001",
"41-0002",
"41-0003",
"41-0004",
"41-0006",
"41-0007",
"41-0047",
"41-0064",
"43-0001",
"43-0010",
"43-0012",
"43-0022",
"43-0028",
"43-0044",
"43-0046",
"43-0047",
"43-0049",
"43-0061",
"46-0001",
"46-0016",
"46-0017",
"46-0018",
"46-0024",
"46-0025",
"46-0030",
"46-0031",
"46-0037",
"46-0042",
"46-0058",
"46-0074",
"46-0075",
"46-0077",
"46-0088",
"46-0154",
"46-0158",
"46-0161",
"46-0165",
"46-0178",
"46-0179",
"46-0187",
"46-0188",
"46-0200",
"46-0208",
"46-0217",
"46-0218",
"46-0221",
"46-0239",
"46-0240",
"46-0247",
"46-0250",
"46-0252",
"46-0255",
"46-0257",
"46-0258",
"46-0271",
"46-0274",
"46-0276",
"46-0285",
"46-0294",
"46-0296",
"46-0301",
"46-0307",
"46-0308",
"46-0311",
"46-0319",
"46-0320",
"46-0321",
"46-0322",
"46-0326",
"46-0333",
"46-0334",
"46-0335",
"46-0336",
"46-0337",
"46-0338",
"46-0339",
"46-0340",
"46-0347",
"46-0357",
"46-0360",
"46-0375",
"46-0398",
"46-0400",
"46-0401",
"46-0416",
"46-0418",
"46-0419",
"46-0427",
"46-0431",
"46-0448",
"46-0449",
"46-0450",
"46-0451",
"46-0452",
"46-0455",
"46-0456",
"46-0459",
"46-0461",
"46-0463",
"46-0467",
"46-0468",
"46-0477",
"46-0478",
"46-0479",
"46-0480",
"46-0481",
"46-0483",
"46-0485",
"46-0487",
"46-0488",
"46-0490",
"46-0492",
"46-0531",
"46-0532",
"46-0535",
"46-0537",
"46-0547",
"46-0550",
"46-0551",
"46-0552",
"46-0553",
"46-0555",
"46-0557",
"46-0558",
"46-0559",
"46-0560",
"46-0561",
"46-0562",
"46-0567",
"46-0568",
"46-0571",
"46-0572",
"46-0577",
"46-0578",
"46-0584",
"46-0590",
"46-0615",
"46-0616",
"48-0001",
"48-0008",
"48-0017",
"48-0026",
"48-0028",
"48-0029",
"48-0034",
"48-0038",
"48-0039",
"48-0041",
"48-0045",
"48-0063",
"48-0089",
"48-0100",
"48-0107",
"48-0111",
"48-0154",
"48-0168",
"48-0169",
"48-0170",
"48-0171",
"48-0174",
"48-0180",
"48-0181",
"48-0182",
"48-0183",
"48-0184",
"48-0185",
"48-0186",
"48-0187",
"48-0188",
"48-0189",
"48-0190",
"48-0192",
"48-0193",
"48-0194",
"48-0195",
"48-0208",
"48-0214",
"48-0215",
"48-0216",
"48-0217",
"48-0218",
"48-0220",
"48-0221",
"48-0222",
"48-0223",
"48-0224",
"48-0231",
"48-0234",
"48-0235",
"48-0236",
"48-0242",
"48-0251",
"48-0254",
"48-8000",
"48-9000",
"48-9002",
"49-0100",
"49-0102",
"49-0113",
"49-0114",
"49-0115",
"49-0123",
"49-0124",
"49-0138",
"49-0141",
"49-0142",
"49-0143",
"49-0145",
"49-0147",
"49-0150",
"49-0151",
"49-0153",
"49-0167",
"49-0168",
"49-0176",
"49-0197",
"49-0198",
"49-0199",
"49-0206",
"49-0207",
"49-0208",
"49-0209",
"49-0210",
"49-0219",
"49-0243",
"49-0249",
"49-0250",
"49-0251",
"49-0252",
"50-0001",
"50-0002",
"50-0004",
"50-0005",
"50-0037",
"50-0042",
"50-0054",
"50-0066",
"50-0069",
"50-0075",
"50-0084",
"50-0090",
"50-0105",
"50-0107",
"50-0114",
"50-0117",
"50-0118",
"50-0148",
"50-0160",
"50-0183",
"50-0184",
"50-0187",
"50-0188",
"50-0191",
"50-0194",
"50-0201",
"50-0208",
"50-0209",
"50-0210",
"50-0211",
"50-0212",
"50-0230",
"50-0248",
"50-0250",
"50-0251",
"50-0252",
"50-0257",
"50-0258",
"50-0261",
"50-0263",
"50-0267",
"50-0295",
"50-0296",
"50-0323",
"50-0324",
"50-9001",
"50-9002",
"50-9006",
"50-9007",
"50-9008",
"50-9500",
"51-0011",
"51-0012",
"51-0021",
"51-0023",
"51-0025",
"51-0026",
"51-0027",
"51-0038",
"51-0039",
"51-0054",
"51-0056",
"51-0065",
"51-0066",
"51-0067",
"51-0073",
"51-0074",
"51-0080",
"51-0081",
"51-0082",
"51-0103",
"51-0104",
"51-0118",
"51-0119",
"51-0122",
"51-0123",
"51-0141",
"51-0142",
"51-0146",
"51-0149",
"51-0150",
"51-0151",
"51-0152",
"52-0001",
"52-0011",
"52-0013",
"52-0033",
"52-0042",
"52-0044",
"52-0045",
"52-0114",
"52-0115",
"52-0116",
"52-0117",
"52-0118",
"52-0181",
"52-0183",
"53-0001",
"53-0002",
"53-0003",
"53-0004",
"53-0005",
"53-0006",
"53-0007",
"53-0008",
"53-0010",
"53-0014",
"53-0015",
"53-0016",
"53-0017",
"53-0018",
"53-0019",
"53-0022",
"53-0023",
"53-0024",
"53-0025",
"53-0026",
"53-0027",
"53-0028",
"53-0029",
"53-0030",
"53-0031",
"53-0032",
"53-0034",
"53-0035",
"53-0036",
"53-0037",
"53-0039",
"53-0041",
"53-0054",
"53-0055",
"53-0056",
"53-0062",
"53-0070",
"53-0293",
"53-0315",
"53-0353",
"53-0354",
"53-0355",
"53-0356",
"53-0364",
"53-0365",
"53-0368",
"53-0369",
"53-0370",
"53-0371",
"53-0372",
"53-0374",
"53-0385",
"53-0387",
"53-0390",
"53-0391",
"53-0400",
"53-0404",
"53-0406",
"53-0407",
"53-0408",
"53-0446",
"53-0469",
"53-0491",
"53-0499",
"53-0500",
"53-0501",
"53-0505",
"53-0510",
"53-0511",
"53-0526",
"53-0541",
"53-0575",
"53-0595",
"53-0596",
"53-0597",
"53-0598",
"53-0599",
"53-0600",
"53-0601",
"53-0602",
"53-0603",
"53-0604",
"53-0605",
"53-0606",
"53-0607",
"53-0608",
"53-0609",
"53-0610",
"53-0612",
"53-0614",
"53-0615",
"53-0616",
"53-0617",
"53-0618",
"53-0622",
"53-0623",
"53-0634",
"53-0637",
"53-0639",
"53-0640",
"53-0644",
"53-0645",
"53-0671",
"53-0676",
"53-0679",
"53-0680",
"53-0681",
"53-0682",
"53-0683",
"53-0684",
"53-0685",
"53-0686",
"53-0687",
"53-0688",
"53-0689",
"53-0696",
"53-0697",
"53-0698",
"53-0699",
"53-0700",
"53-0701",
"53-0702",
"53-0703",
"53-0704",
"53-0705",
"53-0706",
"53-0707",
"53-0708",
"53-0709",
"53-0710",
"53-0712",
"53-0713",
"53-0714",
"53-0716",
"53-0717",
"53-0718",
"53-0719",
"53-0720",
"53-0721",
"53-0722",
"53-0723",
"53-0724",
"53-0726",
"53-0733",
"53-0737",
"53-0738",
"53-0739",
"53-0740",
"53-0741",
"53-0742",
"53-0745",
"53-0746",
"53-0747",
"53-0748",
"53-0754",
"53-0755",
"53-0757",
"53-0758",
"53-0759",
"53-0760",
"53-0765",
"53-0774",
"53-0776",
"53-0777",
"53-0778",
"53-0779",
"53-0780",
"53-0781",
"53-0782",
"53-0783",
"53-0784",
"53-0786",
"53-0787",
"53-0803",
"53-0804",
"53-0805",
"53-0806",
"53-0808",
"53-0809",
"53-0812",
"53-0815",
"53-0816",
"53-0818",
"53-0819",
"53-0822",
"53-0823",
"53-0826",
"53-0828",
"53-0830",
"53-0831",
"53-0832",
"53-0833",
"53-0834",
"53-0835",
"53-0836",
"53-0839",
"53-0840",
"53-0841",
"53-0844",
"53-0845",
"53-0846",
"53-0847",
"53-0848",
"53-0849",
"53-0850",
"53-0852",
"53-0856",
"53-0859",
"53-0860",
"53-0862",
"53-0865",
"53-0866",
"53-0870",
"53-0872",
"53-0873",
"53-0874",
"53-0878",
"53-0882",
"53-0883",
"53-0885",
"53-0886",
"53-0890",
"53-0894",
"53-0898",
"53-0901",
"53-0902",
"53-0904",
"53-0916",
"53-0918",
"53-0922",
"53-0923",
"53-0924",
"53-0925",
"53-0926",
"53-0928",
"53-0929",
"53-0930",
"53-0933",
"53-0934",
"53-0939",
"53-0940",
"53-0941",
"53-0942",
"53-0945",
"53-0950",
"53-0951",
"53-0952",
"53-0954",
"53-0958",
"53-0959",
"53-0960",
"53-0961",
"53-0963",
"53-0964",
"53-0969",
"53-0970",
"53-0972",
"53-0973",
"53-0974",
"53-0976",
"53-0977",
"53-0978",
"53-0979",
"53-0983",
"53-0984",
"53-0986",
"53-0987",
"53-0988",
"53-1020",
"53-1021",
"53-1022",
"53-1030",
"53-1031",
"53-1032",
"53-1036",
"53-1038",
"53-1039",
"53-1043",
"53-1045",
"53-1046",
"53-1050",
"53-1053",
"53-1054",
"53-1062",
"53-1064",
"53-1073",
"53-1088",
"53-1090",
"53-1097",
"53-1114",
"53-1116",
"53-1117",
"53-1118",
"53-1120",
"53-1121",
"53-1136",
"53-1139",
"53-1145",
"53-1146",
"53-1161",
"53-1179",
"53-1189",
"53-1192",
"53-1193",
"53-1194",
"53-1195",
"53-1196",
"53-1198",
"53-1203",
"53-1204",
"53-1244",
"53-1246",
"53-1247",
"53-1248",
"53-1257",
"53-1258",
"53-1265",
"53-1270",
"53-1271",
"53-1272",
"53-1282",
"53-1285",
"53-1289",
"53-1294",
"53-1300",
"53-1301",
"53-1302",
"53-1303",
"53-1305",
"53-1306",
"53-1307",
"53-1312",
"53-1313",
"53-1316",
"54-0002",
"54-0008",
"54-0011",
"54-0020",
"54-0025",
"54-0031",
"54-0032",
"54-0033",
"54-0035",
"54-0036",
"54-0037",
"54-0038",
"54-0039",
"54-0048",
"54-0049",
"54-0050",
"54-0051",
"54-0055",
"54-0057",
"54-0058",
"54-0060",
"54-0062",
"54-0068",
"54-0069",
"54-0070",
"54-0082",
"54-0083",
"54-0084",
"54-0088",
"54-0092",
"54-0094",
"54-0111",
"54-0144",
"54-0145",
"54-0146",
"54-0153",
"54-0154",
"54-0155",
"54-0156",
"54-0157",
"54-0169",
"54-0174",
"54-0175",
"54-0176",
"54-0177",
"54-0186",
"54-0212",
"54-0215",
"54-0218",
"54-0224",
"54-0229",
"54-0230",
"54-0231",
"54-0232",
"54-0242",
"54-0245",
"54-0246",
"54-0247",
"54-0249",
"54-0273",
"54-0275",
"54-0276",
"54-0282",
"54-0283",
"54-0289",
"54-0295",
"54-0304",
"54-0306",
"54-0315",
"54-0321",
"54-0323",
"54-0324",
"54-0325",
"54-0326",
"54-0327",
"54-0328",
"54-0353",
"54-0356",
"54-0358",
"54-0359",
"54-0365",
"54-0366",
"54-0367",
"54-0370",
"54-0371",
"54-0372",
"54-0373",
"54-0375",
"54-0377",
"54-0378",
"54-0379",
"54-0380",
"54-0381",
"54-0382",
"54-0383",
"54-0384",
"54-0385",
"54-0386",
"54-0387",
"54-0388",
"54-0389",
"54-0390",
"54-0391",
"54-0392",
"54-0393",
"54-0394",
"54-0395",
"54-0396",
"54-0397",
"54-0398",
"54-0399",
"54-0400",
"54-0401",
"54-0402",
"54-0412",
"54-0419",
"54-0421",
"54-0424",
"54-0425",
"54-0426",
"54-0427",
"54-0428",
"54-0429",
"54-0431",
"54-0438",
"54-0440",
"54-0441",
"54-0444",
"54-0445",
"54-0449",
"54-0450",
"54-0454",
"54-0458",
"54-0459",
"54-0460",
"54-0462",
"54-0465",
"54-0466",
"54-0467",
"54-0476",
"54-0477",
"54-0478",
"54-0479",
"54-0480",
"54-0481",
"54-0483",
"54-0484",
"54-0485",
"54-0486",
"54-0487",
"54-0488",
"54-0489",
"54-0490",
"54-0491",
"54-0492",
"54-0497",
"54-0498",
"54-0499",
"54-0501",
"54-0506",
"54-0522",
"54-0523",
"54-0527",
"54-0532",
"54-0533",
"54-0541",
"54-0545",
"54-0546",
"54-0547",
"54-0555",
"54-0557",
"54-0559",
"54-0560",
"54-0571",
"54-0572",
"54-0573",
"54-0574",
"54-0577",
"54-0578",
"54-0582",
"54-0589",
"54-1001",
"54-1002",
"54-1003",
"54-1005",
"54-1010",
"54-1014",
"54-1024",
"54-1025",
"54-1027",
"54-1028",
"54-1030",
"54-1041",
"54-1058",
"54-1059",
"54-1490",
"54-1491",
"54-9001",
"54-9500",
"54-LAC",
"55-0001",
"55-0002",
"55-0003",
"55-0004",
"55-0005",
"55-0006",
"55-0008",
"55-0009",
"55-0010",
"55-0011",
"55-0012",
"55-0013",
"55-0014",
"55-0018",
"55-0020",
"55-0021",
"55-0022",
"55-0028",
"55-0039",
"55-0042",
"55-0047",
"55-0048",
"55-0053",
"55-0054",
"55-0055",
"55-0066",
"55-0100",
"55-0101",
"55-0114",
"55-0125",
"55-0127",
"55-0142",
"55-0147",
"55-0148",
"55-0150",
"55-0151",
"55-0154",
"55-0155",
"55-0157",
"55-0158",
"55-0169",
"55-0172",
"55-0174",
"55-0176",
"55-0180",
"55-0185",
"55-0188",
"55-0190",
"55-0191",
"55-0192",
"55-0215",
"55-0249",
"55-0258",
"55-0259",
"55-0268",
"55-0270",
"55-0274",
"55-0276",
"55-0313",
"55-0314",
"55-0317",
"55-0335",
"55-0336",
"55-0339",
"55-0340",
"55-0342",
"55-0343",
"55-0344",
"55-0347",
"55-0348",
"55-0351",
"55-0355",
"55-0358",
"55-0362",
"55-0364",
"55-0365",
"55-0367",
"55-0370",
"55-0371",
"55-0391",
"55-0400",
"55-0432",
"55-0433",
"55-0434",
"55-0440",
"55-0441",
"55-0442",
"55-0560",
"57-0007",
"57-0035",
"57-0037",
"57-0049",
"57-0083",
"57-0124",
"58-0049",
"58-0050",
"58-0051",
"59-0001",
"59-0003",
"59-0014",
"59-0053",
"59-0096",
"59-0097",
"59-0099",
"59-0103",
"59-0116",
"59-0117",
"59-0122",
"59-0153",
"59-0187",
"59-0193",
"59-0194",
"59-0195",
"59-0198",
"59-0199",
"59-0200",
"59-0201",
"59-0202",
"60-0001",
"60-0002",
"60-0003",
"60-0004",
"60-0006",
"60-0007",
"60-0008",
"60-0009",
"60-0010",
"60-0011",
"60-0012",
"60-0014",
"60-0015",
"60-0017",
"60-0019",
"60-0020",
"60-0024",
"60-0025",
"60-0026",
"60-0027",
"60-0029",
"60-0035",
"60-0036",
"60-0045",
"60-0066",
"60-0067",
"60-0068",
"60-0069",
"60-0070",
"60-0071",
"60-0072",
"60-0079",
"60-0085",
"60-0086",
"60-0087",
"60-0091",
"60-0099",
"60-0107",
"60-0108",
"60-0119",
"60-0121",
"60-0124",
"60-0126",
"60-0127",
"60-0128",
"60-0129",
"60-0131",
"60-0137",
"60-0138",
"60-0140",
"60-0141",
"60-0145",
"60-0150",
"60-0160",
"60-0161",
"60-0162",
"60-0166",
"60-0169",
"60-0174",
"60-0175",
"60-0178",
"60-0192",
"60-0193",
"60-0195",
"60-0196",
"60-0197",
"60-0198",
"60-0199",
"60-0200",
"60-0201",
"60-0202",
"60-0203",
"60-0208",
"60-0213",
"60-0215",
"60-0216",
"60-0217",
"60-0218",
"60-0220",
"60-0224",
"60-0225",
"60-0226",
"60-0227",
"60-0228",
"60-0229",
"60-0230",
"60-0231",
"60-0232",
"60-0233",
"60-0234",
"60-0235",
"60-0236",
"60-0237",
"60-0238",
"60-0239",
"60-0240",
"60-0241",
"60-0242",
"60-0245",
"60-0248",
"60-0249",
"60-0250",
"60-0251",
"60-0263",
"60-0264",
"60-0265",
"60-0270",
"60-0271",
"60-0272",
"60-0275",
"60-0276",
"60-0278",
"60-0280",
"60-0283",
"60-0284",
"60-0285",
"60-0286",
"60-0287",
"60-0288",
"60-0289",
"60-0290",
"60-0291",
"60-0292",
"60-0293",
"60-0294",
"60-0295",
"60-0296",
"60-0297",
"60-0298",
"60-0299",
"60-0300",
"60-0301",
"60-0302",
"60-0303",
"60-0304",
"60-0305",
"60-0306",
"60-0308",
"60-0309",
"60-0311",
"60-0314",
"60-0320",
"60-0321",
"60-0323",
"60-0324",
"60-0326",
"60-0327",
"60-0328",
"60-0329",
"60-0330",
"60-0331",
"60-0332",
"60-0333",
"60-0334",
"60-0335",
"60-0336",
"60-0337",
"60-0338",
"60-0339",
"60-0343",
"60-0344",
"60-2138",
"60-9003",
"61-0042",
"61-0069",
"63-0003",
"63-0111",
"63-0121",
"63-0144",
"63-0146",
"63-0147",
"63-0148",
"63-0149",
"63-0150",
"63-0151",
"63-0152",
"63-0153",
"63-0154",
"63-0160",
"63-9005",
"63-9006",
"63-9008",
"63-9009",
"64-0001",
"64-0003",
"64-0038",
"64-0039",
"64-0043",
"64-0052",
"64-0063",
"64-0064",
"64-0065",
"64-0067",
"64-0068",
"66-0001",
"69-0001",
"69-0006",
"69-0007",
"69-0008",
"69-0026",
"69-0030",
"69-0032",
"69-0033",
"69-0051",
"69-0052",
"69-0053",
"69-0054",
"69-0056",
"69-0057",
"69-0058",
"69-9000",
"71-0002",
"71-0003",
"72-0008",
"72-0009",
"72-0011",
"72-0012",
"72-0013",
"72-0014",
"72-0015",
"72-0016",
"72-0036",
"72-0037",
"72-0038",
"72-0039",
"72-0040",
"72-0041",
"72-0052",
"72-0054",
"72-0055",
"72-0057",
"72-0060",
"72-0062",
"72-0063",
"72-0066",
"72-0079",
"72-0080",
"72-1419",
"72-1422",
"73-0005",
"73-0009",
"73-0010",
"73-0011",
"73-0012",
"73-0013",
"73-0014",
"73-0015",
]

function makeObjects(arr) {
    return arr.map(function(element){
    let obj = 
    {
        value: element,
        label: element
    }
    return obj
})}

let uniqueFactors = makeObjects(uniqueFactorsArr)
let uniqueLocations = makeObjects(uniqueLocationsArr)
let uniqueJobs = makeObjects(uniqueJobsArr)

export  {uniqueLocations, uniqueFactors, uniqueJobs}