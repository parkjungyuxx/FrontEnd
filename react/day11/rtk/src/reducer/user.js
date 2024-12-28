import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: [{id: 1, name: 'jungyu'}],
    // switch 문 대신
    reducers: {
        // key: action callback (불변성 지킬 필요없음)
        // dispatch(addUser(payload))
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions

// dispatch(addUser(payload)) <-- import
// type명을 string으로 받지 않아 휴먼 에러 발생성이 적음

// rtk가 근본적으로 해결하려고 했던 것은 ---> redux를 썼을 때의 불편했던 점
// 이것만 해결하면 노잼이라 다른것도 지원 thunk

// 백엔드에 요청한다는 것은 시간이 소요
// 요청 -> 로딩 (true) -> 요청결과 -> 성공 혹은 실패 -> 로딩(false)
// dispatch dispatch dispatch dispatch dispatch
// 이 dispatch 요청을 한번에 쉽게 -> 자동화

// thunk - react-query @tanstack/query
// rtk-query

