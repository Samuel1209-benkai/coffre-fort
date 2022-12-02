import React from "react";

function  DocumentRH() { 
    return (<div className="p-10">
               <div className="flex justify-between">
    <h1 className="text-sky-900 text-xl font-semibold ">DOCUMENTS</h1>
    <div className="text-sm flex">
          
        <button className=" border p-2 px-6 mx-4 bg-sky-900 text-white rounded mx-4 flex">
            <span className="p-0 mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
            </span>
         Ajouter un document
        </button>
        </div>
        </div>
    <div className=" mt-6 p-28 flex-col flex items-center justify-center ">
        <img src="doc2.svg" alt=""/> 
        <p className="text-gray-500 m-4 text-xl"> Vous n'avez  aucun document</p>
         </div>
    </div>);
 }


 export default DocumentRH