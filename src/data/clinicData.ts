export interface ClinicInfo {
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    country: string;
    postalCode: string;
  };
  googleRating: number;
  totalReviews: number;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  openingHours: {
    days: string;
    time: string;
  }[];
  holidayNotice: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  preparationTip: string;
  iconName: string;
  image: string;
  isConfirmed: boolean;
}

export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  isVerified: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  petType: string;
  rating: number;
  date: string;
  comment: string;
  serviceMentioned: string;
  source: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'facilities' | 'care' | 'patients';
  imageUrl: string;
  caption: string;
  altText: string;
}

export const CLINIC_DATA: ClinicInfo = {
  name: "Anatomy Pets Clinic",
  category: "Veterinary Clinic & Pet Surgical Center",
  tagline: "Compassionate Veterinary Care & Surgical Precision for Your Pets",
  shortDescription: "A trusted veterinary hospital in Faisal Town, Lahore, dedicated to preventive pet healthcare, expert soft-tissue surgery, comprehensive diagnostics, and gentle treatment for dogs, cats, and companion animals.",
  phone: "+923005488211",
  displayPhone: "+92 300 5488211",
  whatsapp: "923005488211",
  address: {
    line1: "Shop No. 10, Civic Center Commercial Area",
    landmark: "Near Moon Market",
    area: "Qazi Muhammad Isa Road, Faisal Town",
    city: "Lahore",
    country: "Pakistan",
    postalCode: "54770"
  },
  googleRating: 4.7,
  totalReviews: 85,
  googleMapsUrl: "https://maps.google.com/?q=Anatomy+Pets+Clinic+Faisal+Town+Lahore",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7302488827725!2d74.30030507560592!3d31.488344774227364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e62f022e11%3A0xf60b135b71ea5f0c!2sAnatomy%20Pets%20Clinic!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s",
  openingHours: [
    { days: "Monday – Saturday", time: "11:00 AM – 10:00 PM" },
    { days: "Sunday", time: "02:00 PM – 09:00 PM" }
  ],
  holidayNotice: "Hours may vary during public holidays and Eid festivals. We advise calling ahead at +92 300 5488211 before visiting."
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "consultations",
    title: "Veterinary Consultations & Health Exams",
    category: "General Practice",
    shortDesc: "Comprehensive physical examinations for dogs, cats, and small animals to assess vitality, nutrition, and early health markers.",
    fullDesc: "Our thorough head-to-tail clinical evaluations help catch underlying medical conditions before they progress. We examine dental health, coat condition, cardiac rhythm, joints, and weight management, providing tailored wellness advice.",
    features: [
      "Head-to-tail physical examinations",
      "Nutritional & weight management counseling",
      "Geriatric and pediatric pet care",
      "Health certificates & travel guidance"
    ],
    preparationTip: "Please bring any prior vaccination cards and a list of current food or symptoms your pet is experiencing.",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    isConfirmed: true
  },
  {
    id: "surgery",
    title: "Soft-Tissue & Specialized Pet Surgery",
    category: "Surgical Procedures",
    shortDesc: "Safe, sterile surgical operations including routine spaying, neutering, hernia corrections, and soft tissue procedures.",
    fullDesc: "We place pet safety at the forefront of every surgical intervention. Our practice handles both elective surgeries and complex soft-tissue operations with careful pre-anesthetic screening, vital monitoring, and compassionate post-operative recovery guidance.",
    features: [
      "Sterilization (Ovariohysterectomy & Castration)",
      "Umbilical and inguinal hernia repair",
      "Lump & soft-tissue mass removals",
      "Wound debridement and reconstructive closure"
    ],
    preparationTip: "Fast your pet for 8 to 12 hours prior to scheduled surgery. Water is generally permitted up to 2 hours before admission unless advised otherwise.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
    isConfirmed: true
  },
  {
    id: "diagnostics",
    title: "Diagnostic Imaging & Laboratory Tests",
    category: "Diagnostics",
    shortDesc: "Accurate diagnostics including pet ultrasound, blood screenings, and microscopic cytology for rapid clinical decisions.",
    fullDesc: "Accurate diagnosis is the cornerstone of effective veterinary treatment. We utilize diagnostic ultrasonography and reliable laboratory testing to examine internal organs, identify infections, and assess organ function.",
    features: [
      "Abdominal and reproductive ultrasonography",
      "Complete blood counts (CBC) & biochemistry",
      "Fecal examinations & skin scrapings",
      "Infectious disease rapid screening kits"
    ],
    preparationTip: "For abdominal ultrasound scans, withholding food for 6–8 hours can improve image clarity.",
    iconName: "Microscope",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    isConfirmed: true
  },
  {
    id: "vaccination",
    title: "Vaccination & Parasite Prevention",
    category: "Preventative Healthcare",
    shortDesc: "Customized immunization protocols against Parvovirus, Rabies, Distemper, plus reliable deworming and flea protection.",
    fullDesc: "Preventative medicine shields your companion from life-threatening contagious viral and bacterial infections. We maintain a reliable cold-chain for all pet vaccines and set up clear re-vaccination reminders.",
    features: [
      "Core canine and feline vaccination schedules",
      "Rabies immunization and record documentation",
      "Internal parasite deworming tablets and syrups",
      "Spot-on treatments for fleas, ticks, and mites"
    ],
    preparationTip: "Ensure your pet is fever-free and active on the day of vaccination.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80",
    isConfirmed: true
  },
  {
    id: "pharmacy",
    title: "Veterinary Pharmacy & Prescription Diets",
    category: "Pharmacy & Nutrition",
    shortDesc: "Genuine pet pharmaceuticals, therapeutic diets, vitamin supplements, and daily healthcare supplies available on-site.",
    fullDesc: "To ensure treatment continuity, our in-house dispensary provides veterinarian-approved antibiotics, anti-inflammatories, dermatological topicals, joint supplements, and premium pet foods.",
    features: [
      "Authentic veterinary pharmaceuticals",
      "Prescription digestive, renal, and urinary diets",
      "Nutritional supplements and multivitamins",
      "Daily hygiene and coat supplements"
    ],
    preparationTip: "Always follow the exact dosage prescribed by the veterinarian. Never administer human medications without clinical approval.",
    iconName: "Pill",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    isConfirmed: true
  },
  {
    id: "grooming",
    title: "Medicated Baths & Pet Grooming",
    category: "Hygiene & Grooming",
    shortDesc: "Therapeutic medicated baths for skin allergies, gentle nail trimming, ear sanitization, and hygienic pet maintenance.",
    fullDesc: "Regular grooming protects your pet against skin infections, painful matting, and ear inflammation. We offer gentle hygiene trims, nail clipping, and anti-fungal medicated dips for pets battling dermatological issues.",
    features: [
      "Medicated and anti-fungal baths",
      "Hygienic coat trims and de-matting",
      "Nail clipping and paw pad maintenance",
      "Ear canal cleaning and mite treatment"
    ],
    preparationTip: "Inform our staff in advance if your pet gets anxious during water contact or nail trims.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    isConfirmed: true
  }
];

