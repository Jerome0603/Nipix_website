// src/data/courses.ts

import { Target, Briefcase, Users, Globe, Code, Database } from 'lucide-react';

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  mode: string;
  language: string;
  originalPrice?: string;            // optional original price for discount display
  price: string;
  startDate: string;
  students: string;
  rating: number;
  reviews: number;
  image: string;
  
  hasCertificate?: boolean;          // optional flag
  certificateImage?: string;         // optional image path

  keyOutcomes: string[];
  learningOutcomes: string[];

  modules: {
    id: number;
    title: string;
    duration: string;
    lessons: string[];
  }[];

  requirements: string[];

  projects: {
    id: number;
    title: string;
    description: string;
    output: string;
    icon: any;
  }[];

  testimonials: {
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    text: string;
  }[];

  relatedCourses: {
    id: number;
    title: string;
    description: string;
    duration: string;
    price: string;
    image: string;
    icon: any;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Flutter App Development',
    subtitle:
      'Build high-performance Android, iOS, and Web apps using Flutter. Includes Java certification for App Development',
    description:
      'This Flutter App Development Bootcamp takes you from zero to professional mobile app developer in 16 weeks. You will build real-world Android, iOS, and Web applications using Flutter and Dart. The course focuses on clean UI, scalable architecture, API integration, and production-ready apps. Ideal for students, career switchers, and developers looking to enter mobile app development.',
    duration: '16 Weeks',
    level: 'Beginner to Advanced',
    mode: 'Online',
    language: 'Tamil, English',
    originalPrice: '$599',
    price: '$499',
    hasCertificate: true,
    certificateImage: "/src/assets/flutter-sample.png",
    startDate: 'Jan 15, 2025',
    students: '3,200+',
    rating: 4.9,
    reviews: 1250,
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',

    keyOutcomes: [
      'Build cross-platform apps from a single codebase',
      'Master Flutter UI, state management, and navigation',
      'Develop production-ready apps with real backend integration',
      'Create a strong mobile app portfolio with 5+ projects',
      'Earn dual certificates: Java (App Development) + Flutter App Development',
    ],

    learningOutcomes: [
      'Understand Dart programming fundamentals',
      'Build responsive UIs using Flutter widgets',
      'Implement navigation and routing',
      'Manage app state using Provider and Riverpod',
      'Integrate REST APIs and handle JSON data',
      'Use Firebase for authentication and database',
      'Implement local storage and offline support',
      'Build, test, and deploy apps to Play Store',
    ],

    modules: [
    {
      id: 0,
      title: 'Beginner Track: Java for App Development',
      duration: '2 Weeks',
      lessons: [
        'Java Basics',
        'OOP Concepts in Java',
        'Java for Android Ecosystem',
        'Problem Solving with Java',
      ],
    },
    {
      id: 1,
      title: 'Module 1: Dart & Flutter Basics',
      duration: '2 Weeks',
      lessons: [
        'Introduction to Flutter and Dart',
        'Dart Syntax and OOP Concepts',
        'Flutter Project Structure',
        'Stateless vs Stateful Widgets',
        'Hot Reload and Debugging',
      ],
    },
    {
      id: 2,
      title: 'Module 2: Flutter UI & Layouts',
      duration: '3 Weeks',
      lessons: [
        'Material and Cupertino Widgets',
        'Layouts with Row, Column, Stack',
        'Responsive Design',
        'Custom Widgets',
        'Themes and Styling',
      ],
    },
    {
      id: 3,
      title: 'Module 3: Navigation & State Management',
      duration: '3 Weeks',
      lessons: [
        'Navigation and Routing',
        'Passing Data Between Screens',
        'State Management Concepts',
        'Provider',
        'Riverpod',
      ],
    },
    {
      id: 4,
      title: 'Module 4: Backend & API Integration',
      duration: '3 Weeks',
      lessons: [
        'REST API Concepts',
        'HTTP Requests',
        'JSON Parsing',
        'Error Handling',
        'Pagination and Loaders',
      ],
    },
    {
      id: 5,
      title: 'Module 5: Firebase & Advanced Features',
      duration: '3 Weeks',
      lessons: [
        'Firebase Setup',
        'Authentication (Email, Google)',
        'Cloud Firestore',
        'Push Notifications',
        'App Security Best Practices',
      ],
    },
    {
      id: 6,
      title: 'Module 6: Deployment & Capstone',
      duration: '2 Weeks',
      lessons: [
        'App Optimization',
        'Build Android APK & AAB',
        'Play Store Publishing',
        'Capstone App Development',
        'Final Review and Demo',
      ],
    },
  ],

    requirements: [
      'Basic computer knowledge',
      'No prior app development experience required',
      'Laptop with 8GB RAM minimum',
      'Android phone or emulator',
      'Commitment of 10–15 hours per week',
    ],

    projects: [
      {
        id: 1,
        title: 'Expense Tracker App',
        description: 'Build a personal finance app with charts, categories, and local storage.',
        output: 'Offline-first expense tracking app',
        icon: Target,
      },
      {
        id: 2,
        title: 'E-Commerce App',
        description: 'Create a shopping app with product listing, cart, and checkout flow.',
        output: 'Fully functional mobile e-commerce app',
        icon: Briefcase,
      },
      {
        id: 3,
        title: 'Social Media App',
        description: 'Build a social app with posts, likes, comments, and Firebase backend.',
        output: 'Real-time social media application',
        icon: Users,
      },
      {
        id: 4,
        title: 'Weather App',
        description: 'Develop a weather app using live API data and location services.',
        output: 'API-driven weather forecasting app',
        icon: Globe,
      },
    ],

    testimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'Flutter Developer',
        company: 'Tech Labs',
        image: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        text: 'Excellent course with real projects.',
      },
    ],

    relatedCourses: [
      {
        id: 2,
        title: 'Machine Learning Bootcamp',
        description: 'Learn ML with Python',
        duration: '16 Weeks',
        price: '$499',
        image:
          'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
        icon: Target,
      },
    ],

    faqs: [
      {
        question: 'Is Flutter good for beginners?',
        answer: 'Yes. Flutter is beginner-friendly and widely used for cross-platform app development.',
      },
      {
        question: 'Can I build both Android and iOS apps?',
        answer: 'Yes. Flutter allows you to build Android, iOS, and Web apps from a single codebase.',
      },
      {
        question: 'Do I need a Mac for iOS apps?',
        answer: 'A Mac is required only for iOS deployment. Development can be done on Windows or Linux.',
      },
      {
        question: 'Will I get a certificate?',
        answer: 'Yes. You will receive a completion certificate from Nipix Technology.',
      },
    ],
  },

  {
    id: 2,
    title: 'Machine Learning',
    subtitle:
      'Learn Machine Learning from fundamentals to real-world applications. Includes Python certification',
    description:
      'This Machine Learning is designed to take you from basic concepts to building real-world ML models used in industry. You will learn data preprocessing, core ML algorithms, model evaluation, and deployment. The course is hands-on, project-driven, and focused on practical problem-solving using Python.',
    duration: '16 Weeks',
    level: 'Beginner to Advanced',
    mode: 'Online',
    language: 'Tamil, English',
    originalPrice: '$599',
    price: '$499',
    hasCertificate: true,
    certificateImage: "/src/assets/flutter-sample.png",
    startDate: 'Feb 10, 2025',
    students: '2,500+',
    rating: 4.8,
    reviews: 1050,
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200',

    keyOutcomes: [
      'Build and evaluate machine learning models',
      'Understand core ML algorithms and when to use them',
      'Work with real-world datasets',
      'Create a strong ML project portfolio',
      'Earn dual certificates: Python (Machine Learning) + Machine Learning',
    ],

    learningOutcomes: [
      'Understand machine learning concepts and workflow',
      'Use Python for data analysis and modeling',
      'Perform data cleaning and feature engineering',
      'Build supervised and unsupervised ML models',
      'Evaluate models using proper metrics',
      'Handle overfitting and underfitting',
      'Deploy ML models using Flask',
      'Work with real datasets from industry use cases',
    ],

    modules: [
      {
        id: 0,
        title: 'Beginner Track: Python for Machine Learning',
        duration: '2 Weeks',
        lessons: [
          'Python Basics',
          'Data Types and Control Flow',
          'Functions and Modules',
          'Basic OOP in Python',
        ],
      },
      {
        id: 1,
        title: 'Module 1: Python & Data Foundations',
        duration: '2 Weeks',
        lessons: [
          'Python for Machine Learning',
          'NumPy Fundamentals',
          'Pandas for Data Analysis',
          'Data Visualization with Matplotlib & Seaborn',
          'Working with CSV and Real Datasets',
        ],
      },
      {
        id: 2,
        title: 'Module 2: Data Preprocessing & EDA',
        duration: '3 Weeks',
        lessons: [
          'Data Cleaning Techniques',
          'Handling Missing Values',
          'Outlier Detection',
          'Feature Scaling and Encoding',
          'Exploratory Data Analysis (EDA)',
        ],
      },
      {
        id: 3,
        title: 'Module 3: Supervised Learning',
        duration: '4 Weeks',
        lessons: [
          'Linear Regression',
          'Logistic Regression',
          'KNN Algorithm',
          'Decision Trees',
          'Random Forest',
          'Model Evaluation Metrics',
        ],
      },
      {
        id: 4,
        title: 'Module 4: Unsupervised Learning',
        duration: '3 Weeks',
        lessons: [
          'Clustering Concepts',
          'K-Means Clustering',
          'Hierarchical Clustering',
          'Dimensionality Reduction (PCA)',
          'Anomaly Detection',
        ],
      },
      {
        id: 5,
        title: 'Module 5: Model Optimization & Deployment',
        duration: '2 Weeks',
        lessons: [
          'Bias-Variance Tradeoff',
          'Hyperparameter Tuning',
          'Cross Validation',
          'Saving Models with Pickle',
          'Deploying ML Models using Flask',
        ],
      },
      {
        id: 6,
        title: 'Module 6: Capstone Project',
        duration: '2 Weeks',
        lessons: [
          'Problem Statement Selection',
          'End-to-End ML Project',
          'Model Training and Testing',
          'Deployment and Demo',
          'Final Review',
        ],
      },
    ],

    requirements: [
      'Basic computer knowledge',
      'No prior ML experience required',
      'Laptop with at least 8GB RAM',
      'Basic math knowledge (helpful but not mandatory)',
      'Commitment of 10–15 hours per week',
    ],

    projects: [
      {
        id: 1,
        title: 'House Price Prediction',
        description: 'Build a regression model to predict house prices using real datasets.',
        output: 'Deployed regression-based ML model',
        icon: Target,
      },
      {
        id: 2,
        title: 'Customer Churn Prediction',
        description: 'Predict whether a customer will leave a service using classification models.',
        output: 'Binary classification ML system',
        icon: Users,
      },
      {
        id: 3,
        title: 'Spam Email Detection',
        description: 'Detect spam emails using text features and ML algorithms.',
        output: 'Text classification ML model',
        icon: Briefcase,
      },
      {
        id: 4,
        title: 'Recommendation System',
        description: 'Build a basic recommendation engine using similarity techniques.',
        output: 'Working recommendation system',
        icon: Globe,
      },
    ],

    testimonials: [
      {
        name: 'James Chen',
        role: 'ML Engineer',
        company: 'AI Corp',
        image: 'https://i.pravatar.cc/150?img=13',
        rating: 5,
        text: 'Very practical ML training.',
      },
    ],

    relatedCourses: [
      {
        id: 1,
        title: 'Flutter App Development',
        description: 'Cross-platform apps',
        duration: '16 Weeks',
        price: '$499',
        image:
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
        icon: Target,
      },
    ],

    faqs: [
      {
        question: 'Is this course suitable for beginners?',
        answer: 'Yes. The course starts from basics and gradually moves to advanced machine learning topics.',
      },
      {
        question: 'Do I need strong math skills?',
        answer: 'Basic math is enough. Required concepts are explained during the course.',
      },
      {
        question: 'Will I build real projects?',
        answer: 'Yes. You will work on multiple real-world ML projects and one capstone project.',
      },
      {
        question: 'Is deployment covered?',
        answer: 'Yes. You will learn how to deploy ML models using Flask.',
      },
    ],
  },
  {
    id: 3,
    title: 'Python Programming: Basic to Advanced',
    subtitle: 'Learn Python from fundamentals to advanced concepts with hands-on projects',
    description:
      'This Python Programming course is designed to take you from zero programming knowledge to advanced Python development. You will learn core Python concepts, data structures, OOP, file handling, automation, and real-world problem solving. The course is hands-on and project-focused, suitable for beginners and aspiring developers.',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    mode: 'Online',
    language: 'Tamil, English',
    originalPrice: '$399',
    price: '$299',
    hasCertificate: true,
    certificateImage: "/src/assets/flutter-sample.png",
    startDate: 'Mar 10, 2025',
    students: '4,500+',
    rating: 4.8,
    reviews: 980,
    image:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200',

    keyOutcomes: [
      'Write clean and efficient Python code',
      'Understand core programming and OOP concepts',
      'Solve real-world problems using Python',
      'Build a strong Python project portfolio',
      'Earn Python Programming Certificate',
    ],

    learningOutcomes: [
      'Understand Python syntax and fundamentals',
      'Work with variables, data types, and operators',
      'Use conditionals and loops effectively',
      'Master Python data structures',
      'Apply Object-Oriented Programming (OOP)',
      'Handle files and exceptions',
      'Work with modules and packages',
      'Build real-world Python applications',
    ],

    modules: [
      {
        id: 1,
        title: 'Module 1: Python Basics',
        duration: '3 Weeks',
        lessons: [
          'Introduction to Python',
          'Variables and Data Types',
          'Operators',
          'Conditional Statements',
          'Loops (for, while)',
        ],
      },
      {
        id: 2,
        title: 'Module 2: Data Structures',
        duration: '3 Weeks',
        lessons: [
          'Lists',
          'Tuples',
          'Sets',
          'Dictionaries',
          'Common Built-in Functions',
        ],
      },
      {
        id: 3,
        title: 'Module 3: Functions & Modules',
        duration: '2 Weeks',
        lessons: [
          'Defining Functions',
          'Arguments and Return Values',
          'Lambda Functions',
          'Modules and Packages',
          'Virtual Environments',
        ],
      },
      {
        id: 4,
        title: 'Module 4: Object-Oriented Programming',
        duration: '3 Weeks',
        lessons: [
          'Classes and Objects',
          'Constructors',
          'Inheritance',
          'Polymorphism',
          'Encapsulation',
        ],
      },
      {
        id: 5,
        title: 'Module 5: Advanced Python',
        duration: '3 Weeks',
        lessons: [
          'Exception Handling',
          'File Handling',
          'Regular Expressions',
          'Decorators',
          'Generators and Iterators',
        ],
      },
      {
        id: 6,
        title: 'Module 6: Projects & Automation',
        duration: '2 Weeks',
        lessons: [
          'Automation Scripts',
          'Working with APIs',
          'Mini Project Development',
          'Final Project',
          'Code Review and Optimization',
        ],
      },
    ],

    requirements: [
      'Basic computer knowledge',
      'No prior programming experience required',
      'Laptop with any OS',
      'Willingness to practice regularly',
      '10–12 hours per week commitment',
    ],

    projects: [
      {
        id: 1,
        title: 'Student Management System',
        description: 'Build a console-based system to manage student records using Python.',
        output: 'CRUD-based Python application',
        icon: Target,
      },
      {
        id: 2,
        title: 'File Organizer',
        description: 'Create a script to automatically organize files based on type.',
        output: 'Automation tool using Python',
        icon: Briefcase,
      },
      {
        id: 3,
        title: 'Password Generator',
        description: 'Develop a secure password generator using Python logic.',
        output: 'Utility-based Python application',
        icon: Users,
      },
      {
        id: 4,
        title: 'Weather CLI App',
        description: 'Fetch real-time weather data using public APIs.',
        output: 'API-driven Python application',
        icon: Globe,
      },
    ],

    testimonials: [
      {
        name: 'Amit Kumar',
        role: 'Python Developer',
        company: 'Startup Hub',
        image: 'https://i.pravatar.cc/150?img=11',
        rating: 5,
        text: 'Perfect course to master Python from scratch.',
      },
    ],

    relatedCourses: [
      {
        id: 2,
        title: 'Machine Learning Bootcamp',
        description: 'Apply Python to ML',
        duration: '16 Weeks',
        price: '$499',
        image:
          'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
        icon: Database,
      },
    ],

    faqs: [
      {
        question: 'Is this course suitable for absolute beginners?',
        answer: 'Yes. The course starts from the basics and gradually moves to advanced topics.',
      },
      {
        question: 'Will this help in AI or ML later?',
        answer: 'Yes. Python is the foundation for AI, ML, Data Science, and automation.',
      },
      {
        question: 'Are projects included?',
        answer: 'Yes. Multiple mini-projects and a final project are included.',
      },
      {
        question: 'Do I get a certificate?',
        answer: 'Yes. You will receive a course completion certificate from Nipix Technology.',
      },
    ],
  },

  {
    id: 4,
    title: 'Java Programming: Basic to Advanced',
    subtitle: 'Master Java programming with OOP, collections, and real-world applications',
    description:
      'This Java Programming course takes you from core programming concepts to advanced Java development. You will learn OOP, collections, exception handling, multithreading, and JDBC. The course is practical, project-based, and suitable for beginners and aspiring backend developers.',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    mode: 'Online',
    language: 'Tamil, English',
    originalPrice: '$399',
    price: '$299',
    hasCertificate: true,
    certificateImage: "/src/assets/flutter-sample.png",
    startDate: 'Mar 20, 2025',
    students: '3,800+',
    rating: 4.7,
    reviews: 860,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',

    keyOutcomes: [
      'Write clean, object-oriented Java code',
      'Understand core Java and JVM concepts',
      'Build console-based and backend-ready applications',
      'Create a solid Java project portfolio',
      'Earn Java Programming Certificate',
    ],

    learningOutcomes: [
      'Understand Java syntax and core concepts',
      'Apply Object-Oriented Programming principles',
      'Work with collections and generics',
      'Handle exceptions effectively',
      'Understand multithreading and concurrency basics',
      'Perform file handling and I/O operations',
      'Connect Java applications with databases using JDBC',
      'Prepare for backend and enterprise development',
    ],

    modules: [
      {
        id: 1,
        title: 'Module 1: Java Fundamentals',
        duration: '3 Weeks',
        lessons: [
          'Introduction to Java and JVM',
          'Variables and Data Types',
          'Operators',
          'Control Statements',
          'Loops',
        ],
      },
      {
        id: 2,
        title: 'Module 2: Object-Oriented Programming',
        duration: '4 Weeks',
        lessons: [
          'Classes and Objects',
          'Constructors',
          'Inheritance',
          'Polymorphism',
          'Abstraction and Interfaces',
          'Encapsulation',
        ],
      },
      {
        id: 3,
        title: 'Module 3: Core Java APIs',
        duration: '3 Weeks',
        lessons: [
          'String Handling',
          'Wrapper Classes',
          'Collections Framework',
          'Generics',
          'Comparable and Comparator',
        ],
      },
      {
        id: 4,
        title: 'Module 4: Exception Handling & I/O',
        duration: '2 Weeks',
        lessons: [
          'Exception Handling',
          'Custom Exceptions',
          'File Handling',
          'Serialization',
          'Java I/O Streams',
        ],
      },
      {
        id: 5,
        title: 'Module 5: Multithreading & JDBC',
        duration: '2 Weeks',
        lessons: [
          'Multithreading Concepts',
          'Thread Lifecycle',
          'Synchronization',
          'JDBC Architecture',
          'CRUD Operations using JDBC',
        ],
      },
      {
        id: 6,
        title: 'Module 6: Projects & Capstone',
        duration: '2 Weeks',
        lessons: [
          'Mini Project Development',
          'Backend-Oriented Java Project',
          'Code Optimization',
          'Final Project Demo',
          'Interview Preparation Basics',
        ],
      },
    ],

    requirements: [
      'Basic computer knowledge',
      'No prior programming experience required',
      'Laptop with any OS',
      'Willingness to practice coding',
      '10–12 hours per week commitment',
    ],

    projects: [
      {
        id: 1,
        title: 'Student Management System',
        description: 'Develop a Java-based system to manage student records.',
        output: 'Console-based Java CRUD application',
        icon: Target,
      },
      {
        id: 2,
        title: 'Banking Application',
        description: 'Build a banking system with account management and transactions.',
        output: 'OOP-driven Java application',
        icon: Briefcase,
      },
      {
        id: 3,
        title: 'Employee Payroll System',
        description: 'Create a payroll system using collections and file handling.',
        output: 'Java application with persistent storage',
        icon: Users,
      },
      {
        id: 4,
        title: 'Database Management App',
        description: 'Connect Java with a database using JDBC for CRUD operations.',
        output: 'Java + JDBC integrated application',
        icon: Globe,
      },
    ],

    testimonials: [
      {
        name: 'Rohit Sharma',
        role: 'Java Developer',
        company: 'Enterprise Soft',
        image: 'https://i.pravatar.cc/150?img=15',
        rating: 5,
        text: 'Clear explanation of Java and OOP concepts.',
      },
    ],

    relatedCourses: [
      {
        id: 1,
        title: 'Flutter App Development',
        description: 'Java for app development',
        duration: '16 Weeks',
        price: '$499',
        image:
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
        icon: Code,
      },
    ],

    faqs: [
      {
        question: 'Is Java suitable for beginners?',
        answer: 'Yes. Java is beginner-friendly and widely used in enterprise applications.',
      },
      {
        question: 'Will this help in backend development?',
        answer: 'Yes. Java is a core language for backend and enterprise systems.',
      },
      {
        question: 'Are projects included?',
        answer: 'Yes. Multiple mini-projects and a final capstone project are included.',
      },
      {
        question: 'Will I get a certificate?',
        answer: 'Yes. You will receive a completion certificate from Nipix Technology.',
      },
    ],
  },

  {
  id: 6,
  title: 'Demo Class',
  subtitle: 'Attend a free live demo session',
  duration: '1 Hour',
  level: 'Beginner',
  mode: 'Online',
  language: 'Tamil, English',
  price: 'Free',
  hasCertificate: false,
  certificateImage: "/src/assets/flutter-sample.png",
  startDate: 'Every Week',
  students: '8,500+',
  rating: 4.7,
  reviews: 320,
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200',

  description:
    'Join our free demo class to experience our teaching style, mentor interaction, and course structure before enrolling.',

  keyOutcomes: [
    'Understand course structure',
    'Meet the instructor',
    'Clarify your learning path',
  ],

  learningOutcomes: [
    'Overview of the subject',
    'How projects are taught',
    'Next steps after demo',
  ],

  modules: [
    {
      id: 1,
      title: 'Live Demo Session',
      duration: '1 Hour',
      lessons: [
        'Course Overview',
        'Live Teaching Sample',
        'Q&A Session',
      ],
    },
  ],

  requirements: [],

  projects: [],

  testimonials: [],

  relatedCourses: [],

  faqs: [
    {
      question: 'Is the demo class really free?',
      answer: 'Yes, this demo class is completely free.',
    },
    {
      question: 'Will I get a certificate?',
      answer: 'No certificate is provided for demo sessions.',
    },
  ],
},
];