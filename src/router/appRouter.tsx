import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore";

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
import { UpdateProfile } from "../pages/UpdateProfile";
import { Memorial } from "../pages/Memorial";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedInUser = useSelector((store: RootState) => store.user.user);

  if (isLoggedInUser === null) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export const AppRouter = () => {
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
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="update_profile"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="memorial/:id"
        element={
          <ProtectedRoute>
            <Memorial />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

// 66a889a66f3cf51ca1be87dd
