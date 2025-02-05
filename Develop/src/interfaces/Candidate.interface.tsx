// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  experience: number;
  education: string;
  resume: string;
  bio?: string;
  avatar_url: string;
  html_url: string;
  company?: string;
}
