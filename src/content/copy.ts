// All words on the site live here. Edit wording without touching layout.
// [DRAFT] marks copy Claude wrote for Kiri to review. [PLACEHOLDER] marks a value still to confirm.

export const site = {
  name: "The Rise",
  address: "275 Montreal Street",
  suburb: "Christchurch Central",
  url: "https://the-rise-site.vercel.app", // [PLACEHOLDER] domain
  title: "The Rise | Six residences, five full floors, 275 Montreal Street, Christchurch",
  description:
    "Six residences at 275 Montreal Street, Christchurch Central: five full-floor, three-bedroom homes with 30 m² west balconies, a ground-floor garden residence, residents' wellness and rooftop solar. Marketed by Angela Webb, Bayleys.",
  developer: "[Developer to be confirmed]", // [PLACEHOLDER]
  weatherLabel: "Christchurch",
};

export const nav = {
  links: [
    { label: "Residences", href: "#residences" },
    { label: "Wellness", href: "#wellness" },
    { label: "Location", href: "#location" },
    { label: "Agent", href: "#register" },
  ],
  brochure: { label: "Brochure", href: "/the-rise-brochure.pdf" },
  cta: "Register interest",
};

export const hero = {
  eyebrow: "275 Montreal Street · Christchurch Central",
  headline: "A whole floor.\nYours alone.", // [DRAFT]
  status: "Six residences · Five full floors · A garden residence and residents' wellness",
  cta: "Register interest",
  video: "/media/hero-loop.mp4", // Higgsfield rising drone of Paul's approved render, sunset to night
  filmPoster: "/media/hero-film-poster.jpg", // first frame of the film
  poster: "/media/hero-poster.jpg", // Higgsfield planted morning still, six levels, rooftop solar
  imageAlt: "Artist's impression of The Rise, a six-level brick residence with planted balconies, seen from above",
  renderNote: "Artist's impression",
};

export const intro = {
  eyebrow: "The Rise",
  heading: "Where Montreal Street rises.", // [DRAFT]
  body: [
    "Every city keeps a handful of addresses that feel different. A quieter street, a longer view, light that lingers into the evening.",
    "The Rise is six homes, one to a floor, in warm brick and cedar and softened with planting on every balcony. Five full-floor residences rise above a two-bedroom garden residence: a lift to your own floor, a 10-metre west balcony, three bedrooms, and a garden-level retreat of sauna, spa and gym shared by just six owners.",
  ],
};

export const facts = [
  { value: "6", label: "Residences, one per floor" },
  { value: "144 m²", label: "Gross interior, Levels 1 to 5" },
  { value: "30 m²", label: "West balcony, every upper home" },
  { value: "3", label: "Bedrooms, Levels 1 to 5" },
  { value: "70 m²", label: "Residents' wellness at garden level" },
];

export const residences = {
  eyebrow: "The Residences",
  heading: "Six homes. One per floor.",
  lede: "Five residences each take an entire upper floor, so living, dining and the master suite all open to the west balcony and the afternoon sun. At ground level, a two-bedroom garden residence opens to its own private garden.",
  tabs: [
    {
      key: "garden",
      name: "The Garden Residence",
      level: "Ground floor · Apartment 01",
      interior: "74.2 m²",
      deck: "34 m² private garden",
      plan: "/media/plans/ground.jpg",
      points: [
        "Two bedrooms, bathroom and storage",
        "West living and dining opening to a private garden and terrace of about 34 m²",
        "Its own entry from the shared lobby, beside the lift",
        "The garden is fenced off from the residents' spa courtyard",
        "Level living with no stairs",
      ],
    },
    {
      key: "sky",
      name: "The Sky Residences",
      level: "Levels 1 to 4 · Apartments 02 to 05",
      interior: "144.4 m²",
      deck: "30 m² west balcony",
      plan: "/media/plans/levels-1-5.jpg",
      points: [
        "A whole floor: three bedrooms, with the lift opening to a private entry gallery",
        "Master suite with walk-in robe and ensuite",
        "Kitchen island, slim walk-in pantry and east dining",
        "Separate WC and shower room off the entry",
        "Full-width 10 × 3 m west balcony, sheltered by the balcony above",
      ],
    },
    {
      key: "penthouse",
      name: "The Penthouse",
      level: "Level 5 · Apartment 06",
      interior: "144.4 m²",
      deck: "30 m² open-sky balcony",
      plan: "/media/plans/levels-1-5.jpg",
      points: [
        "The top floor, with nothing above it but the roof",
        "A 10 × 3 m west balcony open to the sky",
        "Three bedrooms, master suite with walk-in robe and ensuite",
        "Walk-in pantry, separate WC and shower room",
        "The same proven plan as the floors below, at the highest level",
      ],
    },
  ],
  areaNote:
    "Areas are gross planning areas and include walls; net usable areas will be lower. Plans are concept designs, furniture is indicative, and layouts may change through design and consent.",
  price: "Price on application", // [PLACEHOLDER] pricing
};

