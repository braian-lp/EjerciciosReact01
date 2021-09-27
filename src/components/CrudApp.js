import React,{useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb=[
    {
        id:1,
        name:"vanesa",
        telefono:"11111"
    },
    {
        id:2,
        name:"carlos",
        telefono:"22222"
    },
    {
        id:3,
        name:"brayan",
        telefono:"33333"
    },
    {
        id:4,
        name:"karla",
        telefono:"44444"
    },
    {
        id:5,
        name:"cinthia",
        telefono:"55555"
    },
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    )
}

export default CrudApp
