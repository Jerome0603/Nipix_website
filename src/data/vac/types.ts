export interface VACCurriculumItem {
  module: string;
  lessons: string[];
}

export interface VACDomain {
  name: string;
  icon: any;
  color: string;

  description: string;        // short (hero subtitle if needed)
  longDescription: string;    // detailed paragraph
  image: string;              // hero image URL

  duration: string;
  level: string;
  students: string;
  rating: number;
  instructor: string;
  price: string;

  curriculum: VACCurriculumItem[];
}

