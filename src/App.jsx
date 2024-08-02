import { useState, useEffect } from "react";
import Inputarea from "./components/Inputarea";
import Listdisplay from "./components/listdisplay";
function App() {
  const [newitems, setNewitem] = useState([]);
  function getitems(newname, newdate) {
    setNewitem((newitemset) => [
      ...newitemset,
      {
        name: newname,
        date: newdate,
      },
    ]);
  }

  function updatelist(item) {
    const updatedone = newitems.filter((i) => i.name != item);
    setNewitem(updatedone);
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setNewitem(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newitems));
  }, [newitems]);

  return (
    <>
      <h1 className="font-bold text-2xl text-center underline">
        Your ToDo list
      </h1>
      <div className="flex justify-center items-center mt-5">
        <div className="h-auto w-auto p-5 border-gray-700 border-2 ">
          <Inputarea onitemchange={getitems} />
          <Listdisplay listitems={newitems} handledelete={updatelist} />
        </div>
      </div>
    </>
  );
}

export default App;
