export type ServiceSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type Service = {
  slug: string;
  icon: "Building2" | "Biohazard" | "ShoppingBag" | "UtensilsCrossed" | "ShoppingCart" | "Landmark" | "Layers" | "Wrench";
  title: string;
  shortDesc: string;
  image: string;
  secondaryImage: string;
  heroTagline: string;
  intro: string;
  sections: ServiceSection[];
  serviceAreas: string[];
};

export const services: Service[] = [
  {
    slug: "office-cleaning",
    icon: "Building2",
    title: "Office Cleaning Services",
    shortDesc: "Comprehensive daily or scheduled office cleaning. Workstations, conference rooms, reception areas, kitchens, restrooms, and common areas.",
    image: "https://images.pexels.com/photos/10567171/pexels-photo-10567171.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/10567271/pexels-photo-10567271.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Office Cleaning Services for Businesses Throughout Northern New Jersey",
    intro: "A clean office does more than create a positive first impression. It supports employee productivity, promotes a healthier work environment, and reflects the professionalism of your organization. At Stein Facility Services, we provide reliable office cleaning services designed to help businesses maintain clean, organized, and welcoming workplaces throughout Newark and Northern New Jersey.",
    sections: [
      {
        heading: "Comprehensive Office Cleaning Services",
        body: "Modern office environments experience constant daily activity. Employees, clients, vendors, and visitors all contribute to dirt, dust, and wear throughout the workplace. Our customized cleaning programs are designed around your schedule and operational needs.",
        bullets: [
          "Reception area & lobby cleaning", "Workstation & desk area cleaning", "Conference room & executive office cleaning",
          "Break room & kitchen cleaning", "Restroom cleaning and sanitization", "Trash removal and recycling",
          "Dusting and surface cleaning", "Floor cleaning and maintenance", "Interior glass cleaning",
          "High-touch surface cleaning", "Day porter services", "After-hours office cleaning",
        ],
      },
      {
        heading: "Corporate & Executive Office Cleaning",
        body: "Corporate offices require a professional appearance that reflects the quality of the organization. A professionally maintained office contributes to employee satisfaction and helps create a positive experience for visitors and clients.",
      },
      {
        heading: "Flexible Office Cleaning Schedules",
        body: "Every business operates on a different schedule. We offer flexible solutions including daily, weekly, evening, after-hours, and weekend cleaning — working around your operations to minimize disruptions while maintaining exceptional cleanliness.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
  {
    slug: "medical-office-cleaning",
    icon: "Biohazard",
    title: "Medical Office Cleaning",
    shortDesc: "Specialized sanitation protocols for waiting rooms, exam rooms, high-touch surfaces, and administrative offices.",
    image: "https://images.pexels.com/photos/7789603/pexels-photo-7789603.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/7789602/pexels-photo-7789602.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Medical Office Cleaning for Healthcare Facilities Throughout Northern New Jersey",
    intro: "Patients, staff, and visitors expect medical facilities to maintain the highest standards of cleanliness, organization, and professionalism. Our medical office cleaning services are designed specifically for healthcare providers, medical practices, clinics, specialty offices, urgent care centers, and outpatient facilities throughout Newark and Northern New Jersey.",
    sections: [
      {
        heading: "Specialized Medical Office Cleaning Services",
        body: "Medical facilities experience constant traffic from patients, healthcare professionals, vendors, and visitors. Every medical practice operates differently, which is why we customize our cleaning plans to meet your facility's specific requirements and schedule.",
        bullets: [
          "Waiting room & reception area cleaning", "Examination & treatment room cleaning", "Administrative office cleaning",
          "Break room cleaning", "Restroom sanitization", "Floor cleaning and maintenance",
          "Trash removal", "High-touch surface cleaning", "Common area cleaning", "Interior glass cleaning",
        ],
      },
      {
        heading: "Healthcare Facility Cleaning Programs",
        body: "We provide cleaning solutions for medical offices, physician practices, dental offices, orthopedic clinics, physical therapy centers, chiropractic offices, pediatric practices, dermatology offices, specialty medical clinics, outpatient facilities, and wellness centers.",
      },
      {
        heading: "Flexible Cleaning Schedules",
        body: "Healthcare facilities often operate beyond traditional business hours. We offer daily, weekly, evening, and after-hours cleaning to minimize disruptions to patient care and office operations.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
  {
    slug: "retail-store-cleaning",
    icon: "ShoppingBag",
    title: "Retail Store Cleaning",
    shortDesc: "Keep your storefront spotless and welcoming. We service retail floors, displays, fitting rooms, and customer-facing areas.",
    image: "https://images.pexels.com/photos/15491784/pexels-photo-15491784.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/5380918/pexels-photo-5380918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Retail Cleaning Services for Stores, Shopping Centers, and Commercial Retail Spaces",
    intro: "Customers often form opinions about a business within seconds of entering a store, and cleanliness plays a major role in how they perceive your brand. We provide professional retail store cleaning services designed to help retailers maintain clean, attractive, and customer-friendly environments throughout Northern New Jersey.",
    sections: [
      {
        heading: "Comprehensive Retail Store Cleaning Services",
        body: "Retail environments experience constant foot traffic, seasonal demand fluctuations, product deliveries, and daily customer activity. Every cleaning plan is customized to meet the specific needs of your business and operating schedule.",
        bullets: [
          "Retail sales floor cleaning", "Shopping center & showroom cleaning", "Floor cleaning and maintenance",
          "Restroom cleaning and sanitization", "Storefront & glass cleaning", "Entryway & lobby cleaning",
          "Cash register area cleaning", "Employee area cleaning", "Day porter services", "Overnight retail cleaning",
        ],
      },
      {
        heading: "Storefront & Glass Cleaning",
        body: "Clean windows and glass surfaces contribute significantly to a store's appearance, including interior glass, entry doors, display windows, partitions, and mirrors — helping maximize visibility and create a more professional appearance.",
      },
      {
        heading: "Shopping Center & Multi-Tenant Retail Cleaning",
        body: "We help property managers maintain professional retail environments that attract customers and support tenant satisfaction across common areas, hallways, entryways, and lobbies.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
  {
    slug: "restaurant-cleaning",
    icon: "UtensilsCrossed",
    title: "Restaurant Cleaning Services",
    shortDesc: "Dining rooms, restrooms, bar areas, and entryways — reliable cleaning solutions tailored to the food service industry.",
    image: "https://images.pexels.com/photos/8440058/pexels-photo-8440058.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/4254264/pexels-photo-4254264.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Restaurant Cleaning Services for Restaurants, Cafés, Bars, and Food Service Facilities",
    intro: "A restaurant's reputation depends on more than great food and excellent service. Cleanliness plays a critical role in customer satisfaction, employee morale, health inspections, and the overall dining experience. We deliver reliable cleaning solutions tailored to the unique demands of the food service industry throughout Northern New Jersey.",
    sections: [
      {
        heading: "Comprehensive Restaurant Cleaning Services",
        body: "Restaurants experience constant traffic, food preparation activity, spills, grease accumulation, and heavy use throughout the day. We develop customized cleaning plans based on your facility's layout, hours of operation, and cleaning requirements.",
        bullets: [
          "Dining room & seating area cleaning", "Floor cleaning and degreasing", "Restroom cleaning and sanitization",
          "Bar & lounge area cleaning", "Entryway & lobby cleaning", "Kitchen area cleaning support",
          "Trash removal", "Window and glass cleaning", "High-touch surface cleaning", "Restaurant deep cleaning",
        ],
      },
      {
        heading: "Restaurant Floor Cleaning",
        body: "Restaurant floors experience some of the heaviest foot traffic of any commercial environment. Food spills, grease, moisture, dirt, and daily wear can quickly impact appearance and safety — our degreasing and scrubbing services help improve appearance while supporting workplace safety.",
      },
      {
        heading: "Flexible Restaurant Cleaning Schedules",
        body: "Restaurants often operate outside traditional business hours. We offer daily, weekly, overnight, after-hours, and deep cleaning programs that work around your operating hours to minimize disruptions to staff and customers.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
  {
    slug: "supermarket-cleaning",
    icon: "ShoppingCart",
    title: "Supermarket Cleaning Services",
    shortDesc: "Grocery stores, food markets, and retail food facilities — clean floors, sanitized carts, and spotless checkout areas.",
    image: "https://images.pexels.com/photos/7451936/pexels-photo-7451936.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/7451917/pexels-photo-7451917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Supermarket Cleaning Services for Grocery Stores and Food Markets",
    intro: "A clean supermarket not only enhances the shopping experience but also helps protect your reputation and reinforces customer confidence. We provide professional supermarket cleaning services designed specifically for grocery stores, supermarkets, food markets, and specialty food retailers throughout Northern New Jersey.",
    sections: [
      {
        heading: "Comprehensive Supermarket Cleaning Services",
        body: "Supermarkets experience constant foot traffic, product deliveries, shopping cart movement, spills, and food debris. Every cleaning plan is customized based on store size, operating hours, customer traffic, and facility requirements.",
        bullets: [
          "Grocery store & food market floor cleaning", "Checkout lane cleaning", "Produce department cleaning",
          "Shopping cart & entryway cleaning", "Restroom cleaning and sanitization", "Employee break room cleaning",
          "Office cleaning", "Glass cleaning", "Overnight supermarket cleaning", "Day porter services",
        ],
      },
      {
        heading: "Checkout & Produce Department Cleaning",
        body: "Checkout lanes are among the busiest locations in any supermarket, and produce departments require additional attention due to moisture and food debris. Clean checkout and produce areas help create a positive final impression and reinforce customer confidence.",
      },
      {
        heading: "Overnight Supermarket Cleaning",
        body: "Many supermarkets operate long hours and benefit from cleaning performed after customer traffic decreases — your store opens each morning looking clean, organized, and ready for customers.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
  {
    slug: "government-building-cleaning",
    icon: "Landmark",
    title: "Government Building Cleaning",
    shortDesc: "Municipal offices, administrative buildings, and public service facilities — clean, safe, and welcoming environments.",
    image: "https://images.pexels.com/photos/17322148/pexels-photo-17322148.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/14382403/pexels-photo-14382403.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Government Facility Cleaning Services Throughout Northern New Jersey",
    intro: "Government buildings serve the public every day and require a high level of cleanliness, professionalism, and reliability. We provide professional government building cleaning services designed to help federal, state, county, and local government facilities maintain clean, safe, and welcoming environments throughout Northern New Jersey.",
    sections: [
      {
        heading: "Comprehensive Government Cleaning Services",
        body: "Government facilities often experience high daily occupancy and serve employees, residents, contractors, vendors, and visitors. Every cleaning plan is customized to meet the operational requirements of the facility.",
        bullets: [
          "Municipal & city hall cleaning", "Administrative office cleaning", "Public facility cleaning",
          "County office & state agency cleaning", "Floor cleaning and maintenance", "Restroom cleaning and sanitization",
          "Lobby and conference room cleaning", "Trash removal and recycling", "Day porter services", "Overnight cleaning services",
        ],
      },
      {
        heading: "Municipal Building Cleaning",
        body: "Municipal buildings are often the first point of contact between local government and the public. A clean municipal facility reflects professionalism and helps create a positive experience for residents and visitors.",
      },
      {
        heading: "Overnight Government Cleaning Services",
        body: "Many government facilities prefer cleaning services outside normal business hours — facilities are clean and ready for employees and visitors the next business day.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
  {
    slug: "floor-cleaning",
    icon: "Layers",
    title: "Floor Cleaning & Maintenance",
    shortDesc: "Carpet deep-cleaning, strip & wax, buffing, polishing — we restore and extend the life of all floor types.",
    image: "https://images.pexels.com/photos/6865180/pexels-photo-6865180.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/7513188/pexels-photo-7513188.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Floor Cleaning and Maintenance Services for Commercial Facilities",
    intro: "Floors are one of the first things customers, employees, tenants, and visitors notice when entering a building. Stein Facility Services provides professional floor cleaning services throughout Newark and Northern New Jersey, helping businesses maintain cleaner, safer, and more attractive environments through customized floor care programs.",
    sections: [
      {
        heading: "Comprehensive Commercial Floor Cleaning Services",
        body: "Commercial floors experience constant foot traffic, dirt accumulation, spills, moisture exposure, and daily wear. Our team develops customized floor care plans based on your property's flooring materials and needs.",
        bullets: [
          "Tile & grout cleaning", "Vinyl & luxury vinyl plank (LVP) cleaning", "Commercial carpet cleaning",
          "Concrete floor cleaning", "Floor scrubbing, polishing & buffing", "High-traffic area cleaning",
          "Entryway and common area floor care", "Post-construction floor cleaning", "Deep floor cleaning services",
        ],
      },
      {
        heading: "Tile, Grout & Vinyl Floor Maintenance",
        body: "Tile flooring is common in offices, medical facilities, schools, and retail stores — grout lines collect dirt and contaminants over time. Vinyl flooring (VCT, LVT, LVP) remains one of the most popular commercial materials, and our maintenance programs help keep it clean, attractive, and protected from premature wear.",
      },
      {
        heading: "Customized Floor Maintenance Programs",
        body: "Every facility has unique floor care requirements based on traffic volume, flooring material, operating hours, and industry demands — including daily cleaning, weekly maintenance, scheduled deep cleaning, and seasonal floor care.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
  {
    slug: "post-construction-cleaning",
    icon: "Wrench",
    title: "Post-Construction Cleanup",
    shortDesc: "Remove debris, dust, and construction residue to prepare your facility for occupancy after build-out or renovation.",
    image: "https://images.pexels.com/photos/5691510/pexels-photo-5691510.jpeg?auto=compress&cs=tinysrgb&w=1200",
    secondaryImage: "https://images.pexels.com/photos/3616746/pexels-photo-3616746.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroTagline: "Professional Post-Construction Cleaning for Commercial and Residential Projects",
    intro: "Construction and renovation projects often leave behind dust, debris, adhesive residue, drywall particles, and paint splatter. We provide professional post-construction cleaning services designed to transform newly built or renovated properties into clean, safe, move-in-ready environments throughout Northern New Jersey.",
    sections: [
      {
        heading: "Comprehensive Post-Construction Cleaning Services",
        body: "Construction dust has a way of reaching every corner of a property. A detailed cleaning process is necessary to remove fine dust, debris, and residue from surfaces throughout the building.",
        bullets: [
          "Construction dust & debris removal", "Detailed surface cleaning", "Floor cleaning and maintenance",
          "Window and glass cleaning", "Trim, baseboard, door & frame cleaning", "Cabinet, countertop & appliance cleaning",
          "Restroom cleaning and sanitization", "Paint splatter & adhesive residue removal", "Final touch-up & move-in ready cleaning",
        ],
      },
      {
        heading: "Commercial & Office Renovation Cleaning",
        body: "Commercial construction projects require detailed cleaning before employees, tenants, customers, or visitors can safely occupy the space — we work with general contractors, property managers, retail businesses, medical offices, and corporate offices.",
      },
      {
        heading: "Final Cleaning Before Occupancy",
        body: "The final cleaning phase is often the most important stage of a construction project — we help ensure your project is presented at its highest standard for client handover, occupancy, final inspections, and grand openings.",
      },
    ],
    serviceAreas: ["Newark", "Harrison", "Jersey City", "Hoboken", "Secaucus", "Lyndhurst", "North Arlington", "Belleville", "Nutley", "Rutherford", "Bergen County", "Hudson County", "Essex County"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
