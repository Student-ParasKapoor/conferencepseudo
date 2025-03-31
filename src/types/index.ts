import { LucideIcon } from 'lucide-react';

export interface Track {
  title: string;
  topics: string[];
}

export interface RegistrationFee {
  category: string;
  description: string;
  early: {
    indian: string;
    foreign: string;
  };
  late: {
    indian: string;
    foreign: string;
  };
}

export interface BankDetails {
  accountName: string;
  accountNo: string;
  bankName: string;
  branch: string;
  ifsc: string;
  swift: string;
  micr: string;
  bankCode: string;
  accountType: string;
}

export interface Document {
  category: string;
  items: {
    name: string;
    format: string;
    size: string;
  }[];
}

export interface Conference {
  year: number;
  url: string;
}

export interface Milestone {
  year: number;
  title: string;
  achievements: string[];
}

export interface Statistic {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface NavItem {
  name: string;
  path: string;
  subItems?: {
    name: string;
    path: string;
  }[];
} 