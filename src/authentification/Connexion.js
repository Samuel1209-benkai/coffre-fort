
import React, { useRef , useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { noHaveAccount } from "../features/accountSlice";
import { isSucces } from "../features/RegisterSlice";
import authContext from "../context/AuthProvider"; 


function Connexion(props) {
    const {setAuth} = useContext(authContext); 
    const dispatch = useDispatch();
    const userRef = useRef();
    const errRef = useRef();
    const [id , setId] = useState('');
    const [pwd , setPwd] = useState('');
    const [errMsg , setErrMsg]= useState('');
    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
        setErrMsg('');
    },[id, pwd])


    const [eyeState, setEyeState] = useState(false);
    function showclick() {
        setEyeState(prevState => !prevState);
    }

    //  const [validName, setValidName]= useState(false);
     async function handleSubmit(e){ 
        e.preventDefault();
        console.log( id , pwd);
        dispatch(isSucces());
    }
    return (
        <div className="flex  ">
            <div className=" h-full  ">
                <img src="fondbleu.svg" alt="" className="h-screen "></img>
            </div>
            <div className=" flex   mx-auto my-auto  ">
                <main className=" border p-20 shadow-xl bg-white  rounded-xl">
                    <p ref = {errRef} className="flex items-center justify-center text-red-400 text-center" style={{ display: errMsg ?"" :"none" }}></p>
                    <h1 className=" font-medium text-center text-2xl m-3  p-3 "> Connectez-vous à votre <br /> <span className="underline underline-offset-20 decoration-sky-700 " >coffre-fort </span> </h1>
                    <form methode="" action="" onSubmit={handleSubmit} className="flex  flex-col">
                        <div className="m-4">
                            <label htmlFor="Id" className="font-medium text-sky-900 text-sm" >Identifiant </label>
                            <input className=" placeholder:text-slate-400 w-[90%]  block bg-white p-2 px-6 border border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "
                                type="text"
                                placeholder="Identifiant"
                                ref = {userRef}
                                onChange={(e)=>setId(e.target.value)}
                                name="id"
                                value={id}
                                required
                            />
                        </div>
                        <div className="m-4">
                            <label htmlFor="Password" className="text-sky-900 text-sm font-medium">Mot de pass</label>
                            <input className=" placeholder:text-slate-400  border border-slate-400 w-[90%] mb-4 focus:outline-none  p-2 px-6 rounded bg-white  rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "
                                type={eyeState ? "text" : "password"}
                                placeholder="Mot de pass"
                                onChange={(e)=>setPwd(e.target.value)}
                                name="password"
                                value={pwd}
                                required
                            /> <button className="p-1 outline-none text-lg ml-[-2rem] mt-[-1rem]" type="button" onClick={showclick}> {eyeState ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</button><br />
                        </div>
                        <p className="text-sm text-sky-900 font-normal text-right mx-14"> Mot de pass oublié ?  </p>
                        <button type="submit"  className="border w-[85%]  m-3 px-20 p-2 text-white bg-sky-900   rounded-md" > Connexion  </button>
                    </form>
                    <p className=" m-3  p-2  rounded-md"> Je n'ai pas de compte <button onClick={()=>{dispatch(noHaveAccount())}} className="text-sky-900 "> S'inscrire </button></p>
                </main>
            </div>
        </div>
    );
}


export default Connexion 