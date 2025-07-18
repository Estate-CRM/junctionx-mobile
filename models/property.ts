export interface Property {
  id: number;
  agent_id: number;
  latitude: number;
  longitude: number;
  price: number;
  area: number;
  property_type: string;
  rooms: number;
  features: string[];
  description: string;
  images: string[];
  created_at: Date;
}
