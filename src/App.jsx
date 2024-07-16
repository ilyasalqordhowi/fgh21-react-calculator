import React from "react";

function App() {
  return (
    <div className="flex flex-col m-20  items-center">
      <div className="w-full max-w-[300px] h-[500px] bg-black flex flex-col rounded-2xl">
        <div className="text-white p-5 text-5xl text-right">0</div>
        <div className="grid grid-cols-4 gap-5 p-5">
          <button className="w-[55px] text-black bg-zinc-500 h-[55px] font-bold rounded-full ">
            AC
          </button>
          <button className="w-[55px] text-black bg-zinc-500 h-[55px] font-bold rounded-full ">
            +/-
          </button>
          <button className="w-[55px] text-black bg-zinc-500 h-[55px] font-bold rounded-full ">
            %
          </button>
          <button className="w-[55px] text-white bg-orange-600 h-[55px] font-bold rounded-full ">
            ÷
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            7
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            8
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            9
          </button>
          <button className="w-[55px] text-white bg-orange-600 h-[55px] font-bold rounded-full ">
            ×
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            4
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            5
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            6
          </button>
          <button className="w-[55px] text-white bg-orange-600 h-[55px] font-bold rounded-full ">
            -
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            1
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            2
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            3
          </button>
          <button className="w-[55px] text-white bg-orange-600 h-[55px] font-bold rounded-full ">
            +
          </button>
          <button className="text-white bg-stone-800 h-[55px] rounded-full col-span-2 w-full font-bold flex items-center pl-6 ">
            0
          </button>
          <button className="w-[55px] text-white bg-stone-800 h-[55px] font-bold rounded-full ">
            .
          </button>
          <button className="w-[55px] text-white bg-orange-600 h-[55px] font-bold rounded-full ">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
