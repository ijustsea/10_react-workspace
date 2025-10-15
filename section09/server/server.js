import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors()); // 모든 경로에 대해 CORS 허용
app.use(express.json());
// ... 나머지 코드는 동일하게 유지

let todos = [
  {
    id: 0,
    isDone: false,
    content: "키다리 아줌마",
    date: Date.now() + 14 * 24 * 60 * 60 * 1000,
  },
  {
    id: 1,
    isDone: false,
    content: "늙은 왕자",
    date: Date.now() + 14 * 24 * 60 * 60 * 1000,
  },
  {
    id: 2,
    isDone: false,
    content: "애기와 바다",
    date: Date.now() + 14 * 24 * 60 * 60 * 1000,
  },
];

// GET 메서드 지원
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST 메서드 지원
app.post("/todos", (req, res) => {
  const newTodo = { id: todos.length, ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT 메서드 지원
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, ...req.body } : todo
  );
  res.json(todos.find((todo) => todo.id === id));
});

// DELETE 메서드 지원
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).end();
});

// PATCH 메서드 지원
app.patch("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos[todoIndex] = { ...todos[todoIndex], ...req.body };
  res.json(todos[todoIndex]);
});

// OPTIONS 메서드 지원
app.options("/todos/:id", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Todo API Server is running!");
});
