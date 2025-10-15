import { Route, Routes } from "react-router-dom";
import { MainPage } from "./view/pages/mainPage/MainPage";
import { SignInPage } from "./view/pages/signInPage/SignInPage";

const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>

    </>
  );
};

export default AppRouter;
