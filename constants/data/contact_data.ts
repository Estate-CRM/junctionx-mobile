import { Contact } from "@/models/contact";

const contacts: Contact[] = [
  {
    id: 1,
    client_id: 2, // Must match a user with role: 'client'
    latitude: 36.7528,
    longitude: 3.0422,
    min_budget: 50000,
    max_budget: 100000,
    desired_area_min: 60,
    desired_area_max: 120,
    property_type: ['apartment', 'house'],
    created_at: new Date("2024-11-01"),
  },
  {
    id: 2,
    client_id: 3,
    latitude: 36.75,
    longitude: 3.05,
    min_budget: 80000,
    max_budget: 150000,
    desired_area_min: 80,
    desired_area_max: 150,
    property_type: ['villa'],
    created_at: new Date("2025-01-15"),
  },
  {
    id: 3,
    client_id: 4,
    latitude: 36.76,
    longitude: 3.07,
    min_budget: 60000,
    max_budget: 110000,
    desired_area_min: 70,
    desired_area_max: 130,
    property_type: ['apartment'],
    created_at: new Date("2025-05-10"),
  }
];
