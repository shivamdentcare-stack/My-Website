// Mock data for Shivam Speciality Dental Care

// WhatsApp helpers
// Number format: country code + number, no +, spaces or dashes
export const whatsappNumber = "919826668724";

export const buildWhatsAppUrl = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultAppointmentMessage = `Hello Shivam Speciality Dental Care,

I would like to book an appointment. Please share available slots.

Name: 
Service: 
Preferred day/time: 

Thank you!`;

export const serviceEnquiryMessage = (serviceTitle) =>
  `Hello Shivam Speciality Dental Care,

I'm interested in ${serviceTitle}. Please share more details and available appointment slots.

Name: 
Preferred day/time: 

Thank you!`;

export const clinicInfo = {
  name: "Shivam Speciality Dental Care",
  shortName: "SSDC",
  tagline: "Best Dental Clinic in Vapi",
  subTagline: "for Smile Makeovers & Everything Teeth",
  hero: "Everyone deserves",
  heroAccent: "a Smile they Love",
  legacy:
    "Your smile is our priority. Experience painless, modern and personalized dental care under expert hands.",
  address:
    "Shop No. 4, Nirmal Co-op. Housing Society, Nearby Haria Hospital, Chharwada Road, Rotary Circle, Industrial Estate, Vapi-396195, Gujarat",
  phone: "+91 98266 68724",
  email: "shivamdentcare@gmail.com",
  instagram: "@ssdcvapi",
  hours: [
    { day: "Monday - Saturday", time: "10:00 AM - 1:00 PM, 4:30 PM - 8:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const doctors = [
  {
    id: 1,
    name: "Dr. Parashar Kirtibhai Desai",
    qualification: "MDS, Prosthodontist & Implantologist",
    experience: "10 Years of Experience",
    type: "in-house",
    role: "Founder & Chief Dental Surgeon",
    image:
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/jk6oaeut_A6BE4236-4042-4F26-9B0D-78E365B3AF32.png",
    imagePosition: "center 15%",
    bio: "Dr. Parashar Kirtibhai Desai is an award-winning prosthodontist and implantologist based in Vapi. With a Master's in Dental Surgery (Prosthodontics) and over a decade of clinical experience, he specializes in dental implants and digital smile designing. He combines artistry with the latest evidence-based techniques to deliver natural, long-lasting results.",
    specialties: [
      "Dental Implants",
      "Smile Designing",
      "Full Mouth Rehabilitation",
      "Crowns & Veneers",
      "Prosthodontics",
    ],
  },
  {
    id: 2,
    name: "Dr. Himani Parashar Desai",
    qualification: "BDS, Dental Surgeon",
    experience: "6 Years of Experience",
    type: "in-house",
    role: "Resident Dental Surgeon",
    image:
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/5yjbv8yj_0A39CF68-648E-415A-B111-0F963916BCB0.png",
    imagePosition: "center 25%",
    bio: "Dr. Himani Parashar Desai is a compassionate dental surgeon dedicated to preventive and restorative dentistry. She specializes in general dentistry, painless root canal treatments, and oral surgical procedures, ensuring every patient receives gentle, personalised, and evidence-based care.",
    specialties: [
      "General Dentistry",
      "Root Canal Treatment",
      "Oral Surgery",
      "Pediatric Dentistry",
      "Preventive Care",
    ],
  },
  {
    id: 3,
    name: "Dr. Aroon K. Bengani",
    qualification: "MDS, Oral & Maxillofacial Surgeon",
    experience: "Visiting Specialist",
    type: "visiting",
    role: "Oral & Maxillofacial Surgeon · Basal Implantologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
    imagePosition: "center 20%",
    bio: "Dr. Aroon K. Bengani is a highly experienced oral and maxillofacial surgeon and a certified basal implantologist. He visits SSDC for advanced surgical procedures including complex implant placements, full-arch basal implants, jaw surgeries and trauma management.",
    specialties: [
      "Basal Implants",
      "Maxillofacial Surgery",
      "Complex Extractions",
      "Trauma Management",
    ],
  },
  {
    id: 4,
    name: "Dr. Mrudul Vadiya",
    qualification: "MDS, Orthodontist",
    experience: "Visiting Specialist",
    type: "visiting",
    role: "Orthodontist & Dentofacial Orthopedist",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",
    imagePosition: "center 25%",
    bio: "Dr. Mrudul Vadiya is a specialist orthodontist who visits SSDC to provide tailored orthodontic treatments — from traditional braces and ceramic brackets to clear aligners and advanced bite-correction protocols for both children and adults.",
    specialties: [
      "Metal & Ceramic Braces",
      "Clear Aligners",
      "Bite Correction",
      "Pediatric Orthodontics",
      "Dentofacial Orthopedics",
    ],
  },
];

export const services = [
  {
    id: "exams",
    title: "Dental Exams & Checkups",
    short: "Routine examinations to keep your smile healthy.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    description:
      "Comprehensive dental check-ups using digital diagnostics to detect issues early — cavities, gum disease, oral cancer screening and more.",
    points: [
      "Digital X-rays & intraoral camera",
      "Professional teeth cleaning (scaling)",
      "Cavity & gum disease screening",
      "Personalised oral hygiene plan",
    ],
    category: "general",
  },
  {
    id: "whitening",
    title: "Teeth Whitening Treatments",
    short: "Brighten your smile by several shades, safely.",
    image:
      "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?auto=format&fit=crop&w=1000&q=80",
    description:
      "In-office and take-home whitening systems that deliver visibly whiter teeth without damaging enamel.",
    points: [
      "In-clinic LED whitening",
      "Custom take-home trays",
      "Stain removal & polishing",
      "Long-lasting results",
    ],
    category: "cosmetic",
  },
  {
    id: "braces",
    title: "Braces & Aligners",
    short: "Straighten teeth with traditional braces or clear aligners.",
    image:
      "https://images.unsplash.com/photo-1605292530210-56b8be409237?auto=format&fit=crop&w=1000&q=80",
    description:
      "Modern orthodontic options for children and adults — from metal & ceramic braces to invisible clear aligners.",
    points: [
      "Metal & ceramic braces",
      "Clear aligners (Invisalign-style)",
      "Bite correction & spacing",
      "Retainer & follow-up care",
    ],
    category: "general",
  },
  {
    id: "implants",
    title: "Dental Implants",
    short: "Permanent replacements that look and feel natural.",
    image:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1000&q=80",
    description:
      "Single, multiple and full-arch implant solutions placed using guided surgical protocols by Dr. Parashar Desai.",
    points: [
      "Single tooth implants",
      "All-on-4 / All-on-6 full mouth",
      "Bone grafting & sinus lift",
      "Lifetime durable solutions",
    ],
    category: "implant",
  },
  {
    id: "dentures",
    title: "Partial & Complete Dentures",
    short: "Comfortable, well-fitted dentures crafted just for you.",
    image:
      "https://images.unsplash.com/photo-1626878880028-0438b1403b3f?auto=format&fit=crop&w=1000&q=80",
    description:
      "Traditional and flexible dentures designed for a precise fit, restoring chewing function and confidence.",
    points: [
      "Complete dentures",
      "Partial & flexible dentures",
      "Implant-supported overdentures",
      "Repairs & relining",
    ],
    category: "general",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry & Smile Correction",
    short: "Veneers, crowns and digital smile design to transform your smile.",
    image:
      "https://images.unsplash.com/photo-1684607631747-045ecfeeb4c7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Digital Smile Design (DSD) approach combining science and aesthetics for predictable, natural-looking smile makeovers.",
    points: [
      "Porcelain veneers & laminates",
      "All-ceramic crowns",
      "Digital Smile Design (DSD)",
      "Gum contouring",
    ],
    details: [
      {
        title: "Ceramic Veneers",
        body: "Ceramic veneers are thin, tooth-colored covers placed on the front of teeth to improve smile appearance. They help correct stains, gaps, chipped or uneven teeth and give a natural, brighter, well-shaped smile with long-lasting results.",
      },
    ],
    beforeAfter: [
      {
        label: "Ceramic Veneers · Gap Closure & Smile Correction",
        before:
          "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/cyv1r2ao_IMG_7215.jpeg",
        after:
          "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/nu1b93qn_IMG_7065.jpeg",
      },
    ],
    category: "cosmetic",
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    short: "Painless, single-visit root canals using rotary endodontics.",
    image:
      "https://images.unsplash.com/photo-1591283261401-c76eba2d369a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Save your natural tooth with modern, painless rotary root canal procedures performed in single or two visits.",
    points: [
      "Single-visit RCT",
      "Rotary endodontics",
      "Re-RCT & post-core",
      "Tooth-coloured restorations",
    ],
    category: "general",
  },
  {
    id: "surgery",
    title: "Oral & Maxillofacial Surgery",
    short: "From extractions to wisdom teeth & complex oral procedures.",
    image:
      "https://images.unsplash.com/photo-1643660526741-094639fbe53a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Surgical procedures performed under sterile, hospital-grade protocols by Dr. Himani Desai.",
    points: [
      "Wisdom tooth extraction",
      "Surgical extractions",
      "Cyst & lesion removal",
      "Pre-prosthetic surgery",
    ],
    category: "implant",
  },
];

export const technologies = [
  {
    title: "Digital Smile Design",
    description:
      "Preview your new smile on screen before treatment begins, designed pixel-by-pixel.",
  },
  {
    title: "Intraoral 3D Scanner",
    description:
      "Goodbye gooey impressions — accurate 3D scans for crowns, aligners and implants.",
  },
  {
    title: "Digital RVG X-rays",
    description:
      "Up to 90% lower radiation than conventional X-rays with instant high-resolution imaging.",
  },
  {
    title: "Painless Anesthesia",
    description:
      "Topical & vibration-assisted delivery makes injections virtually painless.",
  },
  {
    title: "Sterilisation Protocol",
    description:
      "Class-B autoclave sterilisation with single-use disposables for every patient.",
  },
  {
    title: "Rotary Endodontics",
    description:
      "Single-visit root canals with NiTi rotary files for predictable outcomes.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Tejal Patel",
    role: "Verified Patient",
    quote:
      "Dr. Parashar is amazing — a very knowledgeable person for treatment as well as such a nice person. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rudra Maheshwari",
    role: "Verified Patient",
    quote:
      "I had a toothache which was managed very well by Dr. Parashar. He calmly explained all the details of the procedure and gave great guidance — worth every penny. Happy with Shivam Speciality Dental Care staff and treatment. I recommend everyone.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priyanka",
    role: "Verified Patient",
    quote:
      "The best dental care I have ever experienced! This is a great place to take care of your teeth. Dr. Himani did such a great job! Highly recommend if you're looking for a dentist in Vapi.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jayam Modi",
    role: "Verified Patient",
    quote:
      "Dr. Parashar is an amazing doctor. Very patiently explains your situation and ensures that you are fully convinced of any treatment you are undergoing.",
    rating: 5,
  },
];

export const videos = [
  {
    id: "AkbsrcRm0c8",
    title: "What are dental veneers?",
    description:
      "Curious to know about smile makeovers? Veneers are one of the most commonly recommended procedures — get to know the science behind them.",
  },
  {
    id: "t7ljIWY6YMY",
    title: "Why off-the-shelf whitening doesn't work",
    description:
      "Thinking of buying a teeth-whitening product? Watch this before you do.",
  },
];

export const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    caption: "Happy patients, brighter smiles ✨ #SSDCVapi",
    likes: 248,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    caption: "Behind the scenes with Dr. Parashar at work.",
    likes: 312,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    caption: "Our clinic — where comfort meets care.",
    likes: 189,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
    caption: "Painless RCT done in a single visit.",
    likes: 274,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=600&q=80",
    caption: "A smile makeover that speaks for itself.",
    likes: 421,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/19976565/pexels-photo-19976565.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Gentle, family-first dentistry. #SmileWithUs",
    likes: 196,
  },
];

