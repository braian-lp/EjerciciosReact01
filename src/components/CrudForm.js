import React ,{useState} from 'react'

const initialForm ={
    name:"",
    telephone:"",
    id:null,
}
const CrudForm = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange= (e) =>{};
    const handleSubmit = (e) =>{};
    const handleReset = (e) =>{};

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre" 
                    onChange={handleChange} 
                    value={form.name}>
                </input>
                <input 
                    type="text" 
                    name="telephone" 
                    placeholder="Telefono" 
                    onChange={handleChange} 
                    value={form.telephone}></input>
                <input 
                    type="submit" 
                    value="Enviar"></input>
                <input 
                    type="reset" 
                    value="Limpiar" 
                    onClick={handleReset}></input>
            </form>
        </div>
    )
}

export default CrudForm
