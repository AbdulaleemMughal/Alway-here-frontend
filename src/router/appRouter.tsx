import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "../pages/Main";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { Design } from "../pages/Design";
import { Contact } from "../pages/Contact";
import { MemorialSite } from "../pages/MemorialSite";
import { WriteObituary } from "../pages/WriteObituary";
import { DealingGrief } from "../pages/Dealinggrief";
import { MemorialFlower } from "../pages/MemorialFlower";
import { FAQ } from "../pages/FAQ";
import { Signup } from "../pages/Signup";
import { ForgetPassword } from "../pages/ForgetPassword";
import { Account } from "../pages/Account";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore";

export const AppRouter = () => {
  const isLoggedInUser = useSelector((store: RootState) => store.user.user);

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="design" element={<Design />} />
        <Route path="contact" element={<Contact />} />
        <Route path="memorialsite" element={<MemorialSite />} />
        <Route path="write-obituary" element={<WriteObituary />} />
        <Route path="dealing-grief" element={<DealingGrief />} />
        <Route path="memorial-flowers" element={<MemorialFlower />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route
          path="account"
          element={!isLoggedInUser ? <Navigate to="/login" /> : <Account />}
        />
      </Route>
    </Routes>
  );
};
