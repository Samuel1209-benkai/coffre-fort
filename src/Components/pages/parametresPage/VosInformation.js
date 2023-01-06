import React, {useState} from "react";

function VosInformation(){

    const  [ formsData , setFormData]= useState({
        nom :"",
        prenom : "",
        emailPro : "" ,
        emailPerso : "" ,
        telephone :"",
     });

    //  const [validName, setValidName]= useState(false);

     console.log(formsData);
    function  changed(event){
        setFormData (prevState =>{
            return {
                ...prevState,
                [event.target.name] : event.target.value ,
            }
        })
     }

    return(<div className=" m-5 mx-[10%] w-[40%]  h-[40%] bg-white rounded-lg shadow-xl">
        <h1 className="text-red-500 p-4 border-b-2 "> Vos information</h1>
        <main className="m-10 text-xs text-sky-900 ">
            <form methode ="" action="">
                <label >Nom</label><br/>
                <input className="border w-[90%] mb-4 focus:outline-none p-1 rounded" 
            placeholder=""
            type="text"
            onChange={changed}
            name="nom" 
            value={formsData.nom} /><br/>

                <label >Prénom</label><br/>
                <input className="border w-[90%] mb-4 focus:outline-none p-1 rounded" 
                placeholder=""
                type="text"
                onChange={changed}
                name="prenom" 
                value={formsData.prenom}/><br/>

                <label >E-mail professionnel</label><br/>
                <input className="border w-[90%] mb-4 focus:outline-none p-1 rounded" 
                placeholder=""
                type="email"
                onChange={changed}
                name="emailPro" 
                value={formsData.emailPro}/><br/>


                <label >E-mail personnel</label><br/>
                <input className="border w-[90%] mb-4 focus:outline-none p-1 rounded"
                placeholder=""
                type="email"
                onChange={changed}
                name="emailPerso" 
                value={formsData.emailPerso} /><br/>


                <label >Téléphone</label><br/>
                <input className="border w-[90%] mb-4  focus:outline-none p-1 rounded " 
                placeholder=""
                type="number"
                onChange={changed}
                name="telephone" 
                value={formsData.telephone}/><br/>

                <div className="flex m-3 space-x-10 justify-center">
                    <button className=""> Annuler</button>
                    <button type="submit" className="border  m-3 px-10 p-2 text-white bg-sky-900   rounded-md"> Enregistrer</button>

                </div>
            </form>
        </main> 
    </div>);
}

export default VosInformation