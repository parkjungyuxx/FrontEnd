export const userReducer = (state = [{ id: 1, name: "jungyu" }], action) => {
  switch (action.type) {
    case "add_user":
      return [...state, action.payload];
    default:
      return state;
  }
};
