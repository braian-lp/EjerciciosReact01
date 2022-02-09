import { useFetch } from "../hooks/useFetch"
import Loader from "./Loader";
import Message from "./Message";
import { Form } from 'react-bootstrap';

const SelectList = ({title, url, handleChange}) =>{
    const {data, error, loading} = useFetch(url);

    if(!data)return null;
    if(error){
        return(
            <Message msg={`Error ${error.status}:${error.statusText}`}></Message>
        )
    }

    let id = `select-${title}`;

    //para cambiar la primera letra del tittle a mayusculas
    let label = title.charAt(0).toUpperCase() + title.slice(1);

    let options = data.response[title];

    return(
        <>
            <label htmlFor={id}>{label}</label>
            {loading && <Loader/>}
            <Form.Select name={id} id={id} onChange={handleChange}>
                <option value="">Elige un {title}</option>
                {data && options.map((el)=> <option value={el} key={el}>{el}</option>)}
            </Form.Select>
            <br></br>
            <br></br>
        </>
    )
}

export default SelectList