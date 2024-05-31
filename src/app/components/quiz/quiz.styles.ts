import { List, ListItemButton, styled } from "@mui/material";

export const QuizList = styled(List)({
  marginTop: "20px",
});

type QuizListItemButtonProps = {
  backgroundColor: string;
};

export const QuizListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})<QuizListItemButtonProps>(({ backgroundColor }) => ({
  backgroundColor: backgroundColor,
}));
