import "./App.css";
import Form from "./Form";
import Form1 from "./Form1";
import FormikFieldArray from "./FormikFieldArray";
import DoctorList from "./DoctorList";
import Modalpage from "./Modalpage";
import Register from "./Register";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";

function App() {
  const access = localStorage.getItem("token");
  console.log("token", access);
  return (
    <div className="App">
      {/* <Form />
      <Form1 />
      <FormikFieldArray />
      <DoctorList />
      <Modalpage /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          {access !== null ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/" element={<Register />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
