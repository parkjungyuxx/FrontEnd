import { http, HttpResponse } from "msw";


const mockDataUserList = [
  {
    userId: "example",
    nickName: "exmaple",
    profileImageUrl: 'example'
  }
]

/* 
 /api/user?token=testToken
 옳은 방법 아님 원래 token은 header에 전송되어야함
 아직 전송 방법을 모르니까 query paramerter로 대체
*/
export const userInfo = http.get('/api/user', ({request}) => {
  const url = new URL(request.url)
  const token = url.searchParams.get('token')

  // 로그인을 안한거
  if(!token) return new HttpResponse('Unauthorized', {
    status: 401
  })

  // 본인이 아닌건고
  if(token !== 'testToken') return new HttpResponse('Forbidden', {
    status: 403
  })

  // 성공
  return HttpResponse.json({
    nickName: "seongyong",
    profileImageUrl: "http://profile.com",
  })
})

/* /api/user/list */
export const userList = http.get('/api/user/list', () => {
  return HttpResponse.json(mockDataUserList)
})

/* /api/user */
export const addUser = http.post('/api/user', async({request}) => {
  const newUser = await request.json()

  mockDataUserList.push({
    userId: newUser.userId,
    nickName: newUser.nickName,
    profileImageUrl: 'example'
  })

  return HttpResponse.json(mockDataUserList)
})

/* /api/user/:userId */
export const deletUser = http.delete('/api/user/:userId', async({params})=> {
  const {userId} = params
  // 특정 배열에서 특정 요소 삭제하는 방법

  return HttpResponse.json({
    userId
  })
})

// query parameter(string)
// requset body
// requset parmeter

// thunk 생략 -> react-query

// thunk 보강 (1월 2일(목요일) 보강 에정 오후 8시~9시30분~10시)
// 비대면 (zoom), 녹화본 제공