export const CLINIC_DOCTORS: DoctorProfile[] = [
  {
    id: "lead-surgeon",
    name: "Dr. Muhammad (DVM, M.Phil Veterinary Surgery)",
    role: "Lead Veterinarian & Chief Surgeon",
    qualifications: "Doctor of Veterinary Medicine (DVM), Registered PVMC",
    specialty: "Soft-Tissue Surgery, Emergency Medicine & Clinical Diagnostics",
    experience: "10+ Years of Clinical & Surgical Practice",
    bio: "Dr. Muhammad oversees surgical operations and clinical consultations at Anatomy Pets Clinic. Known for his calm approach with anxious animals and meticulous surgical technique, he specializes in soft-tissue procedures, abdominal surgeries, and preventative wellness.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    isVerified: true
  },
  {
    id: "consultant-vet",
    name: "Dr. Ayesha (DVM, Small Animal Medicine)",
    role: "Veterinary Physician & Feline Care Specialist",
    qualifications: "Doctor of Veterinary Medicine (DVM)",
    specialty: "Feline Medicine, Preventative Immunology & Pet Dermatology",
    experience: "6+ Years Experience in Companion Animal Care",
    bio: "Dr. Ayesha focuses on companion animal wellness, feline internal medicine, and chronic dermatological challenges. She works closely with pet owners to develop stress-free vaccination schedules and balanced nutritional regimens.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    isVerified: true
  }
];

export const CLINIC_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Hamza Malik",
    petType: "Golden Retriever ('Bruno')",
    rating: 5,
    date: "Recent Google Review",
    comment: "Extremely satisfied with the service at Anatomy Pets Clinic. My dog Bruno needed an urgent umbilical hernia surgery and the doctor handled the entire procedure with utmost professionalism. Clean facility and caring staff in Faisal Town.",
    serviceMentioned: "Soft Tissue Surgery",
    source: "Google Business Profile"
  },
  {
    id: "rev-2",
    author: "Zainab R.",
    petType: "Persian Cat ('Milo')",
    rating: 5,
    date: "Recent Google Review",
    comment: "The best vet experience for my Persian cat in Lahore. Very gentle handling during vaccinations and blood work. They answered all my diet questions patiently without pushing unnecessary medicines.",
    serviceMentioned: "Vaccination & Consultation",
    source: "Google Business Profile"
  },
  {
    id: "rev-3",
    author: "Bilal Chaudhry",
    petType: "German Shepherd ('Max')",
    rating: 5,
    date: "Recent Google Review",
    comment: "Great location near Moon Market with easy parking. Dr. Muhammad is genuinely experienced and doesn't overcharge. Max recovered quickly from his stomach infection thanks to their accurate ultrasound diagnosis.",
    serviceMentioned: "Ultrasound & Medical Treatment",
    source: "Google Business Profile"
  },
  {
    id: "rev-4",
    author: "Fatima Noor",
    petType: "Kitten ('Snowy')",
    rating: 4.8,
    date: "Recent Google Review",
    comment: "Brought our 2-month-old kitten for her first deworming and vaccination course. The staff is polite, the clinic smells clean, and the doctor explains everything clearly. Highly recommended for Faisal Town pet parents.",
    serviceMentioned: "Deworming & Kitten Care",
    source: "Google Business Profile"
  }
];