export const stats = [
  { value: "5+", label: "Years of Clinic" },
  { value: "3000+", label: "Happy Patients" },
  { value: "15+", label: "Dental Specialties" },
];

export const blogs = [
  {
    id: 1,
    title: "Why off-the-shelf teeth whitening doesn't work",
    excerpt:
      "Thinking of buying a whitening kit from your local pharmacy? Here's why professional whitening delivers better, safer results.",
    image:
      "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?auto=format&fit=crop&w=900&q=80",
    category: "Cosmetic Dentistry",
    date: "Coming soon",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Dental implants vs. dentures: which is right for you?",
    excerpt:
      "A side-by-side guide to help you understand the pros, cons and long-term costs of both tooth replacement options.",
    image:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=900&q=80",
    category: "Implants",
    date: "Coming soon",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "5 daily habits that protect your smile",
    excerpt:
      "Small, consistent habits that go far beyond brushing — practical tips from our doctors for a healthy mouth.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
    category: "Oral Health",
    date: "Coming soon",
    readTime: "3 min read",
  },
];

export const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "cosmetic", label: "Cosmetic Dentistry", path: "/cosmetic-dentistry" },
  { id: "general", label: "General Dentistry", path: "/general-dentistry" },
  { id: "implant", label: "Implant Dentistry", path: "/implant-dentistry" },
  { id: "emergency", label: "Diagnostic & Emergency", path: "/emergency-care" },
  { id: "team", label: "Our Team", path: "/our-team" },
  { id: "blogs", label: "Blogs", path: "/blogs" },
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contact", path: "/contact" },
];
