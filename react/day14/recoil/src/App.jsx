import Child from "./Child";
import "./App.css";

import { useRecoilState } from "recoil";
import { modalAtom } from "./atoms/modalAtom";
import DNButton from "./components/button/Button";

function App() {
  const [isOpen, setIsOpen] = useRecoilState(modalAtom);
  return (
    <>
      <DNButton size="large" isActive={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close" : "Open"}
      </DNButton>
      <Child />
    </>
  );
}

export default App;
