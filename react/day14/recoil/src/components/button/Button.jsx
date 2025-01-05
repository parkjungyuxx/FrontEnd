// import PropsTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;

// 받아야 하는 Property의 자료형을 명시해주는 것이 lint의 기본 옵션
// Button.propTypes = {
//   children: PropsTypes.element,
// };

// 끄려면 eslint.config.js 파일 가서 'react/prop-types' : off
