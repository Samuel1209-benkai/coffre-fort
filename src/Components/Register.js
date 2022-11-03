import React, {useState} from "react";
function Register(){


    const  [ formsData , setFormData]= useState({
        firstName :"",
        lastName : "",
        email : "" ,
        password :"",
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

    return(
        <div className="flex  ">
            <div className=" h-full  ">
                <img src="fondbleu.svg" alt=""></img>
            </div>
            <div className=" flex   mx-auto my-auto ">
                <main className=" border  p-20 rounded-xl  ">
                    <h1 className="text-center text-5xl m-3 border-b-4 border-gray-600  pb-3 "> Register </h1>
                    <form methode ="" action="" className="flex flex-col">
                
            <input  className=" placeholder:text-slate-400  m-4 block bg-white p-2 border border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "
            type="text"
            placeholder="FirstName"
            onChange={changed}
            name="firstName" 
            value={formsData.firstName}
            />

<input  className="placeholder:text-slate-400  m-4 block bg-white p-2 border border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "
            type="text"
            placeholder="LastName"
            onChange={changed}
            name="lastName" 
            value={formsData.lastName}
            />

<input  className=" placeholder:text-slate-400  m-4 block bg-white p-2 border border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            type="email"
            placeholder="email"
            onChange={changed}
            name="email" 
            value={formsData.email}
            />


<input  className=" placeholder:text-slate-400  m-4 block bg-white p-2 border border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "
            type="password"
            placeholder="Password"
            onChange={changed}
            name="password" 
            value={formsData.password}
            />

            <button type="submit" className="border  m-3 px-20 p-2 text-white bg-blue-900   rounded-md" > Signe up </button>
                    </form>
                    <p> I already have account </p>
                </main>
            </div>
        </div>
    );
}


export default Register 