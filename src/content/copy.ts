// All words on the site live here. Edit wording without touching layout.
// [DRAFT] marks copy Claude wrote for Kiri to review. [PLACEHOLDER] marks a value still to confirm.

export const site = {
  name: "The Rise",
  address: "275 Montreal Street",
  suburb: "Christchurch Central",
  url: "https://the-rise-site.vercel.app", // [PLACEHOLDER] domain
  title: "The Rise | Five full-floor residences, 275 Montreal Street, Christchurch",
  description:
    "Five full-floor, three-bedroom residences with private west decks and a rooftop wellness pavilion at 275 Montreal Street, Christchurch Central. Marketed by Angela Webb, Bayleys.",
  developer: "[Developer to be confirmed]", // [PLACEHOLDER]
  weatherLabel: "Christchurch",
};

export const nav = {
  links: [
    { label: "Residences", href: "#residences" },
    { label: "Rooftop", href: "#rooftop" },
    { label: "Location", href: "#location" },
    { label: "Agent", href: "#register" },
  ],
  brochure: { label: "Brochure", href: "/the-rise-brochure.pdf" },
  cta: "Register interest",
};

export const hero = {
  eyebrow: "275 Montreal Street · Christchurch Central",
  headline: "A whole floor.\nYours alone.", // [DRAFT]
  status: "Five three-bedroom residences · One per floor · Rooftop wellness pavilion",
  cta: "Register interest",
  video: "/media/hero-loop.mp4", // Higgsfield drone, morning to night
  dusk: "/media/greenery-still.jpg",
  poster: "/media/hero-poster.jpg", // Higgsfield planted morning still
  imageAlt: "Artist's impression of The Rise, a five-level brick residence with planted balconies, seen from above",
  renderNote: "Artist's impression",
};

export const intro = {
  eyebrow: "The Rise",
  heading: "Where Montreal Street rises.", // [DRAFT]
  body: [
    "Every city keeps a handful of addresses that feel different. A quieter street, a longer view, light that lingers into the evening.",
    "The Rise is five homes, stacked one to a floor, in warm brick and cedar and softened with planting on every deck. A lift to your own floor, a 10-metre west deck, three bedrooms and a rooftop of sauna, spa and terrace shared by just five owners.",
  ],
  image: "/media/ext-west-aerial.jpg",
  imageAlt: "Artist's impression of the west face of The Rise with a deck on every level",
};

export const facts = [
  { value: "5", label: "Residences, one per floor" },
  { value: "148 m²", label: "Gross interior, Levels 1 to 4" },
  { value: "30 m²", label: "Private west deck, every home" },
  { value: "3", label: "Bedrooms in every residence" },
  { value: "90 m²", label: "Rooftop wellness pavilion" },
];

export const residences = {
  eyebrow: "The Residences",
  heading: "Five homes. Five floors.",
  lede: "Every residence takes an entire floor, so living, dining and the master suite all open to the west deck and the afternoon sun.",
  tabs: [
    {
      key: "garden",
      name: "The Garden Residence",
      level: "Ground floor",
      interior: "127.3 m²",
      deck: "30 m² west terrace",
      plan: "/media/plans/ground.jpg",
      points: [
        "Three bedrooms, two bathrooms",
        "Master suite with walk-in robe and private ensuite",
        "Full-width 10 m west terrace beside the rear garden",
        "Open living, kitchen island and dining",
        "Level entry from the gated forecourt",
      ],
    },
    {
      key: "sky",
      name: "The Sky Residences",
      level: "Levels 1, 2 and 3",
      interior: "148.4 m²",
      deck: "30 m² west deck",
      plan: "/media/plans/levels-1-4.jpg",
      points: [
        "Three bedrooms with a rectangular 18.4 m² third bedroom",
        "Master suite with walk-in robe and private ensuite",
        "Separate WC and shower room, each with its own basin",
        "Walk-in pantry beside the kitchen; east dining gallery",
        "Full-width 10 m west deck with sliding glass",
      ],
    },
    {
      key: "penthouse",
      name: "The Penthouse",
      level: "Level 4",
      interior: "148.4 m²",
      deck: "30 m² open-sky deck",
      plan: "/media/plans/levels-1-4.jpg",
      points: [
        "The top residence, with the roof over its deck removed",
        "A 10 m west deck open to the sky",
        "Three bedrooms, master suite with private ensuite",
        "Walk-in pantry, separate WC and shower room",
        "One level below the rooftop pavilion, never passed through",
      ],
    },
  ],
  areaNote:
    "Areas are gross and include walls; net usable areas will be lower. Plans are concept designs, furniture is indicative, and layouts may change through design and consent.",
  price: "Price on application", // [PLACEHOLDER] pricing
};

export const deck = {
  eyebrow: "Outdoor living",
  heading: "Evenings belong to the west deck.",
  body: "Ten metres of deck runs the full width of every home, with sliding glass from the living room and master suite. It faces west, so the late sun stays with you, over the trees and rooftops towards the park.",
  image: "/media/balcony-penthouse.jpg",
  imageAlt: "Artist's impression of the penthouse deck with glass balustrade and brick wall",
  image2: "/media/ext-penthouse-deck.jpg",
  image2Alt: "Artist's impression of the open-sky penthouse deck and rooftop pavilion",
};

