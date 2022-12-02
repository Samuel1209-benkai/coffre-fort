import React from "react";

function Corbeille (){
    return( <div className="p-10">
        <div className=" flex justify-between items-right">
    <h1 className="text-sky-900 text-xl font-semibold ">CORBEILLE</h1>
        <div className="text-sm">
            <button className="border p-2  text-sky-900 border-sky-700 mx-4 rounded px-6 ">
               Tout  restorer 
            </button>
        <button className=" border p-2 px-6 mx-4 bg-sky-900 text-white rounded mx-4">
            Vider la corbeille 
        </button>
        </div>
        </div>
    <div className=" mt-6 p-28 flex items-center justify-center ">
        <img src="doc4.svg" alt=""/> 
         </div>
</div>);
}

export default Corbeille