export const deck = {
  eyebrow: "Outdoor living",
  heading: "Evenings belong to the west balcony.",
  body: "Ten metres of balcony runs the full width of every upper home, with sliding glass from the living room and master suite. It faces west, so the late sun stays with you, over the trees and rooftops towards the park. At the penthouse it is open to the sky.",
  image: "/media/balcony-penthouse.jpg",
  imageAlt: "Artist's impression of the open-sky penthouse balcony with glass balustrade and brick wall",
  image2: "/media/penthouse-living.jpg",
  image2Alt: "Artist's impression of the penthouse living room looking west through sliding glass to the balcony",
};

export const wellness = {
  eyebrow: "Residents' wellness",
  heading: "A private retreat at garden level.",
  body: "Beside the garden sits a wellness retreat for residents only: a cedar sauna, a gym and stretch room, and a garden lounge that opens west to a walled spa courtyard. It has its own entrance from the shared lobby, so no one passes through a home.",
  features: [
    { name: "Cedar sauna", detail: "2.6 × 2.6 m, in the quiet north-east corner" },
    { name: "Spa garden", detail: "A 2.4 m spa in a private planted courtyard" },
    { name: "Gym and stretch", detail: "Treadmill, weights and space to stretch" },
    { name: "Garden lounge", detail: "Glazed to the west and the spa courtyard" },
  ],
  image: "/media/wellness-lounge.jpg",
  imageAlt: "Artist's impression of the residents' garden lounge and gym looking west to the spa courtyard",
  image2: "/media/wellness-sauna.jpg",
  image2Alt: "Artist's impression of the cedar sauna",
};

export const design = {
  eyebrow: "Design",
  heading: "Brick, cedar, green and sun.",
  body: "A disciplined red-brick facade, dark-framed glazing, pale balcony edges and restrained cedar, with planting brought onto every balcony to give the building a garden at every level. Up on the flat roof, a quiet array of north-facing solar panels helps power the building.", // [DRAFT] solar wording
  materials: [
    { name: "Brick", detail: "Warm, durable and timeless" },
    { name: "Cedar", detail: "Restrained accents and the sauna" },
    { name: "Planting", detail: "Greenery on every level" },
    { name: "Solar", detail: "Discreet panels on the roof, angled north" },
  ],
};

export const arrival = {
  eyebrow: "Arrival",
  heading: "A quiet forecourt. Room for eight.",
  body: "Arrive from Montreal Street to a private east forecourt with four car stackers, each able to hold two cars, a bin and cycle store and a separate pedestrian path to the east entrance. A lift and stair serve every floor.",
  points: ["Four car stackers, up to eight parks", "Separate pedestrian path to the entrance", "Bin and cycle store", "Lift to every floor"],
  note: "Stacker numbers and capacity are subject to equipment, access and consent checks.",
  image: "/media/ext-east-aerial.jpg", // Higgsfield: closer crop with climbing plants and rooftop solar
  imageAlt: "Artist's impression of the east forecourt and entrance of The Rise",
};

export const location = {
  eyebrow: "Location",
  heading: "The best of the central city, on foot.",
  body: "Montreal Street sits on the quieter north-west edge of the central city, close to Hagley Park, the Ōtākaro Avon River and the cafés, galleries and restaurants that have made central Christchurch one of the country's most liveable city centres.",
  places: [
    { name: "Hagley Park", time: "6 min walk" },
    { name: "Ōtākaro Avon River", time: "5 min walk" },
    { name: "Christchurch Botanic Gardens", time: "6 min walk" },
    { name: "The Arts Centre", time: "3 min walk" },
    { name: "Christchurch Art Gallery", time: "6 min walk" },
    { name: "Riverside Market", time: "6 min walk" },
    { name: "Victoria Street dining", time: "14 min walk" },
    { name: "Te Pae Convention Centre", time: "11 min walk" },
    { name: "Christchurch Airport", time: "20 min drive" },
  ], // OpenStreetMap routing from 275 Montreal St, 7 Oct 2026; airport is a free-flow estimate
  note: "Approximate walking times from 275 Montreal Street. Airport drive time is outside peak traffic.",
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
  interestOptions: ["The Penthouse (Level 5)", "A Sky Residence (Levels 1 to 4)", "The Garden Residence (two bedrooms)", "Not sure yet"],
  budgetOptions: ["Under $1.5m", "$1.5m to $2m", "$2m to $2.5m", "$2.5m to $3m", "$3m and above"],
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
