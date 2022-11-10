import React from "react";

function TableauDeBord (){
    return( <div className="p-10">
    <h1 className="text-sky-900 text-xl font-semibold ">TABLEAU DE BORD</h1>

    <div className=" mt-6 p-28 flex flex-col items-center justify-center ">
        <img src="doc2.svg" alt=""/> 
        <p className="text-gray-500 m-4 text-xl"> Vous n'avez reçu aucun document</p>
         </div>
</div>);
}

export default TableauDeBord