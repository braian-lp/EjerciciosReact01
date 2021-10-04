import React from 'react'
import {Button} from 'react-bootstrap'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name, telephone, id}=el;
    return (
        <tr>
            <td>{name}</td>
            <td>{telephone}</td>
            <td>
                <Button variant="primary" onClick={()=> setDataToEdit(el)}>Editar</Button>{' '}
                <Button variant="secondary" onClick={()=> deleteData(id)}>Eliminar</Button>
            </td>
        </tr>
    )
}

export default CrudTableRow
