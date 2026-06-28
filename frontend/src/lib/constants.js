// Business + content constants for Core Fitness Dindigul
export const BIZ = {
  name: "Core Fitness Dindigul",
  shortName: "Core Fitness",
  tagline: "Transform Your Body. Elevate Your Mind.",
  city: "Dindigul",
  founded: "2021",
  founder: "Sathish Muthuchamy",
  instagramHandle: "@corefitness_dindigul",
  instagramUrl: "https://www.instagram.com/corefitness_dindigul/",
  phone: "+918248999488",
  phoneDisplay: "+91 82489 99488",
  whatsapp: "918667279523",
  whatsappDisplay: "+91 86672 79523",
  email: "info@corefitness-dindigul.com",
  address: "Near Achutha School, Pushpamal Nagar, Dindigul, Tamil Nadu 624001",
  addressShort: "Pushpamal Nagar, Dindigul",
  hoursDisplay: "Mon – Sun · 5:30 AM – 9:00 PM",
  openTime: "05:30",
  closeTime: "21:00",
  mapsLink: "https://maps.app.goo.gl/hSWpzh3TQc2Nxe4b7",
  mapsEmbed:
    "https://www.google.com/maps?q=Pushpamal+Nagar+Dindigul+Tamil+Nadu+624001&output=embed",
  googleReviews: [
    "https://maps.app.goo.gl/54oZKBdU6TWdSbmG9",
    "https://maps.app.goo.gl/FyTzJdeAaZLKBLar9",
    "https://maps.app.goo.gl/AJjudy3aevNXiK7J6",
    "https://maps.app.goo.gl/r2VxSV4LCMuPaawQ9",
  ],
  ravexUrl: "http://www.ravex.solutions",
};

