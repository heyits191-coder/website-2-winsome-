
import React from 'react';
import { 
  Architecture, 
  Home, 
  Building2, 
  Key, 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Menu,
  X,
  Search,
  PenTool,
  Clock,
  Layers
} from 'lucide-react';

export const COLORS = {
  primary: '#0F172A', // Slate 900
  secondary: '#EC4899', // Pink 500
  light: '#F8FAFC', // Slate 50
  text: '#1E293B' // Slate 800
};

export const SERVICES = [
  {
    id: 'arch',
    title: 'Architecture Design',
    description: 'Innovative, purposeful architectural solutions balancing functionality, efficiency and visual appeal.',
    image: 'https://picsum.photos/id/122/800/600',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Captivating interior spaces that blend creativity and commerce to elevate everyday experiences.',
    image: 'https://picsum.photos/id/164/800/600',
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 'govt',
    title: 'Government Projects',
    description: 'Functional, durable environments for institutional and public sector spaces meeting strict standards.',
    image: 'https://picsum.photos/id/192/800/600',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 'turnkey',
    title: 'Turnkey Solution',
    description: 'End-to-end execution ensuring seamless delivery while you focus on core priorities.',
    image: 'https://picsum.photos/id/201/800/600',
    icon: <Key className="w-6 h-6" />
  }
];

export const HOW_IT_WORKS = [
  {
    number: '01.',
    title: 'Consultation & Planning',
    description: 'We start by understanding your goals, needs, and vision through a detailed consultation.',
    icon: <MessageCircle className="w-10 h-10 text-white" />
  },
  {
    number: '02.',
    title: 'Design & Development',
    description: 'Our team creates customized design concepts that reflect your style while maximizing functionality.',
    icon: <PenTool className="w-10 h-10 text-white" />
  },
  {
    number: '03.',
    title: 'Implementation & Execution',
    description: 'With precision and care, we bring your design to life, managing every detail of the installation.',
    icon: <Clock className="w-10 h-10 text-white" />
  },
  {
    number: '04.',
    title: 'Final Review',
    description: 'After completing the project, we conduct a thorough walkthrough with you to finalize the space.',
    icon: <Layers className="w-10 h-10 text-white" />
  }
];

export const PROJECTS = [
  { title: 'Mrs Gunjan', category: 'Toilet', image: 'https://picsum.photos/id/101/400/300' },
  { title: 'Mr Fahad', category: 'Toilet', image: 'https://picsum.photos/id/102/400/300' },
  { title: 'Fortune Investment', category: 'Toilet', image: 'https://picsum.photos/id/103/400/300' },
  { title: 'Ms Tripti Agarwal', category: 'Study Room', image: 'https://picsum.photos/id/104/400/300' },
  { title: 'Lobby Design', category: 'Office', image: 'https://picsum.photos/id/106/400/300' },
  { title: 'Prayer Room', category: 'Temple', image: 'https://picsum.photos/id/107/400/300' },
];
