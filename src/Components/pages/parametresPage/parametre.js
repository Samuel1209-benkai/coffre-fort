import React from "react";
import { Link,useResolvedPath,useMatch, Outlet } from "react-router-dom"
function Setting() {

const isRh = false
    return (<div className="p-10 h-screen overflow-hidden ">
        <h1 className="text-sky-900 text-xl font-semibold ">PARAMÈTRES</h1>
        <div className="flex">
            <nav className=" w-[25%] h-screen bg-white shadow-xl text-sky-900  mt-5 rounded-lg  flex-col flex">
                    <h1 className=" m-5  text-lg font-medium" > Paramètre</h1>
                    <ul className="space-y-4 text-stone-500 text-sm">
                   {!isRh && <CustomLink  className="  px-[25%]  " to=""> Vos information</CustomLink>}
                    {/* { isRh && <CustomLink  className="  px-[25%]  " to="VosInformationRH"> Vos information</CustomLink>} */}
                    <CustomLink  className="  pl-[25%]   " to="Stockage"> Espace de stockage </CustomLink>
                    <CustomLink  className ="   px-[25%]  " to="Motdepass">  Mot de pass</CustomLink>
                    </ul>
            </nav>
            
                <Outlet/>
            
        </div>
    </div>);
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return (
        <li className={isActive ? "bg-stone-300 text-sky-900   py-3  transition-all  duration-500 " : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}




export default Setting