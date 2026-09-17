import { Database } from 'lucide-react';
import { VACDomain } from './types';

export const mlVac: VACDomain = {
  name: 'Machine Learning',
  icon: Database,
  color: '#065FCC',

  description:
    'Master machine learning algorithms, data preprocessing, and model building',
  longDescription:
    'This 6-day Machine Learning Value Added Course focuses on building a strong foundation in ML concepts, data preprocessing, exploratory data analysis, and core machine learning algorithms. Students gain hands-on experience with real datasets and work on prediction and classification projects commonly used in industry.',
  image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',

  duration: '6 Days',
  level: 'Beginner to Intermediate',
  students: 'Hands-on Batch',
  rating: 4.8,
  instructor: 'Nipix Technology – ML Faculty',
  price: 'Contact for Fee',

  curriculum: [
    {
      module: 'Day 1: ML Fundamentals',
      lessons: [
        'What is Machine Learning?',
        'Types of ML',
        'ML workflow',
      ],
    },
    {
      module: 'Day 2: Data Preprocessing',
      lessons: [
        'NumPy & Pandas',
        'Handling missing values',
        'Feature scaling',
      ],
    },
    {
      module: 'Day 3: EDA & Visualization',
      lessons: [
        'Correlation analysis',
        'Matplotlib & Seaborn',
        'Outlier detection',
      ],
    },
    {
      module: 'Day 4: ML Algorithms',
      lessons: [
        'Regression models',
        'Classification models',
        'Evaluation metrics',
      ],
    },
    {
      module: 'Day 5: ML Mini Projects',
      lessons: [
        'House price prediction',
        'Spam classification',
      ],
    },
    {
      module: 'Day 6: Presentation & Certification',
      lessons: ['Project demo', 'Viva', 'Certification'],
    },
  ],
};
