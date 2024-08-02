import React, { useRef } from "react";

export default function Inputarea({ onitemchange }) {
  const getname = useRef();
  const getdate = useRef();
  function handlechange() {
    const name = getname.current.value;
    const date = getdate.current.value;
    getname.current.value = "";
    getdate.current.value = "";
    onitemchange(name, date);
  }

  return (
    <>
      <div className="flex flex-row space-x-2 justify-center items-center ">
        <div>
          <input
            type="text"
            ref={getname}
            placeholder="Enter to do here"
            className="border-black border-2 h-[1.8rem]"
          />
        </div>
        <div>
          <input
            type="date"
            ref={getdate}
            className="border-black border-2 rounded-md"
          />
        </div>
        <div>
          <button
            className="bg-blue-600 text-white p-[0.22rem] rounded-md "
            onClick={() => handlechange()}
          >
            Add item
          </button>
        </div>
      </div>
    </>
  );
}
