import { Container } from "@mui/material";
import styles from "./page.module.css";
import Game from "./components/game/Game";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="sm" className={styles.container}>
        <Game />
      </Container>
    </main>
  );
}
