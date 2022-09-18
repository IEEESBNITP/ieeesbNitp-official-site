import { Route, Routes } from "react-router-dom"
import Navbar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home'
import AboutUs from "./pages/About/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import Membership from './pages/Membership/Membership'
import Events from './pages/Events/Events'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </>
  );
}

export default App;
