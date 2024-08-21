const TerminalLogo = ({
  openTerminalHandler,
}: {
  openTerminalHandler: () => void;
}) => {
  return (
    <div
      className="w-16 h-16 animate-bounce absolute bottom-2 -z-10 right-[50%] bg-ubuntuApp bg-cover cursor-pointer"
      onClick={openTerminalHandler}
    ></div>
  );
};

export default TerminalLogo;
