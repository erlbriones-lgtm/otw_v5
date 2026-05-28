const bcs1 = "/webp/Poblacion 1, Tagbilaran City (1).webp";
const bcs2 = "/webp/Poblacion 1, Tagbilaran City (1) (1).webp";
const bcs3 = "/webp/Poblacion 1, Tagbilaran City (1).webp";
const bcs4 = "/webp/Poblacion 1, Tagbilaran City (1) (1).webp";
const bcs5 = "/webp/Poblacion 1, Tagbilaran City (1).webp";
const bcs6 = "/webp/Poblacion 1, Tagbilaran City (1) (1).webp";

const blades1 = "/webp/Timapay Crisp (3).webp";
const blades2 = "/webp/Timapay Crisp (3).webp";

const museum1 = "/webp/Poblacion 1, Tagbilaran City (2).webp";
const museum2 = "/webp/Old House in Poblacion 1 (3).webp";

const cathedral1 = "/webp/Old House in Poblacion 1 (5).webp";
const cathedral2 = "/webp/Poblacion 1, Tagbilaran City (2).webp";

const house1 = "/webp/Old House in Poblacion 1 (5).webp";
const house2 = "/webp/Old House in Poblacion 1 (3).webp";
const house3 = "/webp/Old House in Poblacion 1 (7).webp";

const spring1 = "/webp/Tubig Dako in Taloto (1).webp";
const spring2 = "/webp/Taloto to Manga Coastline (1).webp";
const spring3 = "/webp/Taloto to Manga Coastline (6).webp";

export interface DetailedHeritage {
  id: string;
  title: string;
  category: string;
  district: string;
  tagline: string;
  mainImage: string;
  images: string[];
  description: string;
  longHistory: string;
  yearEstablished: string;
  facts: { label: string; value: string }[];
  heritageHighlights: string[];
  culturalGuidelines: string[];
  travelTips: string;
  coordinates: string;
}

