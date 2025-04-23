import { Product } from '@/types/product';

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Soft Matte Complete Foundation",
    brand: "Fenty Beauty",
    description: "Full coverage, natural matte finish that's breathable and sweat-resistant.",
    price: "₹3,800",
    imageUrl: "C:\Users\hp\Documents\SEM IV\AI\Glamour\glam-guru-assistant-main\public\NAKED-HEAT-UD-01_1000x1000.jpg",
    category: "face",
    rating: 4.8,
    tag: "Best Seller",
    forSkinType: ["oily", "combination"],
    forSkinTone: ["medium", "tan", "deep"],
    forStyle: ["natural", "glam"]
  },
  {
    id: "2",
    name: "Hydrating Illuminator",
    brand: "Rare Beauty",
    description: "Lightweight liquid highlighter that creates a dewy, luminous glow.",
    price: "₹2,500",
    imageUrl: "https://images.unsplash.com/photo-1610700299365-7b4d1f06f3b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.7,
    forSkinType: ["dry", "normal"],
    forSkinTone: ["fair", "light", "medium"],
    forStyle: ["natural", "glam"]
  },
  {
    id: "3",
    name: "Naked Eyeshadow Palette",
    brand: "Urban Decay",
    description: "Versatile eyeshadow palette with neutral tones for everyday looks.",
    price: "₹5,400",
    imageUrl: "https://images.unsplash.com/photo-1583241800698-e8ab01c82f08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "eyes",
    rating: 4.9,
    tag: "Top Rated",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural", "glam", "classic"]
  },
  {
    id: "4",
    name: "Lash Sensational Mascara",
    brand: "Maybelline",
    description: "Volumizing and lengthening mascara for dramatic lashes.",
    price: "₹1,100",
    imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "eyes",
    rating: 4.6,
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural", "glam", "bold"]
  },
  {
    id: "5",
    name: "Lip Glow Oil",
    brand: "Dior",
    description: "Nourishing lip oil that enhances natural lip color with a subtle shine.",
    price: "₹3,800",
    imageUrl: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "lips",
    rating: 4.7,
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural", "classic"]
  },
  {
    id: "6",
    name: "Hydrating Face Primer",
    brand: "Milk Makeup",
    description: "Silicone-free primer that hydrates and grips makeup all day.",
    price: "₹3,200",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.5,
    forSkinType: ["dry", "normal"],
    forSkinTone: ["all"],
    forStyle: ["all"]
  },
  {
    id: "7",
    name: "Cloud Paint Blush",
    brand: "Glossier",
    description: "Seamless, buildable gel-cream blush for a natural-looking flush.",
    price: "₹2,000",
    imageUrl: "https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.8,
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural", "classic"]
  },
  {
    id: "8",
    name: "Brow Wiz",
    brand: "Anastasia Beverly Hills",
    description: "Ultra-slim brow pencil for precise, natural-looking brows.",
    price: "₹2,500",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.9,
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural", "classic"]
  },
  {
    id: "9",
    name: "Lakmé Absolute Skin Natural Mousse",
    brand: "Lakmé",
    description: "Lightweight mousse foundation with SPF 8 for a natural finish.",
    price: "₹699",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.5,
    tag: "Indian Brand",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural"]
  },
  {
    id: "10",
    name: "Sugar Cosmetics Matte As Hell Lipstick",
    brand: "Sugar Cosmetics",
    description: "Long-lasting matte lipstick with intense color payoff.",
    price: "₹899",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "lips",
    rating: 4.7,
    tag: "Indian Brand",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["bold", "glam"]
  },
  {
    id: "11",
    name: "MyGlamm LIT Liquid Matte Lipstick",
    brand: "MyGlamm",
    description: "Weightless liquid lipstick with a velvety matte finish.",
    price: "₹799",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "lips",
    rating: 4.6,
    tag: "Indian Brand",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["bold", "glam"]
  },
  {
    id: "12",
    name: "Swiss Beauty HD Foundation",
    brand: "Swiss Beauty",
    description: "High-definition foundation with buildable coverage.",
    price: "₹499",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.4,
    tag: "Indian Brand",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural", "glam"]
  },
  {
    id: "13",
    name: "Blue Heaven Kajal",
    brand: "Blue Heaven",
    description: "Smudge-proof kajal for intense eye definition.",
    price: "₹199",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "eyes",
    rating: 4.3,
    tag: "Indian Brand",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["natural", "bold"]
  },
  {
    id: "14",
    name: "WOW Skin Science Face Wash",
    brand: "WOW Skin Science",
    description: "Natural face wash with activated charcoal for deep cleansing.",
    price: "₹499",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "skincare",
    rating: 4.6,
    tag: "Indian Brand",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["all"]
  },
  {
    id: "15",
    name: "Mamaearth Vitamin C Face Toner",
    brand: "Mamaearth",
    description: "Natural toner with Vitamin C for brightening and hydration.",
    price: "₹399",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "skincare",
    rating: 4.5,
    tag: "Indian Brand",
    forSkinType: ["all"],
    forSkinTone: ["all"],
    forStyle: ["all"]
  }
];

export const getProductRecommendations = (quizAnswers: Record<string, string> = {}): Product[] => {
  // If no quiz answers provided, return all products
  if (!Object.keys(quizAnswers).length) {
    return products;
  }
  
  // Filter products based on quiz answers
  let filteredProducts = [...products];
  
  const { 'skin-type': skinType, 'skin-tone': skinTone, 'makeup-style': makeupStyle, 'budget': budget } = quizAnswers;
  
  // Filter by skin type if provided
  if (skinType) {
    filteredProducts = filteredProducts.filter(product => 
      product.forSkinType?.includes(skinType) || product.forSkinType?.includes('all')
    );
  }
  
  // Filter by skin tone if provided
  if (skinTone) {
    filteredProducts = filteredProducts.filter(product => 
      product.forSkinTone?.includes(skinTone) || product.forSkinTone?.includes('all')
    );
  }
  
  // Filter by makeup style if provided
  if (makeupStyle) {
    filteredProducts = filteredProducts.filter(product => 
      product.forStyle?.includes(makeupStyle) || product.forStyle?.includes('all')
    );
  }
  
  // Filter by budget if provided
  if (budget) {
    switch (budget) {
      case 'drugstore':
        filteredProducts = filteredProducts.filter(product => 
          parseInt(product.price.replace('₹', '')) < 2000
        );
        break;
      case 'mid-range':
        filteredProducts = filteredProducts.filter(product => 
          parseInt(product.price.replace('₹', '')) >= 2000 && parseInt(product.price.replace('₹', '')) < 4000
        );
        break;
      case 'high-end':
        filteredProducts = filteredProducts.filter(product => 
          parseInt(product.price.replace('₹', '')) >= 4000 && parseInt(product.price.replace('₹', '')) < 6000
        );
        break;
      case 'luxury':
        filteredProducts = filteredProducts.filter(product => 
          parseInt(product.price.replace('₹', '')) >= 6000
        );
        break;
      default:
        // 'mixed' or unspecified - keep all products
        break;
    }
  }
  
  // If no products match the filters, return a subset of all products
  if (filteredProducts.length === 0) {
    return products.slice(0, 6);
  }
  
  return filteredProducts;
};
