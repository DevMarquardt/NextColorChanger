import { useState } from "react";

export default function GeneratorComponent() {
  const [cor, setCor] = useState("#0f172a");

  function mudaCor() {
    const corGerada = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCor(corGerada);
  }

  const backgroundImageUrl = "https://i.redd.it/u2klg77z1kr51.jpg";

  return (
    <>
      <header style={{ backgroundColor: cor }} className="bg-slate-900 h-20 flex items-center justify-center shadow-xl transition ease-in-out">
        <p className="flex justify-center text-4xl text-neutral-100">Press any key</p>
      </header>

      <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="flex items-center flex-col p-32">
          <div
            style={{ backgroundColor: cor }}
            tabIndex="0"
            onKeyDown={mudaCor}
            className="bg-slate-900 w-72 h-44 cursor-pointer rounded-3xl flex justify-center items-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <p className="flex justify-center text-xl text-bold rounded-xl bg-black" id="text" style={{ color: cor }}>
              {cor.toUpperCase()}
            </p>
          </div>
          <button type="button" disabled className="flex my-4">
            <img src="https://cdn.icon-icons.com/icons2/933/PNG/512/round-data-usage-symbol_icon-icons.com_72594.png" className="animate-spin h-10 w-10" alt="" />
          </button>
        </div>
      </div>
      <footer style={{ backgroundColor: cor }} className="bg-slate-900 h-16 flex items-center justify-center shadow-xl transition ease-in-out">

      </footer>
    </>
  );
}