export const detailedHeritageList: DetailedHeritage[] = [
  {
    id: "sandugo-shrine",
    title: "The Bohol Sandugo Shrine",
    category: "Historical Alliance",
    district: "Barangay Bool",
    tagline: "The monumental cradle of international diplomacy and peace pacts.",
    mainImage: bcs1,
    images: [bcs1, bcs2, bcs3, bcs4, bcs5, bcs6],
    description: "Centering the iconic bronze monument forged by Tagbilaran's celebrated National Artist, Napoleon Abueva, this waterside shrine celebrates the 1565 Blood Compact.",
    longHistory: "On March 16, 1565, the native chieftain Datu Sikatuna and Spanish General Miguel López de Legazpi cut their wrists, poured their blood into a glass of wine, and drank together. This ancient ritual, known as the 'Sandugo', sealed a covenant of peace and mutual friendship. The sculpture features five life-sized figures surrounding a table, capturing the solemnity of this world-first peaceful alliance.",
    yearEstablished: "1565 (Pact) / 1997 (Sculpture Group)",
    facts: [
      { label: "Sculptor", value: "Napoleon Abueva (National Artist for Sculpture)" },
      { label: "Ritual Basis", value: "Sandugo (One Blood Covenant)" },
      { label: "Historical Date", value: "March 16, 1565" },
      { label: "Material", value: "Solid Cast Antique Bronze" }
    ],
    heritageHighlights: [
      "Abueva's Signature Work: A monumental display of Boholano sculptural dominance.",
      "Bay Overlook: Positioned on a scenic cliff edge looking directly at the Mindanao Sea.",
      "Charter Foundation: Holds the annual Saulog charter assemblies and floral rituals."
    ],
    culturalGuidelines: [
      "Please keep voices at a respectable volume while photographing near the monument.",
      "Climbing or sitting on the bronze statues is strictly forbidden to preserve the sculpture.",
      "Do not leave any litter near the cliffside gardens or viewing deck."
    ],
    travelTips: "Best visited during late afternoons just before sunset. The gold rays of the sun reflect beautifully off the bronze figures with the calm sea strait in the background.",
    coordinates: "9.6204° N, 123.8742° E — Barangay Bool Cliffside View"
  },
  {
    id: "st-joseph-cathedral",
    title: "St. Joseph the Worker Cathedral",
    category: "Sacred Architecture",
    district: "Poblacion I",
    tagline: "The timeless vertical heart of Bohol's faith and heritage.",
    mainImage: cathedral1,
    images: [cathedral1, cathedral2, museum1],
    description: "An awe-inspiring neoclassical cathedral anchored in the center of the city, presenting high stone fortresses and dual towering bells.",
    longHistory: "Originally founded in 1724 by Jesuit missionaries, the cathedral was handed over to the Augustinian Recollects in 1768, who constructed the grand stone fortress matching colonial defense styles. Having survived numerous natural disasters, the cathedral features marvelous ceiling murals illustrating biblical stories, beautiful crystal chandeliers, and a carved wooden retablo coated in classic gold-leaf plating.",
    yearEstablished: "1724 (Parish founded) / 1839-1855 (Stone reconstruction)",
    facts: [
      { label: "Aesthetic Theme", value: "Spanish Baroque & Neoclassical" },
      { label: "Patron Saint", value: "St. Joseph the Worker (Feast on May 1st)" },
      { label: "Primary Material", value: "Quarried Coral Limestone Masonry" },
      { label: "Murals Forged", value: "Ray Francia and Canuto Avila (Ceiling Paints)" }
    ],
    heritageHighlights: [
      "Painted Ceilings: Magnificent restored paintings lining the central nave ceilings.",
      "Plaza District Frontage: Placed directly in front of the historic Town Plaza Rizal.",
      "Twin Bell Towers: The historic bells still sound for civic assemblies and Sunday masses."
    ],
    culturalGuidelines: [
      "Dress modesty is required: Cover shoulders and knees inside the holy cathedral hall.",
      "Silence your mobile phones and devices prior to entering.",
      "Flash photography is prohibited during ongoing Eucharistic ceremonies."
    ],
    travelTips: "Combine this visit with a light walk around Plaza Rizal under the centuries-old acacia trees. Ideal for experiencing authentic Boholano urban life.",
    coordinates: "9.6433° N, 123.8519° E — Central Plaza Plaza District"
  },
  {
    id: "bohol-national-museum",
    title: "Bohol National Museum",
    category: "Civic Artifacts",
    district: "Poblacion II",
    tagline: "A majestic neoclassic house archiving centuries of Boholano wisdom.",
    mainImage: museum1,
    images: [museum1, museum2, cathedral1],
    description: "Housed in the restored Spanish-era Capitol, this grand structure serves as the official archive for historical relics, traditional fabrics, and artifacts.",
    longHistory: "Completed in 1860 as the Spanish Provincial Tribunal and later serving as the Provincial Capitol of Bohol, this sturdy limestone building was fully restored under the National Museum network. It showcases pre-colonial geological remains, colonial-era religious panels, handcarved wooden retablos, and detailed maps detailing the rich natural biodiversity of the Bohol Strait.",
    yearEstablished: "1860 (Capitol Building) / 2018 (Museum Launch)",
    facts: [
      { label: "Original Purpose", value: "Provincial Tribunal & Casa Real" },
      { label: "Exhibits Hosted", value: "Archaeological, Ethnographic, and Art Galleries" },
      { label: "Restoration Cost", value: "Direct National Heritage Grant" },
      { label: "Surviving Force", value: "Survived the great 2013 Bohol Earthquake" }
    ],
    heritageHighlights: [
      "Boholano Crafts Archive: View traditional baskets, pottery, and weaving looms.",
      "Spanish Limestone Architecture: High arches, original wooden floors, and shell windows.",
      "Natural Science Galleries: Explaining the coral formation of Bohol's unique geographic landscape."
    ],
    culturalGuidelines: [
      "No food or liquids are permitted inside any exhibit galleries.",
      "Look but do not touch the historic glass cabinets or hanging paintings.",
      "Commercial video recording requires a prior permit from the museum curator."
    ],
    travelTips: "Inquire at the reception desk for free guided tours. The museum is fully air-conditioned and serves as a highly refreshing educational midday retreat.",
    coordinates: "9.6430° N, 123.8531° E — Poblacion II, opposite Plaza Rizal"
  },
  {
    id: "balili-heritage-house",
    title: "Balili Ancestral House",
    category: "Bahay Na Bato",
    district: "Poblacion I",
    tagline: "The living monument of Filipino-Spanish architecture and domestic elegance.",
    mainImage: house1,
    images: [house1, house2, house3],
    description: "A beautifully preserved wood-and-stone mansion that whispers stories of Tagbilaran's elite merchant lineage since colonial decades.",
    longHistory: "Standing tall as a prime example of the Filipino 'Bahay na Bato' style, the Balili Heritage House highlights the brilliant adaptation of traditional tropical layout with European architectural influences. The ground floor consists of thick coral stone walls, while the upper floor features massive tropical hardwoods, sliding Capiz shell windows, and intricate wooden carvings called 'calados' that enable natural breeze circulation.",
    yearEstablished: "Late 19th Century",
    facts: [
      { label: "Structural Type", value: "Bahay na Bato (Stone Base, Wood Top)" },
      { label: "Feature Windows", value: "Translucent Capiz Shell Sliders" },
      { label: "Breeze Ducts", value: "Calado Wooden Lace Openings" },
      { label: "Timber Native", value: "Molave and Narra Hardwood Beams" }
    ],
    heritageHighlights: [
      "Vintage Domesticity: Showcases family heirlooms and antique furniture pieces.",
      "Climatic Mastery: Elevated living quarters optimized to stay call and ventilated.",
      "Capiz Light effects: In late afternoon, sunlight through shell panes produces a warm glow."
    ],
    culturalGuidelines: [
      "Remove your outdoor shoes at the threshold if requested by the home hosts.",
      "Stick closely to designated hallways; certain rooms remain private quarters.",
      "Avoid leaning against delicate wooden walls, pillars, or antique shelves."
    ],
    travelTips: "Be sure to observe the high pillars made from single tree trunks and the unique wooden storage chest designs inside the main sala.",
    coordinates: "9.6418° N, 123.8502° E — Poblacion I Heritage Trail"
  },
  {
    id: "bohol-blades-mastery",
    title: "Dampas Blade Blacksmithing",
    category: "Artisan Ironmongery",
    district: "Barangay Dampas",
    tagline: "The fierce heat of glowing coal making traditional Boholano steel.",
    mainImage: blades1,
    images: [blades1, blades2],
    description: "Centuries-old metalworking and weapon-making techniques preserved by passionate blacksmith clans in Dampas district.",
    longHistory: "The blacksmiths of Barangay Dampas are famous across Visayas for forging traditional Boholano knives and swords, such as the curved 'Bolo' and the wavy 'Pinuti'. Operating with manual bellows, burning coal, and heavy anvils, these master steelworkers temper blades with custom salt-water baths, creating unparalleled edge retention and robust metal elasticity passed down through generations.",
    yearEstablished: "Early Colonial Era (Weapons Guild)",
    facts: [
      { label: "Primary Craft", value: "Hand-Forging Blades & Agricultural Tools" },
      { label: "Temper Secret", value: "Saline quenching and oil annealing" },
      { label: "Main Tool", value: "Coal fire, heavy anvils, and double-piston bellows" },
      { label: "Handle Style", value: "Carved Molave and Water Buffalo Horns" }
    ],
    heritageHighlights: [
      "Molten Steel Craft: Watch steel bars bent, flat-forged, and shaped inside coal furnaces.",
      "Custom Carvings: Intricately designed wooden handles representing spirit guards.",
      "Ecology Tools: Witness tools created to aid rural farming and traditional defense."
    ],
    culturalGuidelines: [
      "Remain at a safe distance from active coal fires, hot iron sparks, and flying scale.",
      "Always ask permission before lifting or testing the weight of any completed blade.",
      "Close supervision of children is mandatory around the blacksmithing yard."
    ],
    travelTips: "Purchase a small artisanal pocket knife directly from the smiths. It is a highly respected collector's item and directly supports local family guilds.",
    coordinates: "9.6385° N, 123.8710° E — Dampas Artisan Forges"
  },
  {
    id: "tubig-dako-spring",
    title: "Tubig Dako Cave Spring",
    category: "Natural Heritage",
    district: "Barangay Taloto",
    tagline: "The mystical freshwater grotto protecting Tagbilaran's coastal settlements.",
    mainImage: spring1,
    images: [spring1, spring2, spring3],
    description: "An ancient cavern holding an abundant freshwater spring that has offered life-giving water for generations.",
    longHistory: "Meaning 'Big Water' in the local Boholano dialect, Tubig Dako is a natural underground spring inside a deep limestone cave in Taloto. During historical dry spells and wartime sieges, this safe cave spring water sustained nearby families. Legend says the cave's deep pools are guarded by local forest entities, anchoring a wealth of local folklore and community respect.",
    yearEstablished: "Natural Landmark (Centuries of Use)",
    facts: [
      { label: "Spring Volume", value: "High-yield continuous subterranean spring" },
      { label: "Geology", value: "Limestone karstic cavern with clean pools" },
      { label: "Water Quality", value: "Naturally filtered, ice-cold freshwater" },
      { label: "Surrounding", value: "Dense beach foliage and coastal mangrove belts" }
    ],
    heritageHighlights: [
      "Cavern Grotto: Beautiful limestone rock formations with cool dripping water.",
      "Folkloric Origin: Learn the mythical stories told by local elders during the full moon.",
      "Mangrove Walkways: Connecting paths to the nearby scenic Taloto-Manga coastline."
    ],
    culturalGuidelines: [
      "Keep this natural reserve pristine: Absolutely no throwing of coins or litter into pools.",
      "Avoid using hair shampoos or chemical soaps near the opening water channel.",
      "Respect the quiet and peaceful nature of the cavern site as a municipal wildlife refuge."
    ],
    travelTips: "Bring a light pocket flashlight to examine the interesting rock details inside the grotto. It is very cooling during high-noon heat waves.",
    coordinates: "9.6631° N, 123.8564° E — Taloto Karst Formations"
  }
];
