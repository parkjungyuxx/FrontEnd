import { http, HttpResponse } from "msw";

const mockDataUserList = [
  {
    userId: "example",
    nickName: "example",
    profileImageUrl: "example",
  },
];

// /api/user?token=testToken
// 옳은 방법 아님 원래 token은 header에 전송되어야 함
// 아직 전송 방법을 모르니깐 query parameter로 대체
export const userInfo = http.get("/api/user", ({ request }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  // 로그인 안한거
  if (!token) return new HttpResponse("Unauthorized", { status: 401 });

  // 본인이 아닌거고
  if (token !== "testToken")
    return new HttpResponse("Forbidden", { status: 403 });

  // 성공
  return HttpResponse.json({
    nickName: "parkjungyu",
    profileImageUrl: "http://profile.com",
  });
});

/** /api/user/list */
export const userList = http.get("/api/user/list", () => {
  return HttpResponse.json(mockDataUserList);
});

/** /api/user */
export const addUser = http.post("/api/user", async ({ request }) => {
  const newUser = await request.json();

  mockDataUserList.push({
    userId: newUser.userId,
    nickName: newUser.nickName,
    profileImageUrl: "example",
  });

  return HttpResponse.json(mockDataUserList);
});

/** /api/user/:userId */
export const deleteUser = http.delete(
  "/api/user/:userId",
  async ({ params }) => {
    const {userId} = params

    return HttpResponse.json({
        userId
    })
  }
);

// query parameter(string)
// request body
// request parameter

// 과제 투두리스트 만들기