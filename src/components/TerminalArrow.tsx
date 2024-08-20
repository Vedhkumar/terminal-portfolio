const TerminalArrow = () => {
  return (
    <div className="h-[32px] w-fit  flex">
      <div className="flex z-20 items-center ">
        <div className="bg-[#3f37c9] content-center text-black font-bold pl-2 h-full">
          vedhkumar
        </div>
        <div className="triangle border-l-[#3f37c9]  "></div>
      </div>
      <div className="flex -translate-x-10 z-10">
        <div className="bg-[#f72585] w-[200px] h-full"></div>
        <div className="triangle border-l-[#f72585] "></div>
      </div>
    </div>
  );
};

export default TerminalArrow;
