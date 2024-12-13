import React from "react";
import styled from "@emotion/styled/macro";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

export default function List() {
  return (
    <Ul>
      <Li>
        <InputContainer>
          <input type="checkbox" />
          <p>하이</p>
        </InputContainer>
        <ButtonContainer>
          <ListBtn>
            <MdDeleteOutline />
          </ListBtn>
          <ListBtn>
            <MdOutlineEdit />
          </ListBtn>
        </ButtonContainer>
      </Li>
    </Ul>
  );
}

const Ul = styled.ul`
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

const Li = styled.li`
  margin: 13px;
  background-color: #ffffff;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListBtn = styled.button`
  font-size: 28px;
  background-color: transparent;
  border: none;
`;
