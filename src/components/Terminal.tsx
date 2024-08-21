import TerminalBody from "./TeminalBody";
import TerminalHeader from "./TerminalHeader";

const Terminal = () => {
  return (
    <>
      <main className=" w-[600px] h-[600px] m-10 rounded-xl flex flex-col bg-green-300 ">
        <TerminalHeader />
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
