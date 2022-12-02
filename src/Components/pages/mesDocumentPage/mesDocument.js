import React from "react";
import {Link} from "react-router-dom"

function MesDocument() {
    return (<div className="p-10">
        <div className="flex justify-between">
            <h1 className="text-sky-900 text-xl font-semibold ">MES DOCUMENTS</h1>
            <div className="text-sm flex">
                <button className="border p-2 flex text-sky-900 border-sky-700 mx-4 rounded px-6 ">
                    <span className="mx-1 p-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 26" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                    </span>
                    Creer un dossier
                </button>
                <button className=" border p-2 px-6 mx-4 bg-sky-900 text-white rounded mx-4 flex">
                    <span className="p-0 mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </span>
                    <Link to ="">
                    Ajouter un document
                    </Link>
                </button>
            </div>
        </div>
        <div className=" mt-6 p-28 flex-col flex items-center justify-center ">
            <img src="doc2.svg" alt="" />
            <p className="text-gray-500 m-4 text-xl"> Vous n'avez  aucun document</p>
        </div>
    </div>);
}

export default MesDocument