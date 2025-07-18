import { Match } from "@/models/match";

const matches: Match[] = [
  {
    id: 1,
    property_id: 1,           // Apartment in Algiers
    contact_id: 1,            // Sara wants apartment
    client_id: 2,             // Sara
    score: 0.88,
    explanation: "Apartment matches desired type, area, and budget.",
    created_at: new Date("2025-07-15"),
  },
  {
    id: 2,
    property_id: 2,           // Villa in Oran
    contact_id: 2,            // Yacine wants villa
    client_id: 3,             // Yacine
    score: 0.93,
    explanation: "Villa matches budget and size, close to desired location.",
    created_at: new Date("2025-07-15"),
  },
  {
    id: 3,
    property_id: 3,           // Studio in Constantine
    contact_id: 3,            // Nadia wants apartment or studio
    client_id: 4,             // Nadia
    score: 0.81,
    explanation: "Studio is within desired budget and acceptable area range.",
    created_at: new Date("2025-07-16"),
  },
  {
    id: 4,
    property_id: 4,           // Apartment in Tizi Ouzou
    contact_id: 1,            // Sara again (apartment)
    client_id: 2,             // Sara
    score: 0.72,
    explanation: "Location not preferred, but fits other requirements.",
    created_at: new Date("2025-07-17"),
  },
  {
    id: 5,
    property_id: 2,           // Villa in Oran
    contact_id: 3,            // Nadia (wanted apartment or studio)
    client_id: 4,             // Nadia
    score: 0.55,
    explanation: "Property exceeds desired area and budget. Low compatibility.",
    created_at: new Date("2025-07-18"),
  }
];
