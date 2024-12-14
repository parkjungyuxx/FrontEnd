import React, { useContext } from "react";
import { ModalContext } from "../store/modalContext";


// 고려
/**
 * 모달 종류가 100개야 글면 120개의 모달 전역 상태가 생성되어야하나?
 * 생각해보고 고려해보아라
 * 
 * createProtal, key, overlay, dialog element
 */
export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    openModal,
    closeModal,
  };
}
