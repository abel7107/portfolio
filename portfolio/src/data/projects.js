export const featuredProject = {
  name: "LostLink",
  tagline: "Full-Stack Lost & Found Platform",
  description:
    "LostLink is a full-stack lost-and-found platform designed to help people report, discover, and recover lost items while allowing users to communicate securely about reported items.",
  tech: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL / SQLite",
    "JWT",
    "bcrypt",
  ],
  features: [
    "User registration and login",
    "Authentication and authorization",
    "Report lost items",
    "Report found items",
    "Image uploads",
    "Search and filtering",
    "Item details",
    "User profiles",
    "Messaging between users",
    "Protected routes",
    "REST API",
    "Database relationships",
    "Error handling",
  ],
  contribution:
    "I designed and developed the application architecture, frontend interfaces, backend APIs, authentication flow, database integration, and core user functionality.",
  // TODO: replace with real links when available
  demoUrl: "",
  githubUrl: "https://github.com/abel7107/myrealworldproject",
};

export const projects = [
  {
    name: "Hospital Management System",
    description:
      "A system for managing patients, doctors, appointments, medical records, and billing.",
    tech: ["JavaScript", "HTML", "CSS"],
    features: [
      "Patient and doctor records",
      "Appointment scheduling",
      "Medical records management",
      "Billing support",
    ],
    githubUrl: "https://github.com/abel7107/hosipital",
    demoUrl: "", // TODO: add live demo URL if available
  },
  {
    name: "Coffee Shop",
    description:
      "A full-stack coffee shop ordering and management system for tracking orders, inventory, and customer preferences.",
    tech: ["HTML", "CSS", "javascript"],
    features: [
      "Menu management",
      "Order placement and tracking",
      "Inventory tracking",
      "Customer accounts",
      "Payment integration",
    ],
    githubUrl: "https://github.com/abel7107/coffee-shop.git",
    demoUrl: "", // TODO: add live demo URL if available
  },
  {
    name: "E-Commerce Application",
    description:
      "A web application featuring products, collections, checkout, and order-related functionality.",
    tech: ["PHP", "CSS", "JavaScript"],
    features: [
      "Product listing and collections",
      "Product details",
      "Checkout flow",
      "Order management",
    ],
    githubUrl: "https://github.com/Algo-chan/mini-eccomerce-system-",
    demoUrl: "", // TODO
  },
  {
    name: "Local Service / Mobile Application",
    description:
      "A service-discovery concept focused on connecting users with local service providers.",
    tech: ["Flutter", "Dart", "C++", "javascript","HTML","CSS","CMake"],
    features: [
      "Service listing",
      "Provider profiles",
      "Search by category",
      "Contact flow concept",
    ],
    githubUrl: "https://github.com/Algo-chan/Local-service-connector",
    demoUrl: "", // TODO
  },
];

export const caseStudy = {
  problem:
    "People often struggle to recover lost belongings because there is no centralized platform for reporting and discovering lost items.",
  solution:
    "LostLink provides a centralized platform where users can report lost or found items, search listings, view item details, and communicate with other users.",
  approach: [
    { label: "Frontend", value: "React + Tailwind CSS" },
    { label: "Backend", value: "Node.js + Express.js" },
    { label: "Database", value: "Prisma + PostgreSQL / SQLite" },
    { label: "Authentication", value: "JWT + bcrypt" },
    { label: "API", value: "REST API" },
  ],
  challenges: [
    "Authentication and session handling",
    "Designing database relationships",
    "Handling image uploads",
    "Protected routes on client and server",
    "Frontend/backend communication",
    "Building a messaging flow between users",
    "Consistent error handling",
  ],
  learned: [
    "Full-stack architecture",
    "API development",
    "Database design",
    "Authentication",
    "State management",
    "Debugging",
    "Git workflows",
    "Real-world application development",
  ],
};
