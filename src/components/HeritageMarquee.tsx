import { Compass } from "lucide-react";

const bcs = "/webp/Poblacion 1, Tagbilaran City (1).webp";
const baliliOldHouse = "/webp/Old House in Poblacion 1 (5).webp";
const baybayTaloto = "/webp/Taloto to Manga Coastline (6).webp";
const bloodCompact21 = "/webp/Poblacion 1, Tagbilaran City (1) (1).webp";
const bloodCompact28 = "/webp/Poblacion 1, Tagbilaran City (2).webp";
const blades1 = "/webp/Timapay Crisp (3).webp";
const blades3 = "/webp/Timapay Crisp (3).webp";
const museum2 = "/webp/Poblacion 1, Tagbilaran City (2).webp";
const oldHousePob1 = "/webp/Old House in Poblacion 1 (3).webp";
const tubigDako = "/webp/Tubig Dako in Taloto (1).webp";

interface MarqueeCardProps {
  id: string;
  title: string;
  category: string;
  district: string;
  image: string;
  desc: string;
}

const row1Cards: MarqueeCardProps[] = [
  {
    id: "sandugo-shrine",
    title: "Sandugo Covenant Site",
    category: "Heritage Covenant",
    district: "Barangay Bool",
    image: bcs,
    desc: "Datu Sikatuna's historic blood pact with Legazpi in March 1565."
  },
  {
    id: "bohol-national-museum",
    title: "National Museum Bohol",
    category: "Spanish Neoclassical",
    district: "Poblacion II",
    image: museum2,
    desc: "Restored old Capitol hosting native pre-colonial historical artifacts."
  },
  {
    id: "bohol-blades-mastery",
    title: "Traditional Forged Blades",
    category: "Forged Metallurgy",
    district: "Dampas District",
    image: blades1,
    desc: "Hand forged Bolos and traditional wavy defense steel craftsmanship."
  },
  {
    id: "balili-heritage-house",
    title: "Colonial Ancestral Casas",
    category: "Bahay Na Bato",
    district: "Poblacion I",
    image: oldHousePob1,
    desc: "Historic heavy timber structures decorated with beautiful capiz shutters."
  },
  {
    id: "tubig-dako-spring",
    title: "Tubig Dako Cave Spring",
    category: "Eco Sanctuary",
    district: "Barangay Taloto",
    image: tubigDako,
    desc: "Ancient cavern water supply harboring local heritage and folklore."
  }
];

const row2Cards: MarqueeCardProps[] = [
  {
    id: "balili-heritage-house",
    title: "Balili Heritage House",
    category: "Historical Villa",
    district: "Poblacion I",
    image: baliliOldHouse,
    desc: "Breathtaking heritage house showing structural preservation and vintage architecture."
  },
  {
    id: "tubig-dako-spring",
    title: "Baybay sa Taloto",
    category: "Coast Sanctuary",
    district: "Barangay Taloto",
    image: baybayTaloto,
    desc: "Pristine coast view overlooking beautiful marine ecosystems and islands."
  },
  {
    id: "sandugo-shrine",
    title: "Sikatuna Bronze Shrine",
    category: "Heritage Monument",
    district: "Barangay Bool",
    image: bloodCompact21,
    desc: "A stunning bronze masterpiece depicting eternal alliance and hospitality."
  },
  {
    id: "bohol-blades-mastery",
    title: "Bohol Blades Mastery",
    category: "Forged Weapons",
    district: "Barangay Dampas",
    image: blades3,
    desc: "Showcasing Boholano blacksmith expertise, antique handles and premium blades."
  },
  {
    id: "sandugo-shrine",
    title: "Blood Compact Site Panorama",
    category: "Historic Sanctuary",
    district: "Barangay Bool",
    image: bloodCompact28,
    desc: "Commemorating historical milestones and outstanding waterfront heritage."
  }
];

interface HeritageMarqueeProps {
  onCardClick?: (id: string) => void;
}

export default function HeritageMarquee({ onCardClick }: HeritageMarqueeProps) {
  return (
    <section 
      id="infinite-heritage-marquee" 
      className="w-full pt-0 pb-16 bg-transparent text-white overflow-hidden flex flex-col gap-12"
    >
      {/* Header Info */}
      <div className="text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="font-sans font-black text-3xl sm:text-4xl tracking-tight leading-tight text-white mb-3">
          Explore Our Heritage
        </h3>
        <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
          A continuous, panoramic exposition of Tagbilaran's cultural nodes. **Click any card** below to open its dedicated immersive page with corresponding images, historical guides, and traveler tips.
        </p>
      </div>

      {/* Marquee Wrapper with Pause On Hover capability */}
      <div className="w-full flex flex-col gap-6 select-none relative hover-pause" id="marquee-rows-container">
        
        {/* Row 1: Scrolling Left */}
        <div className="w-full overflow-hidden relative py-2" id="marquee-row-1-wrapper">
          {/* Edge Gradients overlays */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black/15 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black/15 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max flex-nowrap gap-6 animate-marquee-left" id="marquee-row-1">
            {/* Duplicated once for seamless endless scroll */}
            {[...row1Cards, ...row1Cards].map((card, idx) => (
              <div 
                key={`row1-${idx}`}
                onClick={() => onCardClick?.(card.id)}
                className="w-[280px] sm:w-[300px] shrink-0 bg-[rgba(0,0,0,0.25)] backdrop-blur-md rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.15)] hover:border-[#FFD54F] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer flex flex-col text-left group glass-panel-custom"
              >
                {/* Image slot */}
                <div className="h-[180px] sm:h-[196px] w-full overflow-hidden relative bg-black/25">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[rgba(255,255,255,0.2)] text-white border border-[rgba(255,255,255,0.35)] backdrop-blur-sm px-2.5 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase badge-tag-custom">
                    {card.district}
                  </div>
                </div>

                {/* Content area */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-1">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FFD54F] uppercase block">
                      {card.category}
                    </span>
                    <h4 className="font-sans font-extrabold text-base text-white mt-1 group-hover:text-[#FFD54F] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-white text-xs leading-relaxed mt-2 line-clamp-2 font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="w-full overflow-hidden relative py-2" id="marquee-row-2-wrapper">
          {/* Edge Gradients overlays */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black/15 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black/15 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max flex-nowrap gap-6 animate-marquee-right" id="marquee-row-2">
            {/* Duplicated once for seamless endless scroll */}
            {[...row2Cards, ...row2Cards].map((card, idx) => (
              <div 
                key={`row2-${idx}`}
                onClick={() => onCardClick?.(card.id)}
                className="w-[280px] sm:w-[300px] shrink-0 bg-[rgba(0,0,0,0.25)] backdrop-blur-md rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.15)] hover:border-[#FFD54F] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer flex flex-col text-left group glass-panel-custom"
              >
                {/* Image slot */}
                <div className="h-[180px] sm:h-[196px] w-full overflow-hidden relative bg-black/25">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[rgba(255,255,255,0.2)] text-white border border-[rgba(255,255,255,0.35)] backdrop-blur-sm px-2.5 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase badge-tag-custom">
                    {card.district}
                  </div>
                </div>

                {/* Content area */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-1">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FFD54F] uppercase block">
                      {card.category}
                    </span>
                    <h4 className="font-sans font-extrabold text-base text-white mt-1 group-hover:text-[#FFD54F] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-white text-xs leading-relaxed mt-2 line-clamp-2 font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
