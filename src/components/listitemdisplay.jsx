import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { TiStarOutline } from "react-icons/ti";
import { Tooltip } from "@material-tailwind/react";
export default function Listitemdisplay({ index, name, date, handledelete }) {
  const [val, setVal] = useState("0");
  function checkclick() {
    if (val === "0") {
      setVal("1");
    } else {
      setVal("0");
    }
  }
  function handle(name) {
    handledelete(name);
    setVal("0");
  }
  return (
    <>
      <div className="grid grid-cols-3 bg-orange-300 p-2 rounded-full">
        <div className="text-left">
          <p className="text-base font-medium text-gray-9000 mt-1">
            {`${index + 1}) `}
            {name[0].toUpperCase() + name.slice(1)}
          </p>
        </div>
        <div className="text-center mt-1">
          <p>{date}</p>
        </div>
        <div className="text-right">
          <button
            className="bg-red-600 p-1 w-fit rounded-md"
            onClick={() => handle(name)}
          >
            Delete
          </button>
          <Tooltip content="Important!" placement="bottom">
            <button className=" p-1 w-fit rounded-md ml-2" onClick={checkclick}>
              {(val === "0" && <TiStarOutline />) ||
                (val === "1" && <FaStar />)}
            </button>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
