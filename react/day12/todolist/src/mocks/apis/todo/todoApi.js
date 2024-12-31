import { http, HttpResponse } from "msw";

const mockDataTodoList = [
  {
    userId: "example",
    text: "example",
  },
];

// /api/todo
export const todoInfo = http.get("/api/todo", ({ request }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return new HttpResponse("Unauthorized", { status: 401 });
  }

  if (token !== "testToken") {
    return new HttpResponse("Forbidden", { status: 403 });
  }

  return new HttpResponse(
    JSON.stringify({
      nickName: "parkjungyu",
      profileImageUrl: "http://profile.com",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
});

// /api/todo/list
export const todoList = http.get("/api/todo/list", () => {
  return new HttpResponse(JSON.stringify(mockDataTodoList), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

// /api/todo
export const addTodo = http.post("/api/todo", async ({ request }) => {
  const newTodo = await request.json();

  mockDataTodoList.push({
    userId: newTodo.userId || `user-${Date.now()}`,
    text: newTodo.text,
  });

  return new HttpResponse(JSON.stringify(mockDataTodoList), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
});

// /api/todo/:userId
export const deleteTodo = http.delete("/api/todo/:userId", ({ params }) => {
  const { userId } = params;

  const index = mockDataTodoList.findIndex((todo) => todo.userId === userId);

  if (index !== -1) {
    mockDataTodoList.splice(index, 1);
    return new HttpResponse(JSON.stringify({ userId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new HttpResponse("Todo not found", { status: 404 });
});
