import { useState } from 'react';

export const useModal=(initialValue = false)=>{
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal=()=> setIsOpen(true);
    const closeModal=()=> setIsOpen(false);

    return [isOpen, openModal, closeModal]//en este caso lo devolvemos en array par ver que se puede enviar de diferente forma.
}