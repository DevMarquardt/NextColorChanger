import { useState } from "react";

export default function GeneratorComponent() {
  const [cor, setCor] = useState("#0f172a")

  function mudaCor() {
    const corGerada = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCor(corGerada)

  }

  return (
    <>
      <header style={{ backgroundColor: cor }} className="bg-slate-900 h-20 flex items-center justify-center shadow-xl">
        <p className="flex justify-center text-4xl text-neutral-100">Press any key</p>
      </header>

      <div className="flex items-center flex-col p-32 " >
        <div style={{ backgroundColor: cor }} tabIndex='0' onKeyDown={mudaCor} className=" bg-slate-900 w-72 h-44 cursor-pointer rounded-3xl flex justify-center items-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <p className=" flex justify-center text-xl  text-bold  rounded-xl bg-black" id="text" style={{ color: cor }}>{cor.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex items-center flex-col p-32 ">
        <button type="button" disabled className="flex">
          <img src="https://o.remove.bg/downloads/765b179a-36ab-401c-afa2-1efb916905ef/SPIN-removebg-preview.png" class="animate-spin h-5 w-5 mr-3 ..." alt="" />
        </button>
      </div>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center p-32 justify-center ">

      <button className="p-3 bg-slate-900 text-white w-24 cursor-pointer rounded-3xl flex justify-center items-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">Não clique</button>
      <button className="p-3 bg-slate-900 text-white w-24 cursor-pointer rounded-3xl flex justify-center items-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">Não clique</button>
      <button className="p-3 bg-slate-900 text-white w-24 cursor-pointer rounded-3xl flex justify-center items-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">Não clique</button>

      </div>
      

    </>
  );
}