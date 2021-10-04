import React from 'react';
import CrudTableRow from './CrudTableRow';
import { Table } from 'react-bootstrap';

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ?( 
                    <tr>
                        <td colSpan="3">Sin datos</td>
                    </tr>
                    ):(
                        data.map(el=> (
                            <CrudTableRow 
                                key={el.id} el={el} 
                                setDataToEdit={setDataToEdit} 
                                deleteData={deleteData}
                            />
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default CrudTable
