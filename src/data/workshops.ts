export type WorkshopType = 'upcoming' | 'past';

/* ================= TYPES ================= */

export interface Trainer {
  name: string;
  designation: string;
  organization: string;
  bio: string;
  image: string;
}

export interface AgendaSession {
  time: string;
  topic: string;
  description: string;
}

export interface AgendaDay {
  day: string;
  time: string;
  title: string;
  sessions: AgendaSession[];
}

export interface PastWorkshop {
  id: number;
  title: string;
  date: string;
  participants: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  feedback: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface WorkshopData {
  id: number;
  type: WorkshopType;
  featured: boolean;

  title: string;
  subtitle: string;
  description: string;
  date: string;
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  location: string;
  image: string;
  trainer: string;
  participants: string;

  learningOutcomes: string[];
  trainers: Trainer[];

  agenda: AgendaDay[];
  pastWorkshops: PastWorkshop[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}

/* ================= COMMON DATA ================= */

const commonPastWorkshops: PastWorkshop[] = [
  {
    id: 101,
    title: 'Tech Skills Bootcamp',
    date: 'Jan 2025',
    participants: '120+',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    id: 102,
    title: 'Future Tech Workshop',
    date: 'Dec 2024',
    participants: '90+',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
];

const commonTestimonials: Testimonial[] = [
  {
    name: 'Arjun Malhotra',
    role: 'Engineering Student',
    rating: 5,
    feedback: 'Very practical, hands-on and well explained. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Divya Krishnan',
    role: 'Software Trainee',
    rating: 5,
    feedback: 'Amazing workshop with real projects and expert mentors.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
];

const commonFaqs: FAQ[] = [
  {
    question: 'Who can attend this workshop?',
    answer: 'Students, beginners, and professionals interested in this domain.',
  },
  {
    question: 'Is prior experience required?',
    answer: 'No prior experience is required. Basics will be covered.',
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes, all participants will receive a certificate of participation.',
  },
];

/* ================= WORKSHOPS ================= */

export const workshops: WorkshopData[] = [
  /* ========= ROBOTICS ========= */
  {
  id: 1,
  type: 'upcoming',
  featured: true,

  title: 'Robotics Workshop',
  subtitle: 'Design, build and control robots',
  description: 'Hands-on robotics workshop covering sensors, motors, and automation.',
  date: 'March 15, 2025',
  duration: '1 Day (10 AM – 4 PM)',
  mode: 'Offline',
  location: 'Bangalore',
  image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
  trainer: 'Arjun Rao',
  participants: '60+',

  learningOutcomes: [
    'Robotics fundamentals',
    'Sensors and actuators',
    'Motor control',
    'Basic automation logic',
  ],

  trainers: [
    {
      name: 'Arjun Rao',
      designation: 'Robotics Engineer',
      organization: 'RoboTech Labs',
      bio: '8+ years of experience in robotics and automation systems.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
  ],

  agenda: [
    {
      day: 'Day 1',
      time: '10:00 AM – 4:00 PM',
      title: 'Robotics Basics & Build',
      sessions: [
        { time: '10:00 – 11:30', topic: 'Introduction to Robotics', description: 'Core components and working' },
        { time: '11:45 – 1:00', topic: 'Sensors & Motors', description: 'Hands-on wiring and control' },
        { time: '2:00 – 4:00', topic: 'Robot Build', description: 'Assemble and test a robot' },
      ],
    },
  ],

  pastWorkshops: [
    {
      id: 101,
      title: 'Beginner Robotics Bootcamp',
      date: 'Jan 2025',
      participants: '80+',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    },
  ],

  testimonials: [
    {
      name: 'Rahul K',
      role: 'Engineering Student',
      rating: 5,
      feedback: 'Very practical and exciting workshop!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
  ],

  faqs: [
    { question: 'Do I need prior knowledge?', answer: 'No, basics will be covered.' },
    { question: 'Will hardware be provided?', answer: 'Yes, all kits will be provided.' },
  ],
},
{
  id: 2,
  type: 'upcoming',
  featured: false,

  title: 'Arduino Workshop',
  subtitle: 'Hands-on embedded systems and microcontroller programming',

  date: 'March 5–6, 2025',
  duration: '2 Days (9 AM – 4 PM)',
  mode: 'Offline',
  location: 'Nipix Lab, Bangalore',

  image: 'https://images.unsplash.com/photo-1581092334494-1f7a8c4e2f9a',
  trainer: 'Karthik R',
  participants: '40',

  description:
    'Learn Arduino from scratch with real hardware projects like sensors, motors, and automation systems.',

  learningOutcomes: [
    'Understand Arduino architecture',
    'Program Arduino using C/C++',
    'Interface sensors and actuators',
    'Build real-world mini projects',
  ],

  trainers: [
    {
      name: 'Karthik R',
      designation: 'Embedded Systems Engineer',
      organization: 'Nipix Technology',
      bio: '7+ years of experience in embedded systems and IoT devices.',
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
    },
  ],

  agenda: [
    {
      day: 'Day 1',
      time: '9:00 AM – 4:00 PM',
      title: 'Arduino Basics',
      sessions: [
        {
          time: '9:00 – 11:00',
          topic: 'Arduino Introduction',
          description: 'Board types, IDE setup, and basics',
        },
        {
          time: '11:30 – 1:00',
          topic: 'Digital & Analog I/O',
          description: 'LEDs, switches, potentiometers',
        },
      ],
    },
  ],

  pastWorkshops: [
    {
      id: 201,
      title: 'Arduino Essentials',
      date: 'Dec 2024',
      participants: '60+',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
  ],

  testimonials: [
    {
      name: 'Suresh Kumar',
      role: 'ECE Student',
      rating: 5,
      feedback: 'Very practical workshop with real hardware experience.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
  ],

  faqs: [
    {
      question: 'Do I need prior electronics knowledge?',
      answer: 'No, basics will be taught from scratch.',
    },
    {
      question: 'Will hardware be provided?',
      answer: 'Yes, Arduino kits will be provided during the workshop.',
    },
  ],
},
{
  id: 3,
  type: 'upcoming',
  featured: true,

  title: 'IoT Workshop',
  subtitle: 'Build smart connected devices using IoT technologies',

  date: 'March 15–16, 2025',
  duration: '2 Days',
  mode: 'Hybrid',
  location: 'Bangalore + Online',

  image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
  trainer: 'Anitha S',
  participants: '50',

  description:
    'Learn how to build IoT systems using sensors, cloud platforms, and real-time dashboards.',

  learningOutcomes: [
    'Understand IoT architecture',
    'Work with sensors and ESP modules',
    'Send data to cloud platforms',
    'Build live IoT dashboards',
  ],

  trainers: [
    {
      name: 'Anitha S',
      designation: 'IoT Architect',
      organization: 'SmartTech Labs',
      bio: 'IoT specialist with smart city project experience.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  ],

  agenda: [
    {
      day: 'Day 1',
      time: '9:30 AM – 4:30 PM',
      title: 'IoT Foundations',
      sessions: [
        {
          time: '9:30 – 11:30',
          topic: 'IoT Basics',
          description: 'Devices, protocols, and use cases',
        },
        {
          time: '12:00 – 2:00',
          topic: 'ESP & Sensors',
          description: 'Hands-on with ESP8266',
        },
      ],
    },
  ],

  pastWorkshops: [
    {
      id: 301,
      title: 'Smart Home IoT',
      date: 'Nov 2024',
      participants: '70+',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f',
    },
  ],

  testimonials: [
    {
      name: 'Priya N',
      role: 'IT Student',
      rating: 5,
      feedback: 'Amazing workshop with real-time IoT projects.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9',
    },
  ],

  faqs: [
    {
      question: 'Is coding required?',
      answer: 'Basic programming knowledge is helpful but not mandatory.',
    },
    {
      question: 'Will cloud platforms be taught?',
      answer: 'Yes, we use Firebase and ThingSpeak.',
    },
  ],
},
{
  id: 4,
  type: 'upcoming',
  featured: false,

  title: 'App Development Workshop',
  subtitle: 'Build real mobile apps using Flutter',

  date: 'April 5–6, 2025',
  duration: '2 Days',
  mode: 'Online',
  location: 'Live via Zoom',

  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
  trainer: 'Vignesh P',
  participants: '100',

  description:
    'Design and develop cross-platform mobile applications using Flutter and Firebase.',

  learningOutcomes: [
    'Flutter UI design',
    'State management',
    'Firebase integration',
    'App deployment basics',
  ],

  trainers: [
    {
      name: 'Vignesh P',
      designation: 'Mobile App Developer',
      organization: 'AppWorks',
      bio: 'Built 20+ production mobile apps.',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    },
  ],

  agenda: [
    {
      day: 'Day 1',
      time: '10:00 AM – 4:00 PM',
      title: 'Flutter Basics',
      sessions: [
        {
          time: '10:00 – 12:00',
          topic: 'Flutter Setup',
          description: 'Widgets and layouts',
        },
      ],
    },
  ],

  pastWorkshops: [
    {
      id: 401,
      title: 'Flutter Bootcamp',
      date: 'Oct 2024',
      participants: '120+',
      image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
    },
  ],

  testimonials: [
    {
      name: 'Rahul Mehta',
      role: 'Startup Founder',
      rating: 5,
      feedback: 'Helped me build my first app MVP.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
  ],

  faqs: [
    {
      question: 'Android or iOS?',
      answer: 'Both – Flutter supports cross-platform.',
    },
    {
      question: 'Is laptop required?',
      answer: 'Yes, laptop is mandatory.',
    },
  ],
},
{
  id: 5,
  type: 'upcoming',
  featured: true,

  title: 'AI Workshop',
  subtitle: 'Artificial Intelligence concepts with real-world demos',

  date: 'April 20, 2025',
  duration: '1 Day',
  mode: 'Online',
  location: 'Zoom',

  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  trainer: 'Dr. Manoj Iyer',
  participants: '150',

  description:
    'Understand AI fundamentals, use cases, and AI-powered tools.',

  learningOutcomes: [
    'AI fundamentals',
    'AI tools usage',
    'Prompt engineering',
    'Real-world AI applications',
  ],

  trainers: [
    {
      name: 'Dr. Manoj Iyer',
      designation: 'AI Researcher',
      organization: 'AI Labs',
      bio: 'AI consultant and researcher.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
  ],

  agenda: [
    {
      day: 'Day 1',
      time: '10:00 AM – 4:00 PM',
      title: 'AI Essentials',
      sessions: [
        {
          time: '10:00 – 12:00',
          topic: 'AI Basics',
          description: 'AI vs ML vs DL',
        },
      ],
    },
  ],

  pastWorkshops: [
    {
      id: 501,
      title: 'AI Tools Masterclass',
      date: 'Sep 2024',
      participants: '200+',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    },
  ],

  testimonials: [
    {
      name: 'Neha Jain',
      role: 'MBA Student',
      rating: 5,
      feedback: 'AI concepts explained very clearly.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
  ],

  faqs: [
    {
      question: 'Is coding required?',
      answer: 'No, this is concept and tool-focused.',
    },
    {
      question: 'Will recordings be provided?',
      answer: 'Yes.',
    },
  ],
},
{
  id: 6,
  type: 'upcoming',
  featured: false,

  title: 'Machine Learning Workshop',
  subtitle: 'Hands-on ML models with Python',

  date: 'May 10–11, 2025',
  duration: '2 Days',
  mode: 'Hybrid',
  location: 'Bangalore + Online',

  image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a0b',
  trainer: 'Aakash Verma',
  participants: '80',

  description:
    'Build machine learning models using Python and real datasets.',

  learningOutcomes: [
    'Supervised & unsupervised learning',
    'Model training',
    'Evaluation techniques',
    'Mini ML project',
  ],

  trainers: [
    {
      name: 'Aakash Verma',
      designation: 'ML Engineer',
      organization: 'DataTech',
      bio: 'ML engineer with industry projects.',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    },
  ],

  agenda: [
    {
      day: 'Day 1',
      time: '9:30 AM – 4:30 PM',
      title: 'ML Fundamentals',
      sessions: [
        {
          time: '9:30 – 12:00',
          topic: 'ML Basics',
          description: 'Algorithms and datasets',
        },
      ],
    },
  ],

  pastWorkshops: [
    {
      id: 601,
      title: 'ML with Python',
      date: 'Aug 2024',
      participants: '90+',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    },
  ],

  testimonials: [
    {
      name: 'Kiran Rao',
      role: 'Data Analyst',
      rating: 5,
      feedback: 'Great hands-on ML experience.',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    },
  ],

  faqs: [
    {
      question: 'Is Python required?',
      answer: 'Basic Python knowledge is recommended.',
    },
    {
      question: 'Will datasets be provided?',
      answer: 'Yes, all datasets will be shared.',
    },
  ],
}

]