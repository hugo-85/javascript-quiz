import { useQuizStore } from "@/app/store/quiz";

export default function useQuestionsInfo() {
  const questions = useQuizStore((store) => store.questions);
  const correctQuestions = questions.filter(
    (question) => question?.isCorrectUserAnswer === true
  ).length;
  const wrongQuestions = questions.filter(
    (question) => question?.isCorrectUserAnswer === false
  ).length;
  const unansweredQuestions = questions.filter(
    (question) => question?.isCorrectUserAnswer === undefined
  ).length;

  return { correctQuestions, wrongQuestions, unansweredQuestions };
}
