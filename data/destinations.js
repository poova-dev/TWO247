// Destinations Data
export const destinations = [
  {
    id: "dubai",
    slug: "dubai",
    name: "Dubai",
    region: "International",
    tagline: "Futuristic luxury meets timeless desert magic",
    shortDescription: "Ultra-modern skyline, desert safaris, and legendary luxury hospitality.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    cardImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    bestTimeToVisit: "November to March",
    idealDuration: "5 to 7 Days",
    topExperiences: [
      "Sunset Desert Safari & Dune Bashing",
      "Burj Khalifa 148th Floor Sky Lounge",
      "Private Yacht Cruise in Dubai Marina",
      "Old Dubai Gold & Spice Souks"
    ],
    startingPrice: "₹45,999",
    featured: true
  },
  {
    id: "maldives",
    slug: "maldives",
    name: "Maldives",
    region: "International",
    tagline: "Turquoise lagoons and untouched luxury islands",
    shortDescription: "Private overwater villas, vibrant coral reefs, and tranquil sunsets.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
    cardImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    bestTimeToVisit: "December to April",
    idealDuration: "4 to 6 Days",
    topExperiences: [
      "Overwater Bungalow Stay with Glass Floors",
      "Nurse Shark & Manta Ray Snorkeling",
      "Candlelight Sandbank Dinner",
      "Underwater Spa Treatments"
    ],
    startingPrice: "₹78,999",
    featured: true
  },
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    region: "International",
    tagline: "The garden city of innovation and culinary wonders",
    shortDescription: "Gardens by the Bay, Marina Bay rooftop vistas, and Sentosa Island adventures.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",
    cardImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    bestTimeToVisit: "All year round (Nov - Jan festive)",
    idealDuration: "4 to 5 Days",
    topExperiences: [
      "Gardens by the Bay & Cloud Forest",
      "Marina Bay Sands Infinity Pool & Skypark",
      "Universal Studios Sentosa",
      "Night Safari Tram Experience"
    ],
    startingPrice: "₹52,999",
    featured: true
  },
  {
    id: "thailand",
    slug: "thailand",
    name: "Thailand",
    region: "International",
    tagline: "Tropical islands, gilded temples, and vibrant night markets",
    shortDescription: "Phuket beaches, Bangkok heritage, and limestone sea cliffs of Krabi.",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80",
    cardImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    bestTimeToVisit: "November to early April",
    idealDuration: "6 to 8 Days",
    topExperiences: [
      "Phi Phi Islands Speedboat Excursion",
      "Chiang Mai Ethical Elephant Sanctuary",
      "Bangkok Grand Palace & River Cruise",
      "Railay Beach Rock Climbing & Kayaking"
    ],
    startingPrice: "₹34,999",
    featured: true
  },
  {
    id: "europe",
    slug: "europe",
    name: "Europe",
    region: "International",
    tagline: "Alpine serenity, storybook castles, and cultural capitals",
    shortDescription: "Swiss alpine peaks, Parisian romance, and timeless Mediterranean coastlines.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    cardImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    bestTimeToVisit: "May to October",
    idealDuration: "8 to 14 Days",
    topExperiences: [
      "Jungfraujoch Top of Europe Train",
      "Sunset Seine River Cruise in Paris",
      "Tuscan Vineyard Tasting Tour",
      "Amalfi Coast Scenic Cliffside Drive"
    ],
    startingPrice: "₹1,45,000",
    featured: true
  },
  {
    id: "india",
    slug: "india",
    name: "India",
    region: "Domestic",
    tagline: "Paradise in Kashmir to the royal palaces of Rajasthan",
    shortDescription: "Snowcapped valleys, serene backwaters, and timeless regal forts.",
    heroImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1600&q=80",
    cardImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
    bestTimeToVisit: "October to March (Year-round Kashmir/Himachal)",
    idealDuration: "5 to 9 Days",
    topExperiences: [
      "Srinagar Dal Lake Luxury Houseboat Stay",
      "Gulmarg Gondola & Snow Adventures",
      "Kerala Alleppey Backwater Private Cruise",
      "Jaipur & Udaipur Heritage Palace Tours"
    ],
    startingPrice: "₹24,999",
    featured: true
  }
];

if (typeof window !== "undefined") {
  window.destinationsData = destinations;
}
