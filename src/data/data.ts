type questionsTypes = {
    question: string;
    wrongOptions: string[];
    rightOption: string;
}

const questions = [
  {
    question: "Which animal can survive being frozen solid and thawed back to life?",
    options: ["Penguin", "Polar Bear", "Wood Frog", "Seal"],
    correctAnswer: "Wood Frog"
  },
  {
    question: "What creature has the largest eyes in the animal kingdom?",
    options: ["Giant Squid", "Elephant", "Blue Whale", "Ostrich"],
    correctAnswer: "Giant Squid"
  },
  {
    question: "Which mammal lays eggs?",
    options: ["Kangaroo", "Platypus", "Koala", "Wombat"],
    correctAnswer: "Platypus"
  },
  {
    question: "What animal can hold its breath the longest underwater?",
    options: ["Sea Turtle", "Dolphin", "Shark", "Sperm Whale"],
    correctAnswer: "Sperm Whale"
  },
  {
    question: "Which insect is known to clone itself without mating?",
    options: ["Butterfly", "Ant", "Stick Insect", "Bee"],
    correctAnswer: "Stick Insect"
  }
];

export default questions;
export type { questionsTypes };