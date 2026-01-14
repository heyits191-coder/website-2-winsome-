
export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  id: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}

export type Category = 'All' | 'Study Room' | 'Toilet' | 'Office' | 'Miscellaneous' | 'Temple';
