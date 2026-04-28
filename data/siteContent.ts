export type NavigationItem = {
  label: string;
  href: string;
};

export type Benefit = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export type Experience = {
  title: string;
  description: string;
  duration?: string;
  image: string;
  imageAlt: string;
  tag: string;
  tags: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PracticalInfo = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  origin: string;
  placeholder: boolean;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ImageCredit = {
  label: string;
  photographer: string;
  license: string;
  sourceUrl: string;
};

export const siteContent = {
  seo: {
    title: "Tailor-Made North Macedonia Trips with Marija Petrova",
    description:
      "Plan a personal North Macedonia trip with Marija Petrova, a local travel designer creating authentic routes, food and wine experiences, Ohrid stays, Skopje visits, nature escapes, and Balkan add-ons.",
    keywords: [
      "North Macedonia travel planner",
      "North Macedonia local guide",
      "tailor-made North Macedonia trip",
      "private North Macedonia tour",
      "Ohrid travel experience",
      "Skopje local tour",
      "North Macedonia food and wine trip",
      "Balkan travel planner",
      "authentic North Macedonia travel",
    ],
  },
  navigation: [
    { label: "Experiences", href: "#experiences" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Plan your trip", href: "#contact" },
  ] satisfies NavigationItem[],
  hero: {
    title: "Discover North Macedonia with Marija, your local travel designer",
    subtitle:
      "Tailor-made trips, authentic local experiences, and personal guidance from someone who knows the country from the inside.",
    primaryCta: "Plan my trip with Marija",
    secondaryCta: "Explore experiences",
    image: "/images/galicica-panorama.jpg",
    imageAlt:
      "Panoramic view from Galicica toward Ohrid and Prespa lakes in North Macedonia.",
    trustBadges: [
      "Based in North Macedonia",
      "Tailor-made travel",
      "Local experiences",
      "Personal support",
    ],
  },
  intro: {
    eyebrow: "A local promise",
    title: "Travel planning that feels personal from the first conversation",
    description:
      "Hi, I’m Marija. I live in North Macedonia and love helping visitors experience the country beyond the usual tourist routes. Whether you want lake views in Ohrid, traditional food, wine tastings, mountain villages, monasteries, or a relaxed local city experience, I help shape a trip that feels personal and real.",
    image: "/images/marija-petrova.png",
    imageAlt: "Portrait of Marija Petrova.",
    highlights: ["Local knowledge", "Personal planning", "Authentic experiences"],
  },
  benefits: [
    {
      title: "Designed around you",
      description:
        "Every itinerary starts with your interests, dates, pace, and budget.",
      image: "/images/benefits/designed-around-you.jpg",
      imageAlt: "Boat Galija on Lake Ohrid in North Macedonia.",
      imagePosition: "center 58%",
    },
    {
      title: "Local insight",
      description:
        "Discover places, restaurants, routes, and experiences that are hard to find on your own.",
      image: "/images/benefits/local-insight.jpg",
      imageAlt: "Historic residential architecture in Bitola, North Macedonia.",
      imagePosition: "center 28%",
    },
    {
      title: "Authentic experiences",
      description:
        "Food, wine, culture, nature, local villages, family-run places, and personal encounters.",
      image: "/images/benefits/authentic-experiences.jpg",
      imageAlt: "Traditional tavce gravce served in ceramic dishes.",
      imagePosition: "center 42%",
    },
    {
      title: "Flexible support",
      description:
        "Get help before and during your trip, from route ideas to trusted local contacts.",
      image: "/images/benefits/flexible-support-orbit.svg",
      imageAlt: "Illustration of a traveler at the center with travel support details orbiting around them.",
      imagePosition: "center",
    },
    {
      title: "No mass tourism",
      description:
        "Smaller, personal travel ideas instead of standard group packages.",
      image: "/images/benefits/no-mass-tourism.jpg",
      imageAlt: "Village of Trpejca above Lake Ohrid in North Macedonia.",
      imagePosition: "center 46%",
    },
    {
      title: "Balkan add-ons",
      description:
        "Optional combinations with Albania, Kosovo, Greece, Serbia, or Bulgaria.",
      image: "/images/benefits/balkan-add-ons.jpg",
      imageAlt: "Wide mountain panorama from Galicica in North Macedonia.",
      imagePosition: "center 62%",
    },
  ] satisfies Benefit[],
  experiences: [
    {
      title: "Ohrid & Lake Life",
      description:
        "Explore Ohrid’s old town, lake views, churches, boat rides, local restaurants, and relaxed waterfront atmosphere.",
      duration: "2 to 4 days",
      image: "/images/ohrid-kaneo.jpg",
      imageAlt: "Church of St. John at Kaneo above Lake Ohrid in North Macedonia.",
      tag: "Shape this idea",
      tags: ["Culture", "Lake", "Relaxed"],
    },
    {
      title: "Skopje Like a Local",
      description:
        "Discover the Old Bazaar, modern city contrasts, Matka Canyon, cafes, viewpoints, and hidden local spots.",
      duration: "1 to 3 days",
      image: "/images/skopje-old-bazaar.jpg",
      imageAlt: "View across Skopje with the Old Bazaar area in North Macedonia.",
      tag: "City escape",
      tags: ["City", "Food", "Culture"],
    },
    {
      title: "Wine & Food Journey",
      description:
        "Visit the Tikves wine region, family wineries, local producers, traditional dishes, and warm Macedonian hospitality.",
      duration: "2 to 3 days",
      image: "/images/kavadarci-vineyards.jpg",
      imageAlt: "Vineyards near Kavadarci in North Macedonia.",
      tag: "Taste-led travel",
      tags: ["Wine", "Food", "Local"],
    },
    {
      title: "Mountains & Villages",
      description:
        "Experience Mavrovo, Galicica, Pelister, rural landscapes, monasteries, hiking routes, and mountain villages.",
      duration: "2 to 5 days",
      image: "/images/mavrovo-lake.jpg",
      imageAlt: "Mountain scenery around Mavrovo Lake in North Macedonia.",
      tag: "Nature route",
      tags: ["Nature", "Hiking", "Villages"],
    },
    {
      title: "Monasteries, Markets & Traditions",
      description:
        "A cultural journey through spiritual sites, local markets, crafts, traditions, and everyday Macedonian life.",
      duration: "Flexible",
      image: "/images/bigorski-monastery.jpg",
      imageAlt: "Arcaded walkway at Bigorski Monastery in North Macedonia.",
      tag: "Cultural layer",
      tags: ["Culture", "History", "Local life"],
    },
    {
      title: "Balkan Route Add-on",
      description:
        "Combine North Macedonia with Albania, Kosovo, Greece, Serbia, or Bulgaria for a broader Balkan journey.",
      duration: "Add 3 to 7 days",
      image: "/images/galicica-panorama.jpg",
      imageAlt: "Panoramic view from Galicica toward Ohrid and Prespa lakes.",
      tag: "Multi-country",
      tags: ["Multi-country", "Road trip", "Flexible"],
    },
  ] satisfies Experience[],
  process: [
    {
      title: "Tell Marija your travel ideas",
      description:
        "Share your dates, interests, group size, travel style, and budget.",
    },
    {
      title: "Receive a personal travel proposal",
      description:
        "Marija creates a first route or experience idea based on what you like.",
    },
    {
      title: "Refine the trip together",
      description:
        "Adjust the pace, places, activities, and level of support.",
    },
    {
      title: "Travel with local confidence",
      description:
        "Enjoy North Macedonia with personal recommendations and trusted local connections.",
    },
  ] satisfies ProcessStep[],
  about: {
    title: "Meet Marija Petrova",
    description: [
      "I’m Marija Petrova, based in North Macedonia. I help travelers discover the country in a personal and authentic way — not only the famous places, but also the small details that make a trip memorable: a good local meal, a beautiful viewpoint, a family winery, a quiet village, or the right route at the right time of day.",
      "My goal is simple: to help you experience North Macedonia with more confidence, more local connection, and less stress.",
    ],
    image: "/images/marija-petrova.png",
    imageAlt: "Portrait of Marija Petrova in a dark blazer.",
    facts: [
      { label: "Location", value: "North Macedonia" },
      { label: "Languages spoken", value: "English support, more languages can be added later" },
      { label: "Travel style", value: "Private, tailor-made, culture-food-nature balance" },
      { label: "Contact preference", value: "Email or WhatsApp" },
    ],
    miniFacts: [
      "Based in North Macedonia",
      "Local travel planning",
      "Private and tailor-made experiences",
      "Support in English",
      "Dutch version coming later",
    ],
  },
  itinerary: {
    title: "Example 7-day North Macedonia route",
    note:
      "This is only an example. Marija can adjust the route based on your interests, pace, season, and budget.",
    cta: "Ask for a custom route",
    days: [
      "Day 1: Arrival in Skopje",
      "Day 2: Skopje Old Bazaar & Matka Canyon",
      "Day 3: Tikves wine region",
      "Day 4: Bitola & Pelister National Park",
      "Day 5: Ohrid Old Town",
      "Day 6: Lake Ohrid, villages & viewpoints",
      "Day 7: Return or Balkan add-on",
    ],
  },
  practicalInfo: [
    {
      title: "Best time to visit",
      description:
        "Spring, early summer, and autumn are ideal for culture, food, wine, nature, and comfortable sightseeing.",
    },
    {
      title: "Recommended duration",
      description:
        "A first trip to North Macedonia usually works well with 5 to 10 days.",
    },
    {
      title: "Transport",
      description:
        "Trips can be shaped around private transfers, rental car routes, local drivers, or guided day experiences.",
    },
    {
      title: "Travel style",
      description:
        "Boutique and personal rather than fixed-package travel, with room to adjust pace and comfort level.",
    },
    {
      title: "Best for",
      description:
        "Couples, families, small groups, food lovers, culture travelers, nature lovers, and Balkan explorers.",
    },
    {
      title: "Add-on countries",
      description:
        "Albania, Kosovo, Greece, Serbia, or Bulgaria can be added for a wider Balkan route.",
    },
  ] satisfies PracticalInfo[],
  testimonials: [
    {
      quote:
        "Marija helped us discover places we would never have found ourselves.",
      name: "Placeholder traveler",
      origin: "Netherlands",
      placeholder: true,
    },
    {
      quote: "The trip felt personal, relaxed, and very local.",
      name: "Placeholder couple",
      origin: "Belgium",
      placeholder: true,
    },
    {
      quote:
        "We loved the mix of food, nature, culture, and honest local recommendations.",
      name: "Placeholder family",
      origin: "International",
      placeholder: true,
    },
  ] satisfies Testimonial[],
  faqs: [
    {
      question: "Is Marija a tour operator or a personal travel planner?",
      answer:
        "Marija helps create personal travel ideas, routes, and local experiences in North Macedonia. Depending on the trip, she may help connect you with trusted local partners such as guides, drivers, accommodations, wineries, or experience providers.",
    },
    {
      question: "Can Marija arrange a complete trip?",
      answer:
        "The level of support can be adapted to your needs. You can request anything from local recommendations or a day experience to a more complete multi-day route.",
    },
    {
      question: "Can I travel independently?",
      answer:
        "Yes. Marija can help design a route that you travel independently, or include local support, guides, drivers, and experiences where useful.",
    },
    {
      question: "Is North Macedonia good for a first Balkan trip?",
      answer:
        "Yes. North Macedonia is compact, diverse, welcoming, and easy to combine with neighboring countries.",
    },
    {
      question: "What kind of trips can Marija help with?",
      answer:
        "Culture trips, food and wine experiences, city stays, nature routes, family trips, private day trips, and wider Balkan routes.",
    },
    {
      question: "How do I start?",
      answer:
        "Send your dates, number of travelers, interests, and rough budget. Marija will respond with next steps.",
    },
  ] satisfies Faq[],
  contact: {
    title: "Start planning your North Macedonia trip",
    subtitle:
      "Tell Marija what kind of trip you have in mind. She will help shape a personal travel idea around your interests, dates, and budget.",
    submitLabel: "Send my trip request",
    whatsappLabel: "Prefer WhatsApp? Message Marija directly.",
    whatsappNumber: "38970000000",
    email: "marija@example.com",
    consentLabel: "I agree that Marija may contact me about my travel request.",
    disclaimer:
      "Travel ideas and local arrangements depend on availability, season, budget, and the specific request. Final services and responsibilities will be confirmed before booking.",
    privacyTitle: "Privacy note",
    privacyText:
      "Your details are only used to respond to your travel request and shape a proposed itinerary. No unnecessary personal information is requested in this MVP.",
    interestOptions: [
      "Culture",
      "Food",
      "Wine",
      "Nature",
      "Hiking",
      "Ohrid",
      "Skopje",
      "Family travel",
      "Luxury / comfort",
      "Local life",
      "Balkan road trip",
      "Other",
    ],
  },
  footer: {
    title: "Marija Petrova",
    subtitle:
      "Local travel designer for personal North Macedonia journeys and thoughtful Balkan add-ons.",
    copyright: "Placeholder contact details and testimonials should be replaced before launch.",
  },
  imageCredits: [
    {
      label: "Marija portrait",
      photographer: "Provided by Marija Petrova",
      license: "Used with owner-provided permission",
      sourceUrl: "",
    },
    {
      label: "Hero: Galicica panorama",
      photographer: "Liridon",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Panorama_View_of_Ohrid_and_Prespa_Lakes_from_top_of_Galicica_(2).jpg",
    },
    {
      label: "Ohrid & Lake Life",
      photographer: "kallerna",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Church_of_St._John_at_Kaneo_6.jpg",
    },
    {
      label: "Why Travel: Designed around you",
      photographer: "Pudelek (Marcin Szala)",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boat_Galija,_Lake_Ohrid,_MK.JPG",
    },
    {
      label: "Why Travel: Local insight",
      photographer: "Tommyy882",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kuka_na_ul.Kiril_i_Metodij_-Bitola_(2).jpg",
    },
    {
      label: "Why Travel: Authentic experiences",
      photographer: "Cuklev",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%A2%D0%B0%D0%B2%D1%87%D0%B5_%D0%93%D1%80%D0%B0%D0%B2%D1%87%D0%B5.jpg",
    },
    {
      label: "Why Travel: Flexible support",
      photographer: "Custom site illustration",
      license: "Created for this project",
      sourceUrl: "",
    },
    {
      label: "Why Travel: No mass tourism",
      photographer: "Kiril Simeonovski",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%A2%D1%80%D0%BF%D0%B5%D1%98%D1%86%D0%B0_%D1%81%D0%BE_%D0%9E%D1%85%D1%80%D0%B8%D0%B4%D1%81%D0%BA%D0%BE%D1%82%D0%BE_%D0%95%D0%B7%D0%B5%D1%80%D0%BE.jpg",
    },
    {
      label: "Why Travel: Balkan add-ons",
      photographer: "Bogoevski",
      license: "CC BY 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:A03_galicica_panorama_view.jpg",
    },
    {
      label: "Skopje Like a Local",
      photographer: "kallerna",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Skopje_Old_Bazaar_1.jpg",
    },
    {
      label: "Wine & Food Journey",
      photographer: "F00700I",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Vineyards_near_Kavadarci.jpg",
    },
    {
      label: "Mountains & Villages",
      photographer: "Diego Delso",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mavrovo,_lago_Mavrovo,_Macedonia,_2014-04-17,_DD_19.JPG",
    },
    {
      label: "Monasteries, Markets & Traditions",
      photographer: "Pudelek",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bigorski_Monastery,_N._Macedonia_(2).jpg",
    },
    {
      label: "Balkan Route Add-on",
      photographer: "Liridon",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Panorama_View_of_Ohrid_and_Prespa_Lakes_from_top_of_Galicica_(2).jpg",
    },
  ] satisfies ImageCredit[],
} as const;