export const whatsappLink = (msg = "Hi! I'm interested in joining Core Fitness Dindigul.") =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${BIZ.phone}`;

export const STATS = [
  { id: 1, value: 5, suffix: "+", label: "Years Strong", caption: "Est. 2021 · Dindigul" },
  { id: 2, value: 500, suffix: "+", label: "Active Members", caption: "Growing Community" },
  { id: 3, value: 12, suffix: "+", label: "Certified Trainers", caption: "Coaching Excellence" },
  { id: 4, value: 60, suffix: "+", label: "Pieces of Equipment", caption: "State-of-the-Art" },
];

export const SERVICES = [
  {
    id: "strength",
    title: "Strength Training",
    icon: "Dumbbell",
    desc: "Premium racks, free weights and machines built for serious progressive overload.",
  },
  {
    id: "cardio",
    title: "Cardio & Conditioning",
    icon: "HeartPulse",
    desc: "Treadmills, bikes, rowers and a dedicated spin floor to push your engine.",
  },
  {
    id: "functional",
    title: "Functional Fitness",
    icon: "Activity",
    desc: "TRX, kettlebells, battle ropes and sled work for real-world athletic strength.",
  },
  {
    id: "crossfit",
    title: "CrossFit / HIIT",
    icon: "Flame",
    desc: "Group-led, high-intensity workouts under our rig — community sweat, no excuses.",
  },
  {
    id: "pt",
    title: "Personal Training",
    icon: "UserCheck",
    desc: "1-on-1 coaching, custom programming and accountability with certified pros.",
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility",
    icon: "Wind",
    desc: "Mobility, mindfulness and recovery sessions to balance the grind.",
  },
];

export const PLANS = [
  {
    id: "basic",
    name: "Basic",
    duration: "Monthly",
    price: 3000,
    perks: ["Full gym access", "Personal locker", "Filtered water"],
    badge: null,
    highlight: false,
  },
  {
    id: "standard",
    name: "Standard",
    duration: "3 Months",
    price: 6000,
    perks: [
      "Everything in Basic",
      "Trainer guidance",
      "Progress tracking",
      "Group class access",
    ],
    badge: null,
    highlight: false,
  },
  {
    id: "premium",
    name: "Premium",
    duration: "6 Months",
    price: 10000,
    perks: [
      "Everything in Standard",
      "Custom diet plan",
      "2 free PT sessions",
      "Body composition check",
    ],
    badge: "Most Popular",
    highlight: false,
  },
  {
    id: "elite",
    name: "Elite",
    duration: "12 Months",
    price: 15000,
    perks: [
      "Everything in Premium",
      "Monthly assessments",
      "Priority booking",
    ],
    badge: "Best Value",
    highlight: true,
  },
];

export const GALLERY = [
  {
    src: "https://customer-assets.emergentagent.com/job_282709a2-22d5-44bd-a76a-0adab3855c8e/artifacts/ktdv3h9j_DSC03539.JPG",
    alt: "Core Fitness Dindigul strength training zone with dumbbells, bench and barbells",
    caption: "Strength Zone",
    span: "tall",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_282709a2-22d5-44bd-a76a-0adab3855c8e/artifacts/m07ot9gi_DSC03519.JPG",
    alt: "Plate-loaded machines and mirrored training floor at Core Fitness Dindigul",
    caption: "Machine Floor",
    span: "wide",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_282709a2-22d5-44bd-a76a-0adab3855c8e/artifacts/nhgcnpos_IMG_4547.jpg",
    alt: "Functional CrossFit rig with tires, ropes and punching bag at Core Fitness",
    caption: "Functional Rig",
    span: "tall",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_282709a2-22d5-44bd-a76a-0adab3855c8e/artifacts/hvrsw6e5_IMG_4548.jpg",
    alt: "Spin bike cardio studio with ambient gold lighting at Core Fitness Dindigul",
    caption: "Cardio & Spin Hub",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1648995361141-30676a75fd27?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    alt: "Member running on a treadmill inside Core Fitness Dindigul cardio area",
    caption: "Cardio Hub",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80",
    alt: "Yoga and flexibility class in a dim premium studio at Core Fitness Dindigul",
    caption: "Yoga & Mobility",
    span: "square",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Karthik R.",
    role: "Member · 2 years",
    quote:
      "The trainers actually care. I dropped 14 kg in 8 months and still feel stronger than ever — Core Fitness genuinely changed my life.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya S.",
    role: "Member · 1 year",
    quote:
      "Hands down the best unisex gym in Dindigul. Clean, premium equipment, female-friendly and the community is incredibly welcoming.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arun M.",
    role: "Powerlifter",
    quote:
      "Legit rack, legit plates, legit coaches. Sathish has built something serious here. I've trained in Chennai gyms — Core matches them.",
    rating: 5,
  },
  {
    id: 4,
    name: "Divya K.",
    role: "Yoga member",
    quote:
      "From CrossFit to yoga to personal training — everything under one roof, all done with love. The vibe is unmatched.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "What is the best unisex gym in Dindigul?",
    a: "Core Fitness is Dindigul's premier unisex gym, offering state-of-the-art equipment, certified trainers, and an inclusive fitness community. Founded in 2021 by Sathish Muthuchamy, we cater to all fitness levels and genders with equal access to all facilities.",
  },
  {
    q: "Does Core Fitness Dindigul accept female members?",
    a: "Yes! Core Fitness is a fully unisex gym welcoming all members. We have female trainers available, safe facilities, and a supportive community for women of every fitness level.",
  },
  {
    q: "What are the membership fees at Core Fitness?",
    a: "Monthly: ₹3,000 | 3 Months: ₹6,000 | 6 Months: ₹10,000 | 12 Months: ₹15,000. Special student and couple discounts are available — contact us on WhatsApp for exclusive offers.",
  },
  {
    q: "Do you offer personal training at Core Fitness Dindigul?",
    a: "Yes, we offer certified personal training. Premium and Elite members get 2 free PT sessions included, with the option to book additional sessions at member-friendly rates.",
  },
  {
    q: "What equipment does Core Fitness have?",
    a: "We feature commercial-grade free weights, cardio machines (treadmills, bikes, rowers), functional training equipment (TRX, kettlebells, battle ropes, tires) and a dedicated yoga studio.",
  },
  {
    q: "Does Core Fitness provide a diet plan?",
    a: "Yes — Premium and Elite members receive customized diet plans designed by our nutrition experts, tailored to your goals, body composition and lifestyle.",
  },
  {
    q: "Can I get a free trial at Core Fitness Dindigul?",
    a: "Absolutely! We offer a free consultation and trial session for first-time members. Message us on WhatsApp or call to schedule your visit.",
  },
  {
    q: "Are there group classes at Core Fitness?",
    a: "Yes, we run group classes including strength training, HIIT, CrossFit and Yoga. Check our Instagram @corefitness_dindigul for the latest schedule and reels.",
  },
  {
    q: "What are your gym timings?",
    a: "We're open every day from 5:30 AM to 9:00 PM. Early morning (6–9 AM) and evening (5–8 PM) are our peak hours — come whenever fits your schedule.",
  },
  {
    q: "Is Core Fitness suitable for beginners?",
    a: "Definitely! Whether you're a complete beginner or an advanced lifter, our certified trainers will guide you through a customized workout plan suited to your fitness level.",
  },
  {
    q: "Do you offer couple discounts?",
    a: "Yes! We offer exclusive couple packages with special rates. Contact us on WhatsApp for details on our current couple offer.",
  },
  {
    q: "Is there parking at Core Fitness Dindigul?",
    a: "Yes, we have ample two-wheeler and four-wheeler parking available for all members, right at our Pushpamal Nagar location.",
  },
];
