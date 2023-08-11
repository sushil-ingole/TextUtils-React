import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled.", "success");
    }
  };
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils1" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} />
      {/* <Routes>
          <Route
            path="/"
            element={
              <div
                className="py-3"
                style={{
                  backgroundColor: mode === 'dark' ? '#042743' : 'white',
                  color: mode === 'dark' ? 'white' : 'black'
                }}
              > */}
      <div
        className="py-1"
        style={{
          backgroundColor: mode === 'dark' ? '#042743' : 'white',
          color: mode === 'dark' ? 'white' : 'black',
          height: "100vh"
        }}
      >
        <TextForm
          heading="Enter the text to analyze."
          mode={mode}
          showAlert={showAlert}
          toggleMode={toggleMode}
        />
      </div>
      {/* </div>
            }
          />
          <Route
            path="/about"
            element={ */}
      {/* <About /> */}
      {/* }
           />
         </Routes>
       </BrowserRouter> */}
    </>
  );
}

export default App;