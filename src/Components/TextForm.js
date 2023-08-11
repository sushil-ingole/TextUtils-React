import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase.", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared all text.", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container"
        style={{
          backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
          color: props.mode === 'dark' ? 'white' : 'black'
        }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'black' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            value={text}
            rows="3"
            placeholder="Enter text here"
          ></textarea>
          <button className="btn btn-primary btn-sm mt-3 me-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary btn-sm mt-3 me-3" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary btn-sm mt-3 me-3" onClick={handleClearClick}>
            Clear text
          </button>
        </div>
        <div className="container my-3"
          style={{
            backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}>
          <h1> Your text summary</h1>
          <p>{text.split(" ").filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters.</p>
          <p>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} Minutes required to read.</p>
          <h2>Preview</h2>
          <hr />
          <strong>{text ? text : 'Nothing to preview here, please enter some text.'}</strong>
        </div >
      </div>
    </>
  );
}