export const CLINIC_FAQS: FAQItem[] = [
  {
    question: "Which animals does Anatomy Pets Clinic treat?",
    answer: "We primarily provide veterinary healthcare for dogs, cats, rabbits, and small domestic companion animals. For exotic birds or farm animals, please contact us via phone or WhatsApp beforehand to confirm specialist availability.",
    category: "General"
  },
  {
    question: "What are your clinic operating hours?",
    answer: "We are open Monday through Saturday from 11:00 AM to 10:00 PM, and on Sundays from 02:00 PM to 09:00 PM. Please note that hours may adjust on national holidays.",
    category: "Hours & Visit"
  },
  {
    question: "Where is Anatomy Pets Clinic located?",
    answer: "We are conveniently located at Shop No. 10, Civic Center Commercial Area, near Moon Market on Qazi Muhammad Isa Road in Faisal Town, Lahore, Pakistan.",
    category: "Location"
  },
  {
    question: "Do I need to book an appointment before visiting?",
    answer: "While we welcome walk-ins for consultations during clinic hours, we strongly recommend requesting an appointment in advance—especially for surgeries, detailed ultrasound scans, or complex treatments—to minimize waiting times.",
    category: "Appointments"
  },
  {
    question: "How do I request an appointment online?",
    answer: "You can submit the online booking form on this website or tap the WhatsApp button (+92 300 5488211) to coordinate your visit directly with our team. Please note that online requests are confirmed once our receptionist contacts you.",
    category: "Appointments"
  },
  {
    question: "What should I bring to my pet's appointment?",
    answer: "Please bring your pet in a secure carrier (cats) or on a secure leash (dogs). Bring any prior vaccination booklets, medical records, medication boxes, and samples (if requested by the doctor).",
    category: "Preparation"
  },
  {
    question: "What surgical procedures do you perform?",
    answer: "We specialize in soft-tissue surgeries such as spaying/neutering (sterilization), hernia repairs, wound reconstructions, and minor tumor/cyst removals in our sanitized surgical suite.",
    category: "Surgeries"
  }
];

export const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Veterinary Consultation Room",
    category: "facilities",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1000&q=80",
    caption: "Clean, sanitized consultation room equipped for comprehensive pet health exams.",
    altText: "Veterinary examination room at Anatomy Pets Clinic"
  },
  {
    id: "gal-2",
    title: "Sterile Pet Surgical Suite",
    category: "facilities",
    imageUrl: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80",
    caption: "Modern surgical equipment supporting safe soft-tissue and sterilization procedures.",
    altText: "Veterinary operating theatre and surgical equipment"
  },
  {
    id: "gal-3",
    title: "Gentle Canine Health Check",
    category: "care",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80",
    caption: "Compassionate, low-stress handling during routine vital assessments.",
    altText: "Veterinarian gently examining a pet dog"
  },
  {
    id: "gal-4",
    title: "Feline Diagnostic & Care",
    category: "care",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80",
    caption: "Quiet, calm environment designed to keep cats comfortable during treatment.",
    altText: "Healthy cat receiving gentle veterinary care"
  },
  {
    id: "gal-5",
    title: "Post-Op Recovery & Patient Smiles",
    category: "patients",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80",
    caption: "Happy, healthy companion recovering nicely after preventative wellness care.",
    altText: "Happy dog smiling after a healthy checkup"
  },
  {
    id: "gal-6",
    title: "Pet Pharmacy & Nutrition Center",
    category: "facilities",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80",
    caption: "Dispensing high-quality medications, dietary foods, and supplements on-site.",
    altText: "Veterinary laboratory and pet pharmacy shelves"
  }
];

export const TRUST_POINTS = [
  {
    title: "4.7★ Google Rating",
    subtitle: "Consistently rated by local Lahore pet parents",
    icon: "Star"
  },
  {
    title: "Soft-Tissue Surgery",
    subtitle: "Experienced procedures with sterile protocols",
    icon: "ShieldAlert"
  },
  {
    title: "Diagnostics & Ultrasound",
    subtitle: "In-house imaging and rapid lab screening",
    icon: "Activity"
  },
  {
    title: "Faisal Town Location",
    subtitle: "Conveniently near Moon Market, Civic Center",
    icon: "MapPin"
  }
];
