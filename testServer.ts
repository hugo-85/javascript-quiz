import { testQuestions } from "./src/app/libs/helpers";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("http://localhost:3000/data.json", () => {
    return HttpResponse.json(testQuestions);
  }),
  http.get("*", ({ request }) => {
    console.log(`Should config an entry for ${request.url}`);
    return HttpResponse.json();
  })
);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});
beforeEach(() => {
  server.resetHandlers();
});

export { server };
