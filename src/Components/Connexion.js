import React, {useState} from "react";

function Connexion(){


    const  [ signInData , setSignInData]= useState({

        id : "" ,
        password :"",
     });

    //  const [validName, setValidName]= useState(false);

     console.log(signInData);
    function  changed(event){
        setSignInData (prevState =>{
            return {
                ...prevState,
                [event.target.name] : event.target.value ,
            }
        })
     }

    return(
        <div className="flex  ">
            <div className=" h-full  ">
                <img src="fondbleu.svg" alt="" className="h-screen "></img>
            </div>
            
            <div className=" flex   mx-auto my-auto  ">
                <main className=" border p-20 shadow-xl bg-white  rounded  ">
                    <h1 className=" font-medium text-center text-2xl m-3  p-3 "> Connectez-vous à votre <br/> <span className="underline underline-offset-20 decoration-sky-700 " >coffre-fort </span> </h1>
                    <form methode ="" action="" className="flex flex-col">
                <div className="m-4">
                <label className="font-medium text-sky-900 text-sm" >Identifiant </label>
            <input  className=" placeholder:text-slate-400   block bg-white p-4 px-8 border border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "
            type="text"
            placeholder="Identifiant"
            onChange={changed}
            name="id" 
            value={signInData.id}
            />
            </div>
<div className="m-4">
<label className="text-sky-900 text-sm font-medium">Mot de pass</label>
<input  className=" placeholder:text-slate-400   block bg-white p-4 px-8 border border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "
            type="text"
            placeholder="Mot de pass"
            onChange={changed}
            name="lastName" 
            value={signInData.password}
            />
            </div>
            <p className="text-sm text-sky-900 font-normal text-right mx-3"> Mot de pass oublié ?  </p>
            <button type="submit" className="border  m-3 px-20 p-2 text-white bg-sky-900   rounded-md" > Connexion  </button>
                    </form>
                    
                </main>
            </div>
        </div>
    );
}


export default Connexion 