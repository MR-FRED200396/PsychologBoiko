import "./App.css";

import Main from "./components/main/Main";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Cours from "./components/main/Cours";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./components/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const navigation = {
  mainNav: [
    { link: "/", category: "Головна" },
    { link: "/cours", category: "Курс" },
    { link: "/about", category: "Про мене" },
    { link: "/contact", category: "Звязатись" },
  ],
};

function App() {
  return (
    <>
      <Router>
        <Header data={navigation}></Header>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
