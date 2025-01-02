import {http, HttpResponse} from 'msw'

// auth
export const login = http.post('/api/auth/login', async ({request}) => {
  // request.body
  const {id, password} = await request.json()
  // database에서 id랑 password가 있는 데이터가 있는지 확인
  if(!id.includes('test') || !password.includes('test')) {
    return new HttpResponse('Bad Request', {
      status: 400
    })
    // status HTTP 통신의 응답 형태를 의미합니다.

    // reseon -> 디버깅이 쉬워짐, 사용자에게 적절한 안내를 분기할 수 있어요
    // e102345-3434 -> 비밀번호의 정규 표현식일 올바르지 않을 때 생기는 에러
    // server.response.passowrd.validate

    // 200 : OK
    // 204 : No Content

    // 400 : 잘못된 요청 
    // 401 : 인증되지 않은 회원
    // 403 : 권한이 없는 회원
    // 404 : 없는 리소스
    // 500 : 서버에서 발생한 에러 (예상하지 못하는 에러)

    // 에러코드는 자동으로 정해지는게 아니라 개발자가 임의로 정의해서 보내는 것
    // 이 상태를 반드시 지키면 RestFul, 협의가 된거라면 꼭 지킬 필요는 있지 않습니다
  }

  return HttpResponse.json({
    token: 'testToken' // 사용자의 고유한 값, 암호화 -> 백엔드에게 매 요청마다 전송
  })
})
  
export const logout = http.post('/api/auth/logout', () => {
  return HttpResponse.json({
    message: 'Ok'
  })
})