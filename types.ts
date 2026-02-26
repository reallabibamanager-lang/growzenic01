import React from 'react';
import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}