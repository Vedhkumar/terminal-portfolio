import { useState } from "react";
import TerminalBody from "./TeminalBody";
import TerminalHeader from "./TerminalHeader";
import Dialog from "./Dialog";

const Terminal = ({
  closeTerminalHandler,
}: {
  closeTerminalHandler: () => void;
}) => {
  const [dialog, setDialog] = useState(false);

  function dialoghandler() {
    setDialog((pre) => !pre);
  }
  return (
    <>
      {dialog && <Dialog dialoghandler={dialoghandler} />}
      <main className="w-screen h-screen rounded-xl flex flex-col bg-green-300 ">
        <TerminalHeader
          closeTerminalHandler={closeTerminalHandler}
          dialoghandler={dialoghandler}
        />
        <div
          className="bg-black rounded-b-xl w-full overscroll-y-auto h-full 
        overflow-y-auto hide-scrollbar custom-scrollbar"
        >
          <TerminalBody />
        </div>
      </main>
    </>
  );
};

export default Terminal;
