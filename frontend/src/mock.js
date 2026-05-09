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
  tagline: "Vapi's Leading Dental Clinic",
  subTagline: "for Smile Makeovers, Implants & Complete Dental Solutions",
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
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/oykx0x0t_d041fa11-b1d0-43f2-b593-7536608523da.jpeg",
    imagePosition: "center 25%",
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
  // ================= COSMETIC DENTISTRY =================
  {
    id: "veneers",
    title: "Dental Veneers",
    short: "Thin, tooth-coloured shells for a flawless smile.",
    image:
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/85qx2kpj_veneers.jpg",
    description:
      "Custom ceramic veneers correct stains, gaps, chips and uneven teeth — for a natural, brighter, well-shaped smile.",
    points: [
      "Customised shade matching",
      "Minimally invasive prep",
      "Natural translucency",
      "Long-lasting durable results",
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
          "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/nu1b93qn_IMG_7065.jpeg",
        after:
          "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/cyv1r2ao_IMG_7215.jpeg",
      },
      {
        label: "Ceramic Veneers · Full Smile Makeover",
        before:
          "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/bbkpcptx_9A0AFF58-43AF-487E-9436-00CD02B7645A.JPEG",
        after:
          "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/h4fqwwdy_5F3770B8-9FE0-42C6-ADDC-C6348B239B33.JPEG",
        beforeZoom: 2.0,
        beforePos: "center 48%",
        afterZoom: 2.0,
        afterPos: "center 48%",
      },
    ],
    category: "cosmetic",
    featured: true,
  },
  {
    id: "ceramic-crowns",
    title: "Full Ceramic (Metal-Free) Crowns",
    short: "Strong, lifelike crowns with no metal showing through.",
    image:
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/d2pk2ok8_Full%20Ceramic%20Crowns.jpeg",
    description:
      "All-ceramic, metal-free crowns that look identical to natural teeth and are biocompatible — the gold standard for front teeth restorations.",
    points: [
      "Zirconia & E-Max ceramic options",
      "No grey gum-line over time",
      "Biocompatible & hypoallergenic",
      "Natural translucency",
    ],
    category: "cosmetic",
  },
  {
    id: "dsd",
    title: "Digital Smile Designing",
    short: "Preview your new smile on screen before treatment begins.",
    image:
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/dys3zb9i_DIGITAL-SMILE-DESIGNING.jpg",
    description:
      "Digital Smile Design (DSD) lets us plan and visualise your final smile pixel-by-pixel using your facial photographs and 3D scans before any treatment starts.",
    points: [
      "Photographic smile analysis",
      "3D mock-up of new smile",
      "Try-in preview before treatment",
      "Predictable, planned outcome",
    ],
    category: "cosmetic",
  },
  {
    id: "whitening",
    title: "Teeth Whitening (Bleaching)",
    short: "Brighten your smile by several shades, safely.",
    image:
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/o6dw5fv3_Teeth%20whitening.webp",
    description:
      "Professional in-office and take-home bleaching systems that deliver visibly whiter teeth without damaging enamel.",
    points: [
      "In-clinic LED whitening",
      "Custom take-home trays",
      "Stain removal & polishing",
      "Long-lasting results",
    ],
    category: "cosmetic",
    featured: true,
  },
  {
    id: "gum-contouring",
    title: "Gum Contouring",
    short: "Reshape uneven or excessive gum line for a balanced smile.",
    image:
      "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/kzi096pv_Gum%20Contouring.jpg",
    description:
      "Laser-assisted gum reshaping to correct gummy smiles, uneven gum lines and improve overall smile aesthetics.",
    points: [
      "Painless laser procedure",
      "Treats gummy smile",
      "Even, balanced gum line",
      "Quick recovery",
    ],
    category: "cosmetic",
  },

  // ================= IMPLANT DENTISTRY =================
  {
    id: "single-implant",
    title: "Single Tooth Replacement",
    short: "Replace a missing tooth permanently with a dental implant.",
    image:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1000&q=80",
    description:
      "A titanium implant placed into the jawbone topped with a natural-looking ceramic crown — the closest replacement to a real tooth.",
    points: [
      "Looks & feels natural",
      "Preserves adjacent teeth",
      "Prevents jawbone loss",
      "Lifetime solution",
    ],
    category: "implant",
    featured: true,
  },
  {
    id: "multiple-implant",
    title: "Multiple Tooth Replacement",
    short: "Implant-supported bridges for two or more missing teeth.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",
    description:
      "Two or more implants supporting a bridge — a stable, long-term replacement for several adjacent missing teeth without grinding healthy ones.",
    points: [
      "Implant-supported bridge",
      "Stable chewing function",
      "No need to drill healthy teeth",
      "Aesthetic ceramic finish",
    ],
    category: "implant",
  },
  {
    id: "full-mouth-implants",
    title: "Full Mouth Implants",
    short: "Restore a complete arch with All-on-4 / All-on-6 implants.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    description:
      "Full-arch fixed teeth supported on 4 or 6 implants — replace all teeth with a fixed, lifelike set in as little as one visit.",
    points: [
      "All-on-4 & All-on-6 protocols",
      "Fixed, non-removable teeth",
      "Same-day teeth in selected cases",
      "Restores chewing & confidence",
    ],
    category: "implant",
  },
  {
    id: "basal-implants",
    title: "Basal Implants",
    short: "Immediate-loading implants for patients with bone loss.",
    image:
      "https://images.unsplash.com/photo-1643660526741-094639fbe53a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Advanced basal implant system that engages dense cortical bone — ideal for patients with low bone density, often avoiding the need for grafting.",
    points: [
      "Immediate loading possible",
      "Avoids bone grafting in many cases",
      "Single-visit teeth in 72 hours",
      "Performed by visiting specialist",
    ],
    category: "implant",
  },

  // ================= DENTURES =================
  {
    id: "complete-dentures",
    title: "Complete Dentures",
    short: "Comfortable removable dentures for full arches.",
    image:
      "https://images.unsplash.com/photo-1626878880028-0438b1403b3f?auto=format&fit=crop&w=1000&q=80",
    description:
      "High-quality, well-fitted complete dentures restoring chewing function and natural facial appearance for fully edentulous patients.",
    points: [
      "Custom-fitted upper & lower",
      "Lifelike teeth & gum aesthetics",
      "Restores chewing & speech",
      "Adjustments & relining included",
    ],
    category: "dentures",
    featured: true,
  },
  {
    id: "over-dentures",
    title: "Over Dentures",
    short: "Implant-retained dentures that snap into place securely.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",
    description:
      "Removable dentures that clip onto 2 to 4 dental implants — combining stability of implants with the convenience of removable prosthetics.",
    points: [
      "No slipping while eating",
      "Easier cleaning",
      "Preserves jawbone",
      "Cost-effective vs full implants",
    ],
    category: "dentures",
  },
  {
    id: "cast-partial-dentures",
    title: "Cast Partial Dentures",
    short: "Strong, slim metal-framework dentures for partial gaps.",
    image:
      "https://images.unsplash.com/photo-1559591935-c6c92c6cb6e8?auto=format&fit=crop&w=1000&q=80",
    description:
      "Cast metal-framework partial dentures that are slim, strong and clasp on to existing teeth — a durable mid-range option for partial tooth loss.",
    points: [
      "Slim & lightweight",
      "Stronger than acrylic",
      "Precise fit using metal framework",
      "Long lifespan",
    ],
    category: "dentures",
  },

  // ================= ORTHODONTICS =================
  {
    id: "metal-ceramic-braces",
    title: "Metal & Ceramic Braces",
    short: "Time-tested fixed braces for all kinds of misalignment.",
    image:
      "https://images.unsplash.com/photo-1605292530210-56b8be409237?auto=format&fit=crop&w=1000&q=80",
    description:
      "Conventional fixed braces in metal or tooth-coloured ceramic — the most reliable way to correct crowding, gaps, bite issues and severe misalignment.",
    points: [
      "Metal braces (most affordable)",
      "Ceramic / tooth-coloured option",
      "Treats complex misalignment",
      "Performed by visiting orthodontist",
    ],
    category: "ortho",
    featured: true,
  },
  {
    id: "aligners",
    title: "Dental Aligners",
    short: "Clear, removable aligners — straighten teeth invisibly.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    description:
      "Virtually invisible clear aligners that gradually move teeth into position — comfortable, removable and ideal for adults.",
    points: [
      "Almost invisible",
      "Removable while eating",
      "Easy to clean",
      "Predictable digital plan",
    ],
    category: "ortho",
  },

  // ================= GENERAL DENTISTRY =================
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
    featured: true,
  },
  {
    id: "filling",
    title: "Tooth Filling (Light Cure Composites)",
    short: "Tooth-coloured fillings that blend in seamlessly.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",
    description:
      "Modern light-cure composite fillings restore decayed or chipped teeth with a strong, tooth-coloured material that bonds invisibly.",
    points: [
      "Tooth-coloured & invisible",
      "Bonds chemically to tooth",
      "Single-visit procedure",
      "Long-lasting & strong",
    ],
    category: "general",
  },
  {
    id: "cleaning",
    title: "Cleaning & Polishing",
    short: "Professional scaling to keep gums and teeth healthy.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    description:
      "Ultrasonic scaling and polishing to remove plaque, tartar and surface stains — the foundation of long-term oral health.",
    points: [
      "Ultrasonic scaling",
      "Stain removal & polishing",
      "Fluoride application",
      "Recommended every 6 months",
    ],
    category: "general",
  },
  {
    id: "gum-surgery",
    title: "Gum Surgeries",
    short: "Treatment for advanced gum disease and recession.",
    image:
      "https://images.unsplash.com/photo-1559591935-c6c92c6cb6e8?auto=format&fit=crop&w=1000&q=80",
    description:
      "Surgical procedures including flap surgery, gum grafting and pocket reduction to treat advanced periodontal (gum) disease.",
    points: [
      "Flap surgery",
      "Gum grafting",
      "Pocket-reduction surgery",
      "Saves loose teeth",
    ],
    category: "general",
  },
  {
    id: "extraction",
    title: "Teeth Removal",
    short: "Painless removal of damaged or unsalvageable teeth.",
    image:
      "https://images.unsplash.com/photo-1643660526741-094639fbe53a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Simple, atraumatic extractions performed under modern local anesthesia for badly decayed, fractured or mobile teeth.",
    points: [
      "Painless local anesthesia",
      "Atraumatic technique",
      "Same-day procedure",
      "Replacement options discussed",
    ],
    category: "general",
  },
  {
    id: "surgical-extraction",
    title: "Surgical Extractions",
    short: "For broken, impacted or root-stump teeth.",
    image:
      "https://images.unsplash.com/photo-1643660526741-094639fbe53a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Surgical removal of broken-down, impacted or root-stump teeth requiring sectioning and bone preservation techniques.",
    points: [
      "Tooth sectioning",
      "Bone-preserving technique",
      "Suturing & socket care",
      "Faster healing protocol",
    ],
    category: "general",
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Surgery",
    short: "Specialist removal of impacted wisdom teeth.",
    image:
      "https://images.unsplash.com/photo-1643660526741-094639fbe53a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Surgical removal of partially erupted or impacted wisdom teeth that cause pain, infection, swelling or damage to adjacent teeth.",
    points: [
      "3D CBCT planning",
      "Impacted & angular cases",
      "Minimal swelling protocol",
      "Performed by specialist",
    ],
    category: "general",
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
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    path: "/cosmetic-dentistry",
    children: [
      { label: "Dental Veneers", path: "/service/veneers" },
      { label: "Full Ceramic (Metal-Free) Crowns", path: "/service/ceramic-crowns" },
      { label: "Digital Smile Designing", path: "/service/dsd" },
      { label: "Teeth Whitening (Bleaching)", path: "/service/whitening" },
      { label: "Gum Contouring", path: "/service/gum-contouring" },
    ],
  },
  {
    id: "implant",
    label: "Implant Dentistry",
    path: "/implant-dentistry",
    children: [
      { label: "Single Tooth Replacement", path: "/service/single-implant" },
      { label: "Multiple Tooth Replacement", path: "/service/multiple-implant" },
      { label: "Full Mouth Implants", path: "/service/full-mouth-implants" },
      { label: "Basal Implants", path: "/service/basal-implants" },
    ],
  },
  {
    id: "dentures",
    label: "Dentures",
    path: "/dentures",
    children: [
      { label: "Complete Dentures", path: "/service/complete-dentures" },
      { label: "Over Dentures", path: "/service/over-dentures" },
      { label: "Cast Partial Dentures", path: "/service/cast-partial-dentures" },
    ],
  },
  {
    id: "ortho",
    label: "Orthodontics",
    path: "/orthodontics",
    children: [
      { label: "Metal & Ceramic Braces", path: "/service/metal-ceramic-braces" },
      { label: "Dental Aligners", path: "/service/aligners" },
    ],
  },
  {
    id: "general",
    label: "General Dentistry",
    path: "/general-dentistry",
    children: [
      { label: "Root Canal Treatment", path: "/service/rct" },
      { label: "Tooth Filling (Light Cure)", path: "/service/filling" },
      { label: "Cleaning & Polishing", path: "/service/cleaning" },
      { label: "Gum Surgeries", path: "/service/gum-surgery" },
      { label: "Teeth Removal", path: "/service/extraction" },
      { label: "Surgical Extractions", path: "/service/surgical-extraction" },
      { label: "Wisdom Tooth Surgery", path: "/service/wisdom-tooth" },
    ],
  },
  { id: "team", label: "Our Team", path: "/our-team" },
  { id: "blogs", label: "Blogs", path: "/blogs" },
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contact", path: "/contact" },
];
