import React from "react";
import styled from "@emotion/styled/macro";

export default function Form() {
  return <AddBtn>Add</AddBtn>;
}

const AddBtn = styled.button`
  background-color: #fada7a;
  margin: 12px 0;
  height: 64px;
  border: none;
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
`;
