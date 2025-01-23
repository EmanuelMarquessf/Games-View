import React, { useState } from "react";
import Input from "./Input";

function Chat() {
  const [active, setActive] = useState(false);
  const [typedText, setTypedText] = useState('')
  const [messages, setMessages] = useState(['teste', 'aaaa'])

  return (
    <div
      className={`fixed right-8 flex flex-col  bg-darkColdBlue-600 rounded border-t-1 border-x-1 transition-all duration-300 ease-in-out h-[500px] w-[364px] p-3 justify-between gap-10 ${
        active ? "bottom-0" : "-bottom-[450px]"
      }`}
    >
      <div className="cursor-pointer" onClick={() => setActive(!active)}>
        <span className="text-darkColdBlue-70 font-bold text-center cursor-pointer">
          Ask for IA
        </span>
      </div>
      {!messages ? (
        <div className="flex-1">Nothin Here</div>
      ) : (
        <div className="flex flex-col items-end gap-2">
          {messages.map(item => <p className="text-darkColdBlue-80 bg-darkColdBlue-300 py-1 px-2">{item}</p>)}
        </div>
      )}

      <div className="">
      <div className="flex items-center px-2  w-full bg-darkColdBlue-800 rounded-md text-lightColdBlue-200">
      <input
        placeholder="Search"
        className="px-2 py-3 w-[300px] border-none focus:outline-none font-normal bg-darkColdBlue-800"
        type="text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
      />
      <button onClick={() => setMessages([...messages, typedText]) }>-></button>
    </div>
      </div>
    </div>
  );
}

export default Chat;
