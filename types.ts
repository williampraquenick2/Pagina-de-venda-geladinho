
import React from 'react';

export interface Recipe {
  name: string;
  ingredients: string[];
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  // Fix: React namespace is now available via import
  icon: React.ReactNode;
}

export interface Bonus {
  title: string;
  originalValue: number;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
