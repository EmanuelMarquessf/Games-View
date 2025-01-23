import React from "react";
import { SendHorizontal } from "lucide-react";


function Input() {
  return (
    <div className="flex items-center px-2  w-full bg-darkColdBlue-800 rounded-md text-lightColdBlue-200">
      <input
        placeholder="Search"
        className="px-2 py-3 w-[300px] border-none focus:outline-none font-normal bg-darkColdBlue-800"
        type="text"
      />
      <SendHorizontal />
    </div>
  );
}

export default Input;
