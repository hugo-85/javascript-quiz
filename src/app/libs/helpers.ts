import { useQuizStore } from "@/app/store/quiz";

export const testQuestions = [
  {
    id: 1,
    question: "¿Cuál es la salida de este código?",
    code: "console.log(typeof NaN)",
    answers: ["undefined", "NaN", "string", "number"],
    correctAnswer: 3,
  },
  {
    id: 2,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "3 + 2 + '7'",
    answers: ["12", "327", "57", "NaN"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "¿Cuál es la salida de este código?",
    code: "let a = 10;\nlet b = () => {\n  console.log(this.a);\n}\nb();",
    answers: ["undefined", "null", "10", "ReferenceError"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "1 + 2 + '3' + 4 + 5",
    answers: ["'3345'", "15", "NaN", "Error"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "¿Cuál es la salida de este código?",
    code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
    answers: ["0 1 2", "3 3 3", "1 2 3", "2 1 0"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "2 > '3'",
    answers: ["true", "false", "undefined", "NaN"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "¿Cuál es la salida de este código?",
    code: "const arr = [1, 2, 3, 4, 5];\nconst [x, y, ...rest] = arr;\nconsole.log(rest.length);",
    answers: ["0", "1", "2", "3"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "¿Cuál es el resultado de la siguiente expresión?",
    code: "'2' + 3 * 4",
    answers: ["212", "20", "26", "Error"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "¿Cuál es la salida de este código?",
    code: "const arr = [1, 2, 3];\narr[10] = 10;\nconsole.log(arr.length);",
    answers: ["3", "10", "11", "undefined"],
    correctAnswer: 2,
  },
  {
    id: 11,
    question: "¿Cuál es la salida de este código?",
    code: "console.log(0.1 + 0.2 === 0.3)",
    answers: ["true", "false", "undefined", "NaN"],
    correctAnswer: 1,
  },
];

export function setQuizStoreWithTestData() {
  useQuizStore.setState({
    questions: testQuestions,
  });
}
