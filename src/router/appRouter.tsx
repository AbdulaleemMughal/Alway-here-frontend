import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore";

import { Main } from "../pages/Main";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { MemorialSite } from "../pages/MemorialSite";
import { WriteObituary } from "../pages/WriteObituary";
import { DealingGrief } from "../pages/Dealinggrief";
import { MemorialFlower } from "../pages/MemorialFlower";
import { FAQ } from "../pages/FAQ";
import { Signup } from "../pages/Signup";
import { ForgetPassword } from "../pages/ForgetPassword";
import { UpdateProfile } from "../pages/UpdateProfile";
import { Memorial } from "../pages/Memorial";
import { Dashboard } from "../pages/Dashboard";
import { LivePage } from "../pages/LivePage";
import { lazy, Suspense } from "react";
const Account = lazy(() => import("../pages/Account"));
const Design = lazy(() => import("../pages/Design"));

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
        <Route
          path="design"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Design />
            </Suspense>
          }
        />
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
              <Suspense fallback={<div>Loading...</div>}>
                <Account />
              </Suspense>
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
        <Route
          path="dashboard/:memorialId"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="live/:memorialId"
        element={
          <ProtectedRoute>
            <LivePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="memorial/:memorialId"
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
