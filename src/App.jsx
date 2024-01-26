import Signup from "./Signup";
import Signin from "./Signin";
import Appbar from "./Appbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCourse from "./AddCourse";
import Courses from "./Courses";
import Course from "./Course";

function App() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#eeeeee",
          margin: 0,
        }}
      >
        <Router>
          <Appbar />
          <Routes>
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
