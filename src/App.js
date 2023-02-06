import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";

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
    </>
  );
}

export default App;
