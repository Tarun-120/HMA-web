// All site content extracted from the HMA company-profile PPT, structured to
// mirror the pmalgroup.com reference layout. Edit text here — it updates the
// whole site.

export const company = {
  name: "Hindustan Machines & Automation",
  shortName: "HMA",
  tagline:
    "Operating in Industrial Automation / Conveyors & SPM Manufacturing since 2024",
  subtitle:
    "Manufacturers & Experts of Special Purpose Machines and Conveyors including Jigs / Fixtures — with one of the largest in-house tool-room facilities.",
  oneStop:
    "Your one-stop solution for Line Automation, Jigs & Fixtures, Welding Robotic Cells, Hydraulic Fixtures and Conveyors.",
  incorporated: "2024",
  email: "ajhmagroup@gmail.com",
  phones: ["+91 95994 87511", "+91 95288 24973"],
  address: {
    line1: "Khasra No. 692, Village - Saddiqu Nagar",
    line2: "Major Aasa Ram Marg, Meerut Road, Ghaziabad",
    line3: "Uttar Pradesh (U.P.) 201001, India",
  },
  social: {
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
};

// ---- Hero carousel slides (project showcases, like the reference) ----
// Images are real photos extracted from the company PPT (in /public/gallery).
export const heroSlides = [
  {
    tag: "Special Purpose Machines",
    title: "SPM Design & Manufacturing",
    desc: "Tailor-made special purpose machines — designed, built, tested and commissioned to your specific process and product.",
    img: "/gallery/page12_img1.jpeg",
  },
  {
    tag: "Air Delivery System",
    title: "Fan Air-Delivery Test Rigs",
    desc: "PLC-controlled, ISO-compliant air delivery testing for ceiling & table fans — supplied to leading fan manufacturers.",
    img: "/gallery/page26_img2.jpeg",
  },
  {
    tag: "Material Handling",
    title: "Conveyor Systems for Assembly Lines",
    desc: "Belt, roller, chain & overhead conveyors — from simple gravity lines to fully automated PLC-controlled systems.",
    img: "/gallery/page15_img2.jpeg",
  },
  {
    tag: "Precision Systems",
    title: "Tilt Measurement & Calibration System",
    desc: "Automated X / Y / Z axis incremental rotation and calibration with recorded observations.",
    img: "/gallery/page20_img1.jpeg",
  },
];

// ---- Honest, editable stats (HMA incorporated 2024 — no inflated numbers) ----
export const stats = [
  { value: "2024", label: "Established in Ghaziabad" },
  { value: "9+", label: "Types of SPM Built" },
  { value: "5+", label: "Major Clients Served" },
  { value: "100%", label: "In-house Tool Room" },
];

export const about = [
  "Hindustan Machines was incorporated in 2024 (formally Hindustan Machines & Automation) at Ghaziabad, Uttar Pradesh, India. We specialize in engineering, consulting, manufacturing and integration of automated production systems.",
  "Our core business areas are Jigs & Fixtures, Conveyors and Special Purpose Machines. Our experienced team identifies challenges and offers innovative solutions that yield substantial savings and improve productivity.",
  "We provide a complete solution from Design to Commissioning — conceptualization, detail engineering, manufacturing, supply, installation, testing and commissioning — for industries from the shop floor to the enterprise level.",
];

// The end-to-end workflow shown in the PPT flowchart.
export const workflow = [
  "Inquiry",
  "Concept Modelling & Costing",
  "Purchase Order",
  "Mechanical & Electrical Design",
  "Customer Discussion",
  "Design Finalisation & Drawing Release",
  "Manufacturing & Quality Check",
  "Assembly & Wiring",
  "Programming & Trials",
  "Installation & Training",
  "Commissioning",
  "Support & Services",
];

// ---- Products & Services grid (reference shows ~8-10 image cards) ----
export const services = [
  {
    key: "spm",
    icon: "⚙",
    title: "Special Purpose Machines",
    desc: "Tailor-made machines for specific processes — leakage testing (up to 1000 Bar), cutting/drilling/notching, heating chambers, dispensing units.",
    img: "/gallery/page12_img1.jpeg",
  },
  {
    key: "assembly",
    icon: "🛠",
    title: "Assembly Line Solutions",
    desc: "Complete assembly lines with quality testing stations, engineered for mass production and consistent throughput.",
    img: "/gallery/page13_img1.jpeg",
  },
  {
    key: "conveyors",
    icon: "↦",
    title: "Material Handling & Conveyors",
    desc: "Belt, roller, chain, overhead, modular & slat-band conveyors in MS, SS and Aluminium — up to fully automated PLC lines.",
    img: "/gallery/page15_img2.jpeg",
  },
  {
    key: "jigs",
    icon: "🧷",
    title: "Jigs & Fixtures",
    desc: "Manual & pneumatic clamping fixtures and fixture pallets for consistent, secure and accurate part positioning.",
    img: "/gallery/page16_img1.jpeg",
  },
  {
    key: "inspection",
    icon: "🔍",
    title: "Inspection & Vision Systems",
    desc: "Vision inspection and quality testing machines for reliable, automated in-line quality assurance.",
    img: "/gallery/page20_img1.jpeg",
  },
  {
    key: "robotics",
    icon: "🤖",
    title: "Robotics & Pick-and-Place",
    desc: "Robotic applications and pick-and-place automation that enhance operational efficiency and ergonomics.",
    img: "/gallery/page13_img2.jpeg",
  },
  {
    key: "ads",
    icon: "🌀",
    title: "Air Delivery System (ADS)",
    desc: "ISO-compliant, PLC-based air-delivery test systems for ceiling & table fans, with auto-generated test reports.",
    img: "/gallery/page26_img2.jpeg",
  },
  {
    key: "spares",
    icon: "🔧",
    title: "Spare Parts & Tool Room",
    desc: "In-house tool room: tool & dies, VMC/CNC, EDM, wire-cut, grinding, lathe/milling and PU/Rubber/SS rollers.",
    img: "/gallery/page17_img1.jpeg",
  },
];

// ---- Real project photos for the "Our Work" gallery (from the PPT) ----
export const projects = [
  { src: "/gallery/page12_img1.jpeg", title: "Aluminum Punching Machine", tag: "SPM" },
  { src: "/gallery/page13_img1.jpeg", title: "SPM Machines", tag: "SPM" },
  { src: "/gallery/page14_img1.jpeg", title: "UPVC Cleaning Hand Tool", tag: "Tooling" },
  { src: "/gallery/page15_img2.jpeg", title: "Roller Conveyor", tag: "Conveyor" },
  { src: "/gallery/page16_img1.jpeg", title: "Production Fixture", tag: "Fixture" },
  { src: "/gallery/page17_img1.jpeg", title: "Gears & Sprockets", tag: "Spare Parts" },
  { src: "/gallery/page18_img2.jpeg", title: "Machined Components", tag: "Spare Parts" },
  { src: "/gallery/page20_img1.jpeg", title: "Tilt Measurement & Calibration", tag: "Precision" },
  { src: "/gallery/page26_img2.jpeg", title: "Air Delivery Test Rig", tag: "ADS" },
  { src: "/gallery/page27_img1.jpeg", title: "Air Delivery Up/Down System", tag: "ADS" },
  { src: "/gallery/page28_img1.jpeg", title: "Air Delivery — Table Fan (TPW)", tag: "ADS" },
  { src: "/gallery/page21_img1.jpeg", title: "Assembly Line Conveyor", tag: "Conveyor" },
];

// ---- Real client logos extracted from the PPT ----
export const clientLogos = [
  { name: "Continental", src: "/gallery/page10_img1.jpeg" },
  { name: "OM Engineering Works", src: "/gallery/page10_img2.jpeg" },
  { name: "JK Tyre", src: "/gallery/page10_img3.jpeg" },
  { name: "Summercool", src: "/gallery/page10_img4.jpeg" },
];

// ---- "Deals In" — trading / supply product lines (from the newer PPTX) ----
export const dealsIn = [
  {
    key: "motion",
    icon: "⚙️",
    title: "Gearboxes & Motion Products",
    items: [
      "Planetary Gearbox — output shaft & output flange",
      "Right Angle Gearbox & Hollow Rotary Reducer",
      "Harmonic Gearbox — cup type & hat type",
      "AGV Wheels & Robotic Joint Modules",
      "Linear Motion Guides, Ball Screws & Ball Nuts",
      "Linear Motion Bearings, Guide Rods & Roller Rings",
      "Cam Followers, Electric Actuators & Industrial Motors",
    ],
    brands: ["THK", "HIWIN", "TSUYOI"],
  },
  {
    key: "fluidpower",
    icon: "🛢️",
    title: "Bearings, Hydraulics & Pneumatics",
    items: [
      "All types of bearings",
      "Pneumatic cylinders, valves, fittings & actuators",
      "Hydraulic pumps, power packs & cylinders",
      "All types of couplings & shaft couplings",
      "Drive chains, conveyor chains & sprockets",
      "Linear actuators",
    ],
    brands: ["SKF", "NTN", "NACHI"],
  },
  {
    key: "electrical",
    icon: "🔌",
    title: "Electrical & Electronics",
    items: [
      "Servo motors, PLC, HMI & VFD drives",
      "Wires & cables",
      "All types of sensors",
      "MCB, contactors & CNC controls",
    ],
    brands: [
      "Mitsubishi",
      "Omron",
      "Siemens",
      "Schneider",
      "Delta",
      "Lapp",
      "KEI",
      "Polycab",
      "Finolex",
      "Sick",
      "Leuze",
      "Panasonic",
      "L&T",
    ],
  },
];

// ---- Full categorized gallery: every real product image from the PPT ----
export const galleryGroups = [
  {
    title: "Special Purpose Machines",
    images: [
      "/gallery/page12_img1.jpeg",
      "/gallery/page13_img1.jpeg",
      "/gallery/page13_img2.jpeg",
      "/gallery/page14_img1.jpeg",
    ],
  },
  {
    title: "Conveyors & Material Handling",
    images: [
      "/gallery/page15_img2.jpeg",
      "/gallery/page15_img1.jpeg",
      "/gallery/page21_img1.jpeg",
      "/gallery/page21_img2.jpeg",
      "/gallery/page21_img3.jpeg",
      "/gallery/page21_img4.jpeg",
      "/gallery/page22_img1.jpeg",
      "/gallery/page22_img2.jpeg",
      "/gallery/page23_img1.jpeg",
      "/gallery/page23_img2.jpeg",
      "/gallery/page23_img3.jpeg",
      "/gallery/page23_img4.jpeg",
      "/gallery/page09_img1.jpeg",
      "/gallery/page09_img2.jpeg",
    ],
  },
  {
    title: "Jigs & Fixtures",
    images: ["/gallery/page16_img1.jpeg"],
  },
  {
    title: "Spare Parts & Tool Room",
    images: [
      "/gallery/page17_img1.jpeg",
      "/gallery/page17_img2.jpeg",
      "/gallery/page17_img3.jpeg",
      "/gallery/page17_img4.jpeg",
      "/gallery/page18_img1.jpeg",
      "/gallery/page18_img2.jpeg",
      "/gallery/page18_img3.jpeg",
      "/gallery/page18_img4.jpeg",
      "/gallery/page19_img1.jpeg",
      "/gallery/page19_img2.jpeg",
      "/gallery/page19_img3.jpeg",
      "/gallery/page19_img4.jpeg",
    ],
  },
  {
    title: "Precision Tilt Measurement & Calibration System",
    images: [
      "/gallery/page20_img1.jpeg",
      "/gallery/page20_img2.jpeg",
      "/gallery/page20_img3.jpeg",
      "/gallery/page20_img4.jpeg",
    ],
  },
  {
    title: "Air Delivery System (ADS)",
    images: [
      "/gallery/page26_img2.jpeg",
      "/gallery/page26_img1.jpeg",
      "/gallery/page27_img1.jpeg",
      "/gallery/page27_img2.jpeg",
      "/gallery/page28_img1.jpeg",
    ],
  },
  {
    title: "Automation Showcase",
    images: ["/pptx/image28.jpeg", "/pptx/image2.png", "/pptx/image1.png"],
  },
];

// ---- Automation showcase photos from the newer PPTX (in /public/pptx) ----
// NOTE: confirm you own/are licensed for these before publishing; replace with
// your own shop-floor photos if any are representative/stock.
export const automationShowcase = [
  { src: "/pptx/image28.jpeg", title: "Robotic Automation Cell", tag: "Robotics" },
  { src: "/pptx/image2.png", title: "Robotic Welding Line", tag: "Automation" },
  { src: "/pptx/image1.png", title: "Overhead Sortation Conveyor", tag: "Conveyor" },
];

// Featured capability — the Air Delivery System (ADS).
export const ads = {
  title: "Air Delivery System (ADS)",
  intro:
    "State-of-the-art technology for Air Delivery testing as per ISO — designed for checking the air delivery of Ceiling Fans & TPW (Table Fans). Supplied regularly to leading fan-manufacturing companies.",
  features: [
    "Test room as per IS 374:2019 for ceiling fans",
    "Ceiling-fan sweep variants: 600 to 1500 mm",
    "Linear actuator drive by stepper motor",
    "PLC-based fully automatic machine with HMI & tower light",
    "World-class anemometer: accuracy ±1% +1 digit, range from 0.2 m/s",
    "Auto-generated test reports with repeatability",
  ],
};

// ---- Why Trust Us (reference: 6 value cards) ----
export const whyUs = [
  {
    icon: "🤝",
    title: "Partnership Approach",
    desc: "We work as your engineering partner — from concept to commissioning and beyond.",
  },
  {
    icon: "🏭",
    title: "Industry Expertise",
    desc: "Deep experience across automotive, appliances, fans, aluminium and general manufacturing.",
  },
  {
    icon: "🎯",
    title: "Tailor-Made Solutions",
    desc: "Every SPM is designed and built specifically to your product and process requirements.",
  },
  {
    icon: "🔩",
    title: "In-house Tool Room",
    desc: "A large in-house tool room gives us control over quality, cost and delivery timelines.",
  },
  {
    icon: "🛡",
    title: "Reliable Support & Service",
    desc: "Installation, training, commissioning and after-sales support you can depend on.",
  },
  {
    icon: "✅",
    title: "Quality & Productivity",
    desc: "Solutions engineered to optimize productivity and quality while improving ergonomics.",
  },
];

// ---- Industries Served (reference: 9 icon cards) ----
export const industries = [
  { icon: "🚗", name: "Automotive (2 & 4 Wheeler)" },
  { icon: "🛞", name: "Tyre Manufacturing" },
  { icon: "🌬", name: "Fans & Appliances" },
  { icon: "🧊", name: "White Goods" },
  { icon: "🚪", name: "Aluminium & UPVC Profiles" },
  { icon: "🏬", name: "Warehouse & Logistics" },
  { icon: "🧴", name: "FMCG" },
  { icon: "🔬", name: "Testing Labs" },
  { icon: "🏗", name: "General Engineering" },
];

// ---- Management message (reference has a Chairman's statement) ----
// TODO: replace author with the actual founder / director name.
export const management = {
  message:
    "At Hindustan Machines & Automation, our goal is to empower industries with the tools they need to succeed. As a home-grown company from Ghaziabad, we are committed to making robotic automation and SPM technology accessible — delivering efficient, flexible, user-friendly and safe solutions that improve productivity and ergonomics for every client, regardless of size or industry.",
  author: "The Management",
  role: "Hindustan Machines & Automation",
};

export const clients = [
  "Continental",
  "OM Engineering Works",
  "Machine Solutions",
  "JK Tyre",
  "Summercool",
];

export const visionMission = {
  vision:
    "To make robotic automation & SPM technology accessible across industries with efficient, flexible, user-friendly and safe solutions.",
  mission:
    "To optimize productivity and quality while improving workplace ergonomics through modular technology that democratizes robotics for businesses of every size.",
};
