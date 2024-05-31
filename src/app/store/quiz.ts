import { create } from "zustand";
import { persist } from "zustand/middleware";
import { QuestionType } from "./../types/quizTypes";

type State = {
  questions: QuestionType[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => boolean;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
};

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.API_URL;

export const useQuizStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async (limit: number) => {
        const res = await fetch(`${API_URL}/data.json`);
        const json = await res.json();

        const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);

        set({ questions });
      },
      selectAnswer: (questionId: number, answerIndex: number) => {
        const { questions } = get();

        const newQuestions = structuredClone(questions);

        const questionIndex = newQuestions.findIndex(
          (question) => question.id === questionId
        );

        const questionInfo = newQuestions[questionIndex];

        const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;

        newQuestions[questionIndex] = {
          ...questionInfo,
          isCorrectUserAnswer,
          userSelectedAnswer: answerIndex,
        };

        set({ questions: newQuestions });

        return isCorrectUserAnswer;
      },
      goNextQuestion: () => {
        const store = get();
        if (store.currentQuestion < store.questions.length - 1)
          set({ currentQuestion: store.currentQuestion + 1 });
      },
      goPreviousQuestion: () => {
        const store = get();
        if (store.currentQuestion > 0)
          set({ currentQuestion: store.currentQuestion - 1 });
      },
      reset: () => {
        set({
          questions: [],
          currentQuestion: 0,
        });
      },
    }),
    { name: "quiz" }
  )
);
