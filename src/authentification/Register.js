import React, { useState, useRef, useEffect } from "react";
import { isSucces } from "../features/RegisterSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { haveAccount } from "../features/accountSlice";
// import { type } from "@testing-library/user-event/dist/type";


const USER_REGEX = /^\S+@\S+$/

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const url = "http://localhost:3000/user"

function Register() {


    const dispatch = useDispatch();

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [userFocus, setUserFocus] = useState(false);


    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setpwdFocus] = useState(false);

    const [matchpwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [inputStyle] = useState("  peer ... placeholder:text-slate-400  border border-slate-400 w-[90%] mb-4 focus:outline-none  p-2 px-6 rounded bg-white  rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 ")
    const [errmsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(email)
        console.log(result);
        console.log(email);
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchpwd
        setValidMatch(match)
    }, [pwd, matchpwd])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd, matchpwd])

    // function  changed(event){
    //     setFormData (prevState =>{
    //         return {
    //             ...prevState,
    //             [event.target.name] : event.target.value ,
    //         }
    //     })
    //  }

    const [eyeState, setEyeState] = useState(false);
    function showclick() {
        setEyeState(prevState => !prevState);
    }



async  function handleSubmit(e){
    e.preventDefault(); 
    const v1 =  USER_REGEX;
    const v2 = PWD_REGEX;
    if(!v1 || !v2){
        setErrMsg("Entrer Invalide")
        return;
    }
    
    // console.log (email,pwd);
    // dispatch(isSucces());
    try {
        const response = await axios.post(url ,JSON.stringify({
            email , pwd
        }), 
        {
            headers : {'Content-type' : 'application/json'},
            withCredentials : true
        } );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.Stringify(response ));
        dispatch(isSucces());
    } catch (error) {
        if (!error?.response){
            setErrMsg('No Server Response ');
        } 
        else if(error.response?.status === 409 ) {
            setErrMsg('Email taken');
        }
        else {
            setErrMsg("erreur d'inscription")
        }

        errRef.current.focus();
    }
    }


    return (
        <div className="flex">
            <div className=" h-screen">
                <img src="fondbleu.svg" alt=""></img>
            </div>
            <div className=" flex   mx-auto my-auto ">
                <main className="  border p-10 mx-10 shadow-xl bg-white  rounded-xl    ">
                    <p  ref={errRef} className="flex items-center justify-center text-red-400 text-center" style={{ display: errmsg ?"" :"none" }}>{errmsg}</p>
                    <h1 className="text-center text-5xl m-3 border-b-4 border-gray-600  w-[80%] pb-3 "> Register </h1>
                    <form methode="" action="" className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="m-2">
                            <label htmlFor="email" className="text-sky-900 text-sm font-medium">Entrez votre Email</label>
                            <input className={inputStyle}
                                id="email"
                                type="email"
                                placeholder="email@gmail.com"
                                ref={userRef}
                                required
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={validEmail ? "false" : "true"}
                                onFocus={() => { setUserFocus(true) }}
                                onBlur={() => { setUserFocus(false) }}
                                style={{ borderColor: validEmail ? "red" : "" }} />
                            {!validEmail && <p className=" text-pink-600 text-sm">
                                Please provide a valid email address.
                            </p>}
                        </div>
                        <div className="m-2">
                            <label htmlFor ="password" className="text-sky-900 text-sm font-medium">Entrez votre mot de pass</label>
                            <input className={inputStyle}
                                id="password"
                                type={eyeState ? "text" : "password"}
                                placeholder="Mot de pass"
                                style={{borderColor: validPwd ? "" : "" }}
                                required
                                name="pwd"
                                value={pwd}
                                onChange={(e)=>setPwd(e.target.value)}
                                aria-describedby="pwdnote"
                                aria-invalid={ validPwd ? "false" : "true"}
                                onFocus={() => { setpwdFocus(true) }}
                                onBlur={() => { setpwdFocus(false) }}/> 
                                <button className="p-1 outline-none text-lg ml-[-2rem] "
                                type="button" onClick={showclick}>
                                {eyeState ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</button>
                            {!validPwd && <p className=" text-pink-600 text-sm">
                                 8 carracteres des lettres majiscules et miniscules et des caractère speciaux.
                            </p>}
                        </div>
                        <div className="m-2">
                            <label htmlFor="confirm_pwd" className="text-sky-900 text-sm font-medium">Confirmer votre mot de pass</label>
                            <input className={inputStyle}
                                type={eyeState ? "text" : "password"}
                                id="confirm_pwd"
                                onChange={(e)=>setMatchPwd(e.target.value)}
                                value={matchpwd}
                                name = "matchpwd"
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                style={{borderColor: validMatch ? "" : "red" }}
                                aria-describedby= "confirmnote"
                                onFocus={() => { setMatchFocus(true) }}
                                onBlur={() => { setMatchFocus(false) }}
                                placeholder="Mot de pass"/>
                                <button className="p-1 outline-none text-lg ml-[-2rem] "
                                type="button" onClick={showclick}>
                                {eyeState ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</button>
                        </div>
                        <button type="submit" disabled={!validEmail || !validPwd || !validMatch ? true :false} className="border  m-3 px-20 p-2 text-white bg-blue-900  w-[87%] rounded-md" > Signe up </button>
                    </form>
                     <button className="text-sky-900 pl-5" onClick={()=>{dispatch(haveAccount())}} > J'ai deja un compte </button>
                </main>
            </div>
        </div>
    );
}



export default Register 