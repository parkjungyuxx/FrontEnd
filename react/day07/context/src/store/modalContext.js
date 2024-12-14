import { createContext, useState } from "react";

export const ModalContext = createContext();

// props 전달받지 않아도 <ModalProvider>자식</ModalProvider>
// 자식 => children으로 전달
const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
