import { Agent } from "@/models/agent";

const agents: Agent[] = [
  {
    id: 101,
    user_id: 5, // Ali Kacem
    national_id: "DZ123456789",
    commercial_register: "RC100200300",
    verified: true,
    created_at: new Date("2024-08-01"),
  },
  {
    id: 102,
    user_id: 6, // Fatima Merabet
    national_id: "DZ987654321",
    commercial_register: "RC400500600",
    verified: false,
    created_at: new Date("2024-09-18"),
  },
  {
    id: 103,
    user_id: 7, // Karim Belaid
    national_id: "DZ112233445",
    commercial_register: "RC700800900",
    verified: true,
    created_at: new Date("2025-02-02"),
  },
  {
    id: 104,
    user_id: 8, // Nadia Bensaid
    national_id: "DZ556677889",
    commercial_register: "RC101112131",
    verified: false,
    created_at: new Date("2025-04-12"),
  },
  {
    id: 105,
    user_id: 9, // Mourad Amrani
    national_id: "DZ998877665",
    commercial_register: "RC141516171",
    verified: true,
    created_at: new Date("2025-06-20"),
  }
];