export const rooftop = {
  eyebrow: "Rooftop wellness",
  heading: "A private pavilion above the city.",
  body: "Crowning The Rise is a glazed wellness pavilion for residents only: a cedar sauna, a spa, a gym and stretching studio, and a 40 m² roof terrace facing west. It's reached by the shared lift, so no one passes through the penthouse.",
  features: [
    { name: "Cedar sauna", detail: "Insulated cedar with a glazed front" },
    { name: "Spa", detail: "2.6 × 2.6 m, under glass" },
    { name: "Gym and stretch", detail: "Sliding glass walls to the north and west" },
    { name: "Roof terrace", detail: "40 m², open to the sunset" },
  ],
  image: "/media/wellness-view.jpg",
  imageAlt: "Artist's impression of the rooftop pavilion with spa, cedar sauna and gym",
  image2: "/media/wellness-pavilion.jpg",
  image2Alt: "Artist's impression of the pavilion interior looking out over the city",
};

export const design = {
  eyebrow: "Design",
  heading: "Brick, cedar, stone and green.",
  body: "A disciplined brick facade, generous glazing and restrained cedar detailing, with planting brought onto every deck and along the boundaries to soften the building and give it a garden at every level.",
  materials: [
    { name: "Brick", detail: "Warm, durable and timeless" },
    { name: "Cedar", detail: "Restrained accents and the sauna" },
    { name: "Stone", detail: "Pale stone-toned detailing and decks" },
    { name: "Planting", detail: "Greenery on every level" },
  ],
};

export const arrival = {
  eyebrow: "Arrival",
  heading: "Gated, private, one park each.",
  body: "Arrive through a sliding gate to a private forecourt with one park for every residence, a separate pedestrian gate and a clearly expressed east entrance. A lift and enclosed stair serve every floor and the rooftop.",
  points: ["Sliding vehicle gate with intercom", "Five parks, one per residence", "Separate pedestrian gate", "Controlled lift to every floor"],
  image: "/media/ext-east-aerial.jpg", // Higgsfield: closer crop with climbing plants
  imageAlt: "Artist's impression of the gated forecourt and east entrance of The Rise",
};

export const location = {
  eyebrow: "Location",
  heading: "The best of the central city, on foot.",
  body: "Montreal Street sits on the quieter north-west edge of the central city, close to Hagley Park, the Ōtākaro Avon River and the cafés, galleries and restaurants that have made central Christchurch one of the country's most liveable city centres.",
  places: [
    { name: "Hagley Park", time: "[x] min walk" },
    { name: "Ōtākaro Avon River", time: "[x] min walk" },
    { name: "Christchurch Botanic Gardens", time: "[x] min walk" },
    { name: "The Arts Centre", time: "[x] min walk" },
    { name: "Christchurch Art Gallery", time: "[x] min walk" },
    { name: "Riverside Market", time: "[x] min walk" },
    { name: "Victoria Street dining", time: "[x] min walk" },
    { name: "Te Pae Convention Centre", time: "[x] min walk" },
    { name: "Christchurch Airport", time: "[x] min drive" },
  ], // [PLACEHOLDER] walk and drive times
  note: "Walk and drive times to be confirmed.",
};

export const agent = {
  eyebrow: "Selling agent",
  name: "Angela Webb",
  role: "Residential, Investment & Development Sales · Bayleys Christchurch",
  bio: "Angela heads Bayleys Canterbury's residential investment division and a team of five sales professionals. A multi-award winner, she is in the Top 10% of Bayleys salespeople for 2025/26 and a member of the Bayleys $300 Million Club.",
  phone: "+64 27 349 1997",
  phoneHref: "tel:+64273491997",
  email: "angela.webb@bayleys.co.nz",
  photo: "/media/angela-webb.jpg",
  office: "Bayleys Christchurch · +64 3 375 4700",
  licence: "Whalan and Partners Ltd, Bayleys. Licensed under the REA Act 2008.",
};

export const form = {
  eyebrow: "Register interest",
  heading: "Be first to see the residences.",
  lede: "Registrations receive floor plans, pricing and a private viewing with Angela before public release.",
  fields: {
    first: "First name",
    last: "Last name",
    email: "Email",
    phone: "Phone",
    interest: "Residence of interest",
    budget: "Budget",
    heard: "How did you hear about The Rise?",
    consent: "I agree to receive updates about The Rise.",
  },
  interestOptions: ["The Penthouse", "A Sky Residence (Levels 1 to 3)", "The Garden Residence", "Not sure yet"],
  budgetOptions: ["$1.5m to $2m", "$2m to $2.5m", "$2.5m to $3m", "$3m and above"],
  heardOptions: ["Bayleys", "Instagram or Facebook", "Google", "realestate.co.nz or Trade Me", "Signage", "Newspaper or magazine", "Word of mouth", "Other"],
  submit: "Submit",
  success: "Thank you. Angela will be in touch personally.",
  error: "Sorry, that didn't send. Please call Angela on +64 27 349 1997.",
};

export const footer = {
  marketingLink: "Go-to-market plan, 100 ad concepts and traditional media",
  disclaimer:
    "All images are artist's impressions and indicative only, including surrounding buildings, planting and views. The Rise is a feasibility concept that has not been consented: heritage, planning, structural, fire and access matters are still to be resolved, and plans, areas, specifications and the number of residences may change without notice. Areas are gross. This website does not form part of any offer or contract. Buyers should make their own enquiries and seek independent legal advice.",
  developer: `Developer: ${site.developer}`,
};
