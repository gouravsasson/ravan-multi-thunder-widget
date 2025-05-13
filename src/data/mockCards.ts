import { CardInterface } from "../types";
import { Book, Sun, Heart, Home, Gamepad } from "lucide-react";

export const mockCards: CardInterface[] = [
  {
    id: 1,
    title: "Real Estate",
    description: "Residential Listings & Seller Leads",
    imageUrl: "#FF5722", // Primary Orange
    icon: Book,
    tags: ["Education", "Training"],
    agent_code: "4a35b22f-67fc-44aa-b416-ccd647cc8500",
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Product Recommendations & Sales Conversion",
    imageUrl: "#FF7043", // Light Orange
    icon: Sun,
    tags: ["Hotels", "Service"],
    agent_code: "7ac6c9b-b5d9-4eb9-9950-9154fb32b163",
  },
  {
    id: 3,
    title: "Financial Services",
    description: "Mortgage Lenders & Loan Officers",
    imageUrl: "#FF3D00", // Deep Orange
    icon: Heart,
    tags: ["Medical", "Health"],
    agent_code: "cd1e4e78-224c-41b6-ba5d-86f9d4037786",
  },
  {
    id: 4,
    title: "Tourism",
    description: "Vacation Packages & Travel Agencies",
    imageUrl: "#FF6E40", // Bright Orange
    icon: Home,
    tags: ["Property", "Management"],
    agent_code: "d137d402-8837-49f2-a79b-4362aee2efff",
  },
  {
    id: 5,
    title: "IT Solutions",
    description: "Software, Hardware, & IT Support",
    imageUrl: "#FF8A65", // Soft Orange
    icon: Gamepad,
    tags: ["Entertainment", "Games"],
    agent_code: "42dca13d-820d-49c4-adc0-06f462ddcc29",
  },
  {
    id: 6,
    title: "Health & Wellness",
    description: "Complete hospitality management solutions",
    imageUrl: "#FF8A65", // Soft Orange
    icon: Gamepad,
    tags: ["Entertainment", "Games"],
    agent_code: "21fb4b4d-5bfe-4438-8ed7-b2c84ebc165a",
  },
  {
    id: 7,
    title: "Home Improvement",
    description: "Remodeling, HVAC, Landscaping",
    imageUrl: "#FF8A65", // Soft Orange
    icon: Gamepad,
    tags: ["Entertainment", "Games"],
    agent_code: "a6cd1b37-8a2c-49e7-b7f8-329178ef8dbe",
  },
  {
    id: 8,
    title: "Event Planning",
    description: "Weddings & Corporate Events",
    imageUrl: "#FF8A65", // Soft Orange
    icon: Gamepad,
    tags: ["Entertainment", "Games"],
    agent_code: "f3bc4453-46f1-4b34-bb3a-f54b7071db39",
  },
  {
    id: 9,
    title: "Retail",
    description: "Gaming and entertainment platforms",
    imageUrl: "#FF8A65", // Soft Orange
    icon: Gamepad,
    tags: ["Entertainment", "Games"],
    agent_code: "1234567890",
  },
  {
    id: 10,
    title: "Hospitality",
    description: "Gaming and entertainment platforms",
    imageUrl: "#FF8A65", // Soft Orange
    icon: Gamepad,
    tags: ["Entertainment", "Games"],
    agent_code: "1234567890",
  },
  {
    id: 11,
    title: "Recruitment",
    description: "Gaming and entertainment platforms",
    imageUrl: "#FF8A65", // Soft Orange
    icon: Gamepad,
    tags: ["Entertainment", "Games"],
    agent_code: "1234567890",
  },
];
