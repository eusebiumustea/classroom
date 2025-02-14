import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export const Home = memo(() => {
  return (
    <>
      <Header />;
      <div>
        <Outlet />
      </div>
    </>
  );
});
