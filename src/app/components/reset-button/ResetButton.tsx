import { useQuizStore } from "@/app/store/quiz";
import { Button } from "@mui/material";

export default function ResetButton() {
  const reset = useQuizStore((store) => store.reset);

  return (
    <Button onClick={reset} variant="outlined">
      Reset
    </Button>
  );
}
