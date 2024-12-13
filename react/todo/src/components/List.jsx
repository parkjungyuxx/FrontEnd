import React from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import * as style from "../emotion";

export default function List() {
  return (
    <style.Ul>
      <style.Li>
        <style.InputContainer>
          <input type="checkbox" />
          <p>하이</p>
        </style.InputContainer>
        <style.ButtonContainer>
          <style.ListBtn>
            <MdDeleteOutline />
          </style.ListBtn>
          <style.ListBtn>
            <MdOutlineEdit />
          </style.ListBtn>
        </style.ButtonContainer>
      </style.Li>
    </style.Ul>
  );
}
