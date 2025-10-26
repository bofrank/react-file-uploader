import { useState, useRef } from 'react';

function App() {

  const inputButton = useRef();

  function onHandleClick(){
    //console.log("hello");
    inputButton.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={inputButton} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={onHandleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;