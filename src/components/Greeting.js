import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's a good day!</Output>}
      {changedText && <Output>Text is changed!</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
