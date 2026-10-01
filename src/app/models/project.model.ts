export type ProjectCategory = 'Tous' | 'Résidentiel' | 'Commercial' | 'Industriel' | 'Autres';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  location?: string;
  year?: string;
}
