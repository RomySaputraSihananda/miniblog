import Firewall from "./page/Firewall";
import About from "./page/About";
import Contact from "./page/Contact";
import Materi from "./page/Materi";
import Home from "./page/Home";
import Page404 from "./page/404";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="materi" element={<Materi />} />
      <Route path="materi/firewall" element={<Firewall />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
