import React from "react";
import { commandsResponse } from "../../constants/PortfolioData";

const HelpResponse = () => {
  return (
    <section className="response">
      <p>Please try the below commands</p>
      <div>
        <ul>
          {commandsResponse.map((o) => (
            <li key={o.command} className="flex gap-5">
              <p className="text-yellow-400 ">{o.command}</p>
              <p>--{o.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HelpResponse;
