
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  rating: number;
  tag?: string;
  forSkinType?: string[];
  forSkinTone?: string[];
  forStyle?: string[];
}
