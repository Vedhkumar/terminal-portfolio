import TerminalArrow from "./TerminalArrow";

const TerminalBody = () => {
  return (
    <>
      <TerminalBlock />
    </>
  );
};

const TerminalBlock = () => {
  return (
    <div className="mb-1 w-full">
      <div className="flex items-center  w-full">
        <TerminalArrow />
      </div>
    </div>
  );
};

export default TerminalBody;
