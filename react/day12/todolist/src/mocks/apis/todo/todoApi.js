import { http, HttpResponse } from "msw";

const mockDataTodoList = [
  {
    id: "example",
    text: "example",
    editMode: false,
  },
];

// /api/user
export const userInfo = http.get("/api/todo", ({ request }) => {
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
export const getTodoList = http.get("/api/todo/list", () => {
  return new HttpResponse(JSON.stringify(mockDataTodoList), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

// /api/todo
export const addTodo = http.post("/api/todo", async ({ request }) => {
  const newTodo = await request.json();

  const todo = {
    id: String(Date.now()),
    text: newTodo.text,
    editMode: false,
  };

  mockDataTodoList.push(todo);

  return new HttpResponse(JSON.stringify(todo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
});

export const updateTodo = http.patch(
  "/api/todo/:id",
  async ({ params, request }) => {
    const { id } = params;
    const updates = await request.json();

    const todoIndex = mockDataTodoList.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return new HttpResponse("no todo", { status: 404 });
    }

    mockDataTodoList[todoIndex] = {
      ...mockDataTodoList[todoIndex],
      ...updates,
    };

    return new HttpResponse(JSON.stringify(mockDataTodoList[todoIndex]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
);

// /api/todo/:userId
export const deleteTodo = http.delete("/api/todo/:id", ({ params }) => {
  const { id } = params;

  const index = mockDataTodoList.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    mockDataTodoList.splice(index, 1);
    return new HttpResponse(JSON.stringify({ id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new HttpResponse("Todo not found", { status: 404 });
});
