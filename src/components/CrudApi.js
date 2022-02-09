import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helper/helpHttp';
import Loader from './Loader';
import Message from './Message';


const CrudApp = () => {
    /* Inicializamos el estado de los datos que vamos a necesitar controlar*/
    const [db, setDb] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //funcion para realizar llamadas de distintos tipos a una api
    let api = helpHttp();

    /* URL de la api(Api cencilla desarrollada como practica con sql db) */
    let url = "https://primer-despliegue.herokuapp.com";

    useEffect(() => {
        setLoading(true);
        /* llamada para traer todos los contactos de la api */
        api.get(url).then(res=>{
            console.log(res);
            if(!res.err){
                /* inicialiazamos el estado de la variable Db con lo que devuelve la api en la propiedad result(Lista de contactos) */
                setDb(res.result);
                setError(null);
            }else{
                /* no se llega aqui porque la api no devuelve ningun error */
                setDb(null);
                setError(res);
            }
            setLoading(false);
        })
        
    }, [url]);


    const createData=(data)=>{
        //nuestra api ya crea keys unicas
        data.id= 0;
        
        //inicializamos las propiedades que enviaremos a la api pra realizar el post del nuevo contacto
        let options={
            body:{   
                id_contacto: data.id,
                nombre_contacto: data.name,
                numero_contacto: data.telephone
        },
            headers:{
                "content-type":"application/json"
            }
        }

        //realizamos el post
        api.post(url, options).then((res)=>{
            console.log(options)
            console.log(res);
            //si la api responde sin err actualizamos el estado de la Db con el contacto
            if(!res.err){
                setDb([...db,{
                    id_contacto: data.id,
                    nombre_contacto: data.name,
                    numero_contacto: data.telephone
                }]);
                setError(null);
            }else{
                 //no se llega aqui porque la api no devuelve ningun error 
                setDb(null);
                setError(res);
            }
        })
    }

    const updateData=(data)=>{
        /* let newData = db.map(el=> el.id === data.id ? data : el);
        setDb(newData); */
        /* url de la api para hacer al actualizacion */
        let endpoint = `${url}/${data.id}`
        let options={
            body:{   
                nombre_contacto: data.name,
                numero_contacto: data.telephone
        },
            headers:{
                "content-type":"application/json"
            }
        }

        api.put(endpoint, options).then((res)=>{

            if(!res.err){
                let newData = db.map((el)=> (el.id_contacto === data.id ? {id_contacto:data.id, nombre_contacto: data.name, numero_contacto: data.telephone} : el));
                console.log(newData);
                setDb(newData);
                setError(null);
            }else{
                 //no se llega aqui porque la api no devuelve ningun error 
                setDb(null);
                setError(res);
            }
        })
    }

    const deleteData=(id)=>{
        let isDelete = window.confirm(`are you sure to delete the register with id: ${id}?`);

        if(isDelete){
            let endpoint = `${url}/${id}`;
            let options={
                headers:{
                    "content-type":"application/json"
                }
            }

            api.del(endpoint, options).then(res => {
                if(!res.err){
                    let newData = db.filter(el => el.id_contacto !== id);
                    setDb(newData);
                    setError(null);
                }else{
                     //no se llega aqui porque la api no devuelve ningun error 
                    setDb(null);
                    setError(res);
                }
            })
        }else{
            return;
        }
    }

    return (
        <div>
            <h2>CRUD Api</h2>
            <CrudForm 
                createData={createData} 
                updateData={updateData} 
                dataToEdit={dataToEdit} 
                setDataToEdit={setDataToEdit}
            />
            {loading && <Loader></Loader>}
            {error && <Message></Message>}
            {db && (
                <CrudTable 
                data={db} 
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData}
            />
            )}
        </div>
    )
}

export default CrudApp