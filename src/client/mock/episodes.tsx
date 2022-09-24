import { v4 } from "uuid";

interface Image {
  id: string;
  src: string;
  alt: string;
}

export interface Episode {
  id: string;
  year: number;
  title: string;
  text: string;
  images: Image[];
}

export const episodes: Episode[] = [
  {
    id: v4(),
    year: 1921,
    title: "Iggesunds IK grundas",
    text: 'Idrottsverksamheten i den tämligen avlägsna staden Hudiksvall, med Strands IF och Hudiksvalls IF som aktiva idrottsföreningar, inspirerade brukssamhället Iggesund att starta en egen idrottsklubb. På "bruket" hade man länge nog följt den växande verksamheten, när pionjärerna ansåg att tiden var mogen för Iggesund att ta upp konkurrensen med stadsborna på löparbanor, fotbollsplaner och i skidspår.  \n Vid val av interimsstyrelse den 12 juli 1921, utsågs som de första fyra funktionärerna i klubben ordförande Helge Eriksson, sekreterare Sigfrid Nilsson, kassör Verner Karlsson och materialförvaltare Holger Knutsson.',
    images: [],
  },
  {
    id: v4(),
    year: 1922,
    title: "Första årsmötet",
    text: "Det första årsmötet hölls 17 februari 1922 i Iggesunds auditorium, det vill säga nuvarande Iggesunds kyrka, som för övrigt blev lokalen för många klubbmöten även i fortsättningen. Klubbens räkenskaper under första halva levnadsåret balanserat på 624:77 kronor och behållningen utgjorde icke föraktliga 108:50 kronor. Medlemstalet hade ökat till 52. ",
    images: [],
  },
  {
    id: v4(),
    year: 1922,
    title: "Första Hälsingemästerskapet",
    text: "IIK deltog i det första Hälsingemästerskapet i fotboll. Man vann mot Ljusdal med 2-4. Restiden tog på den tiden 7 timmar.",
    images: [],
  },
  {
    id: v4(),
    year: 1924,
    title: "Ankarvallen invigdes",
    text: "Iggesunds IKs första hemmaplan Ankarvallen, anlades på 1924 och användes fram till 1966 då Iggesunds Bruk behövde marken för att utöka fabriksområdet.\n Här var även start och målplats för den klassiska Ankarstafetten på skidor.",
    images: [
      {
        id: v4(),
        src: "/images/episodes/1924/ankarvallen-entre.jpg",
        alt: "Ankarvallen Entré",
      },
      {
        id: v4(),
        src: "/images/episodes/1924/ankarvallen-plan.jpg",
        alt: "Ankarvallen Plan",
      },
    ],
  },
  {
    id: v4(),
    year: 1932,
    title: "Avancemang till Uppsvenskan",
    text: "Seger i Hälsingeserien 1931-1932 och avancemang till Norrländskan. Marsch genom Norrländskan 1932-1933 och som första hälsinge lag till Uppsvenskan.",
    images: [],
  },
  {
    id: v4(),
    year: 1934,
    title: "Utökning av sporter",
    text: "Bandy och boxning tillades under IIKs flagga. Därefter tillkom brottning 1935, Ishockey 1940, Simning 1936.",
    images: [],
  },
  {
    id: v4(),
    year: 1936,
    title: "Ungdomlagets första DM-guld",
    text: "Herrjuniorerna tog deras första DM-guld. En titel som de fortsatte att vinna åren 1950 och 1982.",
    images: [],
  },
  {
    id: v4(),
    year: 1942,
    title: "Herrarnas första DM-guld",
    text: "Herrarna tog deras första DM-guld 1942. En titel som de fortsatte att vinna åren 1944, 1945, 1946, 1962, 1991 och 1995.",
    images: [],
  },
  {
    id: v4(),
    year: 1946,
    title: "Avancemang till Div 2 Norra",
    text: "Fem seriesegrar i Uppsvenskan fick spelare och supporters uppleva och glädja sig åt under åren 1939-1946, men också genomlida tolv kvalmatcher- innan det hände! Drömmen uppfylldes 1946. IIK gick till div II Norra, på den tiden fanns endast två div-II serier i landet. Kravet från Svenska Fotbollförbundet för att IIK skulle få kliva upp i div-II Norra var att IIK fick förbinda sig att avsäga sig ett eventuellt avancemang till allsvenskan! Det ansågs nämligen att lag norr om Söderhamn inte var lämpliga att spela i de högre divisionerna.",
    images: [
      {
        id: v4(),
        src: "/images/episodes/1946/ankarvallen-lagbild.jpg",
        alt: "Ankarvallen Lagbild (1944)",
      },
      {
        id: v4(),
        src: "/images/episodes/1946/ankarvallen-match-1.jpg",
        alt: "Ankarvallen Match (1944)",
      },
      {
        id: v4(),
        src: "/images/episodes/1946/ankarvallen-match-2.png",
        alt: "Ankarvallen Match (1944)",
      },
    ],
  },
  {
    id: v4(),
    year: 1953,
    title: "Sune “Mona-Lisa” Andersson",
    text: "Ett fantastiskt kapitel i Iggesunds IKs historia handlar om OS-hjälten som blev tränare i det lilla brukslaget. Sune ”Mona-Lisa” Andersson kom hem till Sverige efter proffsåren i AS Roma 1952. Då rådde spelförbud för före detta proffsspelare i Sverige och Sune fick nöja sig med att vara tränare i Iggesunds IK åren 1953-1955. Varför Iggesund? Ryktet säger att bruket har något med saken att göra men det är också just ett rykte. Sune föddes 1921, passande nog för en blivande IIKare, och var med både när Sverige tog brons i Fotbolls-VM 1950 i Brasilien och OS-guld i London-OS 1948.",
    images: [
      {
        id: v4(),
        src: "/images/episodes/1953/sune-andersson.jpg",
        alt: "Sune Andersson",
      },
    ],
  },
  {
    id: v4(),
    year: 1954,
    title: '"Frobbe" lägger grunden',
    text: 'Ungdomsverksamheten, som under alla år varit synnerligen aktiv och bred, har aldrig tappat sin glans: härifrån rekryteras ständigt nya talanger till de större uppgifterna. Den som otvivelaktigt betytt mest för ungdomsverksamheten under åren är Sture Froberg. I över 40 år hängav han sig helhjärtat åt ungdomarna i Iggesund. Han började sin bana som klubbledare redan 1954. För sitt mångåriga engagemang i klubbens verksamhet utsågs "Frobbe" till hedersledamot i klubben 1985. "Frobbe" har också under 1999 tilldelats den högsta utmärkelsen en ungdomsledare kan få av Svenska Fotbollsförbundet, grattis "Frobbe". \n Sture syntes ända fram till sin död 2011 på såväl serior- som ungdomsmatcher. Hans porträtt hänger inne i Camp Igge Arena som en välförtjänt påminnelse om allt han gjort för klubben.',
    images: [
      {
        id: v4(),
        src: "/images/episodes/1954/frobbe.jpg",
        alt: "Frobbe",
      },
    ],
  },
  {
    id: v4(),
    year: 1965,
    title: "Byggstart för Movallen",
    text: "Planerna att bygga en ny modern idrottsanläggning hade funnits under många år. 1965 skedde byggstarten vid Movallen och två år senare invigdes arenan.",
    images: [],
  },
  {
    id: v4(),
    year: 1972,
    title: "Damlag startas",
    text: "Damfotbollen gjorde sitt intåg i Iggesunds IK 1972 och framgångarna lät inte vänta på sig. Snabbt etablerade sig damlaget som ett av landskapets bästa och redan 1974 nådde laget ända till DM-final.",
    images: [
      {
        id: v4(),
        src: "/images/episodes/1972/damlag-lagbild-1.jpg",
        alt: "Damlag Lagbild (1983)",
      },
      {
        id: v4(),
        src: "/images/episodes/1972/damlag-lagbild-2.jpg",
        alt: "Damlag Lagbild (1983)",
      },
    ],
  },
  {
    id: v4(),
    year: 1973,
    title: "Stig Andersson vinner silverbollen",
    text: "Herrarnas spelare Stig Andersson vinner silverbollen. Ett pris som tilldelas Hälsinglands bästa fotbollsspelare sedan 1967.",
    images: [],
  },
  {
    id: v4(),
    year: 1978,
    title: "Damernas första DM-guld",
    text: "Damerna vann deras första DM-guld. Dom fortsatte att vinna den titeln 1981, 1982, 1984, 2000.",
    images: [],
  },
  {
    id: v4(),
    year: 1999,
    title: "Veronica Eliasson vinner silverbollen",
    text: "Damernas spelare Veronica Eliasson vinner silverbollen. Ett pris som tilldelas Hälsinglands bästa fotbollsspelare sedan 1985.",
    images: [],
  },
  {
    id: v4(),
    year: 1990,
    title: "Damernas ungdomslag tar sitt första DM-guld",
    text: "Damernas ungdomslag tog deras första DM-guld 1990. En titel som de även vann åren 1991 och 2004.",
    images: [],
  },
  {
    id: v4(),
    year: 2013,
    title: "Camp Igge",
    text: "Efter en svänging start på millenniet där de sportsliga framgångarna var sparsmakade och intresset började dala hos ungdomarna påbörjade föreningen ett sort arbete med mål att vända den trenden och samtidigt göra något bra för bygden. Det största ögonblicket i det arbetet skedde i januari 2013 då Camp Igge Arena stod klar för invigning och den lilla föreningen på bruksorten hade lyckats med något många i betydligt större städer och klubbar hade gått bet med. En multisportarena där även evenemang av det mer kulturella slaget kan hålla till. Med arenan och ett hårt arbete från de många engagerade i föreningen kunde man se en förändring med fler medlemmar, utövare och dessutom sportslig framgång för såväl ungdomar som seniorer. ",
    images: [
      {
        id: v4(),
        src: "/images/episodes/2013/camp-igge-koncept.jpg",
        alt: "Camp Igge koncept",
      },
      {
        id: v4(),
        src: "/images/episodes/2013/camp-igge-verklighet.jpg",
        alt: "Camp Igge verklighet",
      },
    ],
  },
  {
    id: v4(),
    year: 2021,
    title: "Iggesunds IK firar 100 år!",
    text: "Iggesunds IK har med bruksanda byggts på stabil grund. När framgångar avlösts av svårigheter, har klubben ändå ständigt utvecklats och genom åren varit betydelsefull för ungdomars sociala fostran, gemenskap och friskvård på samhället.",
    images: [
      {
        id: v4(),
        src: "/images/episodes/2021/jubileum.jpg",
        alt: "IIK 100år!",
      },
    ],
  },
];
