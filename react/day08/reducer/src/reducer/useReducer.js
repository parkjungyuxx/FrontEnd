const userReducer = (state, action) => {
  // 분기 생성하고 해당 userReducer 함수가 반환하는 값이 곧 상태로 업데이트 (setState)
  switch (action.type) {
    case "add_user":
      return [...state, action.payload];
    case "delete_user":
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
};

export default userReducer;
