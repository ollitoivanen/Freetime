//screens
export const HOME_SCREEN = 'HomeScreen';

//Map style

export const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dbdbdb',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b8faff',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];

//Redux action names
export const ACTION_LOAD_ACTIVITIES = 'ActionLoadActivities';

//Activity types

export const ACTIVITY_TYPES = [
  'Ravintola',
  'Kahvila',
  'Baari',
  'Liikunta',
  'Maisema',
  'Matka',
  'Roadtrip',
];

export const COLORS = {
  lightPurple: '#dad6ff',
  darkPurple: '#40006e',
};

//Activity point info types
export const ACTIVITY_POINT_INFO_TYPES = [
  'MapViewRoute',
  'MapViewPoint',
  'ListView',
  'LinkView',
];

export const TERVETULOA = {
  imageSource: require('Freetime/src/Images/tervetuloa.jpg'),
  name: 'Tervetuloa!',
  description:
    'Freetime.Åbo auttaa sinua ja kavereitasi löytämään tekemistä syys- ja talvi-iltoihin! \n\nTämän sovelluksen on kehittänyt Turussa opiskeleva nuorukainen, kuka tietää tarkalleen kuinka haastavaa ja stressaavaa opiskeluaika voi olla. Siksi halusinkin ottaa yhden stressinaiheen pois, ja luoda valmiita ideoita päiviesi menoksi. \n\nIdeoita tulee sovellukseen tietyin ajoin lisää, päivittyen vuodenajan ja muiden seikkoijen mukaan!',
  points: [],
};

