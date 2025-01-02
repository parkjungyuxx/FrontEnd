import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * 사용자 목록은 전역 상태 관리되어야 한다는 판단이 생김
 * 사용자 목록은 서버에서 불러오는 데이터, 시간이, 성공과 실패가 나뉘어진다.
 * 시간이 소요되었을 때 -> 로딩 화면, 에러가 발생했을 때는 에러 메세지를 보여주어야함
 * 사용자 목록은 전역상태 관리되고 있기 때문에 이러한 로딩 상태나 에러 상태 역시 전역 상태 관리 되어야한다.
 */

// 일반적으로 redux toolkit을 사용했을 경우

/*
function getUser(){
try{
    dispatch(loadingUsers())
    const response = await axios.get()
    dispatch(getUser(response.data))   
} catch (error) {
    dispatch(errorUsers(error.response))
}
}

 ==> thunk는 고차함수를 통해서 이 세가지 dispatch 하나의 dispatch로 바꿔주는 함수 => 실제로 내부로직은 구현했어야했음
 ==> rtk로 넘어오면서 이런 로직이 모두 자동화
 ==> 순수 redux로 사용한 thunk를 보시면 아마 조금 헷갈릴 것
*/

// 여러분이 사용자한테 나 로딩중이야, 나 에러 발생했어 이렇게 대처해 --> ux
// 이러한 사항을 아렬주는데 만약 그 값이 전역 상태 관리되는 값이라면, dispatch 여러번 보내야해서 복잡하니까 thunk를 사용하는게 좋다
// 서버에서 받아온 값을 전역 상태 관리할 때에는 thunk를 같이 사용하는게 좋다

// 배운김에 프로젝트 까지는 필요없지만, 써봤다는 흔적 (flux 패턴 관ㄹ련해서 블로그 포스팅이나 간단한 토이 프로젝트 정도)

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [], // data
    getUsersState: {
      loading: false, // 로딩 여부
      done: false, // 성공과 실패 상관없이 데이터를 불러왔는지 여부
      error: null, // 에러 메세지 -> 에러 메시지가 있따면 에러가 발생한 상황이기 때문에 === 에러 여부
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.getUsersState.loading = true;
      // reset, 다시 데이터를 불러왔을 때 이전에 데이터를 불러온 결과를 초기화
      state.getUsersState.done = false;
      state.getUsersState.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.getUsersState.loading = false;
      state.getUsersState.done = true;
      state.users = action.payload; // createAsyncThunk의 return 값이 자동으로 action의 payload에 전달
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.getUsersState.loading = false;
      state.getUsersState.done = true;
      state.getUsersState.error = action.payload; // getUsers가 throw하는 에러를 자동으로 캐치하여 payload에 전달
    });
  },
});

// 부모 (부모에 넣는 상태가 굳이 몰라도 되는 상태라던지, 랜더링 이슈가 걱정이 된다던지) -> 전역 상태 관리
// 헤더 (목록의 개수를 숫자로 보여주어야한다)
// 목록 (목록의 개수를 헤더에 공유)

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("/api/user/list");
  return response.data;
});


// 이번주 할거 
// react-query, recoil, sotrybook, lint