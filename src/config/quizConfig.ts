export interface IQuestion {
  question: string;
  options: { value: string; label: string }[];
  isMulti?: boolean;
}

export const quizConfig: IQuestion[] = [
  {
    question: "How old are you?",
    options: [
      { value: "18-21", label: "18-21" },
      { value: "22-35", label: "22-35" },
      { value: "36-55", label: "36-55" },
      { value: "56-65" , label: "56-65" },
      { value: "66-75" , label: "66-75" },
    ],
  },
  {
    question: "What gender do you identify with?",
    options: [
      { value: "female" , label: "female" },
      { value: "male" , label: "male" },
      { value: "other", label: "other" },
    ],
  },
  {
    question: "How much Coffee do you Drink per Day?",
    options: [
      { value: "none", label: "I don't" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "5+", label: "more than 5" },
    ],
  },
  {
    question: "What types of Coffee do you drink?",
    isMulti: true,
    options: [
      { value: "espresso", label: "Espresso" },
      { value: "cappuccino", label: "Cappuccino" },
      { value: "latte", label: "Latte" },
      { value: "mocha", label: "Mocha" },
      { value: "americano", label: "Americano" },
      { value: "macchiato", label: "Macchiato" },
      { value: "flat white", label: "Flat White" },
      { value: "other", label: "Other" },
    ],
  },
];
