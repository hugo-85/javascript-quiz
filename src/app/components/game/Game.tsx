"use client";

import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import StartButton from "../start-button/StartButton";
import { useQuizStore } from "../../store/quiz";
import Quiz from "../quiz/Quiz";
import Pagination from "../pagination/Pagination";
import Footer from "../footer/Footer";
import JavaScriptLogo from "../JavaScriptLogo";

export default function Game() {
  const questions = useQuizStore((store) => store.questions);

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Stack gap={2} justifyContent={"center"} alignItems={"center"}>
      <Stack
        direction={"row"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box flexShrink={0}>
          <JavaScriptLogo />
        </Box>
        <Typography variant={matches ? "h2" : "h4"}>Javascript Quiz</Typography>
      </Stack>

      {questions.length > 0 && <Pagination />}

      {questions.length === 0 && <StartButton />}
      {questions.length > 0 && <Quiz />}
      {questions.length > 0 && <Footer />}
    </Stack>
  );
}
