import { useState } from "react";

export default function GeneratorComponent() {
  const [cor, setCor] = useState("#0f172a")

  function mudaCor() {
    const corGerada = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCor(corGerada)

  }
  
  return (
    <>
      <header style={{ backgroundColor: cor }} className="bg-slate-900 h-20 flex items-center justify-center ">
        <p className="flex justify-center text-4xl text-neutral-100">Press any key</p>
      </header>

        <div className="flex items-center flex-col p-32" >
          <div style={{ backgroundColor: cor }} tabIndex='0' onKeyDown={mudaCor} className=" bg-slate-900 w-72 h-44 cursor-pointer rounded-3xl flex justify-center items-center shadow-xl">
          </div>
          <p className=" text-xl" style={{ color: cor, }}>{cor}</p>
        </div>
    </>
  );
}