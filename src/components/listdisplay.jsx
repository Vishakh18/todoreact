import React from "react";
import Listitemdisplay from "./listitemdisplay";

export default function Listdisplay({ listitems, handledelete }) {
  return (
    <>
      <div className="space-y-2 mt-4 ">
        {listitems.map((e, index) => {
          return (
            <Listitemdisplay
              index={index}
              name={e.name}
              date={e.date}
              handledelete={handledelete}
            />
          );
        })}
      </div>
    </>
  );
}
