export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Tutor",
    company:
      "University of Houston (ConocoPhilipps Computer Science Learning Center)",
    period: "January 2025 - Present",
    description: [
      "Supported over 15 students in programming and data structures, focusing on improving their coding logic and confidence.",
      "Tutored and mentored students preparing for exams and real-world technical interviews, focusing on core concepts, coding strategies, and problem-solving under pressure.",
      "Delivered personalized guidance on assignments and lab work, helping reduce errors and improve performance.",
      "Developed additional practice materials to reinforce core concepts and promote independent learning.",
    ],
  },
];
