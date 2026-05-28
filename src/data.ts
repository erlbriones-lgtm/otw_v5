import { Landmark, Barangay } from "./types";
const slide1 = "/webp/Poblacion 1, Tagbilaran City (1).webp";
const slide2 = "/webp/Poblacion 1, Tagbilaran City (2).webp";
const slide4 = "/webp/Old House in Poblacion 1 (3).webp";

export const tagbilaranLandmarks: Landmark[] = [
  {
    id: "sandugo-shrine",
    title: "The Bohol Sandugo Shrine",
    category: "Heritage",
    description: "The birthplace of global peace and friendship in the Philippines. This historic site commemorates the Blood Compact between chieftain Datu Sikatuna and Spanish General Legazpi on March 16, 1565. The monument features the world renowned bronze sculpture sculpted by Tagbilaran's native son and National Artist, Napoleon Abueva.",
    location: "Barangay Bool, Tagbilaran City",

    yearEstablished: "1565 (Pact) / 1997 (Sculpture)",
    highlight: "Symbol of International Friendship",
    imageUrl: slide1
  },
  {
    id: "st-joseph-cathedral",
    title: "Cathedral of St. Joseph the Worker",
    category: "Heritage",
    description: "A breathtaking cornerstone of Jesuit and Recollect architecture located in the heart of Tagbilaran. Originally built in 1724 but destroyed several times by earthquakes and fire, the cathedral displays majestic stone masonry, beautifully restored ceilings with original hand painted murals, and dual towering bell towers that echo across the city strait.",
    location: "Poblacion II, Tagbilaran City",
    yearEstablished: "1724",
    highlight: "Neoclassical Architecture & Ceiling Murals",
    imageUrl: slide4
  },
  {
    id: "bohol-national-museum",
    title: "Bohol National Museum",
    category: "Heritage",
    description: "An architectural marvel housed in the beautifully restored Spanish era Provincial Capitol. This civic landmark displays a premier collection of Boholano archaeological finds, colonial religious art, textile weaving artifacts, and scientific flora/fauna models detailing are Bohol strait ecosystem.",
    location: "Library & Museum District, Tagbilaran City",
    yearEstablished: "1860 (Capitol) / 2018 (Museum)",
    highlight: "Immersive Historical Artifacts & Art",
    imageUrl: slide2
  }
];

export const creativeMilestones = [
  {
    year: "1565",
    title: "The Pact of Bohol",
    description: "Datu Sikatuna and Miguel López de Legazpi join hands and perform the legendary blood compact, creating a global foundation of peace and mutual friendship."
  },
  {
    year: "1724",
    title: "Heritage Foundation",
    description: "Construction of the original historical stone fortress of St. Joseph Cathedral, anchoring the city's growth around a dedicated cultural district."
  },
  {
    year: "1966",
    title: "Charter Day of Tagbilaran",
    description: "Tagbilaran officially transitions into a chartered city, solidifying its place as the administrative and economic focal point of Bohol."
  },
  {
    year: "2023",
    title: "Global Creative City Initiative",
    description: "Tagbilaran spearheads its global creative initiative in Crafts and Folk Arts, putting local clay pottery and hand weaving on the world map."
  },
  {
    year: "2026",
    title: "Digital Cultural Era",
    description: "Launching state of the art interactive digital portals and decentralized maker hubs that foster creative tech and eco tourism."
  }
];

export const tagbilaranBarangays: Barangay[] = [
  {
    name: "Barangay Bool",
    heritage: "Sandugo Pact Ground Zero",
    desc: "The monumental core of peaceful alliance, holding Napoleon Abueva's iconic bronze Blood Compact Monument. Offers magnificent cliffside overlooks of the Mindanao Sea.",
    tip: "the historic March 1565 Blood Compact Site in Bool",
    category: "Historic"
  },
  {
    name: "Barangay Booy",
    heritage: "Coastal Gateway & Faith",
    desc: "A sprawling coastal neighborhood boasting historic local chapels, pristine cliffside views, educational hubs, and the scenic active fishing communities.",
    tip: "coastal paths and suburban heritage in Booy",
    category: "Coastal"
  },
  {
    name: "Barangay Cabawan",
    heritage: "Grassland Ridges & Farms",
    desc: "The gorgeous countryside heart of the city, presenting quiet green rolling hills, rustic inland trails, and family led eco agriculture farms.",
    tip: "rural grasslands and interior eco tourism in Cabawan",
    category: "Inland"
  },
  {
    name: "Barangay Cogon",
    heritage: "High Density Civic Hub",
    desc: "Our most populated commercial nerve center. Home to Plaza Marcela, dense bustling streets, business offices, and a key transportation intersection.",
    tip: "bustling city life and commercial centers of Cogon",
    category: "Commercial"
  },
  {
    name: "Barangay Dampas",
    heritage: "Handweaving & Blade Forging",
    desc: "The undisputed capital of historic local craft, where master weavers operate handlooms and veteran metalworkers hand craft traditional Boholano blades.",
    tip: "artisan handweaving and custom blade forging in Dampas",
    category: "Historic"
  },
  {
    name: "Barangay Dao",
    heritage: "Transit & Retail Epicenter",
    desc: "Host to the massive Bohol Integrated Bus Terminal (IBT) and the sprawling Island City Mall, serving as the commercial and transport engine of the province.",
    tip: "bus terminal connections and mall shopping in Dao",
    category: "Commercial"
  },
  {
    name: "Barangay Manga",
    heritage: "Seaside Terracotta Potteries",
    desc: "Famous for preservation of wood fired clay brick ovens and pottery sheds turning out elegant terracotta jars. Features a dynamic local fish port.",
    tip: "artisan pottery making and seaside kilns in Manga",
    category: "Coastal"
  },
  {
    name: "Barangay Mansasa",
    heritage: "Overlooks & Ancient Springs",
    desc: "A gorgeous cliffside ward overlooking the Tagbilaran strait, preserving colonial era water springs and majestic panoramic sea views.",
    tip: "scenic straits and historic natural springs of Mansasa",
    category: "Coastal"
  },
  {
    name: "Barangay Poblacion I",
    heritage: "St. Joseph Cathedral Heart",
    desc: "The historic religious nucleus. Home to the towering limestone St. Joseph the Worker Cathedral, Town Plaza Rizal, and City Hall.",
    tip: "St. Joseph Cathedral and the central Plaza Rizal of Poblacion I",
    category: "Historic"
  },
  {
    name: "Barangay Poblacion II",
    heritage: "Bohol National Museum District",
    desc: "The intellectual capital, anchoring the historic old Capitol (Bohol National Museum), major university campuses, and the central financial sector.",
    tip: "Bohol National Museum and educational centers of Poblacion II",
    category: "Urban"
  },
  {
    name: "Barangay Poblacion III",
    heritage: "Historic Ferry Seaport",
    desc: "The active maritime gateway of Tagbilaran, home to the main passenger seaport and blocks of beautifully preserved Spanish colonial ancestral homes.",
    tip: "heritage walking tours and coastal ferry port in Poblacion III",
    category: "Coastal"
  },
  {
    name: "Barangay San Isidro",
    heritage: "Artisanal Clay & Eco-Gardens",
    desc: "Renowned for its abundance of natural clay deposits mined by local potters. Retains a peaceful atmosphere with family run farms.",
    tip: "clay mines and sustainable eco gardens of San Isidro",
    category: "Inland"
  },
  {
    name: "Barangay Taloto",
    heritage: "Tubig Dako Spring & Mangroves",
    desc: "Holds the clean fresh water Tubig Dako cave spring sanctuary. Borders gorgeous coastlines, serene seaside properties, and dense mangroves.",
    tip: "Tubig Dako fresh spring and eco tourism in Taloto",
    category: "Coastal"
  },
  {
    name: "Barangay Tiptip",
    heritage: "Upland Residential Growth",
    desc: "A beautiful hillside inland neighborhood experiencing steady development while retaining pristine limestone quarries and quiet rustic woodland lanes.",
    tip: "hillside trails and local suburban growth in Tiptip",
    category: "Inland"
  },
  {
    name: "Barangay Ubujan",
    heritage: "University Ridges & Battlegrounds",
    desc: "Commanding cliffside ocean views, anchoring Holy Name University campus, and preserving the historic sites of the heroic revolutionary battles.",
    tip: "university campuses and historical battlegrounds in Ubujan",
    category: "Coastal"
  }
];

