import { Brain } from 'lucide-react';
import { VACDomain } from './types';

export const aiVac: VACDomain = {
  name: 'Artificial Intelligence',
  icon: Brain,
  color: '#087FF8',

  description:
    'Learn AI fundamentals, neural networks, NLP, and real-world applications',
  longDescription:
    'This 6-day Artificial Intelligence Value Added Course introduces students to the core concepts of AI, Python for AI, neural networks, and natural language processing. The program is designed with a strong hands-on focus, enabling learners to build intelligent systems, work on mini projects like chatbots and image classification, and understand how AI is applied in real-world industries.',
  image:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',

  duration: '6 Days',
  level: 'Beginner to Intermediate',
  students: 'Hands-on Batch',
  rating: 4.9,
  instructor: 'Nipix Technology – AI Faculty',
  price: 'Contact for Fee',

  curriculum: [
    {
      module: 'Day 1: AI Fundamentals',
      lessons: [
        'What is Artificial Intelligence?',
        'Types of AI',
        'AI vs ML vs Deep Learning',
        'Real-world AI applications',
      ],
    },
    {
      module: 'Day 2: Python & Data for AI',
      lessons: [
        'Python basics for AI',
        'NumPy & Pandas',
        'Data preprocessing',
      ],
    },
    {
      module: 'Day 3: Neural Networks',
      lessons: [
        'Perceptrons & activation functions',
        'ANN, CNN, RNN basics',
      ],
    },
    {
      module: 'Day 4: NLP Basics',
      lessons: [
        'Text preprocessing',
        'Bag of Words & TF-IDF',
        'Text classification',
      ],
    },
    {
      module: 'Day 5: Mini Projects',
      lessons: [
        'Chatbot',
        'Sentiment analysis',
        'Image classification',
      ],
    },
    {
      module: 'Day 6: Presentation & Certification',
      lessons: ['Project demo', 'Viva', 'Certification'],
    },
  ],
};
