import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Design } from "./pages/Design";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { MemorialSite } from "./pages/MemorialSite";
import { WriteObituary } from "./pages/WriteObituary";
import { DealingGrief } from "./pages/Dealinggrief";
import { MemorialFlower } from "./pages/MemorialFlower";
import { FAQ } from "./pages/FAQ";
import { Signup } from "./pages/Signup";
import { ForgetPassword } from "./pages/ForgetPassword";

function App() {
  return (
    <>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
