import React from "react";

function Head (props){
    return (<div className="flex border-b w-full  shadow-lg justify-between ">
    <div className="flex mr-96 m">
      <button onClick={props.handleClick} className=" mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
      </button>

      <label className="relative block m-4">
        <span className="absolute insert_y_4 top-2 left-2 flex items-center px-2">
        <svg className="h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
        </span>
        <input className=" placeholder:text-gray-700 block bg-slate-200 w-80  h-10 border  rounded-md py-2 pl-10 pr-3  focus:outline-none focus:border-blue-900  sm:text-sm" placeholder="Recherche " type="text" name="search"/>
      </label>
      </div>
      <div className=" flex py-4 first:pt-0 last:pb-O mx-14   ml-48">
        <img className="h-10 w-10   rounded-full " src="tresse.png" alt=""/> 
        <div className="ml-2 ">
            <p className=" text-sm font-medium text-slate-900"> Utilisateur  </p>
            <p className="text-sm text-gray-400 truncate"> Gestionnaire </p>
        </div>
      </div>
    </div>);

}

export default  Head