import { useContext, useState } from "react";
import { ModalContext } from "../store/modalContext";

export default function ChildA() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  const handleClickOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <button onClick={handleClickOpen}>
        {isModalOpen ? "close" : "open"}
      </button>
      {isModalOpen && <>modal</>}
    </>
  );
}