export const AAMUKAVELY_URHEILUPUISTOSSA = {
  imageSource: require('Freetime/src/Images/aamukavely_urheilupuistossa.jpg'),
  name: 'Aamukävely urheilupuistossa',
  description:
    'Syysaamuisin ei välttämättä kovin usein tee mieli lähteä ulos, mutta lenkiltä palatessa on poikkeuksetta parempi olo kuin lähtiessä. Urheilupuisto on oiva puistoalue kaupungin keskellä, ja toimii loistavasti myös lenkkisi käännöspisteenä.',
  points: [
    {
      pointTitle: 'lenkki',
      pointDescription:
        'Olen tähän nyt piirtänyt lenkin Urheilupuiston pururadan ympäri, jolle pituutta tulee 1.5 kilometriä. Lisäpituutta tulee sitten lähtöpaikkasi mukaan.',
      pointInfo: {
        pointInfoType: 'MapViewRoute',
        initialRegion: {
          latitude: 60.442775,
          longitude: 22.263483,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: [
          {latitude: 60.44239617750166, longitude: 22.257794849574566},
          {latitude: 60.44222483180926, longitude: 22.25888952612877},
          {latitude: 60.44158773545986, longitude: 22.25961841642857},
          {latitude: 60.44180423715217, longitude: 22.260100543498993},
          {latitude: 60.441746349140445, longitude: 22.2602866217494},
          {latitude: 60.440880497571925, longitude: 22.26127199828625},
          {latitude: 60.440375034682184, longitude: 22.26261243224144},
          {latitude: 60.440488665277364, longitude: 22.262965478003025},
          {latitude: 60.440783739086655, longitude: 22.263700738549232},
          {latitude: 60.44114000736869, longitude: 22.264234833419323},
          {latitude: 60.44119806185793, longitude: 22.2650633007288},
          {latitude: 60.441512315127405, longitude: 22.26566143333912},
          {latitude: 60.44193804076178, longitude: 22.266582772135738},
          {latitude: 60.44238774255146, longitude: 22.266886867582794},
          {latitude: 60.442912689985434, longitude: 22.267468236386776},
          {latitude: 60.443389005459814, longitude: 22.266855686903},
          {latitude: 60.443710679842106, longitude: 22.266286723315716},
          {latitude: 60.443824298772846, longitude: 22.265762351453308},
          {latitude: 60.44421609084482, longitude: 22.264659292995933},
          {latitude: 60.44429348947957, longitude: 22.262987606227398},
          {latitude: 60.44419674115731, longitude: 22.261779941618443},
          {latitude: 60.44402987029715, longitude: 22.261196561157703},
          {latitude: 60.44359226434736, longitude: 22.26032417267561},
          {latitude: 60.443256034759116, longitude: 22.25942194461823},
          {latitude: 60.44266394468453, longitude: 22.259074598550797},
          {latitude: 60.44235681438201, longitude: 22.25779987871647},
        ],
      },
    },

    {
      pointTitle: 'vaativampaan makuun',
      pointDescription:
        'Jos mielesi tekee hieman pidempää ja kovavauhtisempaa lenkkiä, tässä pieni lisälenkki. Ota taivoitteeksi vaikka lähteä aamulla ennen töitä tai koulua ja hoitaa tämä pois alta.',
      pointInfo: {
        pointInfoType: 'MapViewRoute',
        initialRegion: {
          latitude: 60.43682,
          longitude: 22.248907,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: [
          {latitude: 60.44110692784128, longitude: 22.257624864578247},
          {latitude: 60.443273400366586, longitude: 22.254395484924313},
          {latitude: 60.44254221756674, longitude: 22.251944951713085},
          {latitude: 60.44090563819102, longitude: 22.248920761048794},
          {latitude: 60.438645881954194, longitude: 22.24446326494217},
          {latitude: 60.4365662777792, longitude: 22.240538187325004},
          {latitude: 60.435755374739664, longitude: 22.239626236259937},
          {latitude: 60.43475900493123, longitude: 22.236117906868458},
          {latitude: 60.43369279088957, longitude: 22.233623452484608},
          {latitude: 60.43317199589436, longitude: 22.23346821963787},
          {latitude: 60.43222799233632, longitude: 22.230383343994614},
          {latitude: 60.431457019215586, longitude: 22.230061478912827},
          {latitude: 60.43031144512653, longitude: 22.231396883726116},
          {latitude: 60.429744268432415, longitude: 22.232766821980476},
          {latitude: 60.42921348267958, longitude: 22.236088402569294},
          {latitude: 60.42971134276035, longitude: 22.236621826887127},
          {latitude: 60.43023219320188, longitude: 22.240021862089634},
          {latitude: 60.43088605716454, longitude: 22.24013887345791},
          {latitude: 60.43187741691168, longitude: 22.24037256091833},
          {latitude: 60.43255854559723, longitude: 22.240843623876568},
          {latitude: 60.43401373409436, longitude: 22.242172323167324},
          {latitude: 60.434814258514834, longitude: 22.244181968271732},
          {latitude: 60.4355040932535, longitude: 22.246112152934078},
          {latitude: 60.43590061753032, longitude: 22.24744588136673},
          {latitude: 60.43640201447689, longitude: 22.24871724843979},
          {latitude: 60.43731033216879, longitude: 22.25163985043764},
          {latitude: 60.43778457937902, longitude: 22.25299067795277},
          {latitude: 60.438452847621434, longitude: 22.25524876266718},
          {latitude: 60.44004224526743, longitude: 22.257085070014},
          {latitude: 60.44112942192359, longitude: 22.25769191980362},
        ],
      },
    },
    {
      pointTitle: 'aamupala Kosken leipomosta',
      pointDescription:
        'Jos vielä jäät kaipamaan jotain lisää, urheilupuiston kupeessa on tried and true Kosken leipomo, jolla saa päivän viimeistään käyntiin.',
      pointInfo: {
        pointInfoType: 'MapViewPoint',
        initialRegion: {
          latitude: 60.442119,
          longitude: 22.270055,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: {latitude: 60.442119, longitude: 22.270055},
      },
    },
    {
      pointTitle: 'Kosken leipomon tuotteet',
      pointDescription: 'Tässä linkki vielä leipomon tuotteisiin.',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'Kosken leipomon tuotteet',
        link:
          'https://koskenleipomo.fi/tuotteet/t%C3%A4ytetyt-patongit-ja-s%C3%A4mpyl%C3%A4t',
      },
    },
  ],
};
export const AURAJOENRANTA_JA_NAKOALA = {
  imageSource: require('Freetime/src/Images/aurajoenranta_ja_nakoala.jpg'),
  name: 'Aurajoenranta ja näköala',
  description:
    'Tämä reitti kulkee löyhästi Aurajoen vartta (ja tietysti voit valita reittisi aivan vapaasti), mutta kävelyn pääkohteena on Maununtyttärenpuiston kallionäköala Telakkarannassa. Ota mukaan ystäväsi tai lähde matkaan yksin, tulet näkemään Turun uudesta näkökulmasta. \n\n Sopii hyvin esimerkiksi syyspiknikin pitämiseen.',
  points: [
    {
      pointTitle: 'aloituspiste',
      pointDescription:
        'Reitti alkaa Tuomiokirkkosillalta, Joen vartta on helppo jatkaa niin pitkälle kuin vain pääsee.',
      pointInfo: {
        pointInfoType: 'MapViewRoute',
        initialRegion: {
          latitude: 60.443822,
          longitude: 22.25807,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: [
          {latitude: 60.452239264197665, longitude: 22.27679930627346},
          {latitude: 60.45204333445796, longitude: 22.276176027953625},
          {latitude: 60.4520044790527, longitude: 22.276003696024418},
          {latitude: 60.451913044660294, longitude: 22.275772690773014},
          {latitude: 60.451847238193295, longitude: 22.275613099336624},
          {latitude: 60.45168668969551, longitude: 22.275050841271877},
          {latitude: 60.45153672246215, longitude: 22.274813130497932},
          {latitude: 60.45115378204136, longitude: 22.274415828287598},
          {latitude: 60.45081531582953, longitude: 22.27410100400448},
          {latitude: 60.45081663861595, longitude: 22.27401953190565},
          {latitude: 60.450795970072406, longitude: 22.27393202483654},
          {latitude: 60.450762569678226, longitude: 22.273863628506657},
          {latitude: 60.450647321519746, longitude: 22.273747958242893},
          {latitude: 60.45062731426549, longitude: 22.27375701069832},
          {latitude: 60.45056299333983, longitude: 22.273709066212177},
          {latitude: 60.450453697078956, longitude: 22.27362960577011},
          {latitude: 60.45040144639162, longitude: 22.273591384291645},
          {latitude: 60.45027792940101, longitude: 22.273479737341404},
          {latitude: 60.45010596386614, longitude: 22.27332048118115},
          {latitude: 60.44994375323398, longitude: 22.273125685751438},
          {latitude: 60.44978253391311, longitude: 22.272945307195187},
          {latitude: 60.44963090434474, longitude: 22.272725701332092},
          {latitude: 60.449435454936555, longitude: 22.272462844848633},
          {latitude: 60.449403210631814, longitude: 22.272539287805557},
          {latitude: 60.449238350789074, longitude: 22.27262243628502},
          {latitude: 60.44933243840461, longitude: 22.272342815995216},
          {latitude: 60.449144262900965, longitude: 22.272037714719772},
          {latitude: 60.44900817396204, longitude: 22.271693721413616},
          {latitude: 60.44875269561711, longitude: 22.27103959769011},
          {latitude: 60.448618920070594, longitude: 22.27066308259964},
          {latitude: 60.44849622310226, longitude: 22.27032110095024},
          {latitude: 60.4483510366031, longitude: 22.26990468800068},
          {latitude: 60.44816087107248, longitude: 22.269289456307888},
          {latitude: 60.448016179162174, longitude: 22.268801294267174},
          {latitude: 60.44784866646559, longitude: 22.268315479159355},
          {latitude: 60.44779078922255, longitude: 22.26826585829258},
          {latitude: 60.44768644456101, longitude: 22.267870232462883},
          {latitude: 60.44766081309526, longitude: 22.267712652683255},
          {latitude: 60.44752670232209, longitude: 22.26722750812769},
          {latitude: 60.447425994854704, longitude: 22.266892232000824},
          {latitude: 60.44732462561087, longitude: 22.266553603112698},
          {latitude: 60.4472206101852, longitude: 22.266200557351116},
          {latitude: 60.44711990176892, longitude: 22.26586192846298},
          {latitude: 60.44692542946086, longitude: 22.265156172215935},
          {latitude: 60.44674683141777, longitude: 22.26451177150011},
          {latitude: 60.44666629660864, longitude: 22.2642945125699},
          {latitude: 60.4464719869556, longitude: 22.263617925345898},
          {latitude: 60.446157616281276, longitude: 22.26254604756832},
          {latitude: 60.44578155814884, longitude: 22.26119857281446},
          {latitude: 60.445626767784844, longitude: 22.26065844297409},
          {latitude: 60.445195633043575, longitude: 22.259192951023575},
          {latitude: 60.444886376751725, longitude: 22.258104309439663},
          {latitude: 60.44478218814023, longitude: 22.25795611739159},
          {latitude: 60.44464525402839, longitude: 22.257731817662716},
          {latitude: 60.444567690851486, longitude: 22.257525287568573},
          {latitude: 60.4443101930069, longitude: 22.25675851106644},
          {latitude: 60.44420534101983, longitude: 22.256449386477467},
          {latitude: 60.44397115933481, longitude: 22.255711778998375},
          {latitude: 60.44386415626576, longitude: 22.255370803177357},
          {latitude: 60.44379469504315, longitude: 22.255232334136963},
          {latitude: 60.44366784523671, longitude: 22.2548695653677},
          {latitude: 60.44353686030146, longitude: 22.254395484924313},
          {latitude: 60.44349303315344, longitude: 22.254171520471573},
          {latitude: 60.44343481737866, longitude: 22.253952585160732},
          {latitude: 60.443029288689715, longitude: 22.252884060144424},
          {latitude: 60.442898466568764, longitude: 22.252912893891335},
          {latitude: 60.44266328312537, longitude: 22.25226983428001},
          {latitude: 60.44180307939294, longitude: 22.250531762838364},
          {latitude: 60.44096931664579, longitude: 22.24887415766716},
          {latitude: 60.44015670403912, longitude: 22.247250415384773},
          {latitude: 60.43758310373271, longitude: 22.242383882403374},
          {latitude: 60.43670308052017, longitude: 22.240449339151382},
          {latitude: 60.43626173659879, longitude: 22.23938450217247},
          {latitude: 60.43582485314874, longitude: 22.23959404975176},
          {latitude: 60.43529830236026, longitude: 22.23833106458187},
          {latitude: 60.43500384045595, longitude: 22.236545719206333},
          {latitude: 60.434850983898684, longitude: 22.236187644302845},
          {latitude: 60.434514498424775, longitude: 22.2350487112999},
          {latitude: 60.43420298983905, longitude: 22.23416794091463},
          {latitude: 60.433714628362736, longitude: 22.23337098956108},
          {latitude: 60.43332783821952, longitude: 22.233408205211163},
          {latitude: 60.43322162728919, longitude: 22.233497053384784},
          {latitude: 60.43239806720673, longitude: 22.23049398511648},
          {latitude: 60.432371100141694, longitude: 22.230419889092445},
          {latitude: 60.432247514594295, longitude: 22.230209670960907},
          {latitude: 60.43180958451472, longitude: 22.230101712048054},
          {latitude: 60.431628421687535, longitude: 22.22988411784172},
          {latitude: 60.43151409832447, longitude: 22.229827120900158},
          {latitude: 60.431209840700355, longitude: 22.22997833043337},
          {latitude: 60.43102817818366, longitude: 22.230128534138203},
          {latitude: 60.43090607657737, longitude: 22.230258956551552},
          {latitude: 60.430776363799446, longitude: 22.230411507189274},
          {latitude: 60.43061256758791, longitude: 22.230742760002617},
          {latitude: 60.430547710678056, longitude: 22.23085407167673},
          {latitude: 60.430471933818474, longitude: 22.23098248243332},
          {latitude: 60.43032236500079, longitude: 22.231465615332127},
          {latitude: 60.43048599722279, longitude: 22.23250262439251},
          {latitude: 60.43060925856502, longitude: 22.233687825500965},
          {latitude: 60.43087910827458, longitude: 22.23349403589964},
          {latitude: 60.43116401154552, longitude: 22.233193963766098},
          {latitude: 60.43145817734342, longitude: 22.23300989717245},
          {latitude: 60.43177765360571, longitude: 22.232949882745743},
          {latitude: 60.43196526792763, longitude: 22.233244925737377},
          {latitude: 60.432172734356186, longitude: 22.233788073062893},
          {latitude: 60.43247301236813, longitude: 22.234899513423443},
          {latitude: 60.432784041213395, longitude: 22.235672324895855},
          {latitude: 60.43300754999797, longitude: 22.23667211830616},
          {latitude: 60.43323750931953, longitude: 22.237177379429337},
          {latitude: 60.43335397730492, longitude: 22.237642742693424},
          {latitude: 60.43356573620918, longitude: 22.23738793283701},
          {latitude: 60.433728194058375, longitude: 22.237106636166573},
          {latitude: 60.433856406146134, longitude: 22.23699565976858},
          {latitude: 60.433989746180906, longitude: 22.237111330032345},
          {latitude: 60.434072793916194, longitude: 22.23765280097723},
          {latitude: 60.43434327660298, longitude: 22.23788045346737},
        ],
      },
    },
    {
      pointTitle: 'matkan varrella',
      pointDescription:
        'Jos aikoo jäädä viettämään aikaa kalliolle, kannattaa matkan varrella käydä kaupan kautta ostamassa syötävää.',
      pointInfo: {
        pointInfoType: 'MapViewPoint',
        initialRegion: {
          latitude: 60.440592,
          longitude: 22.248662,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: {latitude: 60.440592, longitude: 22.248662},
      },
    },
    {
      pointTitle: 'eväsehdotuksia',
      pointDescription: 'Viileneviin iltoihin sopii omanlaisensa ruuat',
      pointInfo: {
        pointInfoType: 'ListView',
        listItems: [
          'Kuuma kaakao tai kahvi termoksessa',
          'suolakeksit + tuorejuustot/juustot',
          'Cittarin patongit',
          'Cittarin salaatit',
        ],
      },
    },
    {
      pointTitle: 'perillä',
      pointDescription:
        'Kalliolta löytyy muutama hyvä eväspöytä sekä reilusti muita istumapaikkoja.',
      pointInfo: {
        pointInfoType: 'MapViewPoint',
        initialRegion: {
          latitude: 60.43479,
          longitude: 22.238099,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: {latitude: 60.43479, longitude: 22.238099},
      },
    },
  ],
};
export const BRUNSSI_MKITCHENISSA = {
  imageSource: require('Freetime/src/Images/brunssi_mkitchenissa.jpg'),
  name: 'Viikonloppubrunssi M Kitchen & Caféssa',
  description:
    'Täydellinen paikka viettää aamupäivä niin kahdestaan kuin isommassakin kaveriporukassa. Aboa Vetus & Ars Nova tarjoaa rakennuksena mielenkiintoisen miljöön, ja aikaa saa helposti kulumaan useammankin tunnin. \n\nTarjoiluun kuuluu omien kokemusten perusteella runsaasti kasvisvaihtoehtoja. Kattaukset ovat viikonloppuisin klo 11 ja 13, hinta 25e.',
  points: [
    {
      pointTitle: 'sijainti',
      pointDescription: 'M Kitchen sijaitsee Kirjastosillan kupeessa.',
      pointInfo: {
        pointInfoType: 'MapViewPoint',
        initialRegion: {
          latitude: 60.450054,
          longitude: 22.27348,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: {latitude: 60.450054, longitude: 22.27348},
      },
    },
    {
      pointTitle: 'pöydän varaaminen',
      pointDescription: 'Pöytä kannattaa varata etukäteen sähköpostin kautta',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'mkitchencafe@mbakery.fi.',
        link: 'mailto:mkitchencafe@mbakery.fi.',
      },
    },

    {
      pointTitle: 'lisätietoja',
      pointDescription: 'M Kitchenin nettisivuilta löydät vielä enemmän tietoa',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'M Kitchen&Café -nettisivut',
        link: 'https://www.mbakery.fi/mkitchencafe/',
      },
    },
    {
      pointTitle: 'pieni kävely vielä',
      pointDescription:
        'Mielestäni menoja ei kannata jättää liian yksinkertaiseksi; pieni kävelylenkki brunssin jälkeen on oikein mukava lisä.',
      pointInfo: {
        pointInfoType: 'MapViewRoute',
        initialRegion: {
          latitude: 60.44864,
          longitude: 22.270199,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: [
          {latitude: 60.449988984528204, longitude: 22.27334241991059},
          {latitude: 60.449177476602955, longitude: 22.272366809814034},
          {latitude: 60.44842974798675, longitude: 22.27061521241546},
          {latitude: 60.447971587030764, longitude: 22.269109707634847},
          {latitude: 60.44764561892026, longitude: 22.267125643711797},
          {latitude: 60.447257758193444, longitude: 22.26580474295802},
          {latitude: 60.44691664023287, longitude: 22.264415217428333},
          {latitude: 60.4473188754026, longitude: 22.263842516061246},
          {latitude: 60.448216912295976, longitude: 22.267185988428995},
          {latitude: 60.44888601911134, longitude: 22.26969200218465},
          {latitude: 60.44930856640539, longitude: 22.270907498352756},
          {latitude: 60.449667590678104, longitude: 22.27168727662436},
          {latitude: 60.449349832486746, longitude: 22.272656078885802},
          {latitude: 60.449891996099296, longitude: 22.273238107354477},
        ],
      },
    },
  ],
};
export const KAVELY_HALISTENKOSKELLE = {
  imageSource: require('Freetime/src/Images/kavely_halistenkoskelle.jpg'),
  name: 'Kävely Halistenkoskelle',
  description:
    'Kun tarvitset hieman pidempää kävelyä tai lenkkiä. Tämä reitti tarjoaa mahdollisuuden lähteä pois kaupungista kaunista reittiä pitkin, jonka toisessa päässä on hieno Aurajoen laakso.',
  points: [
    {
      pointTitle: 'reitti',
      pointDescription:
        'reitti kulkee keskustan joenrannasta aina Halistenkoskelle asti, jossa pystyy samalla vaihtamaan toiselle puolelle jokea. Ennen Tuomaansiltaa kaupungista päin tullessa polku saattaa olla hieman epämäärinen, joten ole tarkkana!',
      pointInfo: {
        pointInfoType: 'MapViewRoute',
        initialRegion: {
          latitude: 60.452102,
          longitude: 22.274979,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: [
          {latitude: 60.444866531327705, longitude: 22.25493025034666},
          {latitude: 60.44549463311928, longitude: 22.257434092462066},
          {latitude: 60.44686622762577, longitude: 22.26187951862812},
          {latitude: 60.44958708541726, longitude: 22.2714801505208},
          {latitude: 60.44997533559181, longitude: 22.27205414324999},
          {latitude: 60.450691800412706, longitude: 22.272724695503708},
          {latitude: 60.452342106170306, longitude: 22.27444835007191},
          {latitude: 60.45413831602076, longitude: 22.275688871741295},
          {latitude: 60.455368688891035, longitude: 22.276240400969982},
          {latitude: 60.45636475747997, longitude: 22.276358753442768},
          {latitude: 60.457342445549536, longitude: 22.276635020971298},
          {latitude: 60.45852045940385, longitude: 22.276467382907864},
          {latitude: 60.460834042826576, longitude: 22.278321459889415},
          {latitude: 60.46157886391286, longitude: 22.278563193976883},
          {latitude: 60.46224647752401, longitude: 22.280066236853596},
          {latitude: 60.46267755126438, longitude: 22.28022113442421},
          {latitude: 60.462944655433915, longitude: 22.281084470450878},
          {latitude: 60.463748929841664, longitude: 22.282667979598045},
          {latitude: 60.46437848462352, longitude: 22.2833801060915},
          {latitude: 60.464663590084314, longitude: 22.28405736386776},
          {latitude: 60.46567705774736, longitude: 22.285445742309093},
          {latitude: 60.46715191730238, longitude: 22.28688172996044},
          {latitude: 60.46672106824039, longitude: 22.28926822543144},
          {latitude: 60.4667290010711, longitude: 22.291511222720146},
          {latitude: 60.466659919271805, longitude: 22.293219789862633},
          {latitude: 60.46667049639893, longitude: 22.294055968523026},
          {latitude: 60.466978223182515, longitude: 22.29607466608286},
          {latitude: 60.46697442206388, longitude: 22.29846317321062},
          {latitude: 60.46723669820508, longitude: 22.29882560670376},
          {latitude: 60.46786436747341, longitude: 22.298805154860016},
          {latitude: 60.467952121214445, longitude: 22.299111261963844},
          {latitude: 60.46777463035162, longitude: 22.30034541338682},
          {latitude: 60.467108287277846, longitude: 22.30179648846388},
          {latitude: 60.465223876998714, longitude: 22.304193042218685},
          {latitude: 60.464183123957746, longitude: 22.303826585412025},
          {latitude: 60.46386264397427, longitude: 22.302827127277855},
          {latitude: 60.46412147436659, longitude: 22.301815263926986},
          {latitude: 60.46450872441425, longitude: 22.300944551825523},
          {latitude: 60.46492704183203, longitude: 22.300256229937073},
          {latitude: 60.4652149521502, longitude: 22.299509905278683},
          {latitude: 60.46558747985159, longitude: 22.298682779073715},
          {latitude: 60.465591115859546, longitude: 22.297494560480118},
          {latitude: 60.46553227858977, longitude: 22.29629930108786},
          {latitude: 60.46521908402482, longitude: 22.294973619282246},
          {latitude: 60.46497811221828, longitude: 22.29415688663721},
          {latitude: 60.46472358587107, longitude: 22.292720228433613},
          {latitude: 60.46470061229088, longitude: 22.292092256247997},
          {latitude: 60.464773169082235, longitude: 22.291188351809982},
          {latitude: 60.46482308277164, longitude: 22.289935424923893},
          {latitude: 60.46466474702892, longitude: 22.28899128735065},
          {latitude: 60.46469185257618, longitude: 22.28738062083721},
          {latitude: 60.46422642735396, longitude: 22.286253422498703},
          {latitude: 60.46331869675017, longitude: 22.285143323242664},
          {latitude: 60.46274598038847, longitude: 22.284410744905472},
          {latitude: 60.462084823395735, longitude: 22.283575907349586},
          {latitude: 60.461757710994966, longitude: 22.282784990966324},
          {latitude: 60.46158332683724, longitude: 22.282055094838142},
          {latitude: 60.46139059406241, longitude: 22.281719148159027},
          {latitude: 60.46104413501395, longitude: 22.2811558842659},
          {latitude: 60.46074362507809, longitude: 22.280590273439884},
          {latitude: 60.4604290619182, longitude: 22.280167825520035},
          {latitude: 60.46017433460395, longitude: 22.279621325433258},
          {latitude: 60.45921756030088, longitude: 22.278588339686397},
          {latitude: 60.45859765865127, longitude: 22.278327494859695},
          {latitude: 60.45821017278282, longitude: 22.278372086584568},
          {latitude: 60.45676020063658, longitude: 22.278144098818302},
          {latitude: 60.45548640016512, longitude: 22.27747958153486},
          {latitude: 60.45419932324501, longitude: 22.27671179920435},
          {latitude: 60.453365878598184, longitude: 22.276141159236435},
          {latitude: 60.45272156047063, longitude: 22.27587729692459},
          {latitude: 60.45236608053834, longitude: 22.275592647492886},
          {latitude: 60.45218486694541, longitude: 22.275565825402737},
          {latitude: 60.45215064127191, longitude: 22.275297939777374},
          {latitude: 60.451704381484426, longitude: 22.27537538856268},
          {latitude: 60.451032913466825, longitude: 22.274284064769745},
          {latitude: 60.450383423192, longitude: 22.273879721760753},
          {latitude: 60.449316233527156, longitude: 22.272625118494034},
          {latitude: 60.448422968491855, longitude: 22.270610108971592},
          {latitude: 60.44836343866426, longitude: 22.26995263248682},
          {latitude: 60.447780702035374, longitude: 22.26828597486019},
          {latitude: 60.447325617807294, longitude: 22.26655025035143},
          {latitude: 60.44674071276372, longitude: 22.26448092609644},
          {latitude: 60.44519067173592, longitude: 22.259082980453968},
          {latitude: 60.4446409541556, longitude: 22.257725782692432},
          {latitude: 60.44417970680751, longitude: 22.256035320460796},
          {latitude: 60.44481807536634, longitude: 22.255019098520275},
        ],
      },
    },
    {
      pointTitle: 'vielä vähän pidemmälle',
      pointDescription:
        'Koskelta on helppo jatkaa pidemmälle vielä seuraavalle sillalle.',
      pointInfo: {
        pointInfoType: 'MapViewRoute',
        initialRegion: {
          latitude: 60.463187,
          longitude: 22.318868,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: [
          {latitude: 60.46520875769838, longitude: 22.304920669266096},
          {latitude: 60.465535406716896, longitude: 22.30996583378382},
          {latitude: 60.46526378327988, longitude: 22.310998397200507},
          {latitude: 60.46508590242945, longitude: 22.312196028518656},
          {latitude: 60.46490034034849, longitude: 22.312448839611676},
          {latitude: 60.464912635263914, longitude: 22.31283757774392},
          {latitude: 60.465181495888515, longitude: 22.312977544168803},
          {latitude: 60.464622911555495, longitude: 22.31453999791043},
          {latitude: 60.464370102594785, longitude: 22.315294680583122},
          {latitude: 60.46401459915512, longitude: 22.315475488770943},
          {latitude: 60.4638095673852, longitude: 22.315737371121003},
          {latitude: 60.46382566038275, longitude: 22.316793017335243},
          {latitude: 60.46407057775775, longitude: 22.31774156603322},
          {latitude: 60.46404567867978, longitude: 22.319365381674544},
          {latitude: 60.46430585488872, longitude: 22.320714165125395},
          {latitude: 60.46446230236961, longitude: 22.32137812813221},
          {latitude: 60.46483360017632, longitude: 22.322061271981198},
          {latitude: 60.46513938584869, longitude: 22.3233168786345},
          {latitude: 60.4659559918847, longitude: 22.32440066019535},
          {latitude: 60.46565049948154, longitude: 22.32513513513146},
          {latitude: 60.46519308945756, longitude: 22.325883288331084},
          {latitude: 60.4653962774058, longitude: 22.327355090431098},
          {latitude: 60.46550792533304, longitude: 22.32857850685636},
          {latitude: 60.46561452180788, longitude: 22.329832180019423},
          {latitude: 60.465774630484304, longitude: 22.330566123604314},
          {latitude: 60.46587736641814, longitude: 22.331344968927652},
          {latitude: 60.465917821921636, longitude: 22.333194013513378},
          {latitude: 60.46607831016121, longitude: 22.334821980969252},
          {latitude: 60.46547764158652, longitude: 22.33508385120595},
          {latitude: 60.46488861308106, longitude: 22.33462859801611},
          {latitude: 60.464308103933035, longitude: 22.333723892057435},
          {latitude: 60.46381057434573, longitude: 22.332471475298036},
          {latitude: 60.46335633167041, longitude: 22.330810350893927},
          {latitude: 60.46275108598826, longitude: 22.32771328784719},
          {latitude: 60.46225654631317, longitude: 22.323610105671975},
          {latitude: 60.46167236823669, longitude: 22.32212955495791},
          {latitude: 60.461446043146424, longitude: 22.319899884307347},
          {latitude: 60.46131019494254, longitude: 22.318373175451285},
          {latitude: 60.46087166847951, longitude: 22.316368738544867},
          {latitude: 60.460044068415584, longitude: 22.313557422717878},
          {latitude: 60.459490043514535, longitude: 22.311945840034696},
          {latitude: 60.458741693430085, longitude: 22.30930702635365},
          {latitude: 60.46009203898413, longitude: 22.306946179785882},
          {latitude: 60.46225671626539, longitude: 22.30453767698816},
          {latitude: 60.464183124542984, longitude: 22.303854291614584},
          {latitude: 60.464713100220905, longitude: 22.304016015707305},
          {latitude: 60.465186551696206, longitude: 22.304914631578043},
        ],
      },
    },
  ],
};
export const KAVELY_PORT_ARTHURISSA = {
  imageSource: require('Freetime/src/Images/kavely_port_arthurissa.jpg'),
  name: 'Kävely Port Arthurissa',
  description:
    'Port Arthur on väittämättä yksi Turun mukavampia alueita. Puurakennukset sekä kivikadut saavat ajatukset pois kaupungin hälinästä, ja sivukaduilla seikkailemalla saat kulutettua aikaa juuri niin kauan kuin haluat. ',
  points: [
    {
      pointTitle: 'reitti',
      pointDescription:
        'Tässä on nyt yksinkertainen reitti, mutta muista mennä oman mielesi mukaan!',
      pointInfo: {
        pointInfoType: 'MapViewRoute',
        initialRegion: {
          latitude: 60.448653,
          longitude: 22.248224,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        coordinates: [
          {latitude: 60.445850353629446, longitude: 22.23782580345869},
          {latitude: 60.45173778091012, longitude: 22.254772335290905},
          {latitude: 60.450846731991824, longitude: 22.256082594394687},
          {latitude: 60.44495418185913, longitude: 22.239021733403206},
          {latitude: 60.44401151279639, longitude: 22.236563824117184},
        ],
      },
    },
  ],
};
export const LEFFAILTA_YKSIN = {
  imageSource: require('Freetime/src/Images/leffailta_yksin.jpg'),
  name: 'elokuvailta, pitsa ja oma rauha',
  description:
    'Elokuvaa katsoessa ei tarvitse aina olla seuraa. Yksin pystyt keskittymään elokuvaan paremmin ja saat siitä oikeasti jotain irti. Leffa ei pyöri vain taustalla, vaan pystyt oppimaan siitä jotain.',
  points: [
    {
      pointTitle: 'valitse elokuva',
      pointDescription:
        'Elokuvan valintaan kannattaa nähdä hieman vaivaa. Jokaisella on oma makunsa ja palvelut, mutta tässä muutamia hyväksi todettuja elokuvia netflixistä:',
      pointInfo: {
        pointInfoType: 'ListView',
        listItems: [
          'Shawshank Redemption',
          'Truman Show',
          'Schindlerin Lista',
          'Henkien kätkemä',
          'Prinsessa Monoke',
          'Inception',
          'The usual suspects',
          'Vihreä maili',
          'The Departed',
          'Marriage Story',
        ],
      },
    },
    {
      pointTitle: 'pizza',
      pointDescription:
        'Olen valinnut illan leffaevääksi pizzan, mutta tämä on tietysti täysin oma valintasi. Tässä kuitenkin resepti kotitekoiseen pitsaan:',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'K-ruoan resepti',
        link: 'https://www.k-ruoka.fi/reseptit/kinkku-ananaspizza-pellillinen',
      },
    },
    {
      pointTitle: 'ready to roll',
      pointDescription:
        'Sitten vain nauttimaan omasta rauhasta. Puhelimen voi laittaa tässä myös hyvin laittaa pariksi tunniksi pois, sillä yksinolo tuntuu silloin jännästi mukavammalta.',
    },
  ],
};
export const PIKARUOKA_JA_NETFLIX = {
  imageSource: require('Freetime/src/Images/pikaruoka_ja_netflix.jpg'),
  name: 'Pikaruoka ja netflix',
  description:
    'Kaikkia meitä välillä hajottaa. Silloin auttaa kummasti, kun saa ruuat valmiina kotiin ja loppuillan vietettyä telkkarin ääressä.',
  points: [
    {
      pointTitle: 'the food',
      pointDescription:
        'Oman mieltymyksen mukaan, mutta tässä on kuitenkin listattuna muutamia hyviä vaihtoehtoja',
      pointInfo: {
        pointInfoType: 'ListView',
        listItems: [
          'Hesburger',
          'Burger King',
          'Taco Bell',
          'Hanko Sushi',
          'Subway',
          'Kebab',
          'Kotipizza',
        ],
      },
    },
    {
      pointTitle: 'kotiinkuljetus Wolt',
      pointDescription:
        'Jos et oikein jaksa tunkea nenääsi ovesta ulos, kotiinkuljetuspalvelut hoitaa kyllä.',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'Wolt',
        link: 'https://wolt.com/fi/fin/turku',
      },
    },
    {
      pointTitle: 'Hyvät Netflix-sarjat',
      pointDescription:
        'Miksipä ei sitten samalla aloittaisi uutta koukutusta johonkin sarjaan. Tässä vähän jokaisesta genrestä sarjoja.',
      pointInfo: {
        pointInfoType: 'ListView',
        listItems: [
          'Breaking Bad',
          'Frendit',
          'How I met your mother',
          'Community',
          'Our planet',
          'Brooklyn nine-nine',
          'Rick and Morty',
        ],
      },
    },
  ],
};
export const RAVINTOLA_HUGGE = {
  imageSource: require('Freetime/src/Images/ravintola_hugge.jpg'),
  name: 'Kasviselämys ravintola Hüggessa',
  description:
    'Hügge sopii täydellisesti niin arki-illan syömisiin kaveriporukan kanssa kuin kahden kesken viikonloppuiltana. Hügge tarjoaa myös lounaan.',
  points: [
    {
      pointTitle: 'sijainti',
      pointDescription: 'Hügge sijaitsee Vähätorin kupeessa',
      pointInfo: {
        pointInfoType: 'MapViewPoint',
        initialRegion: {
          latitude: 60.451653,
          longitude: 22.273481,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        coordinates: {latitude: 60.451653, longitude: 22.273481},
      },
    },
    {
      pointTitle: 'ruoka',
      pointDescription:
        'Hugge on täysin vegaaninen ravintola, ja tarjolla on niin 4 annoksen menü kuin erilliset alkuruoat ja pääruoat. Alkuruoat ovat jaettavia, joten ne ovat loistava valinta erityisesti kahden kesken syödessä.',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'Hüggen menü',
        link: 'https://hugge.fi/ruoka-juoma/',
      },
    },
    {
      pointTitle: 'pöytävaraus',
      pointDescription:
        'Pöytää voi olla vaikea lyötää ilman varausta edes arki-iltana. Alla linkki pöydän varaukseen.',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'Hüggen pöytävaraus',
        link: 'https://hugge.fi/poytavaraus/',
      },
    },
    {
      pointTitle: 'lounas',
      pointDescription: 'Mikäli etsit lounasta, Hügge has you covered.',
      pointInfo: {
        pointInfoType: 'LinkView',
        linkText: 'Hüggen lounas',
        link: 'https://hugge.fi/lounas/',
      },
    },
  ],
};

//All activities
export const ACTIVITIES = [
  AAMUKAVELY_URHEILUPUISTOSSA,
  AURAJOENRANTA_JA_NAKOALA,
  BRUNSSI_MKITCHENISSA,
  KAVELY_HALISTENKOSKELLE,
  KAVELY_PORT_ARTHURISSA,
  LEFFAILTA_YKSIN,
  PIKARUOKA_JA_NETFLIX,
  RAVINTOLA_HUGGE,
];
//Activity names
