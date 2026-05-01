export type Priority = 'high' | 'medium' | 'low';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface Feature {
  name: string;
  description: string;
  priority: Priority;
}

export interface DatabaseColumn {
  name: string;
  type: string;
  required?: boolean;
}

export interface DatabaseTable {
  name: string;
  fields: DatabaseColumn[];
}

export interface APIEndpoint {
  method: HttpMethod;
  path: string;
  description: string;
}

export interface UIComponent {
  name: string;
  description: string;
  components: string[];
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface Blueprint {
  features: Feature[];
  database: DatabaseTable[];
  apis: APIEndpoint[];
  ui: UIComponent[];
  roadmap: RoadmapPhase[];
}
