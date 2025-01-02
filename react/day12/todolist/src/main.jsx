import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

const enableMocking = async () => {
  if (import.meta.env.PROD) return;
  const { worker } = await import("./mocks/browser.js");
  // 개발환경에서만 번들링에 포함시키기 위해 동적 임포팅
  return worker.start();
};

enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
});
