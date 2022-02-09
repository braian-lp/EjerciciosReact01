import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import SongSearch from "./SongSearch";

const Modals = ()=>{
    const [isOpenModal1,openModal1,closeModal1] = useModal(false);
    const [isOpenModal2,openModal2,closeModal2] = useModal(false);
    const [isOpenModalContact,openModalContact,closeModalContact] = useModal(false);
    const [isOpenModalSF,openModalSF,closeModalSF] = useModal(false);

    return(
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <img src="https://placeimg.com/400/400/animals" alt="Animals"></img>
                <p>Lorem impsum</p>
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <img src="https://placeimg.com/400/400/nature" alt="Nature"></img>
                <p>Lorem impsum</p>
            </Modal>
            <button onClick={openModalContact}>Modal contacto</button>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
                <h3>Modal Contacto</h3>
                <ContactForm></ContactForm>
            </Modal>
            <button onClick={openModalSF}>Modal contacto</button>
            <Modal isOpen={isOpenModalSF} closeModal={closeModalSF}>
                <h3>Modal SongForm</h3>
                <SongSearch></SongSearch>
            </Modal>

        </div>
    )
}

export default Modals;