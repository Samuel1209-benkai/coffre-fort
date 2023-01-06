import React , {useState}from "react";
import { Recu } from "./recuMap";
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import {MdCloudDownload} from "react-icons/md"
function DocumentRecu (){
    const etiquette = Recu.etiquette;
    const stylebulletin = {
        background:"#CCFACC",
        color :"#008000"
    }
    const stylenote ={
        background:"#FEE6D5",
        color :"#ED741A"
    }
    const [ent1,setEnt1] = useState(true);
    const [ent2,setEnt2] = useState(false);
    const [ent3,sentEnt3] = useState(false);

    function ent1click (){
        setEnt1(true)
        setEnt2(false)
        sentEnt3(false)
    }
    function ent2click (){
        setEnt1(false)
        setEnt2(true)
        sentEnt3(false)
    }
    function ent3click (){
        setEnt1(false)
        setEnt2(false)
        sentEnt3(true)
    }
const DocReu = Recu.map((items)=>{
    return(
        <div>
            <div className="border  flex m-1 py-2">
                <div className="ml-2 mr-5"><input name="isChecked" type="checkbox" id={items.id} /></div>
                <div className="flex mr-5 w-[30%] "> <img src="adobe.png" alt="" className="mx-2"/>{items.Nom}</div>
                <div  className=" mx-5 mr-[10%]">{items.Expediteur}</div>
                <div className="mx-5 mr-[8%]  ">{items.date}</div>
                <div className="mr-[2%] w-[20%] px-3 rounded-xl "   style={items.etiquette=== 'Bulletin de paie'?stylebulletin : stylenote }> {items.etiquette}</div>
                < div ><button><FiMoreVertical/></button></div>
            </div>
        </div>
    )
})
const [value, onChange] = useState(new Date());
const taille = Recu.length;
// const taille = 0
    return (<div className="p-10">
        <h1 className="text-sky-900 text-xl font-semibold ">DOCUMENTS REÇUS</h1> 

        {taille === 0 ? <div className=" mt-6 p-28 flex flex-col items-center justify-center ">
            <img src="doc2.svg" alt="" />
            <p className="text-gray-500 m-4 text-xl"> Vous n'avez reçu aucun document</p>
        </div> :
            <div>
                <div className="flex">
                    <div className=" w-[20%] h-screen bg-white shadow-xl text-sky-900  mt-5 rounded-lg  flex-col flex">
                        <h1 className=" m-5  text-lg font-medium" >Entités</h1>
                        <button className={ent1?"my-2 bg-stone-300 p-2":"my-2"} onClick={ent1click}>Entreprise 1 </button>
                        <button className={ent2?"my-2 bg-stone-300 p-2":"my-2"} onClick={ent2click}>Entreprise 2</button>
                        <button className={ent3?"my-2 bg-stone-300 p-2":"my-2"} onClick={ent3click}>Entreprise 2</button>
                    </div>
                    <div className=" w-[80%] mx-10 h-screen text-sm  text-sky-900  mt-5 rounded-lg  flex-col flex">
                        <div className="flex justify-between">
                          <div className="flex">
                            <p> Filtrer par :</p>
                            <div >
                            <select id="periode" name="periode"  className="focus:outline-none border p-1 flex text-sky-900 border-sky-700  bg-white mx-4 rounded px-2" >
                                <option value="Aujourd'hui">Aujourd'hui</option>
                                <option value=" La semaine derniere">La semaine dernière</option>
                                <option value="Mois dernier">Mois dernier</option>
                                <option value="Tout ">Tout</option>
                            </select>
                            </div>
                            <div>
                           <input type="date"  className="focus:outline-none border p-1 flex text-sky-900 border-sky-700  bg-white mx-4 rounded px-2"  />
                            </div>
                            <button className=" border p-1 px-4 mx-4 bg-sky-900 text-white rounded mx-4 flex"> 
                            <span className="mx-1 pt-1"><MdCloudDownload /></span>
                            Télécharger</button>
                        </div>
                                <div className="flex">
                                    <p>Page 1 sur 20 </p>
                                    <button className="h-5" ><AiOutlineLeft/></button>
                                    <button className="h-5"><AiOutlineRight/></button>
                                </div>
                                </div>
{/* liste docs */}
                        <div className=" w-[100%]  overflow-hidden h-[67%] bg-white shadow-xl mt-6 text-sky-900  rounded-lg  flex-col flex">
                            <div className="p-5">
                                    <div className="my-3     flex mx-[2%] space-x-[9%]" >
                                            <p>
                                                <input name="isChecked"  type="checkbox" />
                                            </p>
                                            <p>
                                                Nom du document 
                                            </p>
                                            <p>
                                            Expéditeur
                                            </p>
                                            <p>
                                                Date d'ajout
                                            </p>
                                            <p>
                                                Etiquètte
                                            </p>
                                            <p>
                                                Actions
                                            </p>
                                        </div>
                                    
                                    {DocReu}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
    </div>);
}

export default DocumentRecu  