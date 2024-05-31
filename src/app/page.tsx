"use client";

import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import JavaScriptLogo from "./components/JavaScriptLogo";
import styles from "./page.module.css";
import StartButton from "./components/start-button/StartButton";
import { useQuizStore } from "./store/quiz";
import Quiz from "./components/quiz/Quiz";
import Pagination from "./components/pagination/Pagination";
import Footer from "./components/footer/Footer";

export default function Home() {
  const questions = useQuizStore((store) => store.questions);

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <main className={styles.main}>
      <Container maxWidth="sm" className={styles.container}>
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
            <Typography variant={matches ? "h2" : "h4"}>
              Javascript Quiz
            </Typography>
          </Stack>

          {questions.length > 0 && <Pagination />}

          {questions.length === 0 && <StartButton />}
          {questions.length > 0 && <Quiz />}
          {questions.length > 0 && <Footer />}
        </Stack>
      </Container>
    </main>
  );
}
