import React, { useContext } from "react";
import { ModalContext } from "../store/modalContext";

export default function ChildB() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  const handleClickOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return <button onClick={handleClickOpen}>open</button>;
}
