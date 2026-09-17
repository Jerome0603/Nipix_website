import { Cpu } from 'lucide-react';
import { VACDomain } from './types';

export const embeddedIoTVac: VACDomain = {
  name: 'Embedded Systems & IoT',
  icon: Cpu,
  color: '#087FF8',

  description:
    'Build embedded and IoT systems using Arduino, ESP32, and cloud platforms',
  longDescription:
    'This 6-day Embedded Systems & IoT Value Added Course provides hands-on training in embedded programming, sensors, actuators, ESP32, IoT communication protocols, and cloud integration. Students work with real hardware and complete a capstone IoT project involving automation and real-time data.',
  image:
    'https://images.unsplash.com/photo-1581091870627-3a1c1d1c1c5a?w=1200',

  duration: '6 Days',
  level: 'Beginner to Intermediate',
  students: 'Hands-on Hardware Batch',
  rating: 4.9,
  instructor: 'Nipix Technology – Embedded & IoT Faculty',
  price: 'Contact for Fee',

  curriculum: [
    {
      module: 'Day 1: Embedded & Arduino',
      lessons: [
        'Embedded system basics',
        'Arduino programming',
        'LED & digital I/O',
      ],
    },
    {
      module: 'Day 2: Sensors & Actuators',
      lessons: [
        'Analog & digital sensors',
        'Motors & relays',
      ],
    },
    {
      module: 'Day 3: ESP32 & IoT',
      lessons: [
        'ESP32 features',
        'Web server control',
      ],
    },
    {
      module: 'Day 4: Cloud & Wireless IoT',
      lessons: [
        'MQTT, HTTP, REST',
        'Firebase & ThingSpeak',
      ],
    },
    {
      module: 'Day 5: Mobile IoT & Capstone',
      lessons: [
        'Blynk app control',
        'Smart automation project',
      ],
    },
    {
      module: 'Day 6: Final Integration',
      lessons: ['Final demo', 'Viva', 'Certification'],
    },
  ],
};
