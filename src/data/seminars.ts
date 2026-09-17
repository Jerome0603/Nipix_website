export type SeminarType = 'upcoming' | 'past';

export interface SeminarData {
  id: number;
  slug: string;
  type: SeminarType;
  featured: boolean;

  title: string;
  subtitle: string;
  description: string;
  longDescription: string;

  date: string;
  time: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  location: string;
  image: string;

  speaker: string;
  participants: string;

  keyTakeaways: string[];

  speakers: {
    name: string;
    designation: string;
    organization: string;
    bio: string;
    image: string;
  }[];

  agenda: {
    time: string;
    title: string;
    description: string;
  }[];

  testimonials: {
    name: string;
    role: string;
    feedback: string;
    rating: number;
    image: string;
  }[];

  pastSeminars: {
    id: number;
    title: string;
    date: string;
    participants: string;
    image: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const seminars: SeminarData[] = [
  // =========================
  // 1. GENERATIVE AI SEMINAR
  // =========================
  {
    id: 1,
    slug: 'generative-ai',
    type: 'upcoming',
    featured: true,

    title: 'Generative AI',
    subtitle: 'AI that creates text, images & code',
    description: 'Explore ChatGPT, image generators and AI tools',
    longDescription:
      'This seminar provides a deep dive into Generative AI tools such as ChatGPT, Midjourney, and Copilot, focusing on real-world business and productivity use cases.',

    date: 'Feb 20, 2025',
    time: '11:00 AM - 1:00 PM',
    mode: 'Online',
    location: 'Zoom',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',

    speaker: 'Neha Sharma',
    participants: '250+',

    keyTakeaways: [
      'Prompt engineering fundamentals',
      'Popular AI tools overview',
      'Business & productivity use cases',
      'Ethical considerations of AI',
    ],

    speakers: [
      {
        name: 'Neha Sharma',
        designation: 'AI Consultant',
        organization: 'AI Labs',
        bio: 'Works on enterprise AI automation and GenAI systems.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      },
    ],

    agenda: [
      {
        time: '11:00 – 11:40',
        title: 'Introduction to Generative AI',
        description: 'Understanding how generative models work',
      },
      {
        time: '11:40 – 12:30',
        title: 'Live AI Tools Demo',
        description: 'Hands-on demo of ChatGPT and image generators',
      },
      {
        time: '12:30 – 1:00',
        title: 'Use Cases & Q&A',
        description: 'Industry applications and open discussion',
      },
    ],

    testimonials: [
      {
        name: 'Arjun Mehta',
        role: 'Startup Founder',
        feedback:
          'The seminar gave me practical clarity on how to use AI tools in my business.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
    ],

    pastSeminars: [
      {
        id: 101,
        title: 'AI for Business Leaders',
        date: 'Dec 2024',
        participants: '180+',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      },
    ],

    faqs: [
      {
        question: 'Is prior AI knowledge required?',
        answer: 'No, this seminar is beginner-friendly.',
      },
      {
        question: 'Will recordings be provided?',
        answer: 'Yes, recordings will be shared with registered participants.',
      },
    ],
  },

  // =========================
  // 2. WEB 3.0 SEMINAR
  // =========================
  {
    id: 2,
    slug: 'web-3',
    type: 'upcoming',
    featured: false,

    title: 'Web 3.0',
    subtitle: 'Decentralized internet & blockchain',
    description: 'Understand blockchain, crypto & decentralized apps',
    longDescription:
      'This seminar introduces Web 3.0 concepts including blockchain, smart contracts, NFTs, and decentralized applications (dApps).',

    date: 'Mar 5, 2025',
    time: '10:00 AM - 12:00 PM',
    mode: 'Offline',
    location: 'Nipix Campus, Bangalore',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',

    speaker: 'Rohit Verma',
    participants: '200+',

    keyTakeaways: [
      'Blockchain fundamentals',
      'Smart contracts overview',
      'Career opportunities in Web3',
    ],

    speakers: [
      {
        name: 'Rohit Verma',
        designation: 'Blockchain Engineer',
        organization: 'ChainTech',
        bio: 'Specialist in Ethereum and Web3 architectures.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },
    ],

    agenda: [
      {
        time: '10:00 – 10:40',
        title: 'Web 3.0 Basics',
        description: 'Evolution from Web 1 to Web 3',
      },
      {
        time: '10:40 – 11:30',
        title: 'Blockchain & Smart Contracts',
        description: 'How decentralized systems work',
      },
      {
        time: '11:30 – 12:00',
        title: 'Careers in Web3',
        description: 'Skills and roadmap discussion',
      },
    ],

    testimonials: [
      {
        name: 'Sanjay Kumar',
        role: 'Engineering Student',
        feedback:
          'Web3 finally made sense after attending this session.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
    ],

    pastSeminars: [
      {
        id: 102,
        title: 'Blockchain Fundamentals',
        date: 'Nov 2024',
        participants: '160+',
        image: 'https://images.unsplash.com/photo-1642790551116-18e4f8c97f05',
      },
    ],

    faqs: [
      {
        question: 'Do I need coding knowledge?',
        answer: 'Basic programming knowledge is helpful but not mandatory.',
      },
      {
        question: 'Is this seminar crypto-focused?',
        answer: 'No, it covers the broader Web3 ecosystem.',
      },
    ],
  },
  {
  id: 3,
  slug: 'blockchain-technology',
  type: 'upcoming',
  featured: false,

  title: 'Blockchain Technology',
  subtitle: 'Decentralized systems & real-world use cases',
  description: 'Understand blockchain beyond cryptocurrency',
  longDescription:
    'This seminar explains blockchain architecture, smart contracts, real-world enterprise use cases, and career opportunities.',

  date: 'Mar 15, 2025',
  time: '10:00 AM - 12:30 PM',
  mode: 'Hybrid',
  location: 'Nipix Campus + Zoom',
  image: 'https://images.unsplash.com/photo-1642790551116-18e4f8c97f05',

  speaker: 'Amit Kulkarni',
  participants: '180+',

  keyTakeaways: [
    'Blockchain fundamentals',
    'Smart contracts overview',
    'Enterprise blockchain use cases',
    'Career roadmap',
  ],

  speakers: [
    {
      name: 'Amit Kulkarni',
      designation: 'Blockchain Architect',
      organization: 'ChainWorks',
      bio: '10+ years in distributed systems and blockchain.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
  ],

  agenda: [
    {
      time: '10:00 – 11:00',
      title: 'Blockchain Basics',
      description: 'How blockchain works internally',
    },
    {
      time: '11:00 – 12:00',
      title: 'Smart Contracts & Use Cases',
      description: 'Ethereum, Hyperledger & enterprise adoption',
    },
    {
      time: '12:00 – 12:30',
      title: 'Q&A & Career Guidance',
      description: 'Career paths and learning roadmap',
    },
  ],

  testimonials: [
    {
      name: 'Rahul Jain',
      role: 'Software Engineer',
      feedback: 'Clear explanation of blockchain beyond crypto hype.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
  ],

  pastSeminars: [
    {
      id: 201,
      title: 'Blockchain for Developers',
      date: 'Dec 2024',
      participants: '150+',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',
    },
  ],

  faqs: [
    {
      question: 'Is coding required?',
      answer: 'No, coding is not mandatory for this seminar.',
    },
    {
      question: 'Is crypto trading covered?',
      answer: 'No, focus is on technology and applications.',
    },
  ],
},
{
  id: 4,
  slug: 'ethical-hacking',
  type: 'upcoming',
  featured: true,

  title: 'Ethical Hacking',
  subtitle: 'Cybersecurity & penetration testing basics',
  description: 'Learn how hackers think and how to defend systems',
  longDescription:
    'This seminar introduces ethical hacking, cybersecurity threats, penetration testing techniques, and career paths.',

  date: 'Mar 22, 2025',
  time: '11:00 AM - 2:00 PM',
  mode: 'Offline',
  location: 'Nipix Campus, Bangalore',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',

  speaker: 'Vikram Rao',
  participants: '220+',

  keyTakeaways: [
    'Cybersecurity fundamentals',
    'Penetration testing basics',
    'Common attack vectors',
    'Career opportunities',
  ],

  speakers: [
    {
      name: 'Vikram Rao',
      designation: 'Cyber Security Analyst',
      organization: 'SecureNet',
      bio: 'Expert in penetration testing and network security.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
  ],

  agenda: [
    {
      time: '11:00 – 12:00',
      title: 'Hacking Fundamentals',
      description: 'Understanding cyber attacks',
    },
    {
      time: '12:00 – 1:30',
      title: 'Live Demo',
      description: 'Basic penetration testing demo',
    },
    {
      time: '1:30 – 2:00',
      title: 'Careers & Q&A',
      description: 'Cybersecurity career guidance',
    },
  ],

  testimonials: [
    {
      name: 'Ananya Singh',
      role: 'IT Student',
      feedback: 'Live hacking demo was eye-opening.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  ],

  pastSeminars: [
    {
      id: 202,
      title: 'Cybersecurity Essentials',
      date: 'Jan 2025',
      participants: '200+',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    },
  ],

  faqs: [
    {
      question: 'Is this legal?',
      answer: 'Yes, ethical hacking focuses on defensive security.',
    },
    {
      question: 'Will tools be demonstrated?',
      answer: 'Yes, basic tools will be shown live.',
    },
  ],
},
{
  id: 5,
  slug: 'computer-vision',
  type: 'upcoming',
  featured: false,

  title: 'Computer Vision',
  subtitle: 'AI that sees and understands images',
  description: 'Learn how machines interpret images and videos',
  longDescription:
    'This seminar explains computer vision concepts, OpenCV, deep learning models, and real-world applications.',

  date: 'Apr 5, 2025',
  time: '10:00 AM - 12:00 PM',
  mode: 'Online',
  location: 'Zoom',
  image: 'https://images.unsplash.com/photo-1581091215367-59ab6c3d6c68',

  speaker: 'Dr. Kiran Patel',
  participants: '160+',

  keyTakeaways: [
    'Image processing basics',
    'Object detection',
    'Face recognition',
    'Industry applications',
  ],

  speakers: [
    {
      name: 'Dr. Kiran Patel',
      designation: 'AI Researcher',
      organization: 'VisionAI',
      bio: 'Researcher in computer vision and deep learning.',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    },
  ],

  agenda: [
    {
      time: '10:00 – 11:00',
      title: 'CV Fundamentals',
      description: 'How machines process images',
    },
    {
      time: '11:00 – 12:00',
      title: 'Real-world Applications',
      description: 'Healthcare, surveillance, automation',
    },
  ],

  testimonials: [
    {
      name: 'Suresh Kumar',
      role: 'Engineering Student',
      feedback: 'Great introduction to computer vision.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
  ],

  pastSeminars: [
    {
      id: 203,
      title: 'AI & Image Processing',
      date: 'Nov 2024',
      participants: '140+',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
  ],

  faqs: [
    {
      question: 'Is Python required?',
      answer: 'Basic Python knowledge is helpful.',
    },
    {
      question: 'Are demos included?',
      answer: 'Yes, practical demos are included.',
    },
  ],
},
{
  id: 6,
  slug: 'augmented-virtual-reality',
  type: 'upcoming',
  featured: false,

  title: 'Augmented Reality & Virtual Reality',
  subtitle: 'Immersive technologies shaping the future',
  description: 'Explore AR/VR concepts, tools, and industry applications',
  longDescription:
    'This seminar introduces AR and VR technologies, development platforms, hardware, and real-world applications in gaming, healthcare, education, and industry.',

  date: 'Apr 12, 2025',
  time: '11:00 AM - 1:30 PM',
  mode: 'Hybrid',
  location: 'Nipix Campus + Zoom',
  image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',

  speaker: 'Rohit Mehta',
  participants: '170+',

  keyTakeaways: [
    'AR vs VR fundamentals',
    'Tools like Unity & Unreal',
    'Use cases across industries',
    'Career roadmap',
  ],

  speakers: [
    {
      name: 'Rohit Mehta',
      designation: 'XR Developer',
      organization: 'MetaVerse Labs',
      bio: '8+ years experience building AR/VR solutions.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
  ],

  agenda: [
    {
      time: '11:00 – 12:00',
      title: 'AR/VR Fundamentals',
      description: 'Understanding immersive technologies',
    },
    {
      time: '12:00 – 1:00',
      title: 'Live Demos',
      description: 'AR/VR applications walkthrough',
    },
    {
      time: '1:00 – 1:30',
      title: 'Careers & Q&A',
      description: 'Opportunities in XR domain',
    },
  ],

  testimonials: [
    {
      name: 'Priya Nair',
      role: 'Design Student',
      feedback: 'Loved the AR demos and career insights.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  ],

  pastSeminars: [
    {
      id: 204,
      title: 'Introduction to AR',
      date: 'Oct 2024',
      participants: '140+',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
  ],

  faqs: [
    {
      question: 'Is coding mandatory?',
      answer: 'No, this is a conceptual + demo-based seminar.',
    },
    {
      question: 'Is Unity covered?',
      answer: 'Yes, Unity basics are discussed.',
    },
  ],
},
{
  id: 7,
  slug: 'quantum-computing',
  type: 'upcoming',
  featured: false,

  title: 'Quantum Computing',
  subtitle: 'Computing beyond classical limits',
  description: 'Understand quantum concepts and future impact',
  longDescription:
    'This seminar introduces quantum computing concepts like qubits, superposition, quantum algorithms, and real-world impact.',

  date: 'Apr 19, 2025',
  time: '10:30 AM - 12:30 PM',
  mode: 'Online',
  location: 'Zoom',
  image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',

  speaker: 'Dr. Anil Verma',
  participants: '130+',

  keyTakeaways: [
    'Quantum basics',
    'Difference from classical computing',
    'Industry use cases',
    'Future career scope',
  ],

  speakers: [
    {
      name: 'Dr. Anil Verma',
      designation: 'Quantum Research Scientist',
      organization: 'Qubit Research Labs',
      bio: 'Researcher in quantum algorithms and simulations.',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    },
  ],

  agenda: [
    {
      time: '10:30 – 11:30',
      title: 'Quantum Fundamentals',
      description: 'Qubits, gates, and entanglement',
    },
    {
      time: '11:30 – 12:30',
      title: 'Applications & Future',
      description: 'Healthcare, cryptography, finance',
    },
  ],

  testimonials: [
    {
      name: 'Karthik R',
      role: 'Physics Student',
      feedback: 'Complex concepts explained very clearly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
  ],

  pastSeminars: [
    {
      id: 205,
      title: 'Quantum Basics',
      date: 'Sep 2024',
      participants: '110+',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
  ],

  faqs: [
    {
      question: 'Is math-heavy?',
      answer: 'No, this is an introductory seminar.',
    },
    {
      question: 'Is coding included?',
      answer: 'No coding required.',
    },
  ],
},
{
  id: 8,
  slug: 'digital-transformation',
  type: 'upcoming',
  featured: true,

  title: 'Digital Transformation',
  subtitle: 'How technology is reshaping businesses',
  description: 'Learn how companies adopt digital technologies',
  longDescription:
    'This seminar covers cloud, AI, automation, and strategies enterprises use to digitally transform.',

  date: 'Apr 26, 2025',
  time: '11:00 AM - 1:00 PM',
  mode: 'Offline',
  location: 'Nipix Campus',
  image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',

  speaker: 'Sanjay Malhotra',
  participants: '200+',

  keyTakeaways: [
    'Digital business models',
    'Cloud & AI adoption',
    'Industry case studies',
    'Leadership strategies',
  ],

  speakers: [
    {
      name: 'Sanjay Malhotra',
      designation: 'Digital Strategy Consultant',
      organization: 'TechConsult',
      bio: 'Helps enterprises adopt digital transformation.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
  ],

  agenda: [
    {
      time: '11:00 – 12:00',
      title: 'Digital Transformation Overview',
      description: 'Why businesses must transform',
    },
    {
      time: '12:00 – 1:00',
      title: 'Case Studies',
      description: 'Successful transformation stories',
    },
  ],

  testimonials: [
    {
      name: 'Ramesh Iyer',
      role: 'MBA Student',
      feedback: 'Very insightful business-focused seminar.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
  ],

  pastSeminars: [
    {
      id: 206,
      title: 'Enterprise Digital Strategy',
      date: 'Dec 2024',
      participants: '180+',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    },
  ],

  faqs: [
    {
      question: 'Is this technical?',
      answer: 'It is more strategy-focused.',
    },
    {
      question: 'Who should attend?',
      answer: 'Students, professionals, managers.',
    },
  ],
},
{
  id: 9,
  slug: 'big-data',
  type: 'upcoming',
  featured: false,

  title: 'Big Data',
  subtitle: 'Handling massive data efficiently',
  description: 'Understand big data tools and analytics',
  longDescription:
    'This seminar introduces big data concepts, Hadoop ecosystem, analytics, and real-world use cases.',

  date: 'May 3, 2025',
  time: '10:00 AM - 12:00 PM',
  mode: 'Online',
  location: 'Zoom',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',

  speaker: 'Manoj Kumar',
  participants: '160+',

  keyTakeaways: [
    'Big data fundamentals',
    'Hadoop & Spark',
    'Analytics pipelines',
    'Industry use cases',
  ],

  speakers: [
    {
      name: 'Manoj Kumar',
      designation: 'Data Engineer',
      organization: 'DataWorks',
      bio: 'Specialist in big data systems.',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    },
  ],

  agenda: [
    {
      time: '10:00 – 11:00',
      title: 'Big Data Basics',
      description: 'Data volume, velocity, variety',
    },
    {
      time: '11:00 – 12:00',
      title: 'Tools & Use Cases',
      description: 'Hadoop, Spark, analytics',
    },
  ],

  testimonials: [
    {
      name: 'Sneha Joshi',
      role: 'Data Analyst',
      feedback: 'Great overview of big data tools.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  ],

  pastSeminars: [
    {
      id: 207,
      title: 'Data Analytics Basics',
      date: 'Nov 2024',
      participants: '150+',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },
  ],

  faqs: [
    {
      question: 'Is coding required?',
      answer: 'Not required for this seminar.',
    },
    {
      question: 'Are tools demonstrated?',
      answer: 'Yes, tool overview is provided.',
    },
  ],
},
{
  id: 10,
  slug: 'ai-tools',
  type: 'upcoming',
  featured: true,

  title: 'AI Tools',
  subtitle: 'Boost productivity with modern AI',
  description: 'Explore practical AI tools for work, study, and business',
  longDescription:
    'This seminar introduces popular AI tools such as ChatGPT, Copilot, Midjourney, Notion AI, and automation platforms, focusing on real-world productivity use cases.',

  date: 'May 10, 2025',
  time: '11:00 AM - 1:00 PM',
  mode: 'Hybrid',
  location: 'Nipix Campus + Zoom',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',

  speaker: 'Ananya Gupta',
  participants: '300+',

  keyTakeaways: [
    'Top AI tools overview',
    'AI for students & professionals',
    'Automation workflows',
    'Ethical AI usage',
  ],

  speakers: [
    {
      name: 'Ananya Gupta',
      designation: 'AI Productivity Coach',
      organization: 'FutureWork AI',
      bio: 'Helps teams and individuals leverage AI tools effectively.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  ],

  agenda: [
    {
      time: '11:00 – 12:00',
      title: 'Popular AI Tools',
      description: 'ChatGPT, Copilot, Midjourney, Notion AI',
    },
    {
      time: '12:00 – 12:40',
      title: 'Live Tool Demos',
      description: 'Real productivity workflows',
    },
    {
      time: '12:40 – 1:00',
      title: 'Ethics & Q&A',
      description: 'Responsible AI usage',
    },
  ],

  testimonials: [
    {
      name: 'Akash Verma',
      role: 'Marketing Executive',
      feedback: 'AI tools demo was extremely practical and useful.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
  ],

  pastSeminars: [
    {
      id: 208,
      title: 'AI for Productivity',
      date: 'Jan 2025',
      participants: '260+',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    },
  ],

  faqs: [
    {
      question: 'Are these tools free?',
      answer: 'Most tools have free and paid versions.',
    },
    {
      question: 'Is this technical?',
      answer: 'No coding knowledge required.',
    },
  ],
},
{
  id: 11,
  slug: 'idea-to-entrepreneur',
  type: 'upcoming',
  featured: true,

  title: 'Idea to Entrepreneur',
  subtitle: 'Turn ideas into successful startups',
  description: 'Learn how to validate, build, and scale your startup idea',
  longDescription:
    'This seminar guides aspiring entrepreneurs through idea validation, business models, funding, branding, and startup growth strategies.',

  date: 'May 17, 2025',
  time: '10:30 AM - 1:30 PM',
  mode: 'Offline',
  location: 'Nipix Innovation Hub',
  image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',

  speaker: 'Vikram Rao',
  participants: '220+',

  keyTakeaways: [
    'Idea validation techniques',
    'Business model canvas',
    'Startup funding basics',
    'Founder mindset',
  ],

  speakers: [
    {
      name: 'Vikram Rao',
      designation: 'Startup Mentor',
      organization: 'Founders Hub',
      bio: 'Mentored 50+ startups from idea to market.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
  ],

  agenda: [
    {
      time: '10:30 – 11:30',
      title: 'From Idea to Problem-Solution Fit',
      description: 'Validating startup ideas',
    },
    {
      time: '11:30 – 12:30',
      title: 'Building & Funding Startups',
      description: 'Business models and funding',
    },
    {
      time: '12:30 – 1:30',
      title: 'Founder Stories & Q&A',
      description: 'Real startup journeys',
    },
  ],

  testimonials: [
    {
      name: 'Meghana S',
      role: 'Student Founder',
      feedback: 'Inspired me to finally start my own venture.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  ],

  pastSeminars: [
    {
      id: 209,
      title: 'Startup Bootcamp',
      date: 'Dec 2024',
      participants: '200+',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
    },
  ],

  faqs: [
    {
      question: 'Do I need a business idea already?',
      answer: 'No, you can develop ideas during the seminar.',
    },
    {
      question: 'Is funding discussed?',
      answer: 'Yes, basics of startup funding are covered.',
    },
  ],
}

];
