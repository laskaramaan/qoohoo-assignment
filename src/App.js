import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Bootcamp from "./components/Bootcamp";
import Footer from "./components/Footer";

/* 
- Header
  -logo and name(left side )
  -prgrams
  -retreats
  -blogs
  -contact us 
  -login
-Body
  -section1
  -section2
  -section3
-Footer
 */

function App() {
  return (
    <>
      <Header />
      <Courses />
      <Bootcamp />
      <Footer />
    </>
  );
}

export default App;
