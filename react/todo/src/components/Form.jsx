import React, { useState } from "react";
import * as style from "../emotion";
import Modal from "../components/Modal";

export default function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };

  return (
    <>
      <style.AddBtn onClick={openModal}>Add</style.AddBtn>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}
