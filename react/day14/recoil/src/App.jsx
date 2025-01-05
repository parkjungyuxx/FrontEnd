import Child from "./Child";
import "./App.css";
import Button from "./components/button/Button";
import { useRecoilState } from "recoil";
import { modalAtom } from "./atoms/modalAtom";

function App() {
  const [isOpen, setIsOpen] = useRecoilState(modalAtom);
  return (
    <>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close" : "Open"}
      </Button>
      <Child />
    </>
  );
}

export default App;
