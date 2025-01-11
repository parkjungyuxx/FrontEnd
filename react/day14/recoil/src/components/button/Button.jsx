// import PropsTypes from "prop-types";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DNButton = ({ children, size, isActive, props }) => {
  return (
    <Button size={size} isActive={isActive} {...props}>
      {children}
    </Button>
  );
};

export default DNButton;

const sizeCSS = {
  xSmall: css`
    padding: 8px;
    font-size: 12px;
  `,
  small: css`
    padding: 12px;
  `,
  medium: css`
    padding: 16px;
    font-size: 20px;
  `,
  large: css`
    padding: 20px;
    font-size: 24px;
  `,
};

const Button = styled.button`
  ${(props) => sizeCSS[props.size]}
  ${(props) =>
    props.isActive &&
    css`
      background-color: red;
      color: #fff;
    `}
`;

// 받아야 하는 Property의 자료형을 명시해주는 것이 lint의 기본 옵션
// Button.propTypes = {
//   children: PropsTypes.element,
// };

// 끄려면 eslint.config.js 파일 가서 'react/prop-types' : off
