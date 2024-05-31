import { Box, Stack } from "@mui/material";
import ResetButton from "../reset-button/ResetButton";
import useQuestionsInfo from "../hooks/useQuestionsInfo";

export default function Footer() {
  const { correctQuestions, wrongQuestions, unansweredQuestions } =
    useQuestionsInfo();

  return (
    <Stack gap={1} alignItems={"center"}>
      <Stack direction={"row"} gap={2}>
        <Box>✅ {`right: ${correctQuestions}`}</Box>
        <Box>❌ {`wrong: ${wrongQuestions}`}</Box>
        <Box>❔ {`unanswered: ${unansweredQuestions}`} </Box>
      </Stack>
      <ResetButton />
    </Stack>
  );
}
