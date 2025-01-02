import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// mocking api server를 실행하는 역할
export const worker = setupWorker(...handlers)

// 1. 실행을 위해 필요한 파일을 다운 받고
// 2. mock api를 등록하기 위한 공간을 생성 (handlers)
// 3. 실제로 mocking server를 실행해줄 worker를 세팅 (broswer)
// 4. main.jsx(index.js)에서 실행만 해주면 끝