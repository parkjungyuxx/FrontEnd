import React, { useState } from "react";
import * as style from "../emotion";

export default function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };

  return (
    <>
      <style.AddBtn onClick={openModal}>Add</style.AddBtn>
      {isModalOpen && <Modal />}
    </>
  );
}

const Modal = () => {
  return (
    <style.ModalContainer>
      <style.ModalContent>
        <style.ModalForm>
          <p>할일 제목</p>
          <input />

          <p>할일 </p>
          <input />
        </style.ModalForm>
      </style.ModalContent>
    </style.ModalContainer>
  );
};
