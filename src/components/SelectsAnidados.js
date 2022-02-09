import React, { useState } from 'react';
import SelectList from "./SelectList";


const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    /* TAREA PENDIENTE CREAR API EN LA CUAL TENGAMOS COMUNIDADES, PROVINCIAS Y MUNICIPIOS DE ESP */
    const TOKEN="e0f44349-4e49-4f19-933f-4ec4e76a212c";
    return(
        <div>
            <h2>Selects Anidados</h2>
            <h3>Mexico</h3>
            <SelectList 
                title="estado" 
                url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} 
                handleChange={(e)=>{
                    setState(e.target.value)
                }} 
            />

            {state && 
            <SelectList 
                title="municipios" 
                url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} 
                handleChange={(e)=>{setTown(e.target.value)}} 
            />
            }

            {town && 
            <SelectList 
                title="colonia" 
                url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} 
                handleChange={(e)=>{setSuburb(e.target.value)}}
            />
            }
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    )
}

export default SelectsAnidados;