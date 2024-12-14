import logo from "./logo.svg";
import "./App.css";
import ModalProvider from "./store/modalContext";
import Parent from "./components/Parent";

function App() {
  return (
    <ModalProvider>
      <Parent />
    </ModalProvider>
  );
}

export default App;
