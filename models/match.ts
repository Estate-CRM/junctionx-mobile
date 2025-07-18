export interface Match {
  id: number;
  property_id: number;
  contact_id: number;
  client_id: number;
  score: number;
  explanation: string;
  created_at: Date;
}
