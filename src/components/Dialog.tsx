import { MdOutlineClose } from "react-icons/md";

const Dialog = ({ dialoghandler }: { dialoghandler: () => void }) => {
  function alertHandler() {
    const res = window.confirm(
      "or if you feel this closing icon could be inside the dialog, you can start from there on github"
    );
    if (res === true) {
      dialoghandler();
    }
  }
  return (
    <div
      className="h-screen content-center bg-opacity-75
     bg-black z-30 w-screen fixed font-sans  "
    >
      <div
        className="bg-slate-200 text-black m-auto relative  max-w-96 px-3 py-4 rounded-md
      "
      >
        <h3>
          Oh you want to add another tab, sorry!! I haven't coded that, if you
          think it's good to have then you can contribute on git hub. Here is
          the link to the repo --repo link--
        </h3>
        <div
          className="icon-round-box fixed bg-white top-0 right-0"
          onClick={alertHandler}
        >
          <MdOutlineClose className="icon-sm" />
        </div>
      </div>
    </div>
  );
};

export default Dialog;
