import { Outlet } from "react-router-dom";

const DNLayout = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default DNLayout;
