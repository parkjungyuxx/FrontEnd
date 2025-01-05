import { useRecoilValue, useSetRecoilState } from "recoil";
import Button from "./components/button/Button";
import { modalAtom } from "./atoms/modalAtom";

const Child = () => {
  const isOpen = useRecoilValue(modalAtom);
  //   const setIsOpen = useSetRecoilState(modalAtom);
  return <Button>{isOpen ? "Close" : "Open"}</Button>;
};

export default Child;
