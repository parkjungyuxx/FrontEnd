import styled from "@emotion/styled/macro";

export const TodolistContainer = styled.div`
  width: 840px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #b1f0f7;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  box-sizing: border-box;
`;

export const TodoListHeader = styled.header`
  border-radius: 8px;
  background-color: #81bfda;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;
`;

export const FilterButton = styled.button`
  background-color: #81bfda;
  padding: 12px;
  border-radius: 4px;
  margin: 2px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fada7a;
  border-radius: 8px;
  padding: 32px;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;
`;

export const AddBtn = styled.button`
  background-color: #fada7a;
  margin: 12px 0;
  height: 64px;
  border: none;
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;

export const Ul = styled.ul`
  height: 100vh;
  background-color: #f5f0cd;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 8px;
`;

export const Li = styled.li`
  margin: 13px;
  background-color: #ffffff;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListBtn = styled.button`
  font-size: 28px;
  background-color: transparent;
  border: none;
`;

export const SubmitBtn = styled.button`
  height: 44px;
  background-color: #fada7a;
  border: none;
  border-radius: 8px;
`;

export const ListTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin-left: 12px;
`;
