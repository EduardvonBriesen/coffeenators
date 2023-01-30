export interface IQuestion {
  question: string;
  options: { value: string; label: string }[];
}

export const quizConfig: IQuestion[] = [
  {
    question: "How much Coffee do you Drink per Day?",
    options: [
      { value: "none", label: "I don't" },
      { value: "1-2", label: "1-2" },
      { value: "3-4", label: "3-4" },
      { value: "5-6", label: "5-6" },
      { value: "7+", label: "7+" },
    ],
  },
  {
    question: "How much Coffee do you Drink per Day?",
    options: [
      { value: "none", label: "I don't" },
      { value: "1-2", label: "1-2" },
      { value: "3-4", label: "3-4" },
      { value: "5-6", label: "5-6" },
      { value: "7+", label: "7+" },
    ],
  },
];
