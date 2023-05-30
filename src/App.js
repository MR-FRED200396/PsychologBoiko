import "./App.css";

import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const navigation = {
  mainNav: [
    { link: "/", category: "Home" },
    { link: "/about", category: "About" },
    { link: "/contact", category: "Contact" },
  ],
};

function App() {
  return (
    <>
      <Router>
        <Header data={navigation}></Header>
        <Routes>
          <Route exact path="/" element={<Main />} />
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
