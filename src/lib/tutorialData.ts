import { Tutorial } from '@/types/tutorial';

const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "5-Minute Everyday Makeup for Beginners",
    description: "Quick and easy makeup routine perfect for busy mornings and makeup beginners.",
    thumbnailUrl: "https://i.ytimg.com/vi/IVO8vC0bxcY/maxresdefault.jpg",
    videoId: "IVO8vC0bxcY",
    category: "everyday",
    duration: "5:32",
    creator: "Alexandra Beauty",
    difficulty: "beginner",
    views: "1.2M",
    tags: ["quick", "everyday", "beginner"]
  },
  {
    id: "2",
    title: "Full Glam Evening Makeup Look",
    description: "Create a stunning evening look with dramatic eyes and flawless skin.",
    thumbnailUrl: "https://i.ytimg.com/vi/pM_NpHMaRwk/maxresdefault.jpg",
    videoId: "pM_NpHMaRwk",
    category: "glam",
    duration: "18:45",
    creator: "MakeupByTiffany",
    difficulty: "intermediate",
    views: "876K",
    tags: ["glam", "evening", "dramatic"]
  },
  {
    id: "3",
    title: "Natural No-Makeup Makeup Look",
    description: "Learn how to enhance your natural beauty with minimal makeup for a fresh, everyday look.",
    thumbnailUrl: "https://i.ytimg.com/vi/Iht5Y3H9wRE/maxresdefault.jpg",
    videoId: "Iht5Y3H9wRE",
    category: "everyday",
    duration: "10:21",
    creator: "BeautyByLisa",
    difficulty: "beginner",
    views: "2.5M",
    tags: ["natural", "everyday", "minimalist"]
  },
  {
    id: "4",
    title: "Bold Smokey Eye for Date Night",
    description: "Create a sultry, dramatic eye look perfect for special evenings out.",
    thumbnailUrl: "https://i.ytimg.com/vi/YrVGM6vbk0o/maxresdefault.jpg",
    videoId: "YrVGM6vbk0o",
    category: "special",
    duration: "15:18",
    creator: "GlamGuru",
    difficulty: "advanced",
    views: "1.8M",
    tags: ["smokey eye", "date night", "dramatic"]
  },
  {
    id: "5",
    title: "Dewy Skin Makeup Tutorial",
    description: "Achieve a glowing, radiant complexion with this hydrating makeup routine.",
    thumbnailUrl: "https://i.ytimg.com/vi/ZE7xcd8wVhE/maxresdefault.jpg",
    videoId: "ZE7xcd8wVhE",
    category: "everyday",
    duration: "12:05",
    creator: "SkinByMarie",
    difficulty: "intermediate",
    views: "950K",
    tags: ["dewy", "glowing", "hydrating"]
  },
  {
    id: "6",
    title: "Wedding Guest Makeup Tutorial",
    description: "Perfect makeup look for attending weddings and formal events that lasts all day.",
    thumbnailUrl: "https://i.ytimg.com/vi/clBftK4PXKI/maxresdefault.jpg",
    videoId: "clBftK4PXKI",
    category: "special",
    duration: "20:37",
    creator: "BridalBeauty",
    difficulty: "intermediate",
    views: "1.5M",
    tags: ["wedding", "formal", "long-lasting"]
  },
  {
    id: "7",
    title: "Quick Office Makeup Tutorial",
    description: "Professional makeup look that takes less than 10 minutes, perfect for the workplace.",
    thumbnailUrl: "https://i.ytimg.com/vi/KH6gtwH8Jp8/maxresdefault.jpg",
    videoId: "KH6gtwH8Jp8",
    category: "everyday",
    duration: "8:42",
    creator: "WorkingGirlGlam",
    difficulty: "beginner",
    views: "780K",
    tags: ["office", "professional", "quick"]
  },
  {
    id: "8",
    title: "Special Occasion Glamorous Makeup",
    description: "Step-by-step tutorial for a show-stopping glamorous makeup look for special events.",
    thumbnailUrl: "https://i.ytimg.com/vi/8k3ox8F9a0c/maxresdefault.jpg",
    videoId: "8k3ox8F9a0c",
    category: "special",
    duration: "22:15",
    creator: "GlamGuru",
    difficulty: "advanced",
    views: "1.1M",
    tags: ["glamorous", "special occasion", "dramatic"]
  },
  {
    id: "9",
    title: "Indian Bridal Makeup Tutorial",
    description: "Traditional Indian bridal makeup look with modern techniques.",
    thumbnailUrl: "https://i.ytimg.com/vi/9XQYQYQYQY/maxresdefault.jpg",
    videoId: "9XQYQYQYQY",
    category: "special",
    duration: "25:30",
    creator: "IndianBeautyGuru",
    difficulty: "advanced",
    views: "2.3M",
    tags: ["bridal", "Indian", "traditional"]
  },
  {
    id: "10",
    title: "Festival Makeup Tutorial",
    description: "Colorful and vibrant makeup look perfect for Indian festivals.",
    thumbnailUrl: "https://i.ytimg.com/vi/10XQYQYQYQ/maxresdefault.jpg",
    videoId: "10XQYQYQYQ",
    category: "special",
    duration: "15:45",
    creator: "FestivalGlam",
    difficulty: "intermediate",
    views: "1.7M",
    tags: ["festival", "colorful", "vibrant"]
  },
  {
    id: "11",
    title: "Everyday Indian Office Makeup",
    description: "Professional makeup look suitable for Indian office environments.",
    thumbnailUrl: "https://i.ytimg.com/vi/11XQYQYQYQ/maxresdefault.jpg",
    videoId: "11XQYQYQYQ",
    category: "everyday",
    duration: "12:20",
    creator: "IndianOfficeGlam",
    difficulty: "beginner",
    views: "890K",
    tags: ["office", "professional", "Indian"]
  },
  {
    id: "12",
    title: "Traditional Indian Eye Makeup",
    description: "Learn the art of traditional Indian eye makeup techniques.",
    thumbnailUrl: "https://i.ytimg.com/vi/12XQYQYQYQ/maxresdefault.jpg",
    videoId: "12XQYQYQYQ",
    category: "special",
    duration: "18:15",
    creator: "IndianEyeArt",
    difficulty: "intermediate",
    views: "1.4M",
    tags: ["traditional", "Indian", "eye makeup"]
  }
];

export const getTutorials = (): Tutorial[] => {
  return tutorials;
};
