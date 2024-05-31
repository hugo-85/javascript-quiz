import { useQuizStore } from "@/app/store/quiz";
import { Button } from "@mui/material";

const StartButton = () => {
  const fetchQuestions = useQuizStore((store) => store.fetchQuestions);

  const handleOnClick = () => {
    fetchQuestions(10);
  };

  return (
    <Button variant="contained" onClick={handleOnClick}>
      Start!
    </Button>
  );
};

export default StartButton;
