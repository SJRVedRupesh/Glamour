
import { Routine, QuickRoutine } from '@/types/routine';

const routines: Routine[] = [
  {
    id: "1",
    title: "Everyday Balanced Beauty Routine",
    description: "A comprehensive daily routine for balanced, healthy-looking skin and natural makeup.",
    type: "daily",
    timeframes: [
      {
        title: "Morning Routine",
        timeOfDay: "morning",
        duration: "15-20 minutes",
        steps: [
          {
            title: "Cleanse",
            description: "Start with a gentle cleanser to remove overnight oils and prep skin for the day.",
            productSuggestion: "CeraVe Hydrating Cleanser"
          },
          {
            title: "Tone",
            description: "Apply an alcohol-free toner to balance skin pH and remove any cleanser residue.",
            productSuggestion: "Thayers Witch Hazel Toner"
          },
          {
            title: "Serum",
            description: "Apply vitamin C serum for antioxidant protection and brightening.",
            productSuggestion: "Timeless Vitamin C Serum"
          },
          {
            title: "Moisturize",
            description: "Use a lightweight daytime moisturizer to hydrate without heaviness.",
            productSuggestion: "Neutrogena Hydro Boost"
          },
          {
            title: "Sunscreen",
            description: "Apply SPF 30+ sunscreen to protect from UV damage.",
            productSuggestion: "Supergoop! Unseen Sunscreen"
          },
          {
            title: "Primer",
            description: "Apply a thin layer of primer to create a smooth base for makeup.",
            productSuggestion: "Smashbox Photo Finish Primer"
          },
          {
            title: "Foundation",
            description: "Apply a light-to-medium coverage foundation, focusing on the center of the face.",
            productSuggestion: "NARS Sheer Glow Foundation"
          },
          {
            title: "Concealer",
            description: "Apply concealer under eyes and on any blemishes or redness.",
            productSuggestion: "Tarte Shape Tape Concealer"
          },
          {
            title: "Set",
            description: "Lightly set makeup with translucent powder, focusing on T-zone.",
            productSuggestion: "Laura Mercier Translucent Setting Powder"
          }
        ]
      },
      {
        title: "Evening Routine",
        timeOfDay: "evening",
        duration: "10-15 minutes",
        steps: [
          {
            title: "Makeup Removal",
            description: "Use a gentle makeup remover or cleansing balm to dissolve makeup.",
            productSuggestion: "Clinique Take The Day Off Balm"
          },
          {
            title: "Double Cleanse",
            description: "Follow with a water-based cleanser to thoroughly clean skin.",
            productSuggestion: "Fresh Soy Face Cleanser"
          },
          {
            title: "Exfoliate (2-3 times weekly)",
            description: "Use a gentle chemical exfoliant to remove dead skin cells.",
            productSuggestion: "Paula's Choice 2% BHA Liquid"
          },
          {
            title: "Treatment",
            description: "Apply targeted treatments for specific concerns (acne, dark spots, etc.).",
            productSuggestion: "The Ordinary Niacinamide 10% + Zinc 1%"
          },
          {
            title: "Moisturize",
            description: "Apply a more intensive night moisturizer to repair and hydrate.",
            productSuggestion: "CeraVe PM Facial Moisturizing Lotion"
          }
        ]
      },
      {
        title: "Nighttime Self-Care",
        timeOfDay: "night",
        duration: "5-10 minutes",
        steps: [
          {
            title: "Eye Cream",
            description: "Gently pat eye cream around the orbital bone to hydrate delicate skin.",
            productSuggestion: "Kiehl's Creamy Eye Treatment with Avocado"
          },
          {
            title: "Lip Treatment",
            description: "Apply an overnight lip mask or heavy balm to wake up with soft lips.",
            productSuggestion: "Laneige Lip Sleeping Mask"
          },
          {
            title: "Hand Cream",
            description: "Apply hand cream to keep hands soft and nails healthy.",
            productSuggestion: "L'Occitane Shea Butter Hand Cream"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Weekly Glow Boost Routine",
    description: "Enhance your regular routine with these weekly treatments for an extra glow.",
    type: "weekly",
    timeframes: [
      {
        title: "Deep Cleansing Day",
        timeOfDay: "morning",
        duration: "30 minutes",
        steps: [
          {
            title: "Steam Face",
            description: "Use a facial steamer or hot towel to open pores before deep cleansing.",
            productSuggestion: "Dr. Dennis Gross Pro Facial Steamer"
          },
          {
            title: "Clay Mask",
            description: "Apply a clay mask to draw out impurities and excess oil.",
            productSuggestion: "Aztec Secret Indian Healing Clay"
          },
          {
            title: "Gentle Exfoliation",
            description: "After mask, gently exfoliate to remove dead skin cells.",
            productSuggestion: "Dermalogica Daily Microfoliant"
          },
          {
            title: "Hydrating Toner",
            description: "Apply an alcohol-free, hydrating toner to rebalance skin.",
            productSuggestion: "Klairs Supple Preparation Toner"
          }
        ]
      },
      {
        title: "Treatment Mask Day",
        timeOfDay: "evening",
        duration: "40 minutes",
        steps: [
          {
            title: "Cleanse",
            description: "Thoroughly cleanse face to prepare for treatment.",
            productSuggestion: "La Roche-Posay Toleriane Hydrating Cleanser"
          },
          {
            title: "Treatment Mask",
            description: "Apply a treatment mask targeted to your skin concerns (hydrating, brightening, etc.).",
            productSuggestion: "Summer Fridays Jet Lag Mask"
          },
          {
            title: "Facial Massage",
            description: "After removing mask, perform a 5-minute facial massage with oil or serum.",
            productSuggestion: "The Ordinary 100% Plant-Derived Squalane"
          },
          {
            title: "Overnight Treatment",
            description: "Apply an intensive overnight treatment or sleeping mask.",
            productSuggestion: "Laneige Water Sleeping Mask"
          }
        ]
      },
      {
        title: "Hair & Body Care",
        timeOfDay: "morning",
        duration: "45 minutes",
        steps: [
          {
            title: "Hair Mask",
            description: "Apply a deep conditioning hair mask for 10-15 minutes.",
            productSuggestion: "Olaplex No.3 Hair Perfector"
          },
          {
            title: "Body Scrub",
            description: "Exfoliate body with a gentle scrub, focusing on rough areas.",
            productSuggestion: "Nécessaire The Body Exfoliator"
          },
          {
            title: "Body Oil",
            description: "After shower, apply body oil to damp skin for maximum absorption.",
            productSuggestion: "Bio-Oil Skincare Oil"
          },
          {
            title: "Nail Care",
            description: "Push cuticles back, file nails, and apply cuticle oil.",
            productSuggestion: "CND Solar Oil"
          }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Special Event Preparation",
    description: "Prepare your skin and makeup for special occasions with this comprehensive routine.",
    type: "event",
    timeframes: [
      {
        title: "Day Before Event",
        timeOfDay: "evening",
        duration: "45 minutes",
        steps: [
          {
            title: "Gentle Cleanse",
            description: "Use a gentle cleanser to avoid irritation before your event.",
            productSuggestion: "Cetaphil Gentle Skin Cleanser"
          },
          {
            title: "Exfoliate",
            description: "Use a gentle exfoliant to create a smooth canvas for makeup.",
            productSuggestion: "Tatcha The Rice Polish"
          },
          {
            title: "Hydrating Sheet Mask",
            description: "Apply a hydrating sheet mask for 15-20 minutes.",
            productSuggestion: "SK-II Facial Treatment Mask"
          },
          {
            title: "Eye Treatment",
            description: "Apply eye patches to reduce puffiness and dark circles.",
            productSuggestion: "Patchology FlashPatch Eye Gels"
          },
          {
            title: "Hydrating Serum",
            description: "Apply a hydrating serum to plump skin.",
            productSuggestion: "Hyaluronic Acid Serum by The Ordinary"
          },
          {
            title: "Moisturize",
            description: "Apply a rich moisturizer to prepare skin for makeup.",
            productSuggestion: "Charlotte Tilbury Magic Cream"
          }
        ]
      },
      {
        title: "Event Day Prep",
        timeOfDay: "morning",
        duration: "60 minutes",
        steps: [
          {
            title: "Cleanse",
            description: "Start with a gentle cleanse to refresh skin.",
            productSuggestion: "Fresh Soy Face Cleanser"
          },
          {
            title: "Facial Massage",
            description: "Perform a quick lymphatic drainage massage to reduce puffiness.",
            productSuggestion: "Jade Roller & Gua Sha Set"
          },
          {
            title: "Hydrating Primer",
            description: "Apply a hydrating primer to create a smooth base.",
            productSuggestion: "Smashbox Primerizer"
          },
          {
            title: "Long-Wearing Foundation",
            description: "Apply long-wearing foundation with a damp beauty sponge.",
            productSuggestion: "Estée Lauder Double Wear Foundation"
          },
          {
            title: "Setting Powder",
            description: "Set makeup with a finely-milled powder, focusing on T-zone.",
            productSuggestion: "Charlotte Tilbury Airbrush Flawless Finish"
          },
          {
            title: "Setting Spray",
            description: "Finish with a setting spray to lock makeup in place.",
            productSuggestion: "Urban Decay All Nighter Setting Spray"
          }
        ]
      },
      {
        title: "Touch-Up Kit",
        timeOfDay: "evening",
        duration: "5 minutes as needed",
        steps: [
          {
            title: "Blotting Papers",
            description: "Use blotting papers to remove excess oil without disturbing makeup.",
            productSuggestion: "Tatcha Aburatorigami Blotting Papers"
          },
          {
            title: "Pressed Powder",
            description: "Touch up with a small amount of pressed powder if needed.",
            productSuggestion: "MAC Mineralize Skinfinish Natural"
          },
          {
            title: "Lip Product",
            description: "Reapply lip color after eating or drinking.",
            productSuggestion: "Charlotte Tilbury Matte Revolution Lipstick"
          },
          {
            title: "Concealer",
            description: "Touch up concealer under eyes or on any blemishes.",
            productSuggestion: "NARS Radiant Creamy Concealer"
          }
        ]
      }
    ]
  }
];

const quickRoutines: QuickRoutine[] = [
  {
    id: "1",
    title: "5-Minute Fresh Face",
    description: "Perfect for busy mornings when you need to look put-together quickly.",
    time: "5 minutes",
    steps: [
      "Apply moisturizer with SPF all over face",
      "Dab concealer under eyes and on any blemishes",
      "Apply cream blush to cheeks and blend",
      "Brush and set brows with clear gel",
      "Apply mascara to upper lashes",
      "Finish with tinted lip balm"
    ]
  },
  {
    id: "2",
    title: "10-Minute Office Ready",
    description: "A polished look that's appropriate for professional settings.",
    time: "10 minutes",
    steps: [
      "Apply primer to smooth skin",
      "Apply light foundation or BB cream",
      "Conceal under eyes and any imperfections",
      "Set with translucent powder",
      "Apply neutral eyeshadow and thin eyeliner",
      "Add mascara to upper and lower lashes",
      "Define and fill brows",
      "Apply natural blush and subtle highlighter",
      "Finish with nude or soft pink lipstick"
    ]
  },
  {
    id: "3",
    title: "15-Minute Date Night",
    description: "A romantic look that enhances your features for evening dates.",
    time: "15 minutes",
    steps: [
      "Apply illuminating primer",
      "Apply medium-coverage foundation",
      "Conceal and set with powder",
      "Define brows with pencil and gel",
      "Apply neutral eyeshadow base, darker shade in crease",
      "Apply eyeliner and smudge for softness",
      "Add two coats of volumizing mascara",
      "Apply blush to cheeks and blend well",
      "Add highlighter to cheekbones and cupid's bow",
      "Finish with long-lasting lipstick in your favorite shade"
    ]
  }
];

export const getRoutines = (): Routine[] => {
  return routines;
};

export const getQuickRoutines = (): QuickRoutine[] => {
  return quickRoutines;
};
