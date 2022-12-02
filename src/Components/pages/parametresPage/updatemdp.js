import React,{useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

function ModifieMdp(){
    const  [ password , setFormData]= useState({
        actuel:"",
        nouveau : "",
        confirmNouveau :"",
     });

    //  const [validName, setValidName]= useState(false);
    const [eyeState,setEyeState]= useState(false);
    function showclick (){
        setEyeState (prevState => !prevState);
    }

     console.log(password);
    function  changed(event){
        setFormData (prevState =>{
            return {
                ...prevState,
                [event.target.name] : event.target.value ,
            }
        })
     }

    return(<div className=" m-5 mx-[10%] w-[40%]  h-[40%] bg-white rounded-lg shadow-xl">
        <h1 className="text-red-500 p-4 border-b-2 "> Changer votre mot de pass</h1>
        <main className="m-10 text-xs text-sky-900 ">
            <div>
                <label >Votre mot de pass actuel</label><br/>
                <div className="flex">
                <input className="border w-[90%] mb-4 focus:outline-none p-1 rounded" 
            placeholder=""
            type={eyeState?"text":"password"}
            onChange={changed}
            name="actuel" 
            value={password.actuel} />
            <button className="p-1 outline-none text-lg ml-[-2rem] mt-[-1rem]" onClick={showclick}> { eyeState?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button><br/>

            </div>

                <label > Votre nouveau mot de pass (8 caract min) </label><br/>
<div className="flex">
                <input className="border w-[90%] mb-4 focus:outline-none p-1 rounded" 
                placeholder=" "
                type= {eyeState?"text":"password"}
                onChange={changed}
                name="nouveau" 
                value={password.nouveau} /> 
                <button className="p-1 outline-none text-lg ml-[-2rem] mt-[-1rem]" onClick={showclick}> { eyeState?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button><br/>
                </div>


                <label >Confirmer votre nouveau mot de pass</label><br/>
                <div className="flex">
                <input className="border w-[90%] mb-4 focus:outline-none p-1 rounded" 
                placeholder=""
                type={eyeState?"text":"password"}
                onChange={changed}
                name="confirmNouveau" 
                value={password.confirmNouveau}/>
                <button className="p-1 outline-none text-lg ml-[-2rem] mt-[-1rem]" onClick={showclick}> { eyeState?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button><br/>
                </div>

                <div className="flex m-3 space-x-10 justify-center">
                    <button className=""> Annuler</button>
                    <button type="submit" className="border  m-3 px-10 p-2 text-white bg-sky-900   rounded-md"> Enregistrer</button>

                </div>
            </div>
        </main> 
    </div>);
}
export default ModifieMdp