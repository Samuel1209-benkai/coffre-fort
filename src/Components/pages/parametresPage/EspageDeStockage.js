import React, { useState } from "react";

function Stockage(){
    const [done ]= useState (60)
        const [style, setStyle] = React.useState({});
	const [stockage] = useState(100)

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
        <div className=" m-5 mx-[10%] w-[40%]  h-[40%] bg-white rounded-lg shadow-xl " >
             <h1 className="text-red-500 p-4 border-b-2 "> Données utilisées</h1>
		<main className="p-10">
        <div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
        <div  className="mt-10 flex">
            <p>
                {done} Mo sur {stockage}utilisés
            </p>
        </div>
        </main>
        </div>
	);
   
}
export default Stockage