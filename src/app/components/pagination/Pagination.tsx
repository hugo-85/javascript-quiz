import { useQuizStore } from "@/app/store/quiz";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

const Pagination = () => {
  const currentQuestion = useQuizStore((store) => store.currentQuestion) + 1;
  const questions = useQuizStore((store) => store.questions);
  const goPreviousQuestion = useQuizStore((store) => store.goPreviousQuestion);
  const goNextQuestion = useQuizStore((store) => store.goNextQuestion);
  const disabledPrev = currentQuestion === 1;
  const disabledNext = currentQuestion === questions.length;

  return (
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
      <IconButton
        aria-label="back"
        onClick={goPreviousQuestion}
        disabled={disabledPrev}
      >
        <ArrowBackIos />
      </IconButton>
      {`${currentQuestion} / ${questions.length}`}
      <IconButton
        aria-label="next"
        onClick={goNextQuestion}
        disabled={disabledNext}
      >
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  );
};

export default Pagination;
