// src/data/internships.ts

export interface Internship {
  id: number;
  title: string;
  company?: string;
  description?: string;
  image?: string;

  duration?: string;
  type?: string;          // Remote | Onsite | Hybrid
  stipend?: string;
  openings?: number;
  deadline?: string;
  startDate?: string;

  skills?: string[];
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];

  hasCertificate?: boolean;

  testimonials?: {
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    text: string;
  }[];

  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const internships: Internship[] = [
  {
    id: 1,
    title: 'App Development Internship',
    company: 'Nipix Technology',
    description:
        'Join our App Development Internship and gain hands-on experience building real-world mobile applications. You will work on Android and cross-platform apps, learn modern mobile frameworks, and collaborate with experienced developers.',
    image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400',

    duration: '3 months',
    type: 'Remote',
    stipend: 'Paid - ₹12,000/month',
    openings: 12,
    deadline: 'January 20, 2025',
    startDate: 'February 5, 2025',

    skills: [
        'Flutter / React Native',
        'Dart / JavaScript',
        'Mobile UI Design',
        'REST API Integration',
        'Firebase Basics',
        'App Debugging & Testing',
    ],

    responsibilities: [
        'Develop mobile application screens',
        'Integrate APIs with frontend',
        'Implement app navigation and state management',
        'Test and debug mobile apps',
        'Collaborate with designers and backend developers',
    ],

    requirements: [
        'Basic programming knowledge',
        'Understanding of mobile applications',
        'Willingness to learn new frameworks',
        'Good problem-solving skills',
    ],

    benefits: [
        'Paid internship',
        'Industry-recognized certificate',
        'Live mobile app projects',
        'Mentorship from industry experts',
        'Internship completion letter',
        'Career guidance',
    ],

    hasCertificate: true,

    testimonials: [
        {
        name: 'Sanjay Kumar',
        role: 'Mobile App Developer',
        company: 'AppWorks',
        image: 'https://i.pravatar.cc/150?img=14',
        rating: 5,
        text:
            'This internship gave me real experience in building mobile apps and helped me crack my first developer role.',
        },
    ],

    faqs: [
        {
        question: 'Do I need prior app development experience?',
        answer:
            'Basic programming knowledge is enough. The internship covers fundamentals from scratch.',
        },
        {
        question: 'Will I build real apps?',
        answer:
            'Yes, you will work on real-world mobile app projects.',
        },
    ],
  },
  {
    id: 2,
    title: 'Web Development Internship',
    company: 'Nipix Technology',
    description:
        'Join our Web Development Internship and work on modern websites and web applications. Learn frontend and backend fundamentals while building production-ready projects.',
    image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400',

    duration: '3 months',
    type: 'Remote',
    stipend: 'Paid - ₹10,000/month',
    openings: 15,
    deadline: 'January 18, 2025',
    startDate: 'February 1, 2025',

    skills: [
        'HTML, CSS, JavaScript',
        'React.js',
        'Node.js Basics',
        'REST APIs',
        'Git & GitHub',
        'Responsive Design',
    ],

    responsibilities: [
        'Develop responsive web pages',
        'Work on frontend components',
        'Integrate APIs',
        'Fix bugs and improve performance',
        'Collaborate with design and backend teams',
    ],

    requirements: [
        'Basic understanding of web technologies',
        'Interest in web development',
        'Logical thinking ability',
    ],

    benefits: [
        'Hands-on web projects',
        'Certificate of completion',
        'Mentorship support',
        'Internship letter',
        'Placement assistance',
    ],

    hasCertificate: true,

    testimonials: [
        {
        name: 'Rohit Sharma',
        role: 'Frontend Developer',
        company: 'WebTech',
        image: 'https://i.pravatar.cc/150?img=8',
        rating: 5,
        text:
            'The web internship helped me gain confidence and build a strong portfolio.',
        },
    ],

    faqs: [
        {
        question: 'Is this internship beginner-friendly?',
        answer:
            'Yes, beginners with basic HTML/CSS knowledge can apply.',
        },
    ],
  },
  {
    id: 3,
    title: 'Machine Learning Internship',
    company: 'Nipix Technology',
    description:
        'This Machine Learning Internship focuses on real-world ML problems, data analysis, and model building using Python.',
    image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400',

    duration: '4 months',
    type: 'Remote',
    stipend: 'Paid - ₹15,000/month',
    openings: 8,
    deadline: 'January 25, 2025',
    startDate: 'February 10, 2025',

    skills: [
        'Python',
        'NumPy & Pandas',
        'Machine Learning Algorithms',
        'Model Training & Evaluation',
        'Data Visualization',
    ],

    responsibilities: [
        'Clean and preprocess datasets',
        'Train machine learning models',
        'Evaluate model performance',
        'Document findings and results',
    ],

    requirements: [
        'Basic Python knowledge',
        'Understanding of math/statistics',
        'Interest in AI and ML',
    ],

    benefits: [
        'Real ML projects',
        'Certificate',
        'Portfolio-ready work',
        'Career mentoring',
    ],

    hasCertificate: true,

    testimonials: [
        {
            name: 'Priya Patel',
            role: 'Data Scientist',
            company: 'DataTech',
            image: 'https://i.pravatar.cc/150?img=9',
            rating: 5,
            text:
                'The ML internship gave me hands-on experience with real datasets and models.',
        },
    ],
    faqs: [
        {
            question: 'Do I need prior ML experience?',
            answer:
                'No, this internship is designed for beginners. We provide all necessary training.',
        },
    ],
  },
  {
    id: 4,
    title: 'UI/UX Design Internship',
    company: 'Nipix Technology',
    description:
        'Learn user interface and user experience design by working on real digital products and applications.',
    image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400',

    duration: '2 months',
    type: 'Remote',
    stipend: 'Paid - ₹8,000/month',
    openings: 6,
    deadline: 'January 18, 2025',
    startDate: 'February 3, 2025',

    skills: [
        'Figma',
        'Wireframing',
        'Prototyping',
        'User Research',
        'Design Systems',
    ],

    responsibilities: [
        'Design UI mockups',
        'Create interactive prototypes',
        'Conduct usability testing',
    ],

    requirements: [
        'Creativity and design interest',
        'Basic design understanding',
    ],

    benefits: [
        'Design portfolio',
        'Certificate',
        'Industry exposure',
    ],

    hasCertificate: true,
    testimonials: [
        {
            name: 'Ankit Verma',
            role: 'UI/UX Designer',
            company: 'DesignHub',
            image: 'https://i.pravatar.cc/150?img=10',
            rating: 5,
            text:
                'The UI/UX internship helped me understand design thinking and user-centered design principles.',
        },
    ],
    faqs: [
        {
            question: 'What design tools will I learn?',
            answer:
                'You will learn Figma, Adobe XD, and other industry-standard design tools.',
        },
    ],
  },
  {
  id: 5,
  title: 'Marketing & Business Development Internship',
  company: 'Nipix Technology',
  description:
    'Learn digital marketing strategies, business growth techniques, and real-world campaign execution.',
  image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400',

  duration: '2 months',
  type: 'Hybrid',
  stipend: 'Paid - ₹7,000/month',
  openings: 12,
  deadline: 'January 22, 2025',
  startDate: 'February 7, 2025',

  skills: [
    'Digital Marketing',
    'Lead Generation',
    'Market Research',
    'Communication Skills',
    'Sales Strategy',
  ],

  responsibilities: [
    'Assist marketing campaigns',
    'Analyze market trends',
    'Support business outreach',
  ],

  requirements: [
    'Strong communication skills',
    'Interest in marketing and business',
  ],

  benefits: [
    'Certificate',
    'Business exposure',
    'Networking opportunities',
  ],

  hasCertificate: true,
},

];