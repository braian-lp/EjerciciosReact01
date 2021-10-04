import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb=[
    {
        id:1,
        name:"vanesa",
        telephone:"11111"
    },
    {
        id:2,
        name:"carlos",
        telephone:"22222"
    },
    {
        id:3,
        name:"brayan",
        telephone:"33333"
    },
    {
        id:4,
        name:"karla",
        telephone:"44444"
    },
    {
        id:5,
        name:"cinthia",
        telephone:"55555"
    },
]


const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData=(data)=>{
        data.id= Date.now();
        setDb([...db,data]);
    }

    const updateData=(data)=>{
        let newData = db.map(el=> el.id === data.id ? data : el);
        setDb(newData);
    }

    const deleteData=(id)=>{
        let isDelete = window.confirm(`are you sure to delete the register with id: ${id}?`);

        if(isDelete){
            let newData = db.filter(el => el.id!== id);
            setDb(newData);
        }else{
            return;
        }
    }

    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm 
                createData={createData} 
                updateData={updateData} 
                dataToEdit={dataToEdit} 
                setDataToEdit={setDataToEdit}
            />
            <CrudTable 
                data={db} 
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData}
            />
        </div>
    )
}

export default CrudApp
