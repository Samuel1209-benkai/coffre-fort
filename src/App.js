import React ,{useState } from "react";
import './App.css';
import { Routes , Route } from "react-router-dom";
import Register from "./authentification/Register";
import Connexion from "./authentification/Connexion";
import Nav from "./Components/Nav";
import Head from "./Components/header";
import Collaborateur from "./Components/pages/collaborateurPage/Collaborateur";
import Corbeille from "./Components/pages/corbeillesPages/corbeille";
import DocumentPublier from "./Components/pages/documentpublierPages/documentPublier";
import MesDocument from "./Components/pages/mesDocumentPage/mesDocument";
import TableauDeBord from "./Components/pages/tableauBord";
import DocumentRecu from "./Components/pages/documentRecuPages/documentRecu";
import DocumentRH from "./Components/pages/documentRhPage/DocumentRH";
import Setting from "./Components/pages/parametresPage/parametre";
import VosInformationRH from "./Components/pages/parametresPage/VosInformationRH";
import VosInformation from "./Components/pages/parametresPage/VosInformation";
import ModifieMdp from "./Components/pages/parametresPage/updatemdp";
import Stockage from "./Components/pages/parametresPage/EspageDeStockage";
import { useSelector } from "react-redux";

function App() {

const   {isSignIn } = useSelector ((store)=> store.succes);

const {Account} = useSelector ((store)=> store.account) 

console.log({isSignIn});
console.log({Account}); 


//  console.log( 
//   useSelector ((store) => {
//   console.log (store)} ) );

const [ nav , setNav] = useState(false);

function showNav (){
  setNav ( prevState => !prevState )
} 
  return (
    <div className=" bg-blue-50  h-screen overflow-hidden">
      { !isSignIn ?  Account ? <Connexion/> :<Register/> :
      <div className="flex" >
       <Nav
        value ={nav} />
        <div className=" w-full  ">
          <Head handleClick = {showNav}/>
          <Routes>
      <Route path="/" element ={<TableauDeBord/>}/>
      <Route path="docpublier" element ={<DocumentPublier/>}/>
      <Route path="docRecu" element ={<DocumentRecu/>}/>
      <Route path="mesDoc" element ={<MesDocument/>}/>
      <Route path="DocRh" element ={<DocumentRH/>}/>
      <Route path="colaborateur" element ={<Collaborateur/>}/>
      <Route path="trash" element ={<Corbeille/>}/>
      <Route path="setting" element ={<Setting/>} >
        <Route path= "VosInformationRH" element = {<VosInformationRH/>}/>
        <Route path=""  element={<VosInformation/>}/>
        <Route path="Motdepass" element={<ModifieMdp/>}/>
        <Route path="Stockage" element={<Stockage/>}/>
        </Route>
      </Routes>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
