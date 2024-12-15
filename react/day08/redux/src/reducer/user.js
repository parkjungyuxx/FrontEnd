export const userReducer = (state = [{ id: 1, name: "jungyu" }], action) => {
  switch (action.type) {
    case "add_user":
      return [...state, action.payload];
    case "delete_user":
      return [...state.filter((el) => el.name !== action.payload.name)];
    default:
      return state;
  }
};
