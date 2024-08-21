import React, { useEffect, useRef, useState } from "react";
import { commandsResponse } from "../constants/PortfolioData";
import { listOfCommand } from "../constants/listOfCommands";
import HelpResponse from "./responses/HelpResponse";
import ResumeResponse from "./responses/ResumeResponse";
import ProjectsResponse from "./responses/ProjectsResponse";
import AboutResponse from "./responses/AboutResponse";
import ContactResponse from "./responses/ContactResponse";
import SkillsRespose from "./responses/SkillsRespose";
import TerminalArrow from "./TerminalArrow";

const TerminalBody = () => {
  const [allCommands, setAllCommands] = useState<string[]>([""]);

  function addCommand(command: string) {
    setAllCommands((pre) => [...pre, command]);
  }

  function clearCommandHandler() {
    setAllCommands([""]);
  }
  return (
    <>
      {allCommands.map((command: string, i: number) => (
        <TerminalBlock
          key={i}
          previousCommand={command}
          addCommand={addCommand}
          clearCommandHandler={clearCommandHandler}
        />
      ))}
    </>
  );
};

const TerminalBlock = ({
  previousCommand,
  addCommand,
  clearCommandHandler,
}: {
  previousCommand: string;
  addCommand: (command: string) => void;
  clearCommandHandler: () => void;
}) => {
  const [command, setCommand] = useState<string>("");
  const [active, setActive] = useState(true);
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        setCommand("");
        setActive(true);
        clearCommandHandler();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [clearCommandHandler]);

  function onKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e);
    if (e.key === "Enter") {
      // incCommand();
      addCommand(command);
      setActive(false);
    }
  }

  function onChangehandler(e: React.ChangeEvent<HTMLInputElement>) {
    setCommand(e.target.value);
  }
  return (
    <div className="mb-1 w-full">
      <div className="flex items-center  w-full">
        <TerminalArrow />
        <Input
          active={active}
          command={command}
          onKeyDownHandler={onKeyDownHandler}
          onChangehandler={onChangehandler}
        />
      </div>
      {!active && <Response command={command} />}
    </div>
  );
};

const Input = ({
  active,
  onChangehandler,
  command,
  onKeyDownHandler,
}: {
  active: boolean;
  onChangehandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  command: string;
  onKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus(); // Focus the input field when it's active
    }
  }, [active]);
  return (
    <div className="-translate-x-3 h-[32px] w-full">
      <input
        className=" text-white border-none bg-transparent placeholder-transparent caret-green-700 outline-none h-[32px] w-full "
        ref={inputRef}
        type="text"
        disabled={!active}
        value={command}
        onChange={onChangehandler}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};

const Response = ({ command }: { command: string }) => {
  if (listOfCommand.includes(command)) {
    switch (command) {
      case "help":
        return <HelpResponse />;
      case "resume":
        return <ResumeResponse />;
      case "projects":
        return <ProjectsResponse />;
      case "about":
        return <AboutResponse />;
      case "contact":
        return <ContactResponse />;
      case "skills":
        return <SkillsRespose />;
      case "clear":
        return <></>;
    }
  } else {
    return <div> vedh kumar: command not found: {command}, try help</div>;
  }
  return null;
};

export default TerminalBody;
