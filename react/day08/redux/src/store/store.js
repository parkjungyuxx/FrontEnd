import { createStore } from "redux";
import { rootReducer } from "../reducer/root";

export const store = createStore(
  // 저장소(reducer)들을 하나로 합친 값
  rootReducer
  // option,
  // logger, devtools 사용할 건지
);
