import React ,{useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';

const initialForm ={
    name:"",
    telephone:"",
    id:null,
}
const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange= (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!form.name || !form.telephone){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) =>{
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div className="mb-2">
            <h3>{dataToEdit? "Editar":"Agregar"}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        onChange={handleChange} 
                        value={form.name}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nunero de Telf</Form.Label>
                    <Form.Control
                        type="text" 
                        name="telephone" 
                        placeholder="Telefono" 
                        onChange={handleChange} 
                        value={form.telephone}>
                    </Form.Control>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    {dataToEdit? "Actualizar":"Agregar"}
                </Button>{'  '}
                <Button
                    variant="primary"
                    type="reset"  
                    onClick={handleReset}
                >Limpiar</Button>
            </Form>
                {/* <input 
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
                    onClick={handleReset}></input> */}
        </div>
    )
}

export default CrudForm
