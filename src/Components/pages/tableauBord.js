import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    {
      name: "Lun",
      uv: 10,
      pv: 2400,
      amt: 2400
    },
    {
      name: "mar",
      uv: 15,
      pv: 1398,
      amt: 2210
    },
    {
      name: "mercre",
      uv: 25,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Jeu",
      uv: 10,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Ven",
      uv: 18,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Sam",
      uv: 25,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Dim",
      uv: 20,
      pv: 4300,
      amt: 2100
    }
  ];
function TableauDeBord (){
    return( <div className="p-10 h-screen overflow-scroll">
        <h1 className="text-sky-900 text-xl font-semibold ">TABLEAU DE BORD</h1>
        <div className=" flex justify-between mt-5"> 
   <div className="border bg-white p-3 text-xs shadow-lg rounded text-sky-900" >
    <div className="flex justify-between "> 
        <p>Document reçus </p>
        <select   name="cars" id="cars" className="bg-white border  p-1 border-sky-900 rounded focus:outline-none">
            <option value="semainederniere">Semaine dernière </option>
            <option value="mois dernier"> Mois dernier </option>
            <option value="anne derniere">annee derniere </option>
          </select>
      </div>
        <AreaChart
      width={450}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 40,
        left: 0,
        bottom: 0}}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis dataKey= "uv"  />
      <Tooltip/>
      <Area type="monotone"   fill="#8884d8" />
    </AreaChart>
      </div>

      <div className="border bg-white p-3  shadow-lg  rounded text-xs text-sky-900" >
    <div className="flex justify-between "> 
        <p>Mes documents </p>
        <select   name="cars" id="cars" className="bg-white border  p-1 border-sky-900 rounded  focus:outline-none">
            <option value="semainederniere">Semaine dernière </option>
            <option value="mois dernier"> Mois dernier </option>
            <option value="anne derniere">année dernière </option>
          </select>
      </div>
        <AreaChart
      width={450}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 40,
        left: 0,
        bottom: 0}}>
      <CartesianGrid strokeDasharray="1 1"  />
      <XAxis dataKey="name" />
      <YAxis dataKey= "uv" />
      <Tooltip/>
      <Area type="monotone"  dataKey="uv" fill="#8884d8" />
    </AreaChart>
      </div>
      
        </div>

    <div className=" mt-6 p-28 flex flex-col items-center justify-center bg-white rounded shadow-lg">
        <img src="doc1.svg" alt=""/> 
        <p className="text-gray-500 m-4 text-xl"> Vous n'avez reçu aucun document</p>
         </div>
</div>);
}

export default TableauDeBord