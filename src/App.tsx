import { useState } from "react";
import Terminal from "./components/Terminal";
import TerminalLogo from "./components/TerminalLogo";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openTerminalHandler() {
    setIsOpen((pre) => !pre);
  }
  return (
    <>
      <TerminalLogo openTerminalHandler={openTerminalHandler} />
      {isOpen && <Terminal closeTerminalHandler={openTerminalHandler} />}
    </>
  );
};

export default App;
