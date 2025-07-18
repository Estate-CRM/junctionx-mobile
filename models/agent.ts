export interface Agent {
  id: number;
  user_id: number;
  national_id: string;
  commercial_register: string;
  verified: boolean;
  created_at: Date;
}
