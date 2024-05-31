import { useQuizStore } from "@/app/store/quiz";
import { Card, CardContent, CardHeader, ListItemText } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { QuizList, QuizListItemButton } from "./quiz.styles";
import confetti from "canvas-confetti";

const Quiz = () => {
  const questions = useQuizStore((store) => store.questions);
  const currentQuestion = useQuizStore((store) => store.currentQuestion);
  const question = questions[currentQuestion];
  const selectAnswer = useQuizStore((store) => store.selectAnswer);

  const createHandleOnClick = (index: number) => () => {
    if (question?.userSelectedAnswer || question?.userSelectedAnswer == 0)
      return;

    const isCorrectAnswer = selectAnswer(question.id, index);

    if (isCorrectAnswer) confetti();
  };

  const getBackgroundColor = (index: number): string => {
    if (question?.userSelectedAnswer === undefined) return "transparent";

    if (question.correctAnswer === index) return "green";

    if (question.userSelectedAnswer === index) return "red";

    return "transparent";
  };

  return (
    <Card>
      <CardHeader title={question.question} />
      <CardContent>
        <SyntaxHighlighter language="javascript" style={gradientDark}>
          {question.code}
        </SyntaxHighlighter>

        <QuizList disablePadding>
          {question.answers.map((answer, index) => (
            <QuizListItemButton
              key={`answer-${index}`}
              divider
              onClick={createHandleOnClick(index)}
              backgroundColor={getBackgroundColor(index)}
            >
              <ListItemText>{answer}</ListItemText>
            </QuizListItemButton>
          ))}
        </QuizList>
      </CardContent>
    </Card>
  );
};

export default Quiz;
