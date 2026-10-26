export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string; // category slug
  description: string;
  image: string;
  specs: ProductSpec[];
  featured: boolean;
}

export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  icon: string; // lucide icon identifier
  productCount: number;
}

export interface Department {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  relatedCategories: string[];
}

export interface Brand {
  name: string;
  logo: string;
  verified: boolean;
}

export interface Institution {
  name: string;
  city: string;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BusinessAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  formatted?: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface BusinessStatistics {
  yearsInBusiness: number;
  productCategories: number;
  citiesCovered: number;
  distributors: number;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: BusinessAddress;
  businessHours: BusinessHours[];
  statistics: BusinessStatistics;
  whatsappNumber: string;
  whatsappMessage: string;
  whatsappConfigured: boolean;
}
