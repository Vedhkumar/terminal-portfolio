import { MdOutlineClose } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
const TerminalHeader = ({
  closeTerminalHandler,
  dialoghandler,
}: {
  closeTerminalHandler: () => void;
  dialoghandler: () => void;
}) => {
  return (
    <div className="flex p-2 bg-[#222222] rounded-t-xl text-white justify-between items-center h-[50px] w-full border-b-2 border-b-black ">
      <div className="flex gap-[1.5px]">
        <div className="icon-square-box rounded-r-none" onClick={dialoghandler}>
          <FiPlus className="icon-lg" />
        </div>
        <div className="icon-square-box rounded-l-none">
          <GoTriangleDown className="icon-lg" />
        </div>
      </div>
      <h1>Vedh Kumar</h1>
      <div className="flex items-center gap-2 ">
        <div className="icon-square-box">
          <AiOutlineSearch className="icon-lg" />
        </div>
        <div className="icon-square-box">
          <HiOutlineDotsHorizontal className="icon-lg" />
        </div>
        <div className="flex ml-2 gap-4">
          <div className="icon-round-box" onClick={closeTerminalHandler}>
            <LuMinus className="icon-sm" />
          </div>
          <div className="icon-round-box">
            <MdCheckBoxOutlineBlank className="icon-sm" />
          </div>
          <div className="icon-round-box" onClick={closeTerminalHandler}>
            <MdOutlineClose className="icon-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
