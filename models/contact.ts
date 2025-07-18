export interface Contact {
  id: number;
  client_id: number;
  latitude: number;
  longitude: number;
  min_budget: number;
  max_budget: number;
  desired_area_min: number;
  desired_area_max: number;
  property_type: string[];
  created_at: Date;
}
