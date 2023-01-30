export interface IQuestion {
  question: string;
  options: { value: string; label: string }[];
  isMulti?: boolean;
}

export const quizConfig: IQuestion[] = [
  {
    question: "How old are you?",
    options: [
      { value: "1", label: "18-21" },
      { value: "2", label: "22-35" },
      { value: "3", label: "36-55" },
      { value: "4", label: "56-65" },
      { value: "5", label: "66-75" },
    ],
  },
  {
    question: "What gender do you identify with?",
    options: [
      { value: "1", label: "female" },
      { value: "2", label: "male" },
      { value: "3", label: "other" },
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
      { value: "6", label: "more than 5" },
    ],
  },
  {
    question: "What types of Coffee do you drink?",
    isMulti: true,
    options: [
      { value: "1", label: "Espresso" },
      { value: "2", label: "Cappuccino" },
      { value: "3", label: "Latte" },
      { value: "4", label: "Mocha" },
      { value: "5", label: "Americano" },
      { value: "6", label: "Macchiato" },
      { value: "7", label: "Flat White" },
      { value: "8", label: "Affogato" },
      { value: "9", label: "Cortado" },
      { value: "10", label: "Iced Coffee" },
      { value: "11", label: "I don't drink Coffee" },
    ],
  },
];
