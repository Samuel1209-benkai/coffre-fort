
// import React , {useState}from "react";
// import { Recu } from "./recuMap";
// import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
// import {FiMoreVertical} from "react-icons/fi"
// import {MdCloudDownload} from "react-icons/md"
// function DocumentRecu (){
// const DocReu = Recu.map((items)=>{
//     return(
//         <tbody className="border-separate">
//             <tr className=" border">
//                 <td className="px-5  p-2"><input name="isChecked" type="checkbox" id={items.id} /></td>
//                 <td className="px-8 flex p-2"> <img src="adobe.png" alt="" className="mx-2"/>{items.Nom}</td>
//                 <td className="px-5 p-2">{items.Expediteur}</td>
//                 <td className="px-5 p-2">{items.date}</td>
//                 <td className="px-5 p-2"> {items.etiquette}</td>
//                 <td className="px-5 p-2"><button><FiMoreVertical/></button></td>
//             </tr>
//         </tbody>
//     )
// })
// const [value, onChange] = useState(new Date());
// const taille = Recu.length
// // const taille = 0
//     console.log(taille);
//     return (<div className="p-10">
//         <h1 className="text-sky-900 text-xl font-semibold ">DOCUMENTS REÇUS</h1> 

//         {taille === 0 ? <div className=" mt-6 p-28 flex flex-col items-center justify-center ">
//             <img src="doc2.svg" alt="" />
//             <p className="text-gray-500 m-4 text-xl"> Vous n'avez reçu aucun document</p>
//         </div> :
//             <div>
//                 <div className="flex">
//                     <div className=" w-[20%] h-screen bg-white shadow-xl text-sky-900  mt-5 rounded-lg  flex-col flex">
//                         <h1 className=" m-5  text-lg font-medium" >Entité</h1>

//                     </div>
//                     <div className=" w-[80%] mx-10 h-screen text-sm  text-sky-900  mt-5 rounded-lg  flex-col flex">
//                         <div className="flex justify-between">
//                           <div className="flex">
//                             <p> Filtrer par :</p>
//                             <div >
//                             <select id="periode" name="periode"  className="focus:outline-none border p-1 flex text-sky-900 border-sky-700  bg-white mx-4 rounded px-2" >
//                                 <option value="Aujourd'hui">Aujourd'hui</option>
//                                 <option value=" La semaine derniere">La semaine derniere</option>
//                                 <option value="Mois dernier">Mois dernier</option>
//                                 <option value="Tout ">Tout</option>
//                             </select>
//                             </div>
//                             <div>
//                            <input type="date"  className="focus:outline-none border p-1 flex text-sky-900 border-sky-700  bg-white mx-4 rounded px-2"  />
//                             </div>
//                             <button className=" border p-1 px-4 mx-4 bg-sky-900 text-white rounded mx-4 flex"> 
//                             <span className="mx-1 pt-1"><MdCloudDownload /></span>
//                             Telecharger</button>
//                         </div>
//                                 <div className="flex">
//                                     <p>Page 1 sur 20 </p>
//                                     <button className="h-5" ><AiOutlineLeft/></button>
//                                     <button className="h-5"><AiOutlineRight/></button>
//                                 </div>
//                                 </div>
// {/* liste docs */}
//                         <div className=" w-[100%]  h-[68%] bg-white shadow-xl mt-6 text-sky-900  rounded-lg  flex-col flex">
//                             <div className="p-5">
//                                 <table className="table-auto w-[100%]">
//                                     <thead className="my-5 " >
//                                         <tr>
//                                             <th>
//                                                 <input name="isChecked"  type="checkbox" />
//                                             </th>
//                                             <th>
//                                                 Nom du document 
//                                             </th>
//                                             <th>
//                                             Expéditeur
//                                             </th>
//                                             <th>
//                                                 Date d'ajout
//                                             </th>
//                                             <th>
//                                                 Etiquette
//                                             </th>
//                                             <th>
//                                                 Actions
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     {DocReu}
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>}
//     </div>);
// }

// export default DocumentRecu

