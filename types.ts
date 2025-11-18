import React, { ReactNode } from 'react';
import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

export interface TestimonialItem {
  content: string;
  author: string;
  location: string;
}

export interface TechItem {
  name: string;
  icon?: